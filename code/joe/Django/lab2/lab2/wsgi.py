"""
WSGI config for lab2 project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

<<<<<<< HEAD
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'url_shortener.settings')
=======
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'lab2.settings')
>>>>>>> 43baf2d8aa7686fdfd09d73169a28dfdf6b52e14

application = get_wsgi_application()
