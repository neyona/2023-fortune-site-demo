from django.urls import path, re_path

from .views import indexView  # the view responsible for the frontend

urlpatterns = [
    re_path(r'^.*', indexView),
]
