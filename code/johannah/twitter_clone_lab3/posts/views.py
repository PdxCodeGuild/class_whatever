from django.shortcuts import render
# from django.urls import reverse_lazy, reverse
from django.views import generic
from django.contrib.auth.forms import UserCreationForm
from posts.models import Post
from users.forms import PostForm

# Create your views here.

def home(request):
    text_input = request.POST.get('text')
    date_published_input = request.POST.get('date_published')
    # Post.objects.create(item_name=item_name_input, quantity_min=quantity_min_input)
    items = Post.objects.all()
    context = {'content': items}
    return render(request, 'home.html', context)


def addTweet(request):
    if request.method == 'POST':
        form = PostForm(request.POST or None) 
        if form.is_valid(): 
            form.save()
            posts = Post.objects.all()
            return render(request, 'home.html', {'posts': posts})
    else:
        form_class = PostForm
    return render(request, "add-tweet.html", {
        'form': form_class,})