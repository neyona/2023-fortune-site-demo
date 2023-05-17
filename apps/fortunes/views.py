from django.contrib.auth import get_user_model
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework import status
from rest_framework.response import Response
# Rest Framework API Key is a module added to the project in the Pipfile
from rest_framework_api_key.permissions import HasAPIKey

from .models import Fortune
from .serializers import FortuneSerializer


class FortuneList(ListCreateAPIView):
    # Setup so that only one page can read the api OR those who are authenticated
    permission_classes = [HasAPIKey | IsAuthenticated]
    queryset = Fortune.objects.all()
    serializer_class = FortuneSerializer


class FortuneDetail(RetrieveUpdateDestroyAPIView):
    # Only those authenticated can see these
    permission_classes = (IsAuthenticated,)
    queryset = Fortune.objects.all()
    serializer_class = FortuneSerializer

    def get(self, request, slug):
        onefortune = Fortune.objects.get(slug=slug)
        onefortune.save()
        serializer = FortuneSerializer(onefortune, context={'request': request})

        return Response(serializer.data, status=status.HTTP_200_OK)
