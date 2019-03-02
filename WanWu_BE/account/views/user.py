import os
import json
from django.conf import settings
from django.contrib import auth
from ..models import User
from django.http import HttpResponse
from django.views.generic import View


class UserRegisterAPI(View):
    def post(self, request):
        return HttpResponse("success")


class CheckUserExist(View):
    def post(self,request):
        body = request.body.decode("utf-8")
        content_type = request
        print(content_type.GET)
        print(body)
        data = json.loads(body)
        print(data)
        return HttpResponse("success")


class Test(View):
    def get(self, request):
        return HttpResponse("success")