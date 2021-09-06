from django.db import OperationalError
from django.db.utils import IntegrityError
from django.core.exceptions import ValidationError, ObjectDoesNotExist
from rest_framework import status, generics
from rest_framework.decorators import api_view, permission_classes, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from .service import batch_process_csv, get_employees, create_employee, get_employee_by_id, update_employee, delete_employee_by_id


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
        except (ValidationError, IntegrityError, ValueError) as e:
            return Response(f'{e}', status=status.HTTP_400_BAD_REQUEST)
        except KeyError as e:
            return Response(f'Data missing: {e}', status=status.HTTP_400_BAD_REQUEST)
        # end try-except
    # end if
# end def


@api_view(['GET', 'POST'])
@permission_classes((AllowAny,))
def employee_view(request):
    '''
    Accepts the following compulsory params:
    - minSalary: int
    - maxSalary: int
    - offset: int
    - limit: int
    - sort: string
    Returns a list of employees
    '''
    if request.method == 'GET':
        try:
            data = get_employees(request)

            return Response(data, status=status.HTTP_200_OK)
        except ValueError as e:
            return Response(f'{e}', status=status.HTTP_400_BAD_REQUEST)
    # end if

    '''
    Creates a new employee given:
    - login
    - name 
    - salary
    id and public_id is auto generated
    '''
    if request.method == 'POST':
        try:
            data = request.data
            e = create_employee(data)

            return Response(e, status=status.HTTP_201_CREATED)
        except KeyError as e:
            return Response(f'Missing data: {str(e)}', status=status.HTTP_400_BAD_REQUEST)
        except ValueError as e:
            return Response(f'Invalid data: {str(e)}', status=status.HTTP_400_BAD_REQUEST)
        except IntegrityError as e:
            return Response(str(e), status=status.HTTP_409_CONFLICT)
    # end if
# end def


@api_view(['GET', 'PATCH', 'DELETE'])
@permission_classes((AllowAny,))
def single_employee_view(request, id):
    '''
    Get employee by public id
    Returns Employee record
    '''
    if request.method == 'GET':
        try:
            e = get_employee_by_id(id)

            return Response(e, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        # end try-except
    # end def

    '''
    Edits employee data, given optional fields:
    - name
    - login
    - salary
    '''
    if request.method == 'PATCH':
        try:
            data = request.data
            e = update_employee(id, data)

            return Response(e, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        except ValueError as e:
            return Response(f'Invalid data: {str(e)}', status=status.HTTP_400_BAD_REQUEST)
        # end try-except
    # end if

    '''
    Deletes an employee by id
    Returns deleted employee
    '''
    if request.method == 'DELETE':
        try:
            e = delete_employee_by_id(id)

            return Response(e, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        # end try-except
    # end if
# end def
