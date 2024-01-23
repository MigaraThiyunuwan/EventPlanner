from django.contrib import admin
from django.urls import path
from . import views
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('hello-world/', views.hello_world, name='hello_world'),

    path('validate_signup', views.validate_signup, name='validate_signup')
    
]