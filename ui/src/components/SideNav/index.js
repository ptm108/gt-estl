import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Hidden, IconButton, SwipeableDrawer, Toolbar, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

import LinkList from "./components/LinkList";
import Logo from "./components/Logo";

const useStyles = makeStyles((theme) => ({
  persistentDrawer: {
    width: 200,
    backgroundColor: "#FFF",
    boxShadow: "5px 0px 22px 5px rgba(0,0,0,0.1)",
  },
  appBarRoot: {
    backgroundColor: "#FFF",
  },
}));

const SideNav = () => {
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = useState(false);

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
        <AppBar position="static" className={classes.appBarRoot}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
            >
              <Menu />
            </IconButton>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          onOpen={() => setDrawerOpen(true)}
        >
          <Logo mobile />
          <Typography variant="body2" style={{ fontWeight: 700, margin: "0 16px" }}>
            Main Menu
          </Typography>
          <LinkList postSelect={() => setDrawerOpen(false)} />
        </SwipeableDrawer>
      </Hidden>
    </Fragment>
  );
};

export default SideNav;
