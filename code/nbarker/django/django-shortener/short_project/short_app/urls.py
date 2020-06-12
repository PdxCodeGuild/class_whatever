from django.urls import path
from . import views


urlpatterns = [
    path('shortener.html', views.index, name="home"),
    path('create_short_url/', views.create_short_url, name="create_short_url"),
    path('result/<str:shortened_id>/', views.randomString, name='randomString'),
    path('<str:self.url>/', views.redirectOriginal, name='redirect')
]
