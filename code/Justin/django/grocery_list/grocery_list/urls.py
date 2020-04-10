from django.urls import path
from . import views

app_name = 'grocery_list'
urlpatterns = [
    path('', views.index, name='index'),
    path('create/', views.create, name='create'),
    path('detail/', views.detail, name='detail'),
    path('delete/<int:grocery_item_id>', views.delete, name='delete'),
    path('incomplete/', views.incomplete, name='incomplete'),
    path('complete/<int:grocery_item_id>', views.complete, name='complete'),
]