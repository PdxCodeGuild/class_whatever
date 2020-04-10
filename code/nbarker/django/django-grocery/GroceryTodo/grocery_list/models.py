from django.db import models

class GroceryItem(models.Model):
    content = models.CharField(max_length=150)
    timestamp = models.DateTimeField(auto_now_add=True, null=True)
    completed_date = models.DateTimeField(null=True, blank=True)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.content, self.timestamp, self.completed, self.completed_date

