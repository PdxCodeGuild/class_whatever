from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('groceryapp', '0002_auto_20180314_1033'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='grocerylist',
            name='grocery_items',
        ),
        migrations.AlterField(
            model_name='grocerylist',
            name='coupons',
            field=models.ManyToManyField(blank=True, to='groceryapp.Coupon'),
        ),
    ]