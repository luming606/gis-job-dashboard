"""薪资原文结构化解析。

输入采集到的 salary 原文（如「150-200元/天」「15-25K·13薪」「约4000元/月」「面议」），
输出 min/max/unit（day|month|hour|year）与统一折算的日薪 salary_daily。
只解析、不改写原文；解析结果带 status 供成功率统计。
"""
import re

RANGE_RE = re.compile(
    r'(\d+(?:\.\d+)?)\s*[-~～至到]\s*(\d+(?:\.\d+)?)\s*(万|K|k|千)?[^/]{0,3}/?\s*(天|日|月|年|小时|时)?')
SINGLE_RE = re.compile(
    r'(\d+(?:\.\d+)?)\s*(万|K|k|千|元)?(?:\s*/?\s*(天|日|月|年|小时|时))?')
PREFIX_UNIT = {'日薪': 'day', '日结': 'day', '月薪': 'month', '年薪': 'year',
               '时薪': 'hour', '小时薪': 'hour'}
UNIT_MAP = {'天': 'day', '日': 'day', '月': 'month', '年': 'year', '小时': 'hour', '时': 'hour'}
MULT = {'万': 10000.0, 'K': 1000.0, 'k': 1000.0, '千': 1000.0}
DAYS_PER_MONTH = 21.75
# 常理区间：过滤掉「实习期5天/周」这类混进薪资字段的干扰数字
PLAUSIBLE = {'day': (40, 3000), 'hour': (8, 800), 'month': (1000, 200000), 'year': (50000, 2000000)}


def _norm_unit(unit_char, prefix, raw_val, mult_char):
    if unit_char:
        return UNIT_MAP[unit_char]
    if prefix:
        return PREFIX_UNIT[prefix]
    if mult_char:
        return 'month'  # 带万/K 的默认按月薪
    if raw_val >= 3000:
        return 'month'
    if 80 <= raw_val <= 1000:
        return 'day'  # 无单位且落在实习日薪区间，按天处理
    return None


def _daily_avg(lo, hi, unit):
    avg = (lo + hi) / 2
    if unit == 'day':
        return round(avg, 1)
    if unit == 'month':
        return round(avg / DAYS_PER_MONTH, 1)
    if unit == 'hour':
        return round(avg * 8, 1)
    if unit == 'year':
        return round(avg / 12 / DAYS_PER_MONTH, 1)
    return None


def _plausible(val, unit):
    lo, hi = PLAUSIBLE[unit]
    return lo <= val <= hi


def parse_salary(text):
    """返回 {status, salary_min, salary_max, salary_unit, salary_daily}。

    status: ok=成功解析; face=面议; empty=无薪资; fail=有文本但解析失败（需人工看）
    """
    out = {'status': 'fail', 'salary_min': None, 'salary_max': None,
           'salary_unit': None, 'salary_daily': None}
    if text is None or not str(text).strip():
        out['status'] = 'empty'
        return out
    t = str(text).strip()
    if '面议' in t:
        out['status'] = 'face'
        return out

    prefix = next((p for p in PREFIX_UNIT if p in t), None)

    m = RANGE_RE.search(t)
    if m:
        lo, hi = float(m.group(1)), float(m.group(2))
        mult = MULT.get(m.group(3), 1.0) if m.group(3) else 1.0
        unit = _norm_unit(m.group(4), prefix, lo, m.group(3))
        if unit and lo <= hi and _plausible(lo * mult, unit) and _plausible(hi * mult, unit):
            lo, hi = lo * mult, hi * mult
            out.update(status='ok', salary_min=lo, salary_max=hi,
                       salary_unit=unit, salary_daily=_daily_avg(lo, hi, unit))
            return out

    for m in SINGLE_RE.finditer(t):
        val = float(m.group(1))
        mult = MULT.get(m.group(2), 1.0) if m.group(2) else 1.0
        unit = _norm_unit(m.group(3), prefix, val, m.group(2))
        if unit and _plausible(val * mult, unit):
            val = val * mult
            out.update(status='ok', salary_min=val, salary_max=val,
                       salary_unit=unit, salary_daily=_daily_avg(val, val, unit))
            return out

    return out
