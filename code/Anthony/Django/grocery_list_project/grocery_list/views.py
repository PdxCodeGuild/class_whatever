from django.shortcuts import get_object_or_404, render
from django.template import loader
from .models import GroceryItem
from django.utils import timezone
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse





def index(request):
    context = {
    "incomplete_items": GroceryItem.objects.filter(completed= False),
    "complete_items": GroceryItem.objects.filter(completed = True)
}
    return render(request, 'grocery_list/user.html', context)

def add(request):
# this answer is generated from the input field in my form on index.html
    user_input = request.POST['text_field']
# input_answer = request.POST['text_field']
# its creating and adding whatever the user types in and adding it to the Grocery list and the time it was published
    GroceryItem.objects.create(item = user_input, created_date= timezone.now())
    return HttpResponseRedirect(reverse('grocery_list:user'))



def completed(request,completed_id):
    completed = get_object_or_404(GroceryItem, pk=completed_id)
    completed.is_comp = True
    completed.comp_date = timezone.now()
    completed.save()

def delete(request):
    delete_item = GroceryItem.objects.filter(completed=True)
    for items in delete_item:
        items.delete()
    return HttpResponseRedirect(reverse('grocery_list:user'))


    







