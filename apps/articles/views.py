from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_api_key.permissions import HasAPIKey

from .models import Article
from .serializers import ArticleSerializer

User = get_user_model()


class ArticleListSerializer(ListCreateAPIView):
    permission_classes = [HasAPIKey | IsAuthenticated]
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ArticleDetailSerializer(RetrieveUpdateDestroyAPIView):
    permission_classes = [HasAPIKey | IsAuthenticated]
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    def get(self, request, slug):
        article = Article.objects.get(slug=slug)
        article.save()
        serializer = ArticleSerializer(article, context={'request': request})

        return Response(serializer.data, status=status.HTTP_200_OK)
