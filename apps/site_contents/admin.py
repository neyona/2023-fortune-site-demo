from django.contrib import admin

from .models import SiteContent


class SiteContentAdmin(admin.ModelAdmin):
    list_display = ['title']


admin.site.register(SiteContent, SiteContentAdmin)
