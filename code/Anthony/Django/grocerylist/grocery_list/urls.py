from django.contrib import admin
from django.urls import path,include
from .views import index, delete, mark_complete

urlpatterns = [
    path('', index),
    path("delete/<int:id>",delete),
    path("check/<int:id>", mark_complete)
]