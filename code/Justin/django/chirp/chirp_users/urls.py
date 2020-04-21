from django.urls import path
from . import views

app_name = 'chirp_users' 
urlpatterns = [
    path('beg', views.user_signup, name='beg'),
    path('user/<str:trollavatar>/', views.details, name='details'),
]