from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.dispatch import receiver
from .models import profile

# create
@receiver(post_save, sender=User)
def create_profile(sender,instance,created,**kwargs):
    if created:
        profile.objects.create(user=instance)

# save post
@receiver(post_save, sender=User)
def save_profile(sender,instance,**kwargs):
    instance.profile.save()


# just for referece
# https: // docs.djangoproject.com/en/3.0/ref/signals/
# https: // simpleisbetterthancomplex.com/tutorial/2016/07/28/how-to-create-django-signals.html
