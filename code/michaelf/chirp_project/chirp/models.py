from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class Post(models.Model):
    
    content=models.CharField(max_length=140)
    date_posted=models.DateTimeField(auto_now_add=True)
    date_modified=models.DateTimeField(auto_now=True)
    author=models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.content
    