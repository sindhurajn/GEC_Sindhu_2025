from django.contrib import admin
from .import models

# Register your models here.

@admin.register(models.employee)
class EmployeeAdmin(admin.ModelAdmin):
    list_display = ["id", "name", "email", "password"]
