from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import OrderSerializer

@api_view(['POST'])
def create_order(request):
    if request.method == 'POST':
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            order = serializer.save()
            # Mock form data for eSewa
            formData = {
                "amt": str(order.total_amount),
                "pdc": "0",
                "psc": "0",
                "txAmt": "0",
                "tAmt": str(order.total_amount),
                "pid": f"order_{order.id}",
                "scd": "merchant_code",  # Replace with your merchant code
                "su": "http://localhost:5173/success",
                "fu": "http://localhost:5173/failure"
            }
            return Response({"formData": formData}, status=status.HTTP_200_OK)
        return Response({"errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    return Response({"error": "Invalid request method"}, status=status.HTTP_400_BAD_REQUEST)
