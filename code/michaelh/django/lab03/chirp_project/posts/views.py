from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.utils import timezone
from django.urls import reverse
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required

from .models import Post
from .forms import PostForm

def chirp_index(request):
    posts = Post.objects.filter(created_date__lte=timezone.now()).order_by('-created_date')
    return render(request, 'posts/chirp_index.html', {'posts': posts})

# def add(request):
#     text = request.POST['text']
#     Post.objects.create(author = request.user, text = text)
#     return HttpResponseRedirect(reverse('posts:chirp_index'))

@login_required
def post_new(request):
    if request.method == "POST":
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.published_date = timezone.now()
            post.save()
            return redirect('posts:chirp_index')
    else:
        form = PostForm()
    return render(request, 'posts/post_new.html', {'form': form}) 