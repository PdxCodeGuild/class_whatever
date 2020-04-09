from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse('Welcome to my Project')

# app is not showing up in localhost/admin/