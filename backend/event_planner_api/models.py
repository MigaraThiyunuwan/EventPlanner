
from django.db import models
from django.contrib.auth.models import AbstractUser,BaseUserManager 

class User(AbstractUser):
    
    first_name = models.CharField(max_length=130, null = True)
    last_name = models.CharField(max_length=130, null = True)
    phone = models.CharField(max_length=15, null = True)
    email = models.EmailField(max_length=130, unique = True)
    password = models.CharField(max_length=130, null= True)
    role = models.CharField(max_length=100, default='customer')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_staff = models. BooleanField(default=False)
    is_superuser = models. BooleanField(default=False)
    is_active = models. BooleanField(default=True)
    username = None
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self) -> str:
        return (self.email)

class ProductType(models.TextChoices):
    PHOTOGRAPHY = "PH", "Photography"
    CATERING = "CA", "Catering"
    DECORATION = "DE", "Decoration"
    MUSIC = "MU", "Music"

class Product(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    productType = models.CharField(
        max_length=2,
        choices=ProductType.choices,
        default=ProductType.PHOTOGRAPHY,
    )

class Service(models.Model):
    product = models.ForeignKey(Product, related_name='services', on_delete=models.CASCADE)
    description = models.CharField(max_length=255)

class Order(models.Model):
    orderID = models.AutoField(primary_key=True)
    orderDate = models.DateField()
    orderStatus = models.CharField(max_length=200, default="")
    customer = models.ForeignKey(User, related_name='orders', on_delete=models.CASCADE)
    products = models.ManyToManyField(Product, related_name='orders', blank=True)
    total = models.DecimalField(max_digits=16, decimal_places=2, default=0)

    def __str__(self):
        return self.orderStatus
    
class Message(models.Model):
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    content = models.TextField()
