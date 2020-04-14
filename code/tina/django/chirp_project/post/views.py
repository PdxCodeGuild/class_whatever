from django.shortcuts import render
from django.utils import timezone
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect 
from django.urls import reverse
from django.shortcuts import redirect
from django import forms
from django.views.generic import ListView, DetailView, View
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.urls import reverse_lazy

from .models import Post


class PostListView(ListView):
    model = Post
    template_name = 'post_list.html'


class PostDetailView(DetailView):
    model = Post
    template_name = 'post_detail.html'



class PostCreateView(LoginRequiredMixin, CreateView):
    model = Post
    template_name = 'post_new.html'
    fields = ['title','text','author']
    exclude = ('author') 
    

    def form_vaild(self, form): 
        form.instance.author=self.request.user
        return super().form_valid(form)


    



class PostUpdateView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Post
    template_name = 'post_edit.html'
    fields = ['title', 'text']

    def test_func(self):
        obj = self.get_object()
        return self.request.user == obj.author


class PostDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = Post
    template_name = 'post_delete.html'
    success_url = reverse_lazy('post:post_list')

    def test_func(self):
        obj = self.get_object()
        return self.request.user == obj.author