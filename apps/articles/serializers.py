from rest_framework import serializers

from .models import Article


class ArticleSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = [
            'updated_at',
            'pkid',
            'id',
            'title',
            'user',
            'article_section',
            'notes',
            'slug',
        ]

    def get_user(self, obj):
        return obj.user.username
