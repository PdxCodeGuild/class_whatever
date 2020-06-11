from django.db import models

# Create your models here.

class Storage(models.Model):
  long_url = models.URLField(unique=True, max_length=200)
  short_url = models.URLField(unique=True, max_length=10)
  num_clicks = models.IntegerField(default=0)
  created_time = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return self.long_url

  def clicked(self):
    self.num_clicks += 1
    self.save()