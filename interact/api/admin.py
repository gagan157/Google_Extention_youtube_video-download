from codecs import register
from django.contrib import admin
from .models import urlitem

# Register your models here.
@admin.register(urlitem)
class UrlItemAdmin(admin.ModelAdmin):
    list_display=['url','urltype']