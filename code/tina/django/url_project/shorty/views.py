from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.utils import timezone
import random, string


from .models import URL

def index(request):
    url_hash = ''
    context = {
        'url_hash':url_hash
    }
    return render(request, 'shorty/index.html',context)

# def short_code():
#     length = 6
#     char = string.ascii_uppercase + string.digits + string.ascii_letters
#     while True:
#         short_id = ''.join(random.choice(char) for x in range(length))
#     return HttpResponseRedirect(reverse('shorty:index',args=(short_id,)))


def add(request):
    length = 6
    short_id = ''
    char = string.ascii_uppercase + string.digits + string.ascii_letters
    for x in range(length):
        short_id += ''.join(random.choice(char))
    print(short_id)
    URL.objects.create(create_at=timezone.now(), full_url=request.POST['url'],url_hash=short_id)
    return HttpResponseRedirect(reverse('shorty:results',args=(short_id,)))



def redirect(request):
    short_url = URL.object.get(hash_url='full_url')
    short_url.clicks +=1
    short_url.save()
    return HttpResponseRedirect(reverse('shorty:index', short_url))


def results(request,short_id):
    return render(request,'shorty/index.html', {'shortlink':URL.objects.get(url_hash=short_id)})
