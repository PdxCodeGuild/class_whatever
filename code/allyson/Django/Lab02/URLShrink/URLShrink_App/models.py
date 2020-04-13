from django.db import models


class Shrink(models.Model):
    URL = models.TextField()
    code = models.CharField(max_length=200)

    def __str__(self):
        return "http://.../" + self.code