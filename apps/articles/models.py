from django.db import models
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _

from autoslug import AutoSlugField

from apps.common.models import TimeStampedUUIDModel

User = get_user_model()


class Article(TimeStampedUUIDModel):
    title = models.CharField(
        verbose_name=_('Article name and add number'),
        max_length=50,
    )
    user = models.ForeignKey(
        User,
        verbose_name=_('Administrator adding this information'),
        related_name='admin_writer',  # this has to be different for every model
        on_delete=models.CASCADE
    )
    article_section = models.TextField(
        verbose_name=_('Should be a section of an article'),
        default='Add and edit',
    )
    notes = models.TextField(
        verbose_name=_('Notes for whoever updates this section'),
        null=True,
        blank=True
    )
    slug = AutoSlugField(populate_from='title', unique=True, always_update=True)

    def __str__(self):
        return '%s %s' % (self.title, self.slug)
