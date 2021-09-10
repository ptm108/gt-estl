# GT ESTL

Take home assignment for GT's ESTL interview process. The application is implemented using React on the frontend and Django on the backend.

## Frontend

The frontend is bootstrapped using React's create-react-app. To start the local development server:

```bash
cd ui/
npm install
npm start
```

The frontend app is accessible at <http://localhost:3000/>

## Backend

The backend is implemented using Django and Python. Pipenv is used to manage the local environment, if you may however wish to use another solution, the packages required are detailed in `service/requirements.txt`

To start the local django server, in a separate terminal, run:

```bash
cd service/
pipenv install 
pipenv shell

# only run the first time
python manage.py migrate

# to start the server
python manage.py runserver

# to run tests
python manage.py test
```

## Database Schema

An SQLite database is used by default with the Django Application. A simple table representing the Employee was used:

| Column      | Type        |
| ----------- | ----------- |
| id         | int       |
| public_id   | string        |
| name      | string       |
| login   | string        |
| salary   | int        |

Based on the requirements, it is assumed that the employee's id (e.g., e0001) is based on an auto increment primary key padded with zeroes and preffixed with the letter e. Hence, the public_id is used to represent the employee's id publicly and utilizes the auto increment key when creating new employees.

Another design choice was to use integers to represent the salary in cents, to avoid bugs pertaining to float precisions. Values are converted to float values during serialization. 

## User Story Descriptions

All interfaces are responsive and works well in mobile or desktop views.

### User Story 1

![Upload CSV](https://github.com/ptm108/gt-estl/blob/main/assets/upload-csv.png?raw=true)

CSV files can be uploaded through the dropzone. Only one file is permitted at one time. CSV files are processed in a single atomic transaction and by default, SQLite locks the entire database during the transaction. Hence, only one file will be processed at a single point in time. Uploading another file will result in an error. 

### User Story 2

![Dashboard](https://github.com/ptm108/gt-estl/blob/main/assets/dashboard.png?raw=true)

Dashboard containing simple filters and pagination (30/page). 

### User Story 3

![Create](https://github.com/ptm108/gt-estl/blob/main/assets/create.png?raw=true)
![Update](https://github.com/ptm108/gt-estl/blob/main/assets/update.png?raw=true)
![Delete](https://github.com/ptm108/gt-estl/blob/main/assets/delete.png?raw=true)

A modal containing 3 input fields are used for Create and Update operations. A delete confirmation dialog is presented to the user before deleting. 

### User Story 4

![Upload progress](https://github.com/ptm108/gt-estl/blob/main/assets/upload-csv-feedback.png?raw=true)

After a file is dropped, the dropzone is unmounted and a confirmation is rendered. The user can then either delete the inmemory file or proceed to upload. A progress bar is rendered during the upload of the file to provide feedback on the progress of uploading. While uploading, the upload button is then disabled.

### User Story 5

Not attempted due to time.
