from django.views.generic import ListView, DetailView


from .models import Chirp

class TwitListView(ListView):
    model = Chirp
    template_name = 'home.html'

class TwitDetailView(DetailView):
    model = Chirp
    template_name = 'detail.html'

