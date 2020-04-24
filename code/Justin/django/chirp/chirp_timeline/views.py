from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect, HttpResponseForbidden
from django.utils import timezone
from django.urls import reverse
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required
from .models import Rants
from django import forms

class AffixSheet(forms.ModelForm):

    class Meta:
        model = Rants
        fields = ('spitfire', 'avatar')

def ledger(request):
    rants= Rants.objects.filter(incepted__lte=timezone.now()).order_by('-incepted')
    return render(request, '/Users/pizzaboynizza/PycharmProjects/class_whatever/code/Justin/django/chirp/chirp_timeline/templates/chirp_timeline/ledger.html', {'rants': rants})


@login_required
def vestal(request):
    if request.method == 'POST':
        form = AffixSheet(request.POST, request.FILES) 
        if form.is_valid():
            spitfire = form.cleaned_data.get('spitfire')
            avatar = form.cleaned_data.get('avatar')
            ranter = request.user
            incepted = timezone.now()
            rant = Rants.objects.create(spitfire=spitfire, avatar=avatar, ranter=ranter, incepted=incepted) 
            rant.save()
            return redirect('rants:ledger')
    else:
        form = AffixSheet()
    return render(request, 'chirp_timeline/vestal.html', {'form': form}) 


def tarnish(request, rant_id):
    ranter = request.user
    rant = get_object_or_404(Rants, pk = rant_id)
    if rant.ranter == ranter:
        if request.method == 'POST':
            form = AffixSheet(request.POST, request.FILES) 
            if form.is_valid():
                spitfire = form.cleaned_data.get('spitfire')
                avatar = form.cleaned_data.get('avatar')
                rant.spitfire = spitfire
                rant.avatar = avatar
                rant.tarnish = timezone.now()
                rant.save()
                return redirect('chirp_timeline:ledger')
        else:
            form = AffixSheet()
        return render(request, 'rants/tarnish.html', {'form': form}) 
    return HttpResponseForbidden('403 Forbidden')

def banish(request, rant_id):
    ranter = request.user
    rant = get_object_or_404(Rants, pk = rant_id)
    if rant.ranter == ranter:
        rant.banish()
        return HttpResponseRedirect(reverse('rants:ledger'))
    return HttpResponseForbidden('403 Forbidden')