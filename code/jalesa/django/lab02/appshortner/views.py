from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import Storage
from django.urls import reverse
import random
import string

def index(request):
    # variable_name = Storage from models
    storage = Storage.objects.all()

    context={
        'storage':storage
    }
    return render(request,'appshortner/index.html', context)

# app is not showing up in localhost/admin/


def user_input(request):
    new =''
    urlinput= request.POST['long']
    for x in range(10):
        new += random.choice(string.ascii_letters)
    new2 = Storage.objects.create(shorturl=new,longurl=urlinput)
    print(new)
    return HttpResponseRedirect(reverse('appshortner:results', args=(new,)))

def results(request, new):
    return render(request, 'appshortner/index.html',{'home':Storage.objects.get(shorturl=new)})




       
# now create the short url
# look up objects.create

