from django.contrib import admin
from django.urls import path, include
from appshortner import urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('appshortner/', include('appshortner.urls')),
]

