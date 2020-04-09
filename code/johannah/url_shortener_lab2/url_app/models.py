from django.db import models

# Create your models here.

class Storage(models.Model):
  long_url = models.CharField(max_length=200)

  def __str__(self):
    return self.long_url



# 1 model to store the long url and short code