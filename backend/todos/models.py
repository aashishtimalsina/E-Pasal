from django.db import models
from users.models import User  # Assuming the User model is in the users app

class Todo(models.Model):
    todo = models.CharField(max_length=255)
    completed = models.BooleanField(default=False)
    userId = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.todo
