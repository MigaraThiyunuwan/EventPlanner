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


class Order(models.Model):
    orderID = models.AutoField(primary_key=True)
    orderDate = models.DateField()
    orderStatus = models.CharField(max_length=200)
    RequestedPackages = models.TextField()
    total = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return self.orderStatus
