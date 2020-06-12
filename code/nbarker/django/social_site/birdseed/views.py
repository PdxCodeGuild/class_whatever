from django.shortcuts import render
from .models import tweet
from django.contrib.auth.decorators import login_required

# i learned that I am totally a views first kinda guy
# decorator goes here, this is where the homepage is being rendered from
# decorators are amazing

@login_required
def home(request):
    context = {'tweets' : tweet.objects.all}
    return render(request, 'birdseed/home.html', context)


# Create your views here.
