from django.db import models
# from django.conf import settings
# from django.utils import timezone
from django.contrib.auth.models import User
from django import forms
from django.contrib.auth.forms import UserCreationForm

# Create your models here.

class Post(models.Model):
    text = models.CharField(max_length=200)
    date_published = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.text}, {self.date_published}, {self.author}'