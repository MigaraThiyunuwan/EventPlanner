from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework_simplejwt import views as jwt_views
from rest_framework import routers
from .views import OrderViewSet
from .views import MessageView
from .views import MessageList

router = routers.DefaultRouter()
router.register(r'order-details', OrderViewSet)

urlpatterns = [
    path('hello-world/', views.hello_world, name='hello_world'),
    path('validate_signup', views.validate_signup, name='validate_signup'),
    path('messages/', MessageView.as_view(), name='message'),
    path('message-details/', MessageList.as_view()),
] + router.urls
