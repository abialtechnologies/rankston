import urllib.request, base64, json

login = 'jhjyy@keblo.xyz'
password = '2a41ff29a396c1f0'
creds = base64.b64encode(f'{login}:{password}'.encode()).decode()

req = urllib.request.Request('https://api.dataforseo.com/v3/dataforseo_labs/google/keyword_suggestions/live')
req.add_header('Authorization', f'Basic {creds}')
req.add_header('Content-Type', 'application/json')
data = [{"keyword": "seo services", "location_code": 2840, "language_code": "en", "limit": 10}]

try:
    resp = urllib.request.urlopen(req, data=json.dumps(data).encode('utf-8'))
    print(resp.read().decode())
except Exception as e:
    print('Error:', str(e))
    if hasattr(e, 'read'):
        print(e.read().decode())
