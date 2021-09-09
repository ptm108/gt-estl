import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect, Route, Switch } from "react-router-dom";

import SideNav from "./components/SideNav";
import EmployeeList from "../EmployeeList";
import CSVUpload from "../CSVUpload";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    minWidth: "100%",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  body: {
    flex: 1,
    padding: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SideNav />
      <div className={classes.body}>
        <Switch>
          <Route exact path="/employees" component={EmployeeList} />
          <Route exact path="/upload-csv" component={CSVUpload} />
          <Redirect from="*" to="/employees" />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
