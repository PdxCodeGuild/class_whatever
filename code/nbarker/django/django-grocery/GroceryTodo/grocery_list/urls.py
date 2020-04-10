from django.urls import path

from . import views

app_name = 'grocery_list'

urlpatterns = [
    
    path('home/', views.home),
    path('addGroceryItem/', views.addGroceryItem),
    path('deleteGroceryItem/<int:GroceryItem_id>/', views.deleteGroceryItem),
    path('completeGroceryItem/<int:GroceryItem_id>/', views.completeGroceryItem),
]
