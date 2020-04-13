from django.shortcuts import render, redirect
from .models import GroceryItem
from datetime import datetime 
# Create your views here.

def index(request):
    if request.method == "GET":
        context = {
            'items':GroceryItem.objects.all()
        }
        return render(request, "index.html", context)
    elif request.method == "POST":
        data = request.POST
        context = {
            'items':GroceryItem.objects.all()
        }
        if len(data.get("description")) == 0:
            context = {
                'items':GroceryItem.objects.all(),
                'error':"Please enter an item description"
            }
            return render(request, "index.html", context)
        item = GroceryItem(
            text = data.get('description')
        )
        item.save()
        return redirect("/")

def delete(request, id):
    if request.method =="GET":
        GroceryItem.objects.filter(pk=id).delete()
        return redirect("/")

def mark_complete(request, id):
    item = GroceryItem.objects.get(pk=int(id))
    item.complete = True
    item.completed_date = datetime.now()
    item.save()
    return redirect("/")