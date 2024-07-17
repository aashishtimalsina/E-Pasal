# serializers.py
from rest_framework import serializers
from .models import Order, OrderItem

class OrderItemSerializer(serializers.Serializer):
    product_name = serializers.CharField()  # Ensure these fields match the model
    product_price = serializers.DecimalField(max_digits=10, decimal_places=2)  # Ensure these fields match the model
    quantity = serializers.IntegerField()

class OrderSerializer(serializers.Serializer):
    amount = serializers.DecimalField(max_digits=10, decimal_places=2)
    products = OrderItemSerializer(many=True)

    def create(self, validated_data):
        products_data = validated_data.pop('products')
        order = Order.objects.create(total_amount=validated_data['amount'])
        for product_data in products_data:
            OrderItem.objects.create(order=order, **product_data)
        return order
