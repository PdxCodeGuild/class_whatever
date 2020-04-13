from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, get_object_or_404
from django.template import loader
from django.utils import timezone
from django.urls import reverse

from .models import Items_List


def index(request):
    context = {
        "shop_list": Items_List.objects.filter(completed=False).order_by("add_date"),
        "purchased": Items_List.objects.filter(completed=True).order_by("-com_date"),
    }
    return render(request, "shopping_list_app/index.html", context)


def add_item(request):
    print = "=" * 100
    # print(request.POST)
    add_item_new = request.POST["item_id"]
    amount = request.POST["amount"]
    new_item = Items_List.objects.create(
        item=add_item_new, amount=amount, completed=False, add_date=timezone.now()
    )
    return HttpResponseRedirect(reverse("shopping_list_app:index"))


def remove_item(request):
    rem_item_id = request.POST["delete_item_id"]
    rem_item = Items_List.objects.get(id=rem_item_id)
    rem_item.delete()
    return HttpResponse(reverse("shopping_list_app:index"))


def undo(request):
    undo = request.POST("undo_item_id")
    undo_item = Items_List.objects.get(id=undo)
    undo_item.completed = False
    undo_item.com_date = None
    undo_item.save()
    return HttpResponse(reverse("shopping_list_app:index"))


def full_list(request):
    item = request.POST["item_id"]
    list = Items_List.objects.get(id=item)
    list.completed = True
    list.com_date = timezone.now()
    list.save()
    return HttpResponse(reverse("shopping_list_app:index"))
