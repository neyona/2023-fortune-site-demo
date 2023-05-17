from rest_framework.exceptions import APIException


class MerchNotFound(APIException):
    status_code = 404
    default_detail = "The requested merch page does not exist"
