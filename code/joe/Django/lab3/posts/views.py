from django.shortcuts import render, get_object_or_404
from django.contrib.auth import authenticate, login
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.core.exceptions import ValidationError

from .models import Post


def index(request):
    return render(request, "index.html", {"all_posts": Post.objects.order_by("-created"), "error": request.GET.get("err", None), "username": request.user.get_username()})


def detail(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    context = {"post": post, "replies": post.post_set.order_by("created"), "replying_to": post.replying_to, "is_current": post.author == request.user, "username": request.user.get_username()}
    return render(request, "detail.html", context)


def create(request):
    if request.user.is_authenticated:
        context = {"username": request.user.get_username(), "error": request.GET.get("err", None)}
        try:
            replying_to = request.POST["replying_to"]
            context["replying_to"] = Post.objects.get(pk=replying_to)
        except KeyError:
            pass
        return render(request, "create.html", context)
    else:
        return HttpResponseRedirect(reverse("posts:index") + "?err=Must be logged in to post")


def actual_create(request):
    if request.user.is_authenticated:
        try:
            post = Post(author=request.user, content=request.POST["content"], replying_to=get_object_or_404(Post, pk=request.POST["replying_to"]))
        except KeyError:
            try:
                post = Post(author=request.user, content=request.POST["content"])
            except KeyError:
                return HttpResponseRedirect(reverse("posts:index") + "?err=Something went wrong")
        try:
            post.clean_fields()
        except ValidationError:
            return HttpResponseRedirect(reverse("posts:create") + "?err=Chirps cannot be over 128 characters!")
        post.save()
        return HttpResponseRedirect(reverse("posts:detail", args=[post.pk]))
    else:
        return HttpResponseRedirect(reverse("posts:create") + "?err=Something went wrong")


def actual_delete(request):
    post = get_object_or_404(Post, pk=request.POST["to_delete"])
    if request.user.is_authenticated and request.user == post.author:
        post.delete()
        return HttpResponseRedirect(reverse("users:profile", args=[request.user.username]))
    else:
        return HttpResponseRedirect(reverse("posts:index") + "?err=You can't delete that post!")