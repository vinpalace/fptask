from django.contrib.auth.models import User, Group
from django.contrib.auth import get_user_model
from rest_framework import viewsets
from rest_framework import permissions
from core.models import UserUploads
from core.serializers import UserSerializer, UserUploadsSerializers
from rest_framework.generics import CreateAPIView


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = User.objects.all().order_by("-date_joined")
    serializer_class = UserSerializer


class CreateUserView(CreateAPIView):

    model = get_user_model()
    permission_classes = [permissions.AllowAny]  # Or anon users can't register
    serializer_class = UserSerializer


class UserUploadsViewset(viewsets.ModelViewSet):
    queryset = UserUploads.objects.all()
    serializer_class = UserUploadsSerializers
