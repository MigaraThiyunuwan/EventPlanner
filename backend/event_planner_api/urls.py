from django.urls import path, include
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
    path('hello-world/', views.hello_world, name='hello_world'),

    path('validate_signup', views.validate_signup, name='validate_signup'),

    path('', include(router.urls)),

    path('messages/', MessageView.as_view(), name='message'),
    path('message-details/', MessageList.as_view()),
]
