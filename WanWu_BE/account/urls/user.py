from django.urls import path
from ..views.user import (UserRegisterAPI)


urlpatterns = [
    path('register/', UserRegisterAPI.as_view(),name="user_register_api")
]