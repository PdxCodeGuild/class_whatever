from django.urls import path
from . import views

# I didn't leave a space between 'from' and '.' it took me forever, uuggghhhh

urlpatterns = [
    path('', views.home, name='home')
]
