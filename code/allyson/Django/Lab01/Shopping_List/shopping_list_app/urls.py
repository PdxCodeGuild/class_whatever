from django.urls import path
from . import views

app_name = "shopping_list_app"

urlpatterns = [
    path("", views.shopping_list_app, name="shopping_list_app"),
    path("add_item", views.add_item, name="add"),
    path("remove_item", views.remove_item, name="remove"),
]
