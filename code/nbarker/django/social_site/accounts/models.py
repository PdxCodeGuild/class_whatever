from django.db import models
from django.contrib.auth.models import User


class profile(models.Model):
    user = models.OneToOneField(User, on_delete = models.CASCADE)
    image = models.ImageField(default = 'default.jpg', upload_to= 'profile_pics')
    bio = models.TextField(default = '')

    def __str__(self):
        return f'{self.user.username}'


# Create your models here.
# get the user model from django.contrib.auth.models
# https: // docs.djangoproject.com/en/3.0/topics/db/examples/one_to_one/
#you'll need pillow to do profile pictures!
