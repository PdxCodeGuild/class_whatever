from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.views import generic
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404

class SignupView(generic.CreateView):
    form_class = UserCreationForm
    template_name = ''
    success_url = reverse_lazy('') # where we are redirected if successful

class UserProfileView(generic.DetailView):
    model = User
    template_name = ''

    def get_object(self):
        return get_object_or_404(User, username=self.kwargs['username'])
