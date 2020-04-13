from django.urls import path
from .views import PostListView, PostDetailView, PostCreateView, PostUpdateView, PostDeleteView
from . import views

app_name='chirp'

urlpatterns = [
    path('', PostListView.as_view(), name='index'),
    path('post/<int:pk>/', PostDetailView.as_view(), name='detail'),
    path('post/new/', PostCreateView.as_view(), name='create'),
    path('post/<int:pk>/update/', PostUpdateView.as_view(), name='update'),
    path('post/<int:pk>/delete/', PostDeleteView.as_view(), name='delete'),
    path('public/<str:author>/', views.public_profile, name='publicprofile'),
]