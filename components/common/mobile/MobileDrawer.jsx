import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import MobileList from "./MobileList";
import Router from "next/router";

const useStyles = makeStyles({
  fullList: {
    width: "auto",
  },
  menuButton: {
    marginRight: 0,
  },
});

export default function MobileDrawer({ navigationPages }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open, redirect) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    if (redirect) {
      setState({ ...state, [anchor]: open });
      Router.push(redirect);
    } else {
      setState({ ...state, [anchor]: open });
    }
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="navigation"
    >
      <MobileList
        toggleDrawer={toggleDrawer}
        navigationPages={navigationPages}
      />
    </div>
  );

  return (
    <div>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(anchor, true)}
          >
            {state.top ? <MenuOpenIcon></MenuOpenIcon> : <MenuIcon />}
          </IconButton>
          <Drawer
            transitionDuration={300}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
