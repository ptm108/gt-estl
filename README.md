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
python manage.py runserver
```
