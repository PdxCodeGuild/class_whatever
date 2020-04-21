from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse

from .models import Book
# Create your views here.
def index(request):
    book_list = Book.objects.order_by('-title')
    return render(request, 'library_app/index.html', {'book_list':book_list})

def check_out(request, book_id):
    book = get_object_or_404(Book, pk = book_id)
    book.check_out()
    book.save()
    return HttpResponseRedirect(reverse('library_app:index'))

def check_in(request, book_id):
    book = get_object_or_404(Book, pk = book_id)
    book.check_in()
    book.save()
    return HttpResponseRedirect(reverse('library_app:index'))