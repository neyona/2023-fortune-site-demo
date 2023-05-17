import random
import string
from autoslug import AutoSlugField
from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import MinValueValidator
from django.utils.translation import gettext_lazy as _
from django.utils.html import mark_safe

from apps.common.models import TimeStampedUUIDModel

# These are meant to link to merchandise listings and show off
# react-router-dom createbrowserrouter

User = get_user_model()


class MerchManager(models.Manager):
    def get_queryset(self):
        return (
            super(MerchManager, self)
            .get_queryset()
            .filter(published_status=True)
        )


class Merch(TimeStampedUUIDModel):
    class PageBackground(models.TextChoices):
        BLACK_AND_RED = 'black-red'
        BLACK_AND_GREEN = 'black-green'
        BLACK_AND_BLUE = 'black-blue'
        BLACK_AND_ORANGE = 'black-orange'
        BLACK_AND_PURPLE = 'black-purple'
        BLACK_AND_PINK = 'black-pink'
        BLUE_AND_GREEN = 'blue-green'
        BLUE_AND_PURPLE = 'blue-purple'
        BLUE_AND_BLUE = 'blue-blue'
        GRAY_AND_BLACK = 'gray-black'

    user = models.ForeignKey(
        User,
        verbose_name=_('Which admin added the book'),
        related_name='admin_merch',  # this has to be different for every model
        on_delete=models.CASCADE
    )
    title = models.CharField(
        verbose_name=_('Merch Name'),
        max_length=500,
        default='one product'
    )
    product_name = models.CharField(
        verbose_name=_('Wilder Name'),
        max_length=1000,
        default='This is a text field in case the name has non-letter characters',
    )
    ref_code = models.CharField(
        verbose_name=_('Internal Reference Code DO NOT SET'),
        max_length=255,
        unique=True,
        blank=True,
    )
    slug = AutoSlugField(
        populate_from='title',
        unique=True,
        default='fakeslug',
        always_update=True
    )
    company = models.CharField(
        verbose_name=_('Company Name'),
        max_length=1000,
        default='This is a text field for adding site AND shop name',
    )
    company_link = models.URLField(
        verbose_name=_('Company Site or full shop'),
        default='https://www.redbubble.com/people/aphelionrhode/shop?asc=u&ref=account-nav-dropdown',
        max_length=500,
        null=True,
        blank=True
    )
    description = models.TextField(
        verbose_name=_('Description'),
        default='Default description, update me',
    )
    price_low = models.DecimalField(
        verbose_name=_('Price Low'),
        max_digits=8,
        decimal_places=2,
        default=0.00,
        null=True,
        blank=True
    )
    price_high = models.DecimalField(
        verbose_name=_('Price High'),
        max_digits=8,
        decimal_places=2,
        default=0.00,
        null=True,
        blank=True
    )
    photo_one = models.ImageField(
        verbose_name=_('Photo One'),
        upload_to='merch_images/',
        default='/default_one.jpg',
        null=True,
        blank=True
    )
    photo_two = models.ImageField(
        verbose_name=_('Photo Two'),
        upload_to='merch_images/',
        default='/default_two.jpg',
        null=True,
        blank=True,
    )
    photo_three = models.ImageField(
        verbose_name=_('Photo Three'),
        upload_to='merch_images/',
        default='/default_three.jpg',
        null=True,
        blank=True,
    )
    photo_four = models.ImageField(
        verbose_name=_('Photo Four'),
        upload_to='merch_images/',
        default='/default_four.jpg',
        null=True,
        blank=True,
    )
    photo_five = models.ImageField(
        verbose_name=_('Photo Five'),
        upload_to='merch_images/',
        default='/default_five.jpg',
        null=True,
        blank=True,
    )
    product_link = models.URLField(
        verbose_name=_('Where to purchase the product'),
        default='https://www.redbubble.com/people/aphelionrhode/shop?asc=u&ref=account-nav-dropdown',
        max_length=500,
        null=True,
        blank=True
    )
    meta_tags = models.TextField(
        verbose_name=_('Ten Meta Tags'),
        default='Meta tags with commas',
    )
    published_status = models.BooleanField(
        verbose_name=_('Published to the site'),
        default=False
    )
    """
    These are attached to mixins for cards and buttons in react
    """
    page_background_type = models.CharField(
        verbose_name=_('Page Background'),
        max_length=50,
        choices=PageBackground.choices,
        default=PageBackground.BLUE_AND_PURPLE,
    )
    notes = models.TextField(
        verbose_name=_('Notes'),
        default='Can be blank',
        null=True,
        blank=True
    )

    objects = models.Manager()
    published = MerchManager()

    def __str__(self):
        return self.title

    @property
    def photo_preview(self):
        if self.photo_one:
            return mark_safe('<img src="{}" style="max-width:300px; max-height:300px" />'.format(self.photo_one.url))
        return ""

    class Meta:
        verbose_name = 'Merch'
        verbose_name_plural = 'Merch'
        ordering = ['company', 'title']

    def save(self, *args, **kwargs):
        self.title = str.title(self.title)
        # the following should generate a random string
        self.ref_code = ''.join(
            random.choices(string.ascii_uppercase + string.digits, k=10)
        )
        super(Merch, self).save(*args, **kwargs)
