import json
from django.views.generic import View
from django.http import HttpResponse, QueryDict


class BaseError(Exception):
    def __init__(self, msg, err=None):
        self.err = err
        self.msg = msg
        super().__init__(err, msg)


class ContentType(object):
    json_request = "application/json"
    json_response = "application/json;charset=UTF-8"
    url_encoded_request = "application/x-www-form-urlencoded"


class JSONParser(object):
    content_type = ContentType.json_request

    @staticmethod
    def parse(body):
        return json.loads(body.decode("utf-8"))


class URLEncodedParser(object):
    content_type = ContentType.url_encoded_request

    @staticmethod
    def parse(body):
        return QueryDict(body)


class ParserFactory(object):

    @staticmethod
    def get_parse(content_type):
        request_parser = (JSONParser, URLEncodedParser)
        for parser in request_parser:
            if content_type.startswith(parser.content_type):
                return parser
        raise ValueError("unknown content_type '%s'" % content_type)


class JSONResponse(object):
    content_type = ContentType.json_response

    @classmethod
    def response(cls, data):
        res = HttpResponse(json.dumps(data), content_type=cls.content_type)
        res.data = data
        return res


class BaseView(View):
    def _parse_body(self, request):
        if request.method != "GET":
            body = request.body
            content_type = request.META.get("CONTENT_TYPE")
            if not content_type:
                raise ValueError("content_type is required")
            parser = ParserFactory.get_parse(content_type)
            if body:
                return parser.parse(body)
            return {}
        return request.GET

    def response(self, data):
        return JSONResponse.response(data)

    def success(self, data=None):
        return self.response({"error": None, "data": data})

    def error(self, msg="error", err="error"):
        return self.response({"error": err, "data": msg})

    def server_error(self):
        return self.error(err="server-error", msg="server error")

    def dispatch(self, request, *args, **kwargs):
        try:
            request.data = self._parse_body(self.request)
        except ValueError as e:
            return self.error(err="invalid-request", msg=str(e))
        try:
            return super().dispatch(request, *args, **kwargs)
        except BaseError as e:
            param = {"msg": e.msg}
            if e.err:
                param["err" ] =e.err
            return self.error(**param)
        #except Exception as e:
        #   return self.server_error()

