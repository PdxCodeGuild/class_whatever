from django.urls import path

from . import views

app_name = "posts"

urlpatterns = [
    path("", views.index, name="index"),
    path("<int:post_id>/", views.detail, name="detail"),
    path("post/", views.create, name="create"),
    path("newpost/", views.actual_create, name="actual_create")
]