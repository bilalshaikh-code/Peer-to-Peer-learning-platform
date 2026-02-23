from django.urls import path, include
from rest_framework import routers
from .views import SignupView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    # Auth URLs here.
    path('auth/signup/',SignupView.as_view(),name="signup"),
    path('auth/signin/', TokenObtainPairView.as_view(), name='signin'),
    path('auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]