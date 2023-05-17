from rest_framework.permissions import BasePermission, IsAuthenticated


# only allowing posting.
class PostOnlyPermission(BasePermission):
    # excludes the other methods
    def has_permission(self, request, view):
        if request.method == "POST":
            return True


"""
using has_object_permission allowed everything to be seen if the person
could post. Above worked better
def has_object_permission(self, request, view, obj):
    if request.method == "POST":
        return True

POST, PUT, and DELETE are considered ‘unsafe’

if request.method == "POST" never if request.POST in case it exists but is empty
"""
