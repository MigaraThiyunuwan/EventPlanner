from rest_framework import serializers
from . models import Message , User , Order
from django.contrib.auth.models import Group
from rest_framework.authtoken.views import Token
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {
            "password":{
                'write_only': True
            }
        }

    def create(self, validated_data):
        password = validated_data.pop('password',None)
        user = self.Meta.model(**validated_data)
        if password is not None:
            user.set_password(password)
        user.save()
        return user
class CreateUserSerializer (serializers.ModelSerializer):

    class Meta:

        model = User
        fields = '__all__'
        extra_kwargs = {
            'password' : {'required' : True}
        }

    def validate(self, attrs):

        email = attrs.get('email', '').strip().lower()

        if User.objects.filter(email=email).exists():

            raise serializers. ValidationError('User with this email id already exists.')

        return attrs

    def create(self, validated_data):
        groups_data = validated_data.pop('groups', None)
        user_permissions_data = validated_data.pop('user_permissions', None)

        user = User.objects.create_user(**validated_data)

        if groups_data is not None:
            for group in groups_data:
                user.groups.add(group)
        if user_permissions_data is not None:
            for permission in user_permissions_data:
                user.user_permissions.add(permission)

        return user

class UpdateUserSerializer (serializers. ModelSerializer):

    class Meta:

        model = User

        fields = ('first_name', 'last_name', 'email', 'password')

    def update(self, instance, validated_data):

        password = validated_data.pop('password')

        if password:

            instance.set_password(password)

        instance = super().update(instance, validated_data)

        return instance

class LoginSerializer(serializers.Serializer):

    email = serializers.EmailField()
    password = serializers.CharField(style={'input_type': 'password'}, trim_whitespace=False)

    def validate(self, attrs):

        email = attrs.get('email').lower()
        password = attrs.get('password')

        if not email or not password:
            raise serializers.ValidationError("Please give both email and password.")

        if not User.objects.filter(email=email).exists():

            raise serializers. ValidationError('Email does not exist.')

        user = authenticate(request=self.context.get('request'), email=email, password=password)

        if not user:

            raise serializers.ValidationError("Wrong Credentials.")

        attrs['user'] = user

        return attrs






class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ["orderID", "orderDate", "orderStatus", "total"]




class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['full_name', 'email', 'content']

