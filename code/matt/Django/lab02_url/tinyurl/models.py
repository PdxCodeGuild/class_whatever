from django.db import models

# Create your models here.

class Shortener(models.Model):
    long_url = models.u