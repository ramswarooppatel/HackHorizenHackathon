from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny,IsAuthenticated 
from .models import CustomUser,Products,Cart
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from .serializers import CustomUserSerializer,LoginSerializer,ProductSerializers,CartSerializer

class UserDetailView(generics.RetrieveAPIView):
    serializer_class = CustomUserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user
class UserRegistrationView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [AllowAny]  # Allow any user to access this view

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)  # Validate data
        self.perform_create(serializer)  # Create the user
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    

class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer  # Specify the serializer class
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        # Authenticate the user
        user = authenticate(username=username, password=password)

        if user is not None:
            # Get or create the token for the user
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                'token': token.key,
                'user_id': user.id,
                'username': user.username,
                'user_type': user.user_type,
                'address': user.address,
            }, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)
        
class ProductCreateView(generics.CreateAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductSerializers
    permission_classes = [IsAuthenticated] # Consider restricting this to authenticated farmers

    def perform_create(self, serializer):
        # Set the owner to the currently authenticated farmer
        serializer.save(owner=self.request.user.farmer_info)

class ProductListView(generics.ListAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductSerializers
    permission_classes = [AllowAny]  # All users can view products


class CartAddView(generics.CreateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    permission_classes = [AllowAny]  # Consider restricting this to authenticated users

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class CartListView(generics.ListAPIView):
    serializer_class = CartSerializer
    permission_classes = [AllowAny]  # Consider restricting this to authenticated users

    def get_queryset(self):
        return Cart.objects.filter(user=self.request.user)
