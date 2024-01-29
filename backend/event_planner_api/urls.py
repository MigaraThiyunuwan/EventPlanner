from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework_simplejwt import views as jwt_views
from rest_framework import routers
from .views import OrderViewSet
from .views import MessageView
from .views import MessageList
from knox.views import LogoutView, LogoutAllView

router = routers.DefaultRouter()
router.register('order-details', OrderViewSet)

urlpatterns = [
    path('messages/', MessageView.as_view(), name='message'),
    path('message-details/', MessageList.as_view()),
    path('create-user/', views.CreateUserAPI.as_view()),
    path('update-user/<int:pk>/', views.UpdateUserAPI.as_view()),
    path('login/', views.LoginAPIView.as_view()),
    path('logout/', LogoutView.as_view()),
    path('logout-all/', LogoutAllView.as_view()),
    path('users/', views.UserView.as_view()),
    path('current-user/', views.CurrentUserView.as_view()),
    path('get-user/', views.GetUserView.as_view()),

] + router.urls
