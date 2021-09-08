import React from "react";
import { makeStyles } from "@material-ui/core";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { CloudUpload, People } from "@material-ui/icons";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  listItemActive: {
    backgroundColor: theme.palette.primary.dark,
    color: "#FFF",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  inheritColor: {
    color: "inherit",
  },
}));

const LinkList = ({ postSelect }) => {
  const classes = useStyles();

  return (
    <List>
      <ListItem
        component={NavLink}
        to="/employees"
        activeClassName={classes.listItemActive}
        className={classes.listItem}
        button
        onClick={() => postSelect && postSelect()}
      >
        <ListItemIcon className={classes.inheritColor}>
          <People />
        </ListItemIcon>
        <ListItemText primary="Employees" />
      </ListItem>
      <ListItem
        component={NavLink}
        to="/upload-csv"
        activeClassName={classes.listItemActive}
        className={classes.listItem}
        button
        onClick={() => postSelect && postSelect()}
      >
        <ListItemIcon className={classes.inheritColor}>
          <CloudUpload />
        </ListItemIcon>
        <ListItemText primary="Upload CSV" />
      </ListItem>
    </List>
  );
};

LinkList.defaultProps = {
  postSelect: () => {},
};

export default LinkList;
