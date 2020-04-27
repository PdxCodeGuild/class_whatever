from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.views import generic
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.urls import reverse
from django.contrib.auth.forms import UserCreationForm


def beseech(beseech):
    if beseech.method == 'POST':
        form = UserCreationForm(beseech.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    else:
        form = UserCreationForm()
    return render(beseech, 'beseech.html', {'form': form})
    
def details(beseech, trollavatar):
    ranter = get_object_or_404(User, trollavatar = trollavatar)
    spitfire = ranter.post_set.all().order_by('-incepted')
    return render(beseech, 'chirp_timeline/ledger.html', {'chirp_timeline': chirp_timeline})

# from django.shortcuts import render
# from django.contrib.auth.forms import UserCreationForm
# from django.urls import reverse_lazy
# from django.views import generic
# from django.contrib.auth.models import User
# from django.shortcuts import get_object_or_404

# class beseech(generic.CreateView):
#     form = UserCreationForm
#     template = 'beseech.html'
#     success = reverse_lazy('phish')

# class details(generic.DetailView):
#     model = User
#     template = 'details.html'

#     def get_object(self):
#         return get_object_or_404(User, username=self.kwargs['trollavatar'])