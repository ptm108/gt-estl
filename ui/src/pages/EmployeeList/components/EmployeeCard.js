import React from "react";
import { Button, Card, CardActions, CardContent, makeStyles, Typography } from "@material-ui/core";
import { Edit, DeleteOutline } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    margin: theme.spacing(1, 0),
    padding: theme.spacing(2),
  },
  cardContent: {
    padding: theme.spacing(1),
  },
  name: {
    margin: theme.spacing(1, 0, 0.5),
  },
  salary: {
    margin: theme.spacing(1, 0),
  },
  editButton: {
    textTransform: "none",
    color: theme.palette.primary.dark,
    border: `1px solid ${theme.palette.primary.dark}`,
  },
  deleteButton: {
    textTransform: "none",
    color: theme.palette.error.dark,
    border: `1px solid ${theme.palette.error.dark}`,
  },
}));

const EmployeeCard = ({ employee, setSelectedEmployee, setDeleteModalOpen, setEmployeeModalOpen }) => {
  const classes = useStyles();

  const handleDelete = () => {
    setSelectedEmployee(employee);
    setDeleteModalOpen(true);
  };

  const handleEdit = () => {
    setSelectedEmployee(employee);
    setEmployeeModalOpen(true);
  };

  return (
    <Card className={classes.cardRoot}>
      <CardContent className={classes.cardContent}>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          #{employee.id}
        </Typography>
        <Typography className={classes.name} variant="h6" component="h2">
          {employee.name} <span style={{ color: "#676767" }}>({employee.login})</span>
        </Typography>
        <Typography className={classes.salary} variant="body1" color="textSecondary">
          Salary: S${parseFloat(employee.salary).toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.editButton} size="small" color="primary" startIcon={<Edit />} onClick={handleEdit}>
          Edit
        </Button>
        <Button
          className={classes.deleteButton}
          size="small"
          variant="outlined"
          startIcon={<DeleteOutline />}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default EmployeeCard;
