from django.urls import path
from . import views

app_name = 'posts'
urlpatterns = [
    path('home/', views.home, name='home'),
    path('add-tweet/', views.addTweet, name='add-tweet'),
]