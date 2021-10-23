from django.db.models import fields
from rest_framework import serializers
from .models import urlitem

class geturlserlizer(serializers.ModelSerializer):
    class Meta:
        model = urlitem
        fields = ['url','urltype']