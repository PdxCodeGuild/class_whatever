import os
from django.core.wsgi import get_wsgi_application
from dj_static import Cling

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "url_shortener_app.settings")

application = Cling(get_wsgi_application())