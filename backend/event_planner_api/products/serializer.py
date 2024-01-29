from rest_framework import serializers
from ..models import Product, Service
 
class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['description']

class ProductSerializer(serializers.ModelSerializer):
    services = ServiceSerializer(many=True, write_only=True)

    class Meta:
        model = Product
        fields = '__all__'
        
    def get_services(self, obj):
        services_queryset = obj.services.all()
        return [service.description for service in services_queryset]
     
    def create(self, validated_data):
        services_data = validated_data.pop('services', [])
        product = Product.objects.create(**validated_data)

        for service_data in services_data:
            Service.objects.create(product=product, description=service_data['description'])

        return product
    
    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.price = validated_data.get('price', instance.price)
        instance.productType = validated_data.get('productType', instance.productType)
        instance.save()

        services_data = validated_data.get('services', [])
        instance.services.all().delete()

        for service_data in services_data:
            Service.objects.create(product=instance, **service_data)

        return instance
    
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['services'] = self.get_services(instance)
        return representation