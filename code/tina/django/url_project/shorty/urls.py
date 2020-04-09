from django.urls import path
from . import views

app_name = 'shorty'
urlpatterns = [

    path('', views.index, name='index'),
    path('add/', views.add, name='add'),
    path('short_url/', views.short_url, name='short_url'),
    path('redirect/', views.redirect, name='redirect')
    

]

