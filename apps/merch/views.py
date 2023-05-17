from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_api_key.permissions import HasAPIKey

from .exceptions import MerchNotFound
from .models import Merch
from .pagination import MerchPagination
from .serializers import MerchCreateSerializer, MerchSerializer


class MerchListSerializer(ListCreateAPIView):
    permission_classes = [HasAPIKey | IsAuthenticated]
    queryset = Merch.objects.all()
    serializer_class = MerchSerializer


class MerchDetailSerializer(RetrieveUpdateDestroyAPIView):
    permission_classes = [HasAPIKey | IsAuthenticated]
    queryset = Merch.objects.all().order_by('company', 'title')
    serializer_class = MerchSerializer

    def get(self, request, slug):
        merch = Merch.objects.get(slug=slug)
        merch.save()
        serializer = MerchSerializer(merch, context={'request': request})

        return Response(serializer.data, status=status.HTTP_200_OK)
