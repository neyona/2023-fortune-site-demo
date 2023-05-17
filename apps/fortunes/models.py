from django.db import models
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _
from autoslug import AutoSlugField


class Fortune(models.Model):
    author = models.ForeignKey(
        get_user_model(),
        on_delete=models.CASCADE,
        null=True
    )
    title = models.CharField(max_length=50)
    fortune = models.TextField(
        verbose_name=_('The fortune - start it with a comma'),
    )
    slug = AutoSlugField(
        populate_from='title',
        unique=True,
        default='300',
        always_update=True
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return '%s %s' % (self.title, self.fortune)
