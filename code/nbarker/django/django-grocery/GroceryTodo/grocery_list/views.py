from django.shortcuts import render
from django.http import HttpResponseRedirect
from .models import GroceryItem
from django.utils import timezone
from django.urls import reverse


#'home' will list all of the items, created times, updated times, ***Need to find a way to sep into completed and not completed***
def home(request):
    all_grocery_items = GroceryItem.objects.all()
    return render(request, 'grocery_list/dashboard.html', {'all_items': all_grocery_items},)

#to add, we need to create an object, save it, and redirect to URL''
def addGroceryItem(request):
    new_grocery_item = GroceryItem(content = request.POST['content'], completed = False)
    new_grocery_item.save()
    return HttpResponseRedirect('/home')

def deleteGroceryItem(request, GroceryItem_id):
    item_to_delete = GroceryItem.objects.get(id=GroceryItem_id)
    item_to_delete.delete()
    return HttpResponseRedirect('/home')

def completeGroceryItem(request, GroceryItem_id):
    item_to_complete = GroceryItem.objects.get(id=GroceryItem_id)
    item_to_complete.save()
    return HttpResponseRedirect('/home')