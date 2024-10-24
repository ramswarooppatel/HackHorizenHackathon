from rest_framework import serializers
from .models import CustomUser, FarmerInfo, UserInfo

class FarmerInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = FarmerInfo
        fields = '__all__'

class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInfo
        fields = '__all__'# Add any fields you want to serialize here

class CustomUserSerializer(serializers.ModelSerializer):
    farmer_info = FarmerInfoSerializer(required=False, allow_null=True)
    user_info = UserInfoSerializer(required=False, allow_null=True)

    class Meta:
        model = CustomUser
        fields = ['id', 'username','password', 'email', 'user_type', 'address', 'farmer_info', 'user_info']
        extra_kwargs = {'password': {'write_only': True}} 
    def create(self, validated_data):
        farmer_info_data = validated_data.pop('farmer_info', None)
        user_info_data = validated_data.pop('user_info', None)
        
        user = CustomUser(**validated_data)
        user.set_password(validated_data['password'])  # Set the hashed password
        user.save()

        if farmer_info_data:
            farmer_info = FarmerInfo.objects.create(**farmer_info_data)
            user.farmer_info = farmer_info
            user.save()
        
        if user_info_data:
            user_info = UserInfo.objects.create(**user_info_data)
            user.user_info = user_info
            user.save()

        return user

    # def update(self, instance, validated_data):
    #     farmer_info_data = validated_data.pop('farmer_info', None)
    #     user_info_data = validated_data.pop('user_info', None)

    #     # Update CustomUser fields
    #     instance.username = validated_data.get('username', instance.username)
    #     instance.email = validated_data.get('email', instance.email)
    #     instance.user_type = validated_data.get('user_type', instance.user_type)
    #     instance.address = validated_data.get('address', instance.address)
    #     instance.save()

    #     # Update FarmerInfo
    #     if farmer_info_data:
    #         if instance.farmer_info:
    #             for attr, value in farmer_info_data.items():
    #                 setattr(instance.farmer_info, attr, value)
    #             instance.farmer_info.save()
    #         else:
    #             instance.farmer_info = FarmerInfo.objects.create(**farmer_info_data)
        
    #     # Update UserInfo
    #     if user_info_data:
    #         if instance.user_info:
    #             for attr, value in user_info_data.items():
    #                 setattr(instance.user_info, attr, value)
    #             instance.user_info.save()
    #         else:
    #             instance.user_info = UserInfo.objects.create(**user_info_data)

    #     return instance

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()