from .base import *
import os
import re
import dj_database_url
import django_heroku

ALLOWED_HOSTS = os.environ.get('ALLOWED_HOSTS').split(',')

DATABASES = {
    'default': {
        'ENGINE': os.environ.get('POSTGRES_ENGINE'),
        'NAME': os.environ.get('POSTGRES_DB'),
        'USER': os.environ.get('POSTGRES_USER'),
        'PASSWORD': os.environ.get('POSTGRES_PASS'),
        'HOST': os.environ.get('PG_HOST'),
        'PORT': os.environ.get('PG_PORT'),
    }
}

# Setting the following actually allows the http from the proxy which means
# it SHOULD run properly with nginx
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
SECURE_SSL_REDIRECT = True
CSRF_COOKIE_SECURE = True
SESSION_COOKIE_SECURE = True
SECURE_HSTS_SECONDS = 10000
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True
CORS_REPLACE_HTTPS_REFERER = True

CORS_ALLOWED_ORIGIN_REGEXES = [
    r"^https://****************\.com$",
    r"^https://****************.herokuapp\.com$",
    r"^https://\w+\.****************\.com$",
    r"^https://******************\.herokuapp\.com$",
    r"^https://\w+\.****************\.herokuapp\.com$",
]

CSRF_TRUSTED_ORIGINS = [
    'https://*******************.herokuapp.com',
    'https://****************.com',
    'https://****************.herokuapp.com',
    'https://www.****************.com',
]

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

WHITENOISE_ALLOW_ALL_ORIGINS = True
WHITENOISE_MANIFEST_STRICT = False

# This has to do with images uploaded through the django backend.
# django < 4.2
# Boto3 is needed since it's image storage
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'mediafiles')

# # aws settings
AWS_ACCESS_KEY_ID = os.environ.get('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = os.environ.get('AWS_SECRET_ACCESS_KEY')
S3_BUCKET = os.environ.get('S3_BUCKET')

DEFAULT_FILE_STORAGE = 'fc_project.storage_backends.MediaStorage'

db_from_env = dj_database_url.config(conn_max_age=600)
DATABASES['default'].update(db_from_env)
django_heroku.settings(locals())
