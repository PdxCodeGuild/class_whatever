# from django.shortcuts import render

from django.views.generic.edit import CreateView
from chirp.models import Tweet
class View(Create):
    model = Chirp
    fields = ['text']
    def form_valid(self, form):
        form.instance.user = self.request.user
        return super(Tweet, self).form_valid(form)
