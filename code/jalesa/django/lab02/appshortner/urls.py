from django.urls import path
from . import views

app_name = "appshortner"
urlpatterns = [
    path('', views.index, name='index'),
    path('user_input/', views.user_input, name='user_input'),
    path('results/<str:new>', views.results, name='results'),
]