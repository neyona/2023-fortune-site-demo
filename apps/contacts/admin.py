from django.contrib import admin

from .models import Contact


class ContactAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'messageinput']


admin.site.register(Contact, ContactAdmin)
