from django.db import models
from django.contrib.auth.models import User  # Adjust the import based on your User model's location

class Dimension(models.Model):
    width = models.FloatField()
    height = models.FloatField()
    depth = models.FloatField()

    def __str__(self):
        return f"{self.width}x{self.height}x{self.depth}"

class Review(models.Model):
    rating = models.IntegerField()
    comment = models.TextField()
    date = models.DateTimeField()
    reviewerName = models.CharField(max_length=255)
    reviewerEmail = models.EmailField()

    def __str__(self):
        return self.comment

class Meta(models.Model):
    createdAt = models.DateTimeField()
    updatedAt = models.DateTimeField()
    barcode = models.CharField(max_length=50)
    qrCode = models.URLField()

    def __str__(self):
        return self.barcode
    

class Product(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    category = models.CharField(max_length=100)
    price = models.FloatField()
    discountPercentage = models.FloatField()
    rating = models.FloatField()
    stock = models.IntegerField()
    tags = models.JSONField()
    brand = models.CharField(max_length=100)
    sku = models.CharField(max_length=50)
    weight = models.FloatField()
    dimensions = models.OneToOneField(Dimension, on_delete=models.CASCADE)
    warrantyInformation = models.CharField(max_length=255)
    shippingInformation = models.CharField(max_length=255)
    availabilityStatus = models.CharField(max_length=100)
    reviews = models.ManyToManyField(Review)
    returnPolicy = models.CharField(max_length=255)
    minimumOrderQuantity = models.IntegerField()
    meta = models.OneToOneField(Meta, on_delete=models.CASCADE)
    images = models.JSONField()
    thumbnail = models.URLField()

    def __str__(self):
        return self.title
