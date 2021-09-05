from django.db import transaction
from django.utils.translation import gettext as _
from django.core.exceptions import ValidationError, ObjectDoesNotExist

from .models import Employee


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
