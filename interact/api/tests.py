from django.test import TestCase
import requests
import json
# Create your tests here.
def signupapi():
    URL='http://127.0.0.1:8000/api/'
    data={
        'url':'https://www.youtube.com/watch?v=xjMP0hspNLE&t=1396s&ab_channel=DennisIvy',
        'urltype':'singlevid'
    }
    header = {'content-Type':'application/json'}
    json_data=json.dumps(data)
    r = requests.post(url=URL,headers=header,data=json_data)
    data = r.json()
    print(data)

signupapi()