from rest_framework import serializers

from .models import Employee


class EmployeeSerializer(serializers.ModelSerializer):
    salary = serializers.SerializerMethodField('get_salary')

    class Meta:
        model = Employee
        fields = "__all__"
    # end Meta

    def get_salary(self, obj):
        return obj.salary / 100
    # end def
# end class
