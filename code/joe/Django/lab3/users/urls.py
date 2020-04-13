from django.urls import path

from . import views

app_name = "users"

urlpatterns = [
    path("signup/", views.signup, name="signup"),
    path("signup_do/", views.actual_signup, name="actual_signup"),
    path("login/", views.chirp_login, name="login"),
    path("login_do/", views.actual_login, name="actual_login"),
    path("logout_do/", views.actual_logout, name="logout"),
    path("<str:profile_name>/", views.profile, name="profile"),
]