from django.conf import settings
from django.db import models
from django.utils import timezone
from django.conf import settings
from django.urls import reverse
from django.contrib import admin



class Post(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    text = models.TextField(max_length=150)
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)
    title = models.TextField(max_length=100)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.text

    def get_absolute_url(self):
        return reverse("post:post_detail", args=(self.id,))


class AuthorAdmin(admin.ModelAdmin):
    exclude = ('author',)
        
    
 