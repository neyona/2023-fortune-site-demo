from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_api_key.permissions import HasAPIKey

from .models import SiteContent
from .serializers import SiteContentSerializer

User = get_user_model()


class SiteContentListSerializer(ListCreateAPIView):
    permission_classes = [HasAPIKey | IsAuthenticated]
    queryset = SiteContent.objects.all()
    serializer_class = SiteContentSerializer


class SiteContentDetailSerializer(RetrieveUpdateDestroyAPIView):
    permission_classes = [HasAPIKey | IsAuthenticated]
    queryset = SiteContent.objects.all()
    serializer_class = SiteContentSerializer

    def get(self, request, slug):
        content = SiteContent.objects.get(slug=slug)
        content.save()
        serializer = SiteContentSerializer(content, context={'request': request})

        return Response(serializer.data, status=status.HTTP_200_OK)
