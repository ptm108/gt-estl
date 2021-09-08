import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Hidden, Typography } from "@material-ui/core";

import LinkList from "./LinkList";
import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 200,
  },
  persistentDrawer: {
    width: 200,
    backgroundColor: "#FFF",
  },
}));

const SideNav = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Hidden smDown>
        <div className={classes.persistentDrawer}>
          <Logo />
          <Typography variant="body2" style={{ fontWeight: 700, margin: "0 16px" }}>
            Main Menu
          </Typography>
          <LinkList />
        </div>
      </Hidden>

      <Hidden mdUp>
        <Drawer variant="temporary" classes={{ paper: classes.drawerPaper }}>
          Test
        </Drawer>
      </Hidden>
    </Fragment>
  );
};

export default SideNav;
