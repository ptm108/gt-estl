import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 200,
  },
  persistentDrawer: {
    width: 200,
    backgroundColor: theme.palette.primary.light,
  },
}));

const SideNav = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Hidden smDown>
        <div className={classes.persistentDrawer}>Test</div>
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
