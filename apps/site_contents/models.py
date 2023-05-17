from django.db import models
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _

from autoslug import AutoSlugField

from apps.common.models import TimeStampedUUIDModel

User = get_user_model()


class SiteContent(TimeStampedUUIDModel):
    class SiteContentTitle(models.TextChoices):
        BLANK = 'placeholder'
        WELCOME_TEXT = 'front-page-welcome'
        ABOUT_THE_SITE = 'about-me'
        WORK_DESCRIPTION = 'work-description'
        CONTACT_DESCRIPTION = 'contact-description'
        ANNOUNCEMENTS = 'announcements'

    title = models.CharField(
        verbose_name=_('Site Content Title Area'),
        max_length=50,
        choices=SiteContentTitle.choices,
        default=SiteContentTitle.BLANK,
    )
    user = models.ForeignKey(
        User,
        verbose_name=_('Administrator adding this information'),
        related_name='admin_backend',  # this has to be different for every model
        on_delete=models.CASCADE
    )
    description = models.TextField(
        verbose_name=_('Check which page this goes with'),
        default='Edit me',
    )
    notes = models.TextField(
        verbose_name=_('Notes for whoever updates this section'),
        null=True,
        blank=True
    )
    slug = AutoSlugField(populate_from='title', unique=True, always_update=True)

    def __str__(self):
        return self.title
