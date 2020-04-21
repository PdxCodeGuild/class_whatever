from django.urls import path
from . import views

app_name = 'chirp_ranters' 
urlpatterns = [
    path('beg', views.beg, name='beg'),
    path('user/<str:trollavatar>/', views.details, name='details'),
]