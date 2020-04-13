from django.db import models


class Storage(models.Model):
    longurl= models.URLField(max_length=200)
    shorturl= models.URLField(max_length=200)

    def __str__(self):
        return self.shorturl
    



