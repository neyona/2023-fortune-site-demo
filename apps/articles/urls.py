from django.urls import path, include

from .views import ArticleListSerializer, ArticleDetailSerializer

urlpatterns = [
    path('<slug:slug>/', ArticleDetailSerializer.as_view()),
    path('', ArticleListSerializer.as_view()),
]
