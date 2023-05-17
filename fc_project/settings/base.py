import os
from pathlib import Path
from datetime import timedelta
from corsheaders.defaults import default_headers

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent.parent

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.environ.get('DEBUG', default=False)

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/
# Application definitions

DJANGO_APPS = [
    'django.contrib.contenttypes',  # moved to the top if/when celery and flower added
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.sessions',
    'django.contrib.messages',
    'whitenoise.runserver_nostatic',
    'django.contrib.staticfiles',
]

THIRD_PARTY_APPS = [
    'rest_framework',
    'rest_framework_api_key',
    'storages',
    'corsheaders',
    'manifest_loader',
    'django_filters',
    'django_countries',
    'phonenumber_field',
    'django_celery_beat',
]

LOCAL_APPS = [
    'apps.common',
    'apps.users',
    'apps.fortunes',
    'apps.contacts',
    'apps.site_contents',
    'apps.articles',
    'apps.merch',
    'ui_frontend',
]

INSTALLED_APPS = DJANGO_APPS + THIRD_PARTY_APPS + LOCAL_APPS

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'corsheaders.middleware.CorsMiddleware',  # 2nd row!
    'whitenoise.middleware.WhiteNoiseMiddleware',  # 3rd row!
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'corsheaders.middleware.CorsPostCsrfMiddleware',  # <--- added to allow posting
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'fc_project.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'ui_frontend/templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'fc_project.wsgi.application'

# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'America/New_York'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# cors related
CORS_ALLOW_METHODS = [
    'DELETE',
    'GET',
    'OPTIONS',
    'PATCH',
    'POST',
    'PUT',
]

# For potentially more customized headers
CORS_ALLOW_HEADERS = list(default_headers) + [
    'X-Api-Key',
]

# The following is a django setting and if not set and left as default, it stops
# all cookies that are not same site
SESSION_COOKIE_SAMESITE = None

# The following means cookies will be allowed to be included in cross-site HTTP requests
# Probably needed this earlier.
CORS_ALLOW_CREDENTIALS = True

# Needed for djangorestframework api key
API_KEY_CUSTOM_HEADER = 'HTTP_X_API_KEY'

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

STATIC_URL = '/static/'
# the static route is where the collectstatic files will end up.
STATIC_ROOT = BASE_DIR / 'staticfiles'

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'ui_frontend/static'),
)

# Optional Settings
MANIFEST_LOADER = {
    'output_dir': 'ui_frontend/static',
    'manifest_file': 'manifest.json',  # name of your manifest file
    'cache': True,
}

# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# I always change the user to a custom user so I can update it later as needed.
AUTH_USER_MODEL = 'users.User'
