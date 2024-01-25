from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from rest_framework import generics, status
from .serializers import CustomerSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello, world!'})

@api_view(['POST'])
def validate_signup(request):

    try:
        register_data = request.data
        print(register_data)
        customerSerializer = CustomerSerializer(data=register_data)
        customerSerializer.is_valid(raise_exception = True)
        print(customerSerializer.validated_data)
        customerSerializer.save()

        return Response(
            status = status.HTTP_201_CREATED
        )



    except Exception as e:
        print(e)
        return Response(
            status = status.HTTP_500_INTERNAL_ERROR
        )
    
from rest_framework import viewsets
from .models import Order
from .serializers import OrderSerializer

class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()
    
