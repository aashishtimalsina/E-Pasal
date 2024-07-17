from django.db import models
from users.models import User  # Adjust the import based on your User model's location

class CartProduct(models.Model):
    title = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField()
    total = models.DecimalField(max_digits=10, decimal_places=2)
    discountPercentage = models.DecimalField(max_digits=5, decimal_places=2)
    discountedTotal = models.DecimalField(max_digits=10, decimal_places=2)
    thumbnail = models.URLField()

    def __str__(self):
        return self.title

class Cart(models.Model):
    products = models.ManyToManyField(CartProduct)
    total = models.DecimalField(max_digits=10, decimal_places=2)
    discountedTotal = models.DecimalField(max_digits=10, decimal_places=2)
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    totalProducts = models.IntegerField()
    totalQuantity = models.IntegerField()

    def __str__(self):
        return f'Cart {self.id} for user {self.userId.username}'
