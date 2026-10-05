# -*- coding: utf-8 -*-
"""一次性探测脚本：看测绘英才网列表页的 HTML 结构，用于设计解析器。"""
import sys

import requests

sys.stdout.reconfigure(encoding='utf-8')

KEY_GBK = 'GIS开发工程师'.encode('gbk')
url = 'https://wap.cehuiyc.com/Per_Search_Base.asp?PageNo=1&btnSltArea1=&funtype_big=&funtype=&industrytype=&issuedate=&Key=' + requests.utils.quote(KEY_GBK, safe='') + '&KeyClass=1'

r = requests.get(url, timeout=20)
r.encoding = 'gbk'
html = r.text
print('HTTP', r.status_code, 'len', len(html))
# 打印含 Job_Detail 链接的片段
idx = html.find('Job_Detail')
print('--- first Job_Detail context ---')
print(html[max(0, idx - 1500):idx + 2500])
