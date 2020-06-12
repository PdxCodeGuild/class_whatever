from django.db import models

class Urls(models.Model):
    short_id = models.TextField(max_length=6)
    entered_url = models.URLField(max_length=200)
    pub_date = models.DateTimeField(auto_now = True)
    count = models.IntegerField(default=0)

