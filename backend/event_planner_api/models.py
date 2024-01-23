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
