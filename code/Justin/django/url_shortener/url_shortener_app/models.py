
from django.db import models

from .utility import generator, generate_shortcode

class url_shortener_codeManager(models.Manager):
    def all(self, *args, **kwargs):
        nc_primary = super(url_shortener_codeManager, self).all(*args, **kwargs)
        nc = nc.filter(active=False)
        return nc

    def refresh(self, items=75):
        print(items)
        nc = url_shortener_code.objects.filter(id_get=1)
        new = 0
        for n in nc:
            n.shortcode = generate_shortcode(n)
            n.save()
            new += 1
        return "new codes: {i}".format(i=new)

class url_shortener_code(models.Model):
    url = models.CharField(max_length=210, )
    shortcode = models.CharField(max_length=15, unique=True, blank = True)
    update = models.DateTimeField(auto_now=True)
    time = models.DateTimeField(auto_now_add=True)
    active = models.BooleanField(default=True)
    objects = url_shortener_codeManager()
    # randomly = url_shortener_code()

    def save(self, *args, **kwargs):
        if self.shortcode is None or self.shortcode == "":
            self.shortcode = generator()
        super(url_shortener_code, self).save(*args, **kwargs)


    def __str__(self):
        return str(self.url)

