# Generated by Django 5.0.7 on 2024-07-14 13:04

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField(max_length=255)),
                ('city', models.CharField(max_length=100)),
                ('state', models.CharField(max_length=100)),
                ('stateCode', models.CharField(max_length=10)),
                ('postalCode', models.CharField(max_length=20)),
                ('lat', models.FloatField()),
                ('lng', models.FloatField()),
                ('country', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Bank',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cardExpire', models.CharField(max_length=10)),
                ('cardNumber', models.CharField(max_length=20)),
                ('cardType', models.CharField(max_length=20)),
                ('currency', models.CharField(max_length=10)),
                ('iban', models.CharField(max_length=34)),
            ],
        ),
        migrations.CreateModel(
            name='Crypto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('coin', models.CharField(max_length=50)),
                ('wallet', models.CharField(max_length=100)),
                ('network', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Hair',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('color', models.CharField(max_length=50)),
                ('type', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('department', models.CharField(max_length=100)),
                ('name', models.CharField(max_length=100)),
                ('title', models.CharField(max_length=100)),
                ('address', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='company_address', to='users.address')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(max_length=100)),
                ('lastName', models.CharField(max_length=100)),
                ('maidenName', models.CharField(max_length=100)),
                ('age', models.IntegerField()),
                ('gender', models.CharField(max_length=10)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(max_length=20)),
                ('username', models.CharField(max_length=100)),
                ('password', models.CharField(max_length=100)),
                ('birthDate', models.DateField()),
                ('image', models.URLField()),
                ('bloodGroup', models.CharField(max_length=3)),
                ('height', models.FloatField()),
                ('weight', models.FloatField()),
                ('eyeColor', models.CharField(max_length=50)),
                ('ip', models.GenericIPAddressField()),
                ('macAddress', models.CharField(max_length=17)),
                ('university', models.CharField(max_length=255)),
                ('ein', models.CharField(max_length=15)),
                ('ssn', models.CharField(max_length=11)),
                ('userAgent', models.CharField(max_length=255)),
                ('role', models.CharField(max_length=50)),
                ('address', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='users.address')),
                ('bank', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='users.bank')),
                ('company', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='users.company')),
                ('crypto', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='users.crypto')),
                ('hair', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='users.hair')),
            ],
        ),
    ]
