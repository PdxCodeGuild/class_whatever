from django.shortcuts import render

from django.shortcuts import render, reverse, redirect
from django.http import HttpResponse, HttpResponseRedirect
from .models import Shrink
import string
import random


def generate_code():
    notes = string.ascii_lowercase + string.ascii_uppercase
    cords = string.digits

    options = notes + cords
    code = ""

    for x in range(5):
        code += random.choice(options)
    return code


def index(request):
    URLShrink = Shrink.objects.all()
    domain = request.META["HTTP_HOST"]
    context = {
        "URLShrink": URLShrink,
        "domain": domain,
    }
    return render(request, "URLShrink_App/squish.html", context)


def save_url(request):
    url = request.POST["longUrl"]
    code = generate_code()
    new_url = Shrink(URL=url, code=code,)
    new_url.save()
    return HttpResponseRedirect(reverse("URLShrink_App:index"))


def redirect_url(request, code):
    links = Shrink.objects.get(code=code)
    return redirect(links.URL)
