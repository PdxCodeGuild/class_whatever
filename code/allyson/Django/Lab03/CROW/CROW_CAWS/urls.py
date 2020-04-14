from django.urls import path
from . import views

# app_name = "CROW_CAWS"

# urlpatterns = [
#     path("", views.CROW_CAWS, name="CROW_CAWS"),
# ]


from django.urls import path
from . import views

app_name = "CROW"
urlpatterns = [
    path("", views.LoginView.as_view(), name="login"),
    path("feed", views.CROWListView.as_view(), name="feed"),
    path("CROW/<int:pk>/", views.CROWDetailView.as_view(), name="detail"),
    path("CROW/new/", views.CROWCreateView.as_view(), name="new"),
    path("CROW/<int:pk>/delete/", views.CROWDeleteView.as_view(), name="delete"),
]
