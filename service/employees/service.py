from django.db import transaction
from django.utils.translation import gettext as _
from django.core.exceptions import ValidationError, ObjectDoesNotExist

from .models import Employee
from .serializers import EmployeeSerializer


@transaction.atomic
def batch_process_csv(csv_file):

    # file validation
    if not csv_file:
        raise ValueError('File not found')
    if csv_file.size <= 0:
        raise ValueError('Empty file')
    if csv_file.name[-4:] != '.csv':
        raise ValueError('Invalid format')
    # end ifs

    for row in csv_file:
        data = row.strip().decode().split(',')

        if data[0][0] == "#":  # comments
            continue
        # end if

        # data validations
        if len(data) != 4:
            raise ValueError('Invalid CSV format')
        if float(data[3]) < 0:
            raise ValueError(f'Salary cannot be negative (id: {data[0]})')
        # end if

        try:
            e = Employee.objects.get(public_id=data[0])
            e.login = data[1]
            e.name = data[2]
            e.salary = float(data[3]) * 100
            e.save()
        except ObjectDoesNotExist:  # create new record
            e = Employee(
                public_id=data[0],
                login=data[1],
                name=data[2],
                salary=float(data[3]) * 100,
            )
            e.save()
        # end try-except
    # end for

# end def


def get_employees(request):
    min_salary = request.query_params.get('minSalary', None)
    max_salary = request.query_params.get('maxSalary', None)
    offset = request.query_params.get('offset', None)
    limit = request.query_params.get('limit', None)
    sort = request.query_params.get('sort', None)

    if None in [min_salary, max_salary, offset, limit, sort]:
        raise ValueError('Missing parameters')
    # end if

    try:
        min_salary = int(min_salary)
        max_salary = int(max_salary)
        offset = int(offset)
        limit = int(limit)
    except:
        raise ValueError('Invalid parameters')
    # end try-except

    if min_salary < 0 or max_salary < 0 or offset < 0 or limit <= offset:
        raise ValueError('Invalid integer parameters')
    if sort[0] not in ['+', '-'] or sort[1:] not in ['id', 'login', 'name', 'salary']:
        raise ValueError('Invalid sort parameter')
    if limit - offset > 30:
        raise ValueError('Max items retrievable is 30')
    # end if

    # edit params to django queryset
    if sort[1:] == 'id':
        sort = sort[0] + 'public_id'
    if sort[0] == '+':
        sort = sort[1:]
    # end if

    employees = Employee.objects.order_by(sort)
    employees = employees.filter(salary__gte=min_salary*100)
    employees = employees.filter(salary__lte=max_salary*100)
    employees = employees.all()[offset:limit]

    return EmployeeSerializer(employees, many=True).data
# end def
