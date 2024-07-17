from django.db import models
from users.models import User  # Assuming the User model is in the users app

class Recipe(models.Model):
    name = models.CharField(max_length=255)
    ingredients = models.JSONField()
    instructions = models.JSONField()
    prepTimeMinutes = models.IntegerField()
    cookTimeMinutes = models.IntegerField()
    servings = models.IntegerField()
    difficulty = models.CharField(max_length=50)
    cuisine = models.CharField(max_length=50)
    caloriesPerServing = models.IntegerField()
    tags = models.JSONField()
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.URLField()
    rating = models.FloatField()
    reviewCount = models.IntegerField()
    mealType = models.JSONField()

    def __str__(self):
        return self.name
