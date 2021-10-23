from django.db import models

# Create your models here.
class urlitem(models.Model):
    url = models.CharField(max_length=10000,null=True)
    urltype = models.CharField(max_length=500,null=True)

    def __str__(self):
        return str(self.url)