from django.shortcuts import render, get_object_or_404
from django.contrib.auth import authenticate, login
from django.http import HttpResponseRedirect
from django.urls import reverse

from .models import Post


def index(request):
    return render(request, "index.html", {"all_posts": Post.objects.order_by("-created")})


def detail(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    context = {"post": post, "replies": post.post_set.order_by("-created"), "replying_to": post.replying_to}
    return render(request, "detail.html", context)


def create(request):
    if request.user.is_authenticated:
        context = {}
        try:
            replying_to = request.POST["replying_to"]
            context["replying_to"] = replying_to
        except KeyError:
            pass
        return render(request, "create.html", context)
    else:
        pass # redirect to login page


def actual_create(request):
    if request.user.is_authenticated:
        try:
            post = Post(author=request.user, content=request.POST["content"], replying_to=get_object_or_404(Post, pk=request.POST["replying_to"]))
        except KeyError:
            try:
                post = Post(author=request.user, content=request.POST["content"])
            except KeyError:
                return render(request, "posts:index", {"error": "Something went wrong"})
        post.save()
        return HttpResponseRedirect(reverse("posts:detail", args=[post.pk]))
    else:
        return render(request, "posts:create", {"error": "Something went wrong"})


def actual_delete(request):
    if request.user.is_authenticated and request.user == get_object_or_404(Post, pk=request.POST["to_delete"]).author:
        pass #delete and redirect to user page
    else:
        pass # error message