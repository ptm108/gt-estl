from django.contrib import admin

from .models import Employee


class EmployeeAdmin(admin.ModelAdmin):
    list_display = ("id", "login", "name", "salary")
# end class

admin.site.register(Employee, EmployeeAdmin)
