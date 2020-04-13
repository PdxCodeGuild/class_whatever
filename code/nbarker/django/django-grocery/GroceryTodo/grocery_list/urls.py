from django.urls import path

from . import views

app_name = 'grocery_list'

urlpatterns = [
    
    path('home/', views.home),
    path('addGroceryItem/', views.addGroceryItem),
    path('deleteGroceryItem/<int:pk>/', views.deleteGroceryItem),
    path('completeGroceryItem/<int:pk>/', views.completeGroceryItem),
]
