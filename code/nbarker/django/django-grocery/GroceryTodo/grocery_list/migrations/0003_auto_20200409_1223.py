# Generated by Django 3.0.5 on 2020-04-09 19:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('grocery_list', '0002_auto_20200408_1616'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='groceryitem',
            name='updated',
        ),
        migrations.AddField(
            model_name='groceryitem',
            name='completed_date',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]