from django.urls import path
from ..views.user import (UserRegisterAPI, CheckUserExist, Test, UserLoginAPI,
        UserProfile, UserLogoutAPI)
from utils.Captcha.views import CaptchaAPI

urlpatterns = [
    path('login/', UserLoginAPI.as_view(), name="user_login_api"),
    path('register/', UserRegisterAPI.as_view(), name="user_register_api"),
    path('logout/', UserLogoutAPI.as_view(), name="user_logout_api"),
    path('captcha/', CaptchaAPI.as_view(), name="get_captcha"),
    path('checkUserExist/', CheckUserExist.as_view(), name="check_userExist_api"),
    path('profile/', UserProfile.as_view(), name="get_user_profile"),
    path('test/', Test.as_view(), name="test")
]