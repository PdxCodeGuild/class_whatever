# Second attempt

from django.conf.urls import patterns, include, url

  
from django.conf.urls import url
from . import views

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

urlpatterns = [
   url(r'^$', views.index, name='home'),

   url(r'^(?P<short_id>\w{6})$',
       views.redirect_original, name='redirect_original'),

   url(r'^makeshort/$', views.shorten_url, name='shorten_url'),