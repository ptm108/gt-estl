import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import SideNav from "./components/SideNav";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    minWidth: "100%",
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SideNav />
      Test
    </div>
  );
};

export default Dashboard;
