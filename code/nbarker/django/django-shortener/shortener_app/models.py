from django.db import models

class Item_to_shorten(models.Model):
    big_url = models.URLField(default=None)
# Create your models here.
