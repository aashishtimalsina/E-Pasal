import random
import json
from django.core.management.base import BaseCommand
from products.models import Product, Dimension, Meta
from django.utils import timezone

class Command(BaseCommand):
    help = 'Create 50 random products with the same category'

    def handle(self, *args, **kwargs):
        categories = ['Watch']
        brands = ['BrandA', 'BrandB', 'BrandC']
        category = random.choice(categories)
        brand = random.choice(brands)
        
        # Loop to create 50 products
        for _ in range(10):
            # Ensure the Dimension model has the fields 'depth', 'width', and 'height'
            dimension = Dimension.objects.create(
                depth=random.uniform(10, 20), 
                width=random.uniform(10, 20), 
                height=random.uniform(1, 5)
            )
            
            # Ensure the Meta model has appropriate fields
            meta = Meta.objects.create(
                createdAt=timezone.now(),
                updatedAt=timezone.now(),
                barcode=f'BAR{random.randint(1000, 9999)}',
                qrCode=f'https://example.com/qrcode{random.randint(1000, 9999)}.png'
            )
            
            product = Product.objects.create(
                title=f'{category} {random.randint(1, 1000)}',
                description=f'Description for {category} {random.randint(1, 1000)}',
                category=category,
                price=round(random.uniform(100, 2000), 2),
                discountPercentage=round(random.uniform(5, 25), 2),
                rating=round(random.uniform(1, 5), 2),
                stock=random.randint(10, 100),
                tags=json.dumps(['tag1', 'tag2', 'tag3']),
                brand=brand,
                sku=f'SKU{random.randint(1, 1000)}',
                weight=round(random.uniform(1, 5), 2),
                dimensions=dimension,
                warrantyInformation='1 year warranty',
                shippingInformation='Ships in 3-5 business days',
                availabilityStatus='In Stock',
                returnPolicy='30 days return policy',
                minimumOrderQuantity=random.randint(1, 5),
                meta=meta,
                images=json.dumps(["https://images-cdn.ubuy.co.in/654b8e16333d0d5c3130b3e8-lige-mens-watches-waterproof-stainless.jpg", "https://images-cdn.ubuy.co.in/654b8e16333d0d5c3130b3e8-lige-mens-watches-waterproof-stainless.jpg"]),
                thumbnail="https://images-cdn.ubuy.co.in/654b8e16333d0d5c3130b3e8-lige-mens-watches-waterproof-stainless.jpg"
            )
            
            self.stdout.write(self.style.SUCCESS(f'Successfully created product: {product.title}'))
