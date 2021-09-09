import React from "react";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    margin: theme.spacing(1, 0),
  },
  name: {
    margin: theme.spacing(1, 0, 0.5),
  },
  salary: {
    margin: theme.spacing(1, 0),
  },
}));

const EmployeeCard = ({ employee }) => {
  const classes = useStyles();

  return (
    <Card className={classes.cardRoot}>
      <CardContent>
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
    </Card>
  );
};

export default EmployeeCard;
