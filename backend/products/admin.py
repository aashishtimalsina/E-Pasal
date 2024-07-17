from django.contrib import admin
from .models import Dimension, Review, Meta, Product

class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'price', 'stock', 'availabilityStatus', 'rating')
    search_fields = ('title', 'category', 'brand')
    list_filter = ('category', 'brand', 'availabilityStatus')

admin.site.register(Dimension)
admin.site.register(Review)
admin.site.register(Meta)
admin.site.register(Product, ProductAdmin)
