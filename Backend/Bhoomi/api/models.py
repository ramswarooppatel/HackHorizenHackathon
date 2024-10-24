from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class FarmerInfo(models.Model):
    Practices = (
        ('Organic Farming', 'Organic Farming'),
        ('Sustainable Farming', 'Sustainable Farming'),
    )
    Farmer_Type = models.CharField(max_length=80, choices=Practices)
    Desc=models.CharField(max_length=500)
    ratings=models.PositiveIntegerField(default=3)
class UserInfo(models.Model):
    pass


class CustomUser(AbstractUser):
    type = (
        ('Farmer', 'Farmer'),
        ('Consumer', 'Consumer'),
    )
    user_type = models.CharField(max_length=80, choices=type)
    address= models.CharField(max_length=500,null=True)
    farmer_info = models.ForeignKey(FarmerInfo, null=True, blank=True, on_delete=models.SET_NULL)
    user_info = models.ForeignKey(UserInfo, null=True, blank=True, on_delete=models.SET_NULL)
    

class Products(models.Model):
    owner = models.ForeignKey(FarmerInfo, null=False, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    desc = models.CharField(max_length=200)
    price = models.DecimalField(decimal_places=2, max_digits=10)
    quantity = models.PositiveIntegerField(default=0)  # New field to track stock
    created_at = models.DateTimeField(auto_now_add=True)  # New field for timestamp


class Cart(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

