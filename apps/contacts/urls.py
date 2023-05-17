from django.urls import path, include

from .views import ContactListCreate


urlpatterns = [
    path('', ContactListCreate.as_view()),
]
