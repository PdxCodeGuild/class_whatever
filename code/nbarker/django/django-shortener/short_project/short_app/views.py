import random
import string
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import Urls
from django.contrib import messages

# This was really difficult!  Creating an input that makes 3 entries in the DB at once, it logs the URL input that was entered, it makes a primary_keyID as the short_url, and a 


def index(request):
    all_url_items = Urls.objects.all()
    return render(request, 'shortener.html',
    {'all_urls': all_url_items})
    

def create_short_url():
    short_list_char = '0123456789'+string.ascii_letters
    return ''.join[random.choice(short_list_char)for i in range (10)]

# this would have been so difficult a while ago!
def get_form(request):
    if request.method == "POST":
        form=URLDATAFORM(request.POST)
        if form.is_valid():
            fullurl=formcleaned_data['EnterURL']
            fullurladj=appendPrefix(fullurl)
            ID=basedecode(fullurladj.lower())
            messages.success(request, '{}'.formate(checkIDExists(ID)))
    form =URLDATAFORM()
    return render(request, 'shortener/form.html', {'form':form}).join(random.choice(letters) for i in range(stringLength))
    
def shorten_url(request):
    url = request.POST.get("url", '')
    if not (url == ''):
        short_url = get_short_code()
        b = Urls(short_url=short_url)
        b.save()

def redirectOriginal(request, short_url):
    url = get_object_or_404(Urls, pk=short_url)
    url.count += 1
    url.save()
    return HttpResponseRedirect(url.httpurl)
