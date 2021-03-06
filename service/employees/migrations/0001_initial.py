# Generated by Django 3.2.7 on 2021-09-05 10:40

from decimal import Decimal
import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('public_id', models.CharField(max_length=255, unique=True)),
                ('login', models.CharField(max_length=255, unique=True)),
                ('name', models.TextField()),
                ('salary', models.DecimalField(decimal_places=2, max_digits=30, validators=[django.core.validators.MinValueValidator(Decimal('0.0'), message='Salary cannot be negative')])),
            ],
            options={
                'ordering': ['id'],
            },
        ),
    ]
