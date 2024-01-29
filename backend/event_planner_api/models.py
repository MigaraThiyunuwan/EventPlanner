
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
    

class Order(models.Model):
    orderID = models.AutoField(primary_key=True)
    orderDate = models.DateField()
    orderStatus = models.CharField(max_length=199)
    RequestedPackages = models.TextField()
    total = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return self.orderStatus

class Message(models.Model):
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    content = models.TextField()
