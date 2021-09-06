from django.test import TestCase


class UploadCSVTestCase(TestCase):

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
            self.assertEqual(response.status_code, 400)
        # end with
    # end def
# end class


class EmployeeTestCase(TestCase):
    def setUp(self):
        with open('employees/tests/test_assets/employees.csv', 'r') as csv_file:
            response = self.client.post('/users/upload', {'file': csv_file})
        # end with
    # end def

    def test_get_employees(self):
        response = self.client.get('/users?minSalary=0&maxSalary=4000&offset=0&limit=30&sort=%2Bid')
        self.assertEqual(response.status_code, 200)
        self.assertLessEqual(len(response.data), 30)
    # end def

    def test_salary(self):
        response = self.client.get('/users?minSalary=1000&maxSalary=99999&offset=0&limit=30&sort=%2Bid')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 6)
    # end def

    def test_offset(self):
        response = self.client.get('/users?minSalary=0&maxSalary=99999&offset=4&limit=30&sort=%2Bid')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data[0]['id'], 'e0004')
    # end def

    def test_missing_parameters(self):
        response = self.client.get('/users?maxSalary=4000&offset=0&limit=30&sort=%2Bid')
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.data, 'Missing parameters')
    # end def

    def test_invalid_parameter_type(self):
        response = self.client.get('/users?minSalary=asd&maxSalary=4000&offset=0&limit=30&sort=%2Bid')
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.data, 'Invalid parameters')
    # end def

    def test_negative_integers(self):
        response = self.client.get('/users?minSalary=0&maxSalary=-4000&offset=0&limit=30&sort=%2Bid')
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.data, 'Invalid integer parameters')
    # end def

    def test_invalid_sort_column(self):
        response = self.client.get('/users?minSalary=0&maxSalary=4000&offset=0&limit=30&sort=%2Bpid')
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.data, 'Invalid sort parameter')
    # end def

    def test_invalid_sort_preffix(self):
        response = self.client.get('/users?minSalary=0&maxSalary=4000&offset=0&limit=30&sort=_pid')
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.data, 'Invalid sort parameter')
    # end def

    def test_retrieval_limit(self):
        response = self.client.get('/users?minSalary=0&maxSalary=4000&offset=0&limit=31&sort=%2Bid')
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.data, 'Max items retrievable is 30')
    # end def

# end class
