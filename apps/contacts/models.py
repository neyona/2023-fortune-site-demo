# apps/contacts/models.py
from django.db import models
from django.utils.translation import gettext_lazy as _

from apps.common.models import TimeStampedUUIDModel
# The following is the model for contact information sent by
# anonymous users.


class Contact(TimeStampedUUIDModel):
    name = models.CharField(_('Your Name'), max_length=100)
    email = models.EmailField(_('Email'))
    messageinput = models.TextField(_('Message'), blank=True)
    # possible boolean here eventually

    def __str__(self):
        return '%s %s' % (self.name, self.email)

    class Meta:
        verbose_name_plural = 'Contacts'
