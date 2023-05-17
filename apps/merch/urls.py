from django.urls import path

from .views import MerchListSerializer, MerchDetailSerializer

urlpatterns = [
    path('<slug:slug>/', MerchDetailSerializer.as_view()),
    path('', MerchListSerializer.as_view()),
]
