# Generated by Django 3.0.5 on 2020-04-10 21:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0002_auto_20200410_1418'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='title',
        ),
        migrations.AlterField(
            model_name='post',
            name='text',
            field=models.TextField(max_length=150),
        ),
    ]
