from django.urls import path
from .views import ProductListView, ProductDetailView, CategoryListView, ProductByCategoryView

urlpatterns = [
    path('products/', ProductListView.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
    path('products/categories/', CategoryListView.as_view(), name='category-list'),
    path('products/category/<str:category>/', ProductByCategoryView.as_view(), name='product-by-category'),
]
