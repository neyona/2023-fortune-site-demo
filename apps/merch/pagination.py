from rest_framework.pagination import PageNumberPagination


class MerchPagination(PageNumberPagination):
    page_size = 10  # can be any number
