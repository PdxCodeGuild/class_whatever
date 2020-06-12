from django.shortcuts import render, redirect
from .forms import RegisterForm
from django.contrib import messages

def register(request):
    if(request.method == 'POST'):
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request,f'Account Created.')
            return redirect('login')
    
    else:
        form = RegisterForm()
    return render(request, 'accounts/register.html', {'form': form })



# Create your views here.
# don't forget about re-direct after the user signs-in
# import your form, registerForm NOT registraTIONform
# twitter does success messages! we will do success messages!
# register will take request!
# if post
# form takes in request.POST
# check validity
# SAVE for the love of god!
# success message about the account being created
# REDIRECT to login, i know it's annoying but you can't just go to profile, it's not right, it's not secure!
# otherwise, plan B!
# return them to the registration page and ask them nicely to do it again :-)
# the form is the context {'form':form}
# https: // docs.djangoproject.com/en/3.0/_modules/django/contrib/messages/api/
