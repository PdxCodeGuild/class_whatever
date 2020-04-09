from django.urls import path
from . import views

app_name = "CROW_Users"

urlpatterns = [
    path("", views.CROW_Users, name="CROW_Users"),
]
