from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListCreateAPIView
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status

from django.views.decorators.csrf import ensure_csrf_cookie
# Rest Framework API Key is a module added to the project in the Pipfile
from rest_framework_api_key.models import APIKey
from rest_framework_api_key.permissions import HasAPIKey

from .models import Contact
from .serializers import ContactSerializer
from .permissions import PostOnlyPermission
# The following takes in messages via frontend form, they are allowed when
# there is  API key in the header.
# POST requests require the user to have the add permission on the model.


class ContactListCreate(ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    parser_classes = [JSONParser]
    permission_classes = [PostOnlyPermission | IsAuthenticated]

    # This decorator forces a view to send the CSRF cookie.
    @ensure_csrf_cookie
    def contact_list(request):
        return Response({"message": "Received form data!"})
