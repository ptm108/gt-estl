from django.db import models

import uuid

class Employee(models.Model):
    login = models.CharField(max_length=255, unique=True)
    name = models.TextField()
    salary = models.PositiveIntegerField()

    class Meta:
        ordering = ['id']
    # end Meta
# end class
