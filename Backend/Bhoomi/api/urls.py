from django.urls import path
from .views import UserRegistrationView,LoginView,ProductCreateView,ProductListView,CartAddView,CartListView,UserDetailView
urlpatterns = [
     path('register/', UserRegistrationView.as_view(), name='user-registration'),
     path('login/', LoginView.as_view(), name='user-login'),
     path('products/', ProductListView.as_view(), name='product-list'),
     path('products/add/', ProductCreateView.as_view(), name='product-create'),
     path('cart/add/', CartAddView.as_view(), name='cart-add'),
     path('cart/', CartListView.as_view(), name='cart-list'),
     path('users/me/', UserDetailView.as_view(), name='user-detail'),
]
