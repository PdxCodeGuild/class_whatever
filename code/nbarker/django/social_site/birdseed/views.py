from django.shortcuts import render
from .models import tweet

# i learned that I am totally a views first kinda guy

def home(request):
    context = {'tweets' : tweet.objects.all}
    return render(request, 'birdseed/home.html', context)


# Create your views here.
