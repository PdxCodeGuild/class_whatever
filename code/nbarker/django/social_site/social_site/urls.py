'''NICK GET AWAY THIS IS NOT THE RIGHT ONE! to go the other URLs'''
"""social_site URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views
from accounts import views as acc_views
from django.conf import settings
from django.conf.urls.static import static





# give these appropriate names
# it's not django.config nick! why do you keep doing that?!

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('birdseed.urls')),
    path('login/', auth_views.LoginView.as_view(template_name = 'accounts/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name = 'accounts/logout.html'), name='logout'),
    path('register/', acc_views.register, name="register"),
    path('profile/', acc_views.profile, name="profile"),
    path('profileupdate/', acc_views.profileupdate, name="profileupdate"),
] 

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL ,document_root=settings.MEDIA_ROOT)


# the name allows us to reference it in the login.html
# login and logout are pretty much the same, remember!
# django.contrib.auth https://docs.djangoproject.com/en/3.0/topics/auth/
#customizing auth https://docs.djangoproject.com/en/3.0/topics/auth/customizing/
# https: // docs.djangoproject.com/en/3.0/howto/static-files/
