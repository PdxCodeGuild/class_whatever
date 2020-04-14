from django.shortcuts import render
import datetime
from django.shortcuts import render, redirect, get_object_or_404
from django.urls import reverse
from django.contrib import messages
from django.http import HttpResponse, HttpResponseRedirect
from django.conf import settings
from django.contrib.auth.decorators import login_required

from .models import Post

@login_required
def index(request):
    
    posts = Post.objects.all()
    context = {
        'posts': posts
    }
    return render (request,'index.html', context)
@login_required
def post(request, post_id):
    
    post = get_object_or_404(Post, pk=post_id)
    context = {
        'post': post
    }
    return render(request, 'index.html', context)
    
@login_required
def add(request):
    if request.method == 'POST':
        post_text =request.POST.user
        pub_date = datetime.datetime.now()
        new_post =POST(post_text=post_text,ownner=owner,pub_date=pub_date)
        new_post.save()
        messages.success(request,'Post Added',extra_tags='alert-success')
        return redirect('index.html')

    else:
        context = {}
        return render (request, 'index.html', context)




