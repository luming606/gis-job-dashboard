# -*- coding: utf-8 -*-
"""探测详情页结构。"""
import sys

import requests

sys.stdout.reconfigure(encoding='utf-8')

url = 'https://wap.cehuiyc.com/Job_Detail.asp?ComId=CHsqxz0iov2fx6757&Param=67207'
r = requests.get(url, timeout=20)
r.encoding = 'gbk'
html = r.text
print('HTTP', r.status_code, 'len', len(html))
i = html.find('职位')
print(html[i:i + 3500])
