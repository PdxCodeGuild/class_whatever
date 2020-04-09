from django.db import models

class GroceryItem(models.Models):
    description = models.CharField(max_length=200)
    created_date = models.DateTimeField()
    comleted_date = models.DateTimeField(nukk=True, blank=True)
    comleted = models.BooleanField(default=False) 