from django.urls import path

from . import views

app_name = 'twiita'

urlpatterns = [
    path('', views.TwitListView.as_view(), name='home'),
    
]