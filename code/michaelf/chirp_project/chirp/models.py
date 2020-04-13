from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse


class Post(models.Model):
    
    content=models.CharField(max_length=140)
    date_modified=models.DateTimeField(auto_now=True)
    date_posted=models.DateTimeField(auto_now_add=True)
    author=models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.content
    
    def get_absolute_url(self):
        return reverse('chirp:index')

    def is_modified(self):
        return self.date_posted < self.date_modified
