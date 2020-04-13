from django.shortcuts import render,redirect
from django.http import HttpResponseRedirect
from .models import ShortUrl

import socket
# Create your views here.

import string
import random

class Shortener:
    # limits how long the generated string will be
    limit = 6
    
    def __init__(self, limit=None):
        self.limit = limit if limit is not None else 6

    def generate_link(self):
        alphabet = string.ascii_lowercase

        return ''.join(random.choice(alphabet) for i in range(self.limit))




def index(request):
    if request.method == 'GET':
        return render(request,"index.html")
    elif request.method == 'POST':
        data = request.POST

        random_string = Shortener().generate_link()
        link = ShortUrl(
            short_url = random_string,
            long_url = data.get('url')
        )
        link.save()

        url = "http://"+ str(request.META['HTTP_HOST'])+ "/" + random_string

        context = {
            "link" : url
        }
        
        return render(request,"index.html", context)

def route(request,short_url):
    if request.method == 'GET':
        try:
            linkObj = ShortUrl.objects.filter(short_url=short_url)[0]
        except Exception as e:
            return redirect("/")
        return HttpResponseRedirect(linkObj.long_url)

