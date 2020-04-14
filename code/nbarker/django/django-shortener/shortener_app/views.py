from django.shortcuts import render
from django.http import HttpResponseRedirect
from .models import Item_to_shorten

def shortenerView(request):
    return render(request, 'shortener_app.html')

def back_you_go(request, big_url):
    shortened_item = Item_to_shorten(big_url = request.POST['big_url'])
    shortened_item.save()
    return HttpResponseRedirect(request, 'shortened_url')



#take big URL ,shorten, save, redirect back to home?