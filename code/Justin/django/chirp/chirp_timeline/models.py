from django.db import models
from django.conf import settings
from django.utils import timezone

class Rants(models.Model):

    spitfire = models.CharField(max_length=140)

    ranter = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    incepted = models.DateTimeField(default=timezone.now)

    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)

    tarnished = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        
        return self.spitfire
