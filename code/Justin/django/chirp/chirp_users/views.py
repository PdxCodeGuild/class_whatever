from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.urls import reverse
from .forms import UserRegisterForm, UserUpdateForm, ProfileUpdateForm


def beg(beg):
    if request.method == 'POST':
        form = TrollBeggingSheet(request.POST)
        if form.is_valid():
            form.save()
            return redirect('phish')
    else:
        form = TrollBeggingSheet()
    return render(request, 'beg.html', {'form': form})
    
def details(beg, trollavatar):
    troll = get_object_or_404(troll, trollavatar = trollavatar)
    rants = troll.post_set.all().order_by('-incepted')
    return render(request, 'rants/index.html', {'posts': posts})