from django.db.utils import IntegrityError
from django.core.exceptions import ValidationError, ObjectDoesNotExist
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

import time


@api_view(['POST'])
@permission_classes((AllowAny,))
@parser_classes((MultiPartParser, FormParser,))
def upload_csv_view(request):
    '''
    Batch create/update employee data, accepts a CSV file
    Returns 200 if OK
    '''
    if request.method == 'POST':
        time.sleep(5)
        return Response()
    # end if
# end def