# Second attempt
  
# from django.contrib import admin
# from django.urls import path, include


# Attempt three

# urlpatterns = patterns('',
#     url(r'^$', 'url_shortener_app.views.home'),
#     url(r'^(?P<id>[a-zA-Z0-9])$', 'url_shortener_app.views.link'),
#     url(r'^(?P<id>[a-zA-Z0-9])/stats$', 'url_shortener_app.views.stats'),


# from django.urls import path
# from . import views

# app_name= 'url_shortener_app'

# urlpatterns=[
#     path('', views.index, name='index'),
#     path('generate/', views.generate, name='generate'),
#     path('<str:code>/', views.redirect, name='redirect')

from django.urls import path

from . import views

app_name = "url_shortener_app"

urlpatterns = [
    path("", views.index, name="index"),
    path("shorten_url/", views.shorten_url, name="shorten_url"),
    path("get_short_code/<str:transmit>/", views.get_short_code, name="get_short_code"),
    path("<str:new>/", views.redirect, name="redirect"),
]