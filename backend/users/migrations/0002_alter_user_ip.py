# Generated by Django 5.0.7 on 2024-07-14 15:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='ip',
            field=models.GenericIPAddressField(blank=True, null=True),
        ),
    ]
