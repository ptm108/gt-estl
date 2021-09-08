import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect, Route, Switch } from "react-router-dom";

import SideNav from "../../components/SideNav";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    minWidth: "100%",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SideNav />
      <div style={{ flex: 1 }}>Body</div>
    </div>
  );
};

export default Dashboard;
