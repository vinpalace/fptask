from django.urls import include, path
from rest_framework import routers

from core.views import RegisterUserAPIView
from .viewsets import CreateUserView, UserUploadsViewset, UserViewSet


router = routers.DefaultRouter()

router.register(r"users", UserViewSet)
router.register(r"user-uploads", UserUploadsViewset)

urlpatterns = [
    path("", include(router.urls)),
    path("register", RegisterUserAPIView.as_view()),
]
