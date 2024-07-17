from django.db import models
from users.models import User  # Adjust the import based on your User model's location
from posts.models import Post  # Adjust the import based on your Post model's location

class Comment(models.Model):
    body = models.TextField()
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    likes = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f'Comment by {self.user.username} on {self.post.title}'
