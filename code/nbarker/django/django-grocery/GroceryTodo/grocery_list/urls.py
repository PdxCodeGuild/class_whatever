from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from . import views

app_name = 'grocery_list'

urlpatterns = [
    
    path('home/', views.home),
    path('addGroceryItem/', views.addGroceryItem),
    path('deleteGroceryItem/<int:pk>/', views.deleteGroceryItem),
    path('completeGroceryItem/<int:pk>/', views.completeGroceryItem),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
