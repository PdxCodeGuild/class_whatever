from django.shortcuts import render

# i learned that I am totally a views first kinda guy

tweets = [
    {'name': 'Nick', 'text': 'This is my first tweet'},
    {'name': 'Kasi', 'text': 'This is my first tweet'},
    {'name': 'Merritt', 'text': 'This is my first tweet'},
    {'name': 'Austen', 'text': 'This is my first tweet'},
    ]

def home(request):
    context = {'tweets' : tweets}
    return render(request, 'birdseed/home.html', context)


# Create your views here.
