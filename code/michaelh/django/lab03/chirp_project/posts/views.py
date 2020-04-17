from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect, HttpResponseForbidden
from django.utils import timezone
from django.urls import reverse
# from django.shortcuts import redirect, assign_perm
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
    if request.method == 'POST':
        form = PostForm(request.POST, request.FILES) 
        if form.is_valid():
            text = form.cleaned_data.get('text')
            image = form.cleaned_data.get('image')
            author = request.user
            created_date = timezone.now()
            post = Post.objects.create(text=text, image=image, author=author, created_date=created_date) 
            # assign_perm('change_post', author, post)            
            # assign_perm('delete_post', author, post)
            post.save()
            return redirect('posts:chirp_index')
    else:
        form = PostForm()
    return render(request, 'posts/post_new.html', {'form': form}) 

def post_edit(request, post_id):
    user = request.user
    post = get_object_or_404(Post, pk = post_id)
    # if user.has_perm('posts.change_post', post):
    if post.author == user:
        if request.method == 'POST':
            form = PostForm(request.POST, request.FILES) 
            if form.is_valid():
                text = form.cleaned_data.get('text')
                image = form.cleaned_data.get('image')
                post.text = text
                post.image = image
                post.edited = timezone.now()
                post.save()
                return redirect('posts:chirp_index')
        else:
            form = PostForm()
        return render(request, 'posts/post_edit.html', {'form': form}) 
    return HttpResponseForbidden('403 Forbidden')

def post_delete(request, post_id):
    user = request.user
    post = get_object_or_404(Post, pk = post_id)
    # if user.has_perm('posts.delete_post', post):
    if post.author == user:
        post.delete()
        return HttpResponseRedirect(reverse('posts:chirp_index'))
    return HttpResponseForbidden('403 Forbidden')

