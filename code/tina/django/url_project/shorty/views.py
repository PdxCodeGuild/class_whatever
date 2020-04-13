from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.utils import timezone
import random, string
import re


from .models import URL

def index(request):
    url_hash = ''
    context = {
        'url_hash':url_hash
    }
    return render(request, 'shorty/index.html',context)

def add(request):
    length = 6
    url_hash = ''
    char = string.ascii_uppercase + string.digits + string.ascii_letters
    for x in range(length):
        url_hash += ''.join(random.choice(char))
    
    URL.objects.create(create_at=timezone.now(), full_url=request.POST['url'],url_hash=url_hash)
    return HttpResponseRedirect(reverse('shorty:results',args=(url_hash,)))



def redirect(request,newurl):
    short_url = URL.objects.get(url_hash=newurl)
    short_url.clicks +=1
    short_url.save()
    if not re.match('(?:http|https|ftp)://',short_url.full_url):
        return HttpResponseRedirect('http://{}'.format(short_url.full_url))
    return HttpResponseRedirect(short_url.full_url)


def results(request,short_id):
    return render(request,'shorty/index.html',{'shortlink':URL.objects.get(url_hash=short_id)})
