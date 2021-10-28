import re
from django.shortcuts import render
import io
from rest_framework.parsers import JSONParser
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .youtubedownloader import ytdownload
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .sealizer import geturlserlizer
from .models import urlitem
from rest_framework import status
# Create your views here.

@csrf_exempt
# @api_view(['GET','POST'])
def singledownload(request):
    if request.method == "POST":
        json_data = request.body
        print('notjson',json_data)
        streamer = io.BytesIO(json_data)
        pythondata = JSONParser().parse(streamer)
        # pythondata = request.data
        url = pythondata.get('url')
        print(url)
        serlizer = geturlserlizer(data=pythondata)
        if serlizer.is_valid():
            # serlizer.save()
            vidinfo,downstatus = ytdownload(url)
            res = {"vdinfo" : vidinfo,"downstatus":downstatus,'status':status.HTTP_200_OK} 
            return JsonResponse(res,status=status.HTTP_201_CREATED,safe=True)
        return JsonResponse(serlizer.error,status=status.HTTP_400_BAD_REQUEST)    
        # print(url)
        
        

    if request.method=="GET":
        da = urlitem.objects.all()
        selize = geturlserlizer(da,many=True)        
        return JsonResponse(selize.data,safe=False)    


  