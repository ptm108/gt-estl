from django.db import OperationalError
from django.db.utils import IntegrityError
from django.core.exceptions import ValidationError, ObjectDoesNotExist
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from .service import batch_process_csv


@api_view(['POST'])
@permission_classes((AllowAny,))
@parser_classes((MultiPartParser, FormParser,))
def upload_csv_view(request):
    '''
    Batch create/update employee data, accepts a CSV file
    Returns 200 if OK
    '''
    if request.method == 'POST':
        try:
            csv_file = request.data['file']
            batch_process_csv(csv_file)

            return Response(status=status.HTTP_200_OK)
        except OperationalError as e:
            return Response(f'Error: {e}', status=status.HTTP_423_LOCKED)
        except (ValidationError, IntegrityError, KeyError, ValueError) as e:
            print(str(e))
            return Response(f'Error: {e}', status=status.HTTP_400_BAD_REQUEST)
        # end try-except
    # end if
# end def
