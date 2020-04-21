from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect, HttpResponseForbidden
from django.utils import timezone
from django.urls import reverse
# from django.shortcuts import redirect, assign_perm
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required

from .models import Post
from .forms import PostForm

def ledger(request):
    posts = Post.objects.filter(created_date__lte=timezone.now()).order_by('-created_date')
    return render(request, 'posts/chirp_index.html', {'posts': posts})


@login_required
def affix(request):
    if request.method == 'POST':
        form = PostForm(request.POST, request.FILES) 
        if form.is_valid():
            spitfire = form.cleaned_data.get('spitfire')
            avatar = form.cleaned_data.get('avatar')
            ranter = request.user
            incepted = timezone.now()
            post = Post.objects.create(spitfire=spitfire, avatar=avatar, ranter=ranter, incepted=incepted) 
            post.save()
            return redirect('posts:chirp_index')
    else:
        form = PostForm()
    return render(request, 'posts/vestal.html', {'form': form}) 

def tarnish(request, post_id):
    user = request.user
    post = get_object_or_404(Post, pk = post_id)
    if post.ranter == user:
        if request.method == 'POST':
            form = PostForm(request.POST, request.FILES) 
            if form.is_valid():
                spitfire = form.cleaned_data.get('spitfire')
                avatar = form.cleaned_data.get('avatar')
                post.spitfire = spitfire
                post.avatar = avatar
                post.tarnish = timezone.now()
                post.save()
                return redirect('posts:ledger')
        else:
            form = PostForm()
        return render(request, 'posts/post_edit.html', {'form': form}) 
    return HttpResponseForbidden('403 Forbidden')

def banish(request, post_id):
    ranter = request.user
    rant = get_object_or_404(Post, pk = post_id)
    # if user.has_perm('posts.delete_post', post):
    if post.author == ranter:
        post.banish()
        return HttpResponseRedirect(reverse('posts:ledger'))
    return HttpResponseForbidden('403 Forbidden')