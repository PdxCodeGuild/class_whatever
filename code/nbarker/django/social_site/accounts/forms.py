from django import forms
from django.contrib.auth.models import User 
from django.contrib.auth.forms import UserCreationForm

# thank you django!
# registerForm is NOT registrationForm

class RegisterForm(UserCreationForm) :
    email = forms.EmailField()

    class Meta:
        model = User
        # make a list, order counts for the form
        fields = ['username', 'email', 'password1', 'password2']


# reusable form templates at the bottom https://docs.djangoproject.com/en/3.0/topics/forms/
