from rest_framework import serializers
from .models import Customer
from .models import Order

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ["id", "first_name", "last_name", "phone", "email", "password"]
        extra_kwargs = {
            "password":{
                'write_only': True
            }
        }




class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ["orderID", "orderDate", "orderStatus", "RequestedPackages", "total",]
