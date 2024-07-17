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
            name='Recipe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('ingredients', models.JSONField()),
                ('instructions', models.JSONField()),
                ('prepTimeMinutes', models.IntegerField()),
                ('cookTimeMinutes', models.IntegerField()),
                ('servings', models.IntegerField()),
                ('difficulty', models.CharField(max_length=50)),
                ('cuisine', models.CharField(max_length=50)),
                ('caloriesPerServing', models.IntegerField()),
                ('tags', models.JSONField()),
                ('image', models.URLField()),
                ('rating', models.FloatField()),
                ('reviewCount', models.IntegerField()),
                ('mealType', models.JSONField()),
                ('userId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.user')),
            ],
        ),
    ]