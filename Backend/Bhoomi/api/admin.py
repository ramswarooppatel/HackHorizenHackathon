from django.contrib import admin
from .models import CustomUser, FarmerInfo, UserInfo

@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'user_type', 'address', 'is_active', 'is_staff')  # Display fields
    search_fields = ('username', 'email')  # Searchable fields
    list_filter = ('user_type', 'is_active', 'is_staff')  # Filters in the admin interface

@admin.register(FarmerInfo)
class FarmerInfoAdmin(admin.ModelAdmin):
    list_display = ('Farmer_Type', 'Desc')  # Adjust as needed

@admin.register(UserInfo)
class UserInfoAdmin(admin.ModelAdmin):
    list_display = ('id',)  # Adjust as needed
