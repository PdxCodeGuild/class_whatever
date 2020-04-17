from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from django.views import generic
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

def user_signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    else:
        form = UserCreationForm()
    return render(request, 'user_signup.html', {'form': form})

def user_detail(request, username):
    author = get_object_or_404(User, username = username)
    posts = author.post_set.all().order_by('-created_date')
    return render(request, 'posts/chirp_index.html', {'posts': posts})