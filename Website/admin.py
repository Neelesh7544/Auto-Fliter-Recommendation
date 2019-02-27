from django.contrib import admin

# Register your models here.

from .models import Image, Filters

admin.site.register(Image)
admin.site.register(Filters)