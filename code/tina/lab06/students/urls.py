from django.urls import path, include
from django.views.generic import TemplateView

from . import views

app_name = 'students'
urlpatterns = [
    path('', TemplateView.as_view(template_name="home.html"), name='home'),
    path('students/student_list/', TemplateView.as_view(template_name="student_list.html"), name='student_list'),
    ]