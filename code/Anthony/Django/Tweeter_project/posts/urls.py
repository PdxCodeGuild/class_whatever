from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<post_id>/', views.post, name='post'),
    path('add/', views.add, name='add'),


]
