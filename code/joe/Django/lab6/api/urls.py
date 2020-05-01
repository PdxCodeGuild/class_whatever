from django.urls import path

from . import views

app_name = "api"
urlpatterns = [
    path("", views.StudentListCreate.as_view(), name="list"),
    path("<int:pk>", views.StudentDetail.as_view(), name="detail")
]