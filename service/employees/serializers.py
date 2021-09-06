from rest_framework import serializers

from .models import Employee


class EmployeeSerializer(serializers.ModelSerializer):
    id = serializers.SerializerMethodField('get_id')
    salary = serializers.SerializerMethodField('get_salary')

    class Meta:
        model = Employee
        fields = ('id', 'login', 'name', 'salary')
    # end Meta

    def get_id(self, obj):
        return obj.public_id
    # end def

    def get_salary(self, obj):
        return obj.salary / 100
    # end def

# end class
