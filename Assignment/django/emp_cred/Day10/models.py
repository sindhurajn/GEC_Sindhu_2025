from django.db import models

# Create your models here.

class employee(models.Model):
    name = models.CharField(blank=False, max_length=260)
    email = models.EmailField(blank=False)
    password = models.CharField(blank=False, max_length=260)
