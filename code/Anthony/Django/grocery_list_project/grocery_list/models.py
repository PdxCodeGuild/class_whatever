import datetime
from django.db import models
from django.utils import timezone






class GroceryItem(models.Model):
    item = models.CharField(max_length = 200)
    # /*date list was created*/
    description = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)  
    completed = models.BooleanField(default=False)
    completed_date = models.DateTimeField(auto_now=True)

    def __str__(self): 
        return self.item 



# class Grocery_item(models.Model):
#     grocery_item = models.CharField(max_length=200)
#     description = models.TextField()
#     pub_date = models.DateTimeField('date published')
#     completed_date = models.DateTimeField('date completed', blank=True, null=True)
#     is_completed= models.BooleanField(default=False)

#     def __str__(self):
#         return self.grocery_item # return a string representation of grocery_item
    
  
  