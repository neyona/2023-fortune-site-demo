from django.conf import settings
from storages.backends.s3boto3 import S3Boto3Storage


class MediaStorage(S3Boto3Storage):
    bucket_name = '********************'
    location = 'mediafiles'
    default_acl = None
    # or
    # default_acl = 'public-read'
    file_overwrite = False
