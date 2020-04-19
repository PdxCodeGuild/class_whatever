# Second attempt
# from tiny_link import models
# from django.shortcuts import render_to_response
# from django.template import RequestContext

# from django.shortcuts import redirect, get_object_or_404
# from django.db.models import F

import random
import string
from .models import url
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render, get_object_or_404
from django.db import IntegrityError
from django.urls import reverse

# def index(request):
#     return render(request, 'url_shortener_app/index.html', context=None)

def index(request):
    return render(request, "url_shortener_app/index.html")

# def home(request):
#    short_url = None
#    if request.method == "POST":
#       link_db = models.Link()
#       link_db.link = request.POST.get("url")
#       link_db.save()
#       short_url = request.build_absolute_uri(link_db.get_short_id())
#    return render_to_response("index.html",
#                              {"short_url":short_url},
#                              context_instance=RequestContext(request))

def shorten_url(request):
    lengthened=request.POST['url']
    code=''.join(random.choices(string.ascii_lowercase+string.digits, k=7))
    new=url.objects.create(code=code,long=lengthened)
    print(new)
    return render(request,'url_shortener_app/generate.html',context={'code': code})

def redirect(request, new):
    code = url.objects.get(code=new)
    code.clicks +=1
    code.save()
    # if not re.match('(?:http|https|ftp)://',code.long):
    #     return HttpResponseRedirect('http://{}'.format(code.long))
    return HttpResponseRedirect(code.long)


# def link(request, id):
#    db_id = models.Link.deocde_id(id)
#    link_db = get_object_or_404(models.Link, id=db_id)
#    models.Link.objects.filter(id=db_id).update(hits=F('hits')+1)
#    return redirect(link_db.link)


    # url_code = request.POST['url']
    # while True:  
    #     url_code= ''
    #     for i in range(6):
    #         url_code_code += random.choice(string.ascii_lowercase+string.digits)
    #     url_code = url.objects.filter(code__exact = url_code)
    #     if not url_code:  
    #         break  
    # url_code = url.objects.create(url = url_code_url, code = url_code)
    # return HttpResponseRedirect(reverse('results', args = (url_code.short,)))
    # message = {}
    # try:
    #     temp = url(long= request.POST["link"], short=new())
    #     temp.save()
    #     message["success"] = temp
    # except KeyError:
    #     message["messages"] = "Submission error"
    # except IntegrityError:
    #     message["messages"] = f"That link already exists!"
    #     message["success"] = url.objects.get(long=request.POST['link'])

def new(): 
    code = "".join([random.choice(string.ascii_letters + string.digits) for unused in range(0, 6)])
    while url.objects.filter(short=code).exists(): # must be a unique code
        code = "".join([random.choice(string.ascii_letters + string.digits) for unused in range(0, 6)])
    return 


# def generate(request):
#     code=''.join(random.choices(string.ascii_lowercase+string.digits, k=7))
#     new_url=Url(code=code,long_url=request.POST.get('url'))
#     print(new_url)
#     new_url.save()
#     return render(request,'url_shortener_app/generate.html',context={'code': code})

# def redirect(request, code):
#     found_url = get_object_or_404(Url, code=code)
#     try:
#         click= Click(ip=request.META['REMOTE_ADDR'], click_url=found_url, referral=request.META['HTTP_REFERER'])
#         click.save()
#     except:
#         click= Click(ip=request.META['REMOTE_ADDR'], click_url=found_url, referral='none')
#         click.save()
#     print(found_url.click_set.count())

#     return HttpResponseRedirect(f"{found_url}")
    
def get_short_code(request, transmit):
    link = get_object_or_404(url, short=transmit)
    users = data.objects.filter(link_clicked__exact=link).order_by("ip", "amount")
    return render(request, "url_shortener_app/get_short_code.html", context={"users": users, "link": link})

# from django.shortcuts import render

# for n in range (length) :
#         short_url += random. (characters)
#     new = ShortUrl.objects.create(short_url= ,long_url= )
#     print(new.short_url, new.id)
#     print(url_input)
#     return HttpResponseRedirect(reverse('url_shortner_app:results', args=(short_url,)))










        



