from django.urls import path
from . import views

app_name = 'users' # for namespacing
urlpatterns = [
    path('user_signup', views.user_signup, name='user_signup'),
    path('user/<str:username>/', views.user_detail, name='user_detail'),
]