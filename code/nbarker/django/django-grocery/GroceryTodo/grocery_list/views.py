from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def home(request):
    return render(request, 'grocery_list/dashboard.html')

def products(request):
    return render(request, 'grocery_list/products.html')

def customer(request):
    return render(request, 'grocery_list/customer.html')