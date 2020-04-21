from django.db import models
from django.conf import settings

# Create your models here.

class Author(models.Model):
    name = models.CharField(max_length = 200)

    def __str__(self):
        return self.name

class Book(models.Model):
    title = models.CharField(max_length = 200)    
    published_date = models.DateTimeField()
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    checked_out = models.BooleanField()

    def __str__(self):
        return self.title

    def check_in(self):
        self.checked_out = False
        self.save()

    def check_out(self):
        self.checked_out = True
        self.save()