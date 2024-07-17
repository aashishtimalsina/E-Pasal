from django.db import models
from users.models import User  # Adjust the import based on your User model's location

class Reaction(models.Model):
    likes = models.IntegerField()
    dislikes = models.IntegerField()

class Post(models.Model):
    title = models.CharField(max_length=255)
    body = models.TextField()
    tags = models.JSONField()
    reactions = models.OneToOneField(Reaction, on_delete=models.CASCADE)
    views = models.IntegerField()
    userId = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
