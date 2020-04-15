# Second attempt
# from tiny_link import models
# from django.shortcuts import render_to_response
# from django.template import RequestContext

# from django.shortcuts import redirect, get_object_or_404
# from django.db.models import F

mport random
import string
import json
from url_shortener_app.models import Url
from django.http import HttpResponseRedirect, HttpResponse
from django.conf import settings
from django.template.context_processors import csrf
from django.shortcuts import render, get_object_or_404

# def index(request):
#     return render(request, 'url_shortener_app/index.html', context=None)

def index(request):
    c = {}
    c.update(csrf(request))
    return render(request, 'djurl/index.html', c)

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

def redirect_original(request, short_id):
    # get object, if not found return 404 error
    url = get_object_or_404(Url, pk=short_id)
    url.count += 1
    url.save()
    return HttpResponseRedirect(url.httpurl)

# def link(request, id):
#    db_id = models.Link.deocde_id(id)
#    link_db = get_object_or_404(models.Link, id=db_id)
#    models.Link.objects.filter(id=db_id).update(hits=F('hits')+1)
#    return redirect(link_db.link)

def shorten_url(request):
    url = request.POST.get("url", '')
    if not (url == ''):
        try:
            url_present = Url.objects.get(httpurl=url)
            short_id = url_present.short_id
        except (Url.DoesNotExist):
            short_id = get_short_code()
        b = Url(httpurl=url, short_id=short_id)
        b.save()

        response_data = {}
        response_data['url'] = settings.SITE_URL + "/" + short_id
        return HttpResponse(json.dumps(response_data),
                            content_type="application/json")
    return HttpResponse(json.dumps({"error": "error occurs"}),
                        content_type="application/json")

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
    
def get_short_code():
    length = 6
    char = string.ascii_uppercase + string.digits + string.ascii_lowercase
    # if the randomly generated short_id is used then generate next
    while True:
        short_id = ''.join(random.choice(char) for x in range(length))
        try:
            temp = Url.objects.get(pk=short_id)
            return temp
        except:
            return short_id

# from django.shortcuts import render

# for n in range (length) :
#         short_url += random. (characters)
#     new = ShortUrl.objects.create(short_url= ,long_url= )
#     print(new.short_url, new.id)
#     print(url_input)
#     return HttpResponseRedirect(reverse('url_shortner_app:results', args=(short_url,)))










        



