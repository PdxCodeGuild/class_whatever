from django.db import models
from datetime import datetime 

# Create your models here.


class GroceryItem(models.Model):
    text = models.TextField(default="Empty item")
    created_date = models.DateTimeField(auto_now_add=True)
    completed_date = models.DateTimeField(default=datetime.now)
    complete = models.BooleanField(default=False)

    def __str__(self):
        return self.text