from django.urls import path
from . import views

app_name = "shopping_list_app"

urlpatterns = [
    path("", views.index, name="index"),
    path("add_item/", views.add_item, name="add_item"),
    path("remove_item/", views.remove_item, name="remove_item"),
]
