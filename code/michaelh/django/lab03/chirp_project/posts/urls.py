from django.urls import path
from . import views

app_name = 'posts' # for namespacing
urlpatterns = [
    path('', views.chirp_index, name='chirp_index'),
    path('post_new', views.post_new, name='post_new'),
    path('<int:post_id>/post_edit', views.post_edit, name='post_edit'),
    path('<int:post_id>/post_delete', views.post_delete, name='post_delete'),
]
