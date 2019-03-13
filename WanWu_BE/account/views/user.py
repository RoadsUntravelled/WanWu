import os
import json
from django.conf import settings
from django.contrib import auth
from django.contrib.auth import authenticate
from django.http import HttpResponse
from django.views.generic import View
from ..models import User, UserProfile

from utils.base import BaseView


class UserRegisterAPI(BaseView):
    def post(self, request):
        data = request.data
        data["username"] = data["username"].lower()
        data["email"] = data["email"].lower()
        if User.objects.filter(username=data["username"]).exists():
            return self.error("用户名已存在,请重新输入!")
        if User.objects.filter(email=data["email"]).exists():
            return self.error("邮箱已存在,请重新输入!")
        user = User.objects.create(username=data["username"], email=data["email"])
        user.set_password(data["password"])
        user.save()
        UserProfile.objects.create(user=user)
        return self.success("Succeeded")


class UserLoginAPI(BaseView):
    def post(self, request):
        data = request.data
        user = authenticate(username=data["username"], password=data["password"])
        if user:
            return self.success("Succeeded")
        else:
            return self.error("user does not exists")


class CheckUserExist(BaseView):
    def post(self, request):
        data = request.data
        result = {
            'username': False,
            'email': False
        }
        if data.get("username"):
            result["username"] = User.objects.filter(username=data["username"].lower()).exists()
        if data.get("email"):
            result["email"] = User.objects.filter(email=data["email"].lower()).exists()
        return self.success(result)


class Test(BaseView):
    def get(self, request):
        print(request.GET)
        return HttpResponse("success")
