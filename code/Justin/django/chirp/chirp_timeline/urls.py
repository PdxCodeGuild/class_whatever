from django.urls import path
from . import views

app_name = 'chirp_timeline'
urlpatterns = [
    path('', views.ledger, name='ledger'),
    path('vestal', views.vestal, name='vestal'),
    path('<int:rant_id>/tarnish', views.tarnish, name='tarnish'),
    path('<int:rant_id>/banish', views.banish, name='banish'),
]