# Generated by Django 3.0.5 on 2020-04-13 21:20

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0003_auto_20200410_1424'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='title',
            field=models.TextField(default=django.utils.timezone.now, max_length=100),
            preserve_default=False,
        ),
    ]