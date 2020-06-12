from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

# NOT DJANGO.CONFIG, NICK!

# Create your models here.

class tweet(models.Model):
    text = models.TextField(max_length=128, default='')
    datetime = models.DateTimeField(default = timezone.now)
    uname = models.ForeignKey(User, on_delete=models.CASCADE)
    # NO QUOTES AROUND models.CASCADE! lolllllllllllll
