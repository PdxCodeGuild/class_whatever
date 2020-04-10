from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import Post

def index(request):
    context={
        'posts': Post.objects.all()
    }
    return render(request, 'chirp/index.html', context)


