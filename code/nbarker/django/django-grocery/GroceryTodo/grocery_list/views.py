from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect
from .models import GroceryItem
from django.utils import timezone
from django.urls import reverse


#'home' will list all of the items, created times, updated times, ***Need to find a way to sep into completed and not completed***
def home(request):
    incomplete_items = GroceryItem.objects.filter(completed=False).order_by('timestamp')
    completed_items = GroceryItem.objects.filter(completed=True).order_by('completed_date')
    rabadaba = { 'incomplete_items': incomplete_items,
                    'completed_items': completed_items }
    return render(request, 'grocery_list/dashboard.html', rabadaba)

#to add, we need to create an object, save it, and redirect to URL''
def addGroceryItem(request):
    new_grocery_item = GroceryItem(content = request.POST['content'], completed = False)
    new_grocery_item.save()
    return HttpResponseRedirect('/home')

def deleteGroceryItem(request, pk):
    item_to_delete = get_object_or_404(GroceryItem, pk=pk)
    item_to_delete.delete()
    return HttpResponseRedirect('/home')

def completeGroceryItem(request, pk):
    item = get_object_or_404(GroceryItem, pk=pk)
    if item.completed:
        item.completed = False
        item.completed_date = None
    else:
        item.completed = True
        item.completed_date = timezone.now()
    item.save()
    return HttpResponseRedirect('/home')