from django.urls import path
from . import views

app_name = "CROW_CAWS"

urlpatterns = [
    path("", views.CROW_CAWS, name="CROW_CAWS"),
]
