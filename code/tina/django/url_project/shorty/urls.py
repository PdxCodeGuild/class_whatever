from django.urls import path
from . import views

app_name = 'shorty'
urlpatterns = [

    path('', views.index, name='index'),
    path('add/', views.add, name='add'),
    path('results/<str:short_id>/', views.results, name='results'),
    path('<str:newurl>/', views.redirect, name='redirect'),
    
    

]

