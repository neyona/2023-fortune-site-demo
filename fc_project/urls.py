from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

"""
The following are not the actual names of the api urls that I used. This is
the demo version of the site I added to github
"""

urlpatterns = [
    path('something-other-than-admin/', admin.site.urls),
    # in actuality go to /something-other-than-admin/login/?next=/something-other-than-admin/
    # the following is different apis
    path('one-api-name/v1/', include('apps.fortunes.urls')),
    path('two-api-name/v1/', include('apps.site_contents.urls')),
    path('three-api-name/v1/', include('apps.articles.urls')),
    path('four-api-name/v1/', include('apps.merch.urls')),
    path('five-api-name/v1/', include('apps.contacts.urls')),
    # The following is the frontend
    path('', include('ui_frontend.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# The following is the simplest way to change backend admin headers, etc.
admin.site.site_header = 'The Fortunate Cuttlefish Backend'
admin.site.site_title = 'The Fortunate Cuttlefish Site'
admin.site.index_title = 'Welcome behind the scenes of the Fortunate Cuttlefish site'
