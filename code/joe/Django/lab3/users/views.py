from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate, logout
from django.shortcuts import get_object_or_404, render
from django.db import IntegrityError

def signup(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect(reverse("posts:index") + "?err=You are already logged in!")
    else:
        return render(request, "signup.html", {"error": request.GET.get("err", None)})

def actual_signup(request):
    try:
        new_user = User.objects.create_user(request.POST["username"], password=request.POST["password"])
        new_user.save()
        login(request, new_user)
    except KeyError:
        return HttpResponseRedirect(reverse("users:signup") + "?err=Something has gone horribly wrong")
    except IntegrityError:
        return HttpResponseRedirect(reverse("users:signup") + "?err=That Username already exists!")
    else:
        return HttpResponseRedirect(reverse("posts:index"))


def chirp_login(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect(reverse("posts:index") + "?err=You are already logged in!")
    else:
        return render(request, "login.html", {"error": request.GET.get("err", None)})

def actual_login(request):
    try:
        user = authenticate(username=request.POST["username"], password=request.POST["password"])
        if user:
            login(request, user)
        else:
            return HttpResponseRedirect(reverse("users:login") + "?err=Username or password is incorrect")
    except KeyError:
        return HttpResponseRedirect(reverse("users:login") + "?err=Something has gone horribly wrong")
    else:
        return HttpResponseRedirect(reverse("posts:index"))

def actual_logout(request):
    logout(request)
    return HttpResponseRedirect(reverse("posts:index"))

def profile(request, profile_name):
    user = get_object_or_404(User, username=profile_name)
    return render(request, "profile.html", {"profile": user, "all_chirps": user.post_set.order_by("-created"), "is_current": user == request.user, "username":  request.user.get_username()})