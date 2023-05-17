from django.urls import path, include

from .views import SiteContentListSerializer, SiteContentDetailSerializer

urlpatterns = [
    path('<slug:slug>/', SiteContentDetailSerializer.as_view()),
    path('', SiteContentListSerializer.as_view()),
]
