# Generated by Django 5.0.7 on 2024-07-14 13:21

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CartProduct',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('quantity', models.IntegerField()),
                ('total', models.DecimalField(decimal_places=2, max_digits=10)),
                ('discountPercentage', models.DecimalField(decimal_places=2, max_digits=5)),
                ('discountedTotal', models.DecimalField(decimal_places=2, max_digits=10)),
                ('thumbnail', models.URLField()),
            ],
        ),
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total', models.DecimalField(decimal_places=2, max_digits=10)),
                ('discountedTotal', models.DecimalField(decimal_places=2, max_digits=10)),
                ('totalProducts', models.IntegerField()),
                ('totalQuantity', models.IntegerField()),
                ('userId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.user')),
                ('products', models.ManyToManyField(to='carts.cartproduct')),
            ],
        ),
    ]
