
from django.core.management.base import BaseCommand, CommandError
from url_shortener_app.models import url_shortener_code

class Command(BaseCommand):
    help = 'Refreshes all url_shortener_code shortcodes'

    def addarguments(self, parser):
        parser.addargument('items', type=int)

    def handle(self, *args, **options):
        print(options)
        return url_shortener_code.objects.refresh(items=options('items'))