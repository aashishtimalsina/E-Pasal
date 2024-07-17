from django.urls import path
from .views import create_order

urlpatterns = [
    path('createOrder/', create_order, name='create_order'),
    ]
