
from django.urls import path, include

from .views import FortuneList, FortuneDetail

urlpatterns = [
    path('', FortuneList.as_view()),
    path('<slug:slug>/', FortuneDetail.as_view()),
]
