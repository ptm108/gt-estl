from django.core.validators import MinValueValidator
from django.db import models

import uuid
from decimal import Decimal


class Employee(models.Model):
    public_id = models.CharField(max_length=255, unique=True)
    login = models.CharField(max_length=255, unique=True)
    name = models.TextField()
    salary = models.PositiveIntegerField()

    class Meta:
        ordering = ['id']
    # end Meta
# end class
