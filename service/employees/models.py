from django.db import models

import uuid

class Employee(models.Model):
    employee_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    id = models.CharField(max_length=255, unique=True)
    login = models.CharField(max_length=255, unique=True)
    name = models.TextField()
    salary = models.PositiveIntegerField()

    class Meta:
        ordering = ['employee_id']
    # end Meta
# end class
