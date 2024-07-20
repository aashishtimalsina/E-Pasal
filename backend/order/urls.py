from django.urls import path
from .views import create_order, khalti_initiate_payment

urlpatterns = [
    path('createOrder/', create_order, name='create_order'),
    path('khalti/initiate/', khalti_initiate_payment, name='khalti_initiate_payment'),    ]
