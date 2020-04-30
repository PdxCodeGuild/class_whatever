from django.urls import path
# from .views import PostList, PostDetail
from rest_framework.routers import SimpleRouter

from .views import PostViewSet

router = SimpleRouter()
router.register('posts', PostViewSet, base_name='posts')

urlpatterns = router.urls

# urlpatterns = [
#     path('<int:pk>/', PostDetail.as_view()),
#     path('', PostList.as_view()),
# ]