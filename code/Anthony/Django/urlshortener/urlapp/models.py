from django.db import models

# Create your models here.


class ShortUrl(models.Model):
    short_url = models.CharField(max_length=40, default="")
    long_url = models.TextField(default="")

    def __str__(self):
        return self.long_url
