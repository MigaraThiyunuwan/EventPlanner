from django.urls import path, include
from knox.views import LogoutView, LogoutAllView
from . import views
from rest_framework import routers
from .views import MessageView
from .views import MessageList
from .products.views import ProductViewSet
from .orders.views import OrderViewSet


router = routers.DefaultRouter()
router.register(r'product', ProductViewSet, basename="product")
router.register(r'order', OrderViewSet, basename="order")

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

    path('', include(router.urls)),
]
