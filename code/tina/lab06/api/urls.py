from django.urls import path
from rest_framework.routers import SimpleRouter

from .views import StudentViewSet

router = SimpleRouter()

router.register('', StudentViewSet, basename='students')

urlpatterns = router.urls


# urlpatterns = [
#     path('', StudentViewSet.as_view()),
#     path('<int:pk>/',)YYYY
# ]
