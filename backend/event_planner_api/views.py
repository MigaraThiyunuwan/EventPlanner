from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from rest_framework import generics, status
from .serializers import UserSerializer, CreateUserSerializer, UpdateUserSerializer, LoginSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from rest_framework import viewsets
from .models import Order
from .serializers import OrderSerializer

from rest_framework.generics import CreateAPIView, UpdateAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from .models import User 
from knox import views as knox_views
from django.contrib.auth import login


class CreateUserAPI(CreateAPIView):

    queryset = User.objects.all()
    serializer_class = CreateUserSerializer
    permission_classes = (AllowAny,)

class UpdateUserAPI(UpdateAPIView):

    queryset = User.objects.all()
    serializer_class = UpdateUserSerializer

class LoginAPIView(knox_views.LoginView):

    permission_classes = (AllowAny, )

    serializer_class = LoginSerializer

    def post(self, request, format=None):

        serializer = self.serializer_class(data = request.data)

        if serializer.is_valid(raise_exception = True):

            user = serializer.validated_data['user']

            login(request, user)

            response = super().post(request, format=None)

        else:

            return Response ({'errors': serializer.errors},status = status.HTTP_400_BAD_REQUEST) 

        return Response (response.data, status =status.HTTP_200_OK)




class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()

    def update(self, request, pk=None):
        order = self.get_object()
        serializer = OrderSerializer(order, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Message
from .serializers import MessageSerializer

class MessageView(APIView):
    def post(self, request, format=None):
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MessageList(generics.ListAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

from .models import User
class UserView(APIView):
    def post(self, request):
        email = request.data.get("email")
        if not email:
            raise ValueError("The Email is not given")
                
        serializer = UserSerializer(data= request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({
            "status":"success"
        })

from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import get_user_model

class CurrentUserView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = get_user_model().objects.get(email=request.user.email)
        return Response({
            'first_name': user.first_name,
            'last_name': user.last_name,
            'phone': user.phone,
            'email': user.email,
            'role': user.role,
        })
    
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response

class GetUserView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        return Response({'id': user.id, 'username': user.username, 'role': user.role , 'first_name': user.first_name , 'last_name': user.last_name , 'phone': user.phone , 'email ': user.email})