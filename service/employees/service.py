from django.db import transaction
from django.utils.translation import gettext as _
from django.core.exceptions import ValidationError

from .models import Employee


@transaction.atomic
def batch_process_csv(csv_file):

    # file validation
    if not csv_file:
        raise ValidationError(_('File not found'))
    if csv_file.size <= 0:
        raise ValidationError(_('Empty file'))
    if csv_file.name[-4:] != '.csv':
        raise ValidationError(_('Invalid format'))
    # end ifs

    for row in csv_file:
        data = row.strip().decode().split(',')
        print(data)

        e = Employee(
            login=data[1],
            name=data[2],
            salary=data[3],
        )
        e.save()
    # end for

# end def
