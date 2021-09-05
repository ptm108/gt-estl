from django.db import transaction
from django.utils.translation import gettext as _
from django.core.exceptions import ValidationError

from .models import Employee


@transaction.atomic
def batch_process_csv(data):
    if not data:
        raise ValidationError(_('File not found'))
    print(data)
# end def
