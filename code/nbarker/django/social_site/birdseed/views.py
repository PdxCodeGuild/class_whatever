from django.shortcuts import render
from .models import tweet
from django.views.generic import ListView, CreateView,UpdateView,DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin


class TweetListView(LoginRequiredMixin,ListView):
    model = tweet
    template_name = 'birdseed/home.html'
    ordering = ['-datetime']

#specify the model
#template name
#order them, you used 'datetime'

class TweetCreateView(LoginRequiredMixin,CreateView):
    model = tweet
    fields = ['text']
    success_url = '/'

    def form_valid(self,form):
        form.instance.uname = self.request.user
        return super().form_valid(form)


class TweetUpdateView(LoginRequiredMixin,UserPassesTestMixin,UpdateView):
    model = tweet
    fields = ['text']
    success_url = '/'

    def form_valid(self, form):
        form.instance.uname = self.request.user
        return super().form_valid(form)

    def test_func(self):
        tweet = self.get_object()
        if(self.request.user == tweet.uname):
            return True
        return False


class TweetDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = tweet
    success_url = '/'

    def form_valid(self, form):
        form.instance.uname = self.request.user
        return super().form_valid(form)

    def test_func(self):
        tweet = self.get_object()
        if(self.request.user == tweet.uname):
            return True
        return False

# needs some kind of text, redirect is on the backend, do success url
# fields: ['text'] --- this was designated in models.py
# i learned that I am totally a views first kinda guy
# decorator goes here, this is where the homepage is being rendered from
# decorators are amazing
# mixins are amazing
# https: // www.pythonforbeginners.com/super/working-python-super-function
# @login_required
# def home(request):
#     context = {'tweets' : tweet.objects.all}
#     return render(request, 'birdseed/home.html', context)


# Create your views here.
