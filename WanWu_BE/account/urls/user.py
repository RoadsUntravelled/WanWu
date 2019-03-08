from django.urls import path
from ..views.user import (UserRegisterAPI, CheckUserExist, Test)


urlpatterns = [
    path('register/', UserRegisterAPI.as_view(), name="user_register_api"),
    path('checkUserExist/', CheckUserExist.as_view(), name="check_userExist_api"),
    path('test/', Test.as_view(), name="test")
]