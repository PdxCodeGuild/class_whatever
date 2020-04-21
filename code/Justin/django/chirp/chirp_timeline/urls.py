from django.urls import path
from . import views

app_name = 'chirp_timeline'
urlpatterns = [
    path('', views.ledger, name='ledger'),
    path('vestal', views.affix, name='affix'),
    path('<int:post_id>/tarnish', views.tarnish, name='tarnish'),
    path('<int:post_id>/banish', views.banish, name='banish'),
]