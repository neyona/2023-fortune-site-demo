from rest_framework import serializers

from .models import SiteContent


class SiteContentSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()

    class Meta:
        model = SiteContent
        fields = [
            'updated_at',
            'pkid',
            'id',
            'title',
            'user',
            'description',
            'notes',
            'slug',
        ]

    def get_user(self, obj):
        return obj.user.username
