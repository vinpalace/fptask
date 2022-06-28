from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class UserUploads(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    file = models.FileField(upload_to="uploads/")
