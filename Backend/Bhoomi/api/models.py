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
    

