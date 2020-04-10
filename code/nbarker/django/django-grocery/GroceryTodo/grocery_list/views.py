from django.shortcuts import render
from django.http import HttpResponseRedirect
from .models import GroceryItem
from django.urls import reverse
from django.utils import timezone


#'home' will list all of the items, created times, updated times, ***Need to find a way to sep into completed and not completed***
def home(request):
    incomplete_items = GroceryItem.objects.filter(completed=False).order_by('timestamp')
    completed_items = GroceryItem.objects.filter(completed=True).order_by('completed_date')
    context = {
        'incomplete_items': incomplete_items,
        'completed_items': completed_items
    }
    return render(request, 'grocery_list/dashboard.html', context)

# def addGroceryItem(request):
#     if request.POST['content']:
#         GroceryItem.objects.create(content = request.POST['content'])
#     return HttpResponseRedirect('templates/grocery_list/dashboard.html')