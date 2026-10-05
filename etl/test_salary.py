"""salary_parser 回归测试：python test_salary.py"""
from salary_parser import parse_salary

CASES = [
    ('150-200元/天', 'ok', (150, 200, 'day')),
    ('2000-4000元/月', 'ok', (2000, 4000, 'month')),
    ('15-25K·13薪', 'ok', (15000, 25000, 'month')),
    ('1.5-2万', 'ok', (15000, 20000, 'month')),
    ('约4000元/月，提供住宿', 'ok', (4000, 4000, 'month')),
    ('300元/天', 'ok', (300, 300, 'day')),
    ('20元/时', 'ok', (20, 20, 'hour')),
    ('100-150', 'ok', (100, 150, 'day')),
    ('月薪8000', 'ok', (8000, 8000, 'month')),
    ('20-30万/年', 'ok', (200000, 300000, 'year')),
    ('底薪+绩效，约4000元/月', 'ok', (4000, 4000, 'month')),
    ('实习期5天/周，工资150元/天', 'ok', (150, 150, 'day')),
    ('面议', 'face', None),
    ('', 'empty', None),
    ('薪资详见官网', 'fail', None),
]

for text, want_status, want_vals in CASES:
    r = parse_salary(text)
    got = (r['salary_min'], r['salary_max'], r['salary_unit']) if want_vals else None
    assert r['status'] == want_status, f'{text!r}: 期望 {want_status}，实际 {r["status"]}'
    if want_vals:
        assert got == want_vals, f'{text!r}: 期望 {want_vals}，实际 {got}'
    print(f'  OK {text!r} -> {r["status"]} {got or ""}')

print(f'全部 {len(CASES)} 个用例通过')
