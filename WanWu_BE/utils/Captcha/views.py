from ..base import BaseView
from ..api.api import img2base64
from ..Captcha import Captcha


class CaptchaAPI(BaseView):
    def get(self, request):
        return self.success(img2base64(Captcha(request, 4).get()))
