from django.urls import path
<<<<<<< HEAD
from ..views.user import (UserRegisterAPI, CheckUserExist, Test, UserLoginAPI)


urlpatterns = [
    path('login/', UserLoginAPI.as_view(), name="user_login_api"),
=======
from ..views.user import (UserRegisterAPI, CheckUserExist, Test)


urlpatterns = [
>>>>>>> 3d07404caf613b9c12bd201f9f45d433995565ae
    path('register/', UserRegisterAPI.as_view(), name="user_register_api"),
    path('checkUserExist/', CheckUserExist.as_view(), name="check_userExist_api"),
    path('test/', Test.as_view(), name="test")
]