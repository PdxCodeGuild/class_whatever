from django.db import models


class Shrink(models.Model):
    URL = models.CharField(max_length=600)
    code = models.CharField(max_length=15)
    # chocobo = models.IntergerField(default=0)

    def __str__(self):
        return self.URL
