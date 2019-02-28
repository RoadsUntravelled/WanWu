import os
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
        data = request.body
        print(data)
        return HttpResponse("success")
