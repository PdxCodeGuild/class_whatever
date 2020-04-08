
from django.urls import path
from . import views


app_name = 'grocery_app'
urlpatterns = [
    path('',views.index, name='index'),
    path('add/',views.add, name='add'),
    path('delete/', views.delete, name='delete'),
]