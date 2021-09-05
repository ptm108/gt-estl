from django.test import TestCase


class UploadCSVUnitTest(TestCase):

    def test_normal_upload(self):
        with open('employees/tests/test_assets/employees.csv', 'r') as csv_file:
            response = self.client.post('/users/upload', {'file': csv_file})
            self.assertEqual(response.status_code, 200)
        # end with
    # end def

    def test_empty_file(self):
        response = self.client.post('/users/upload')
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.data, 'Data missing: \'file\'')
    # end def

    def test_negative_salary(self):
        with open('employees/tests/test_assets/negative_salary.csv', 'r') as csv_file:
            response = self.client.post('/users/upload', {'file': csv_file})
            self.assertEqual(response.status_code, 400)
            self.assertEqual(response.data, 'Salary cannot be negative (id: e0010)')
        # end with
    # end def

    def test_empty_file(self):
        with open('employees/tests/test_assets/empty.csv', 'r') as csv_file:
            response = self.client.post('/users/upload', {'file': csv_file})
            self.assertEqual(response.status_code, 400)
            self.assertEqual(response.data, 'Empty file')
        # end with
    # end def

    def test_invalid_csv(self):
        with open('employees/tests/test_assets/invalid_csv.csv', 'r') as csv_file:
            response = self.client.post('/users/upload', {'file': csv_file})
            self.assertEqual(response.status_code, 400)
            self.assertEqual(response.data, 'Invalid CSV format')
        # end with
    # end def

    def test_invalid_file_type(self):
        with open('employees/tests/test_assets/invalid_file_type.txt', 'r') as csv_file:
            response = self.client.post('/users/upload', {'file': csv_file})
            self.assertEqual(response.status_code, 400)
            self.assertEqual(response.data, 'Invalid format')
        # end with
    # end def

    def test_missing_values(self):
        with open('employees/tests/test_assets/missing_values.csv', 'r') as csv_file:
            response = self.client.post('/users/upload', {'file': csv_file})
            print(response.data)
            self.assertEqual(response.status_code, 400)
        # end with
    # end def
# end class
