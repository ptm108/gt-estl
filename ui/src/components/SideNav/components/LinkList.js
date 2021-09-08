import React from "react";
import { makeStyles } from "@material-ui/core";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { CloudUpload, People } from "@material-ui/icons";

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

const LinkList = () => {
  const classes = useStyles();

  return (
    <List>
      <ListItem className={classes.listItemActive} button>
        <ListItemIcon className={classes.inheritColor}>
          <People />
        </ListItemIcon>
        <ListItemText primary="Employees" />
      </ListItem>
      <ListItem className={classes.listItem} button>
        <ListItemIcon className={classes.inheritColor}>
          <CloudUpload />
        </ListItemIcon>
        <ListItemText primary="Upload CSV" />
      </ListItem>
    </List>
  );
};

export default LinkList;
