from django.urls import path
from .views import index, route
from django.contrib import admin


urlpatterns = [
    path('', index),
    path('admin',admin.site.urls),
    path('<str:short_url>', route)
]