from django.urls import path
from . import views

app_name = 'library_app' # for namespacing
urlpatterns = [
    path('index', views.index, name='index'),
    path('<int:book_id>/check_in', views.check_in, name='check_in'),
    path('<int:book_id>/check_out', views.check_out, name='check_out'),]