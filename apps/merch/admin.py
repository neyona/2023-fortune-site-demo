from django.contrib import admin
from django.utils.html import mark_safe, format_html

from .models import Merch

class MerchAdmin(admin.ModelAdmin):
    list_display = ['title', 'company', 'image_tag']
    list_filter = ['title', 'company']
    readonly_fields = ['photo_preview_one', 'photo_preview_two', 'photo_preview_three', 'photo_preview_four', 'photo_preview_five']

    def image_tag(self, obj):
        return format_html('<img src="{}" style="max-width:200px; max-height:200px"/>'.format(obj.photo_one.url))

    def photo_preview_one(self, obj):
        return obj.photo_preview_one

    def photo_preview_two(self, obj):
        return obj.photo_preview_two

    def photo_preview_three(self, obj):
        return obj.photo_preview_three

    def photo_preview_four(self, obj):
        return obj.photo_preview_four

    def photo_preview_five(self, obj):
        return obj.photo_preview_five

    photo_preview_one.short_description = 'Photo One Preview'
    photo_preview_one.allow_tags = True
    photo_preview_two.short_description = 'Photo Two Preview'
    photo_preview_two.allow_tags = True
    photo_preview_three.short_description = 'Photo Three Preview'
    photo_preview_three.allow_tags = True
    photo_preview_four.short_description = 'Photo Four Preview'
    photo_preview_four.allow_tags = True
    photo_preview_five.short_description = 'Photo Five Preview'
    photo_preview_five.allow_tags = True


admin.site.register(Merch, MerchAdmin)
