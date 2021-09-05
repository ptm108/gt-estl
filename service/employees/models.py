from django.core.validators import MinValueValidator
from django.db import models

import uuid
from decimal import Decimal


class Employee(models.Model):
    public_id = models.CharField(max_length=255, unique=True)
    login = models.CharField(max_length=255, unique=True)
    name = models.TextField()
    salary = models.DecimalField(decimal_places=2, max_digits=30, validators=[MinValueValidator(Decimal('0.0'), message='Salary cannot be negative')])

    class Meta:
        ordering = ['id']
    # end Meta

    def save(self, *args, **kwargs):
        if self.public_id is None:
            self.public_id = f'e{self.id:04}'
        return super(Employee, self).save(*args, **kwargs)
# end class
