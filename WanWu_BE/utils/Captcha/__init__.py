import os
import time
import random

from PIL import Image, ImageDraw, ImageFont, ImageFilter


class Captcha(object):
    def __init__(self, request, len =4):
        self.captcha_request = request
        self.captcha_key = "captcha_key"
        self.captcha_expires_time = "captcha_expires_time"

        self.img_width = 90
        self.img_height = 30

        self.captcha_len = len

        self.base_str = "abcdefghjkmnopqstuvwxyABCDEFGHJKMNOPQSTUVWXY02345678"

        self.bgcolor = (255, 255, 255)
        self.fontcolor = (0, 0, 255)

    def _get_font_size(self, code):
        s1 = int(self.img_height * 0.8)
        s2 = int(self.img_width / len(code))
        return int(min((s1, s2)) + max((s1, s2)) * 0.05)

    def _set_session(self, code):
        self.captcha_request.session[self.captcha_key] = str(code)
        self.captcha_request.session[self.captcha_expires_time] = time.time()+60

    def _make_code(self):
        random_code = random.sample(self.base_str, self.captcha_len)
        self._set_session("".join(random_code))
        return random_code

    def get(self, lines=(1, 2), point_chance=2):
        font_path = os.path.join(os.path.normpath(os.path.dirname(__file__)), "CoreSansCR-15Thin.ttf")
        img = Image.new("RGB", (self.img_width, self.img_height), self.bgcolor)
        code = self._make_code()
        font_size = self._get_font_size(code)
        draw = ImageDraw.Draw(img)

        x = random.randrange(int(font_size * 0.3), int(font_size * 0.5))

        for char in code:
            y = random.randrange(1,7)
            font = ImageFont.truetype(font_path.replace("\\", "/"), font_size+random.randrange(-3,7))
            draw.text((x, y), char, font=font, fill=self.fontcolor)
            x += font_size*random.randrange(6, 8)/10
        self.captcha_request.session[self.captcha_key] = "".join(code)

        def create_line():
            line_num = random.randint(*lines)#sign that the param is a list

            for i in range(line_num):
                begin = (random.randint(0, self.img_width), random.randint(0, self.img_height))
                end = (random.randint(0, self.img_width), random.randint(0, self.img_height))
                draw.line([begin, end], fill=(0, 0, 0))

        def create_points():
            chance = min(100, max(0, int(point_chance)))
            for w in range(self.img_width):
                for h in range(self.img_height):
                    tmp = random.randint(0, 100)
                    if tmp > 100 - chance:
                        draw.point((w, h), fill=(0, 0, 0))
        create_line()
        create_points()
        params = [1 - float(random.randint(1, 2)) / 100,
                  0,
                  0,
                  0,
                  1 - float(random.randint(1, 10)) / 100,
                  float(random.randint(1, 2)) / 500,
                  0.001,
                  float(random.randint(1, 2)) / 500
                  ]
        img = img.transform((self.img_width, self.img_height), Image.PERSPECTIVE, params)
        img = img.filter(ImageFilter.EDGE_ENHANCE_MORE)
        return img

    def check(self, code):
        corr_code = self.captcha_request.session.get(self.captcha_key) or ""
        if not code:
            return False
        expires_time = self.captcha_request.session.get(self.captcha_expires_time) or 0
        del self.captcha_request.session[self.captcha_key]
        del self.captcha_request.session[self.captcha_expires_time]
        if corr_code.lower() == str(code).lower() and time.time()<expires_time:
            return True
        else:
            return False
