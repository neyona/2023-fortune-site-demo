from rest_framework import serializers

from .models import Merch


class MerchSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()
    photo_one = serializers.SerializerMethodField()
    photo_two = serializers.SerializerMethodField()
    photo_three = serializers.SerializerMethodField()
    photo_four = serializers.SerializerMethodField()
    photo_five = serializers.SerializerMethodField()

    class Meta:
        model = Merch
        fields = [
            'pkid',
            'id',
            'user',
            'title',
            'product_name',
            'ref_code',
            'slug',
            'company',
            'company_link',
            'description',
            'price_low',
            'price_high',
            'photo_one',
            'photo_two',
            'photo_three',
            'photo_four',
            'photo_five',
            'product_link',
            'meta_tags',
            'published_status',
            'page_background_type'
        ]
        # Did not add notes here. Notes does not need to be serialized

    def get_user(self, obj):
        return obj.user.username

    def get_photo_one(self, obj):
        return obj.photo_one.url

    def get_photo_two(self, obj):
        return obj.photo_two.url

    def get_photo_three(self, obj):
        return obj.photo_three.url

    def get_photo_four(self, obj):
        return obj.photo_four.url

    def get_photo_five(self, obj):
        return obj.photo_five.url


class MerchCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Merch
        exclude = ['updated_at']  # this means TimeStampedUUIDModel is excluded
