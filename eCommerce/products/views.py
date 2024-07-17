# views.py
from rest_framework import generics, views
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer
from django.urls import reverse

class ProductListView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        category = self.kwargs.get('category')
        if category:
            return Product.objects.filter(category=category)
        return Product.objects.all()

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        total = queryset.count()
        skip = 0  # or calculate based on request parameters if pagination is used
        limit = 30  # or set a fixed limit if pagination is used

        return Response({
            "products": serializer.data,
            "total": total,
            "skip": skip,
            "limit": limit
        })


class ProductDetailView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CategoryListView(views.APIView):
    def get(self, request, *args, **kwargs):
        categories = Product.objects.values_list('category', flat=True).distinct()
        base_url = request.build_absolute_uri('/')[:-1]  # Get the base URL
        category_list = []
        for category in categories:
            slug = category.lower()
            name = category
            url = f"{base_url}/api/products/category/{slug}"
            category_list.append({
                "slug": slug,
                "name": name,
                "url": url
            })
        return Response(category_list)
    
class ProductByCategoryView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        category = self.kwargs.get('category')
        return Product.objects.filter(category=category)

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        total = queryset.count()
        skip = 0  # or calculate based on request parameters if pagination is used
        limit = total  # or set a fixed limit if pagination is used

        return Response({
            "products": serializer.data,
            "total": total,
            "skip": skip,
            "limit": limit
        })