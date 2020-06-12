import random
import string
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import Urls

# This was really difficult!  Creating an input that makes 3 entries in the DB at once, it logs the URL input that was entered, it makes a primary_keyID as the short_id, and a 


def index(request):
    all_url_items = Urls.objects.all()
    return render(request, 'shortener.html',
    {'all_urls': all_url_items})
    

def create_short_url(request):
    return HttpResponse("AJ49L3")

    def __str__(self):
        return self.url

# this would have been so difficult a while ago!
def randomString(stringLength=6):
    letters = string.ascii_lowercase
    return ''.join(random.choice(letters) for i in range(stringLength))
    
def shorten_url(request):
    url = request.POST.get("url", '')
    if not (url == ''):
        short_id = get_short_code()
        b = Urls(short_id=short_id)
        b.save()

def redirectOriginal(request, short_id):
    url = get_object_or_404(Urls, pk=short_id)
    url.count += 1
    url.save()
    return HttpResponseRedirect(url.httpurl)
