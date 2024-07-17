from rest_framework import serializers
from .models import Product, Dimension, Review, Meta

class DimensionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dimension
        fields = ['width', 'height', 'depth']

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['rating', 'comment', 'date', 'reviewerName', 'reviewerEmail']

class MetaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meta
        fields = ['createdAt', 'updatedAt', 'barcode', 'qrCode']

class ProductSerializer(serializers.ModelSerializer):
    dimensions = DimensionSerializer()
    reviews = ReviewSerializer(many=True)
    meta = MetaSerializer()
    images = serializers.ListField(child=serializers.URLField())
    tags = serializers.ListField(child=serializers.CharField())
    
    class Meta:
        model = Product
        fields = [
            'id', 'title', 'description', 'category', 'price', 'discountPercentage',
            'rating', 'stock', 'tags', 'brand', 'sku', 'weight', 'dimensions',
            'warrantyInformation', 'shippingInformation', 'availabilityStatus', 
            'reviews', 'returnPolicy', 'minimumOrderQuantity', 'meta', 'images', 'thumbnail'
        ]
