from django.urls import path
from . import views

app_name = 'posts' # for namespacing
urlpatterns = [
    path('', views.chirp_index, name='chirp_index'),
    path('post_new', views.post_new, name='post_new'),
    # path('add', views.add, name='add'),
]
