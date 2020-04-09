from django.db import models

class URL(models.Model):
    full_url = models.URLField(unique=True)
    url_hash = models.URLField(unique=True)
    clicks = models.IntegerField(default=0)
    create_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.url_hash
    
    def clicked(self):
        self.clicks +=1
        self.save()
    
    def __str__(self):
        return self.full_url and self.url_hash
