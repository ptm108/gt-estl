from django.urls import path

from .views import upload_csv_view, employee_view

urlpatterns = [
    # upload employee csv data
    path('users/upload', upload_csv_view, name='Upload csv data'),
    path('users', employee_view, name='Get/Create employee'),
]
