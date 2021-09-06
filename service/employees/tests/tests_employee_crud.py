from django.test import TestCase


class EmployeeListTestCase(TestCase):
    def setUp(self):
        with open('employees/tests/test_assets/employees.csv', 'r') as csv_file:
            response = self.client.post('/users/upload', {'file': csv_file})
        # end with
    # end def

    def test_create_employee(self):
        response = self.client.post('/users', data={'login': 'test', 'name': 'test', 'salary': '3.00'}, content_type='application/json')
        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.data['id'], 'e0038')
    # end def

    def test_create_employee_conflict(self):
        response = self.client.post('/users', data={'login': 'hpotter', 'name': 'test', 'salary': '3.00'}, content_type='application/json')
        self.assertEqual(response.status_code, 409)
    # end def

    def test_create_employee_fail(self):
        response = self.client.post('/users', data={'login': 'test', 'name': 'test', 'salary': 'asd'}, content_type='application/json')
        self.assertEqual(response.status_code, 400)
    # end def

    def test_create_employee_missing_data(self):
        response = self.client.post('/users', data={'name': 'test', 'salary': 'asd'}, content_type='application/json')
        self.assertEqual(response.status_code, 400)
    # end def

    def test_get_employee_id(self):
        response = self.client.get('/users/e0001')
        self.assertEqual(response.status_code, 200)
    # end def

    def test_get_employee_id_fail(self):
        response = self.client.get('/users/e0099')
        self.assertEqual(response.status_code, 404)
    # end def

    def test_patch_employee(self):
        response = self.client.patch('/users/e0037', data={'login': 'test', 'name': 'test', 'salary': '3.00'}, content_type='application/json')
        self.assertEqual(response.status_code, 200)
    # end def

    def test_patch_employee_not_found(self):
        response = self.client.patch('/users/e0099', data={'login': 'test', 'name': 'test', 'salary': '3.00'}, content_type='application/json')
        self.assertEqual(response.status_code, 404)
    # end def

    def test_patch_employee_invalid_value(self):
        response = self.client.patch('/users/e0037', data={'login': 'test', 'name': 'test', 'salary': 'asd'}, content_type='application/json')
        self.assertEqual(response.status_code, 400)
    # end def

# end class
