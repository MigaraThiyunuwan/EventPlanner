from django.db import models

class Customer(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=130)
    last_name = models.CharField(max_length=130)
    phone = models.CharField(max_length=15)
    email = models.CharField(max_length=130)
    password = models.CharField(max_length=130)

    # USERNAME_FIELD = 'id'
    # REQUIRED_FIELDS = [id, first_name, last_name, phone, email, password]

    class Meta:
        db_table = "customer"

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
    orderDate = models.DateField(auto_now=True)
    orderStatus = models.CharField(max_length=200, default="")
    customer = models.ForeignKey(Customer, related_name='orders', on_delete=models.CASCADE)
    products = models.ManyToManyField(Product, related_name='orders', blank=True)
    total = models.DecimalField(max_digits=6, decimal_places=2, default=0)

    def __str__(self):
        return self.orderStatus
class Message(models.Model):
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    content = models.TextField()
