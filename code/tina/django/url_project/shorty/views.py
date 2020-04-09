from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.utils import timezone
import random, string


from .models import URL

def index(request):
    return render(request, 'shorty/index.html')

def short_code():
    length = 6
    char = string.ascii_uppercase + string.digits + string.ascii_letters
    while True:
        short_id = ''.join(random.choice(char) for x in range(length))
    return short_id


def add(request):
    URL.objects.create(create_at=timezone.now(), full_url=request.POST['url'],url_hash=short_code())
    return HttpResponseRedirect(reverse('shorty:index'))


def short_url(request):
    url = request.POST.get('url')
    short_id = short_code()
    b = url(full_url=url, url_hash=short_id)
    b.save()

def redirect(request):
    short_url = URL.object.get(hash_url='full_url')
    short_url.clicks +=1
    short_url.save()
    return HttpResponseRedirect(reverse('shorty:index', short_url))