from django.db import models

class url_shortener_code(models.Model):
    url = models.CharField(max_length=210, )
    shortcode = models.CharField(max_length=15, unique=True)
    update = models.DateTimeField(auto_now=True)
    time = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return str(self.url)

