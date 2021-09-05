from django.core.validators import MinValueValidator
from django.db import models

import uuid
from decimal import Decimal


class Employee(models.Model):
    login = models.CharField(max_length=255, unique=True)
    name = models.TextField()
    salary = models.DecimalField(decimal_places=2, max_digits=30, validators=[MinValueValidator(Decimal('0.0'), message='Salary cannot be negative')])

    class Meta:
        ordering = ['id']
    # end Meta
# end class
