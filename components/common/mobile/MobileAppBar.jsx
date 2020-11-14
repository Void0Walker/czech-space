import React from "react";
import { makeStyles, AppBar, Toolbar, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";
import Link from "../../Link";
import MobileDrawer from "./MobileDrawer";
import MobileList from "./MobileList";
import Router from "next/router";

// import SearchAutoComplete from "../SearchAutocomplete";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  mobileAppBar: { background: "#003F5F", color: "white" },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MobileAppBar({ apiUrl, layers, auth }) {
  const navigationPages = [
    { name: "AKTUALITY", uri: "/cs/aktuality" },
    { name: "PŘÍLEŽITOSTI", uri: "/cs/prilezitosti" },
    { name: "O NÁS", uri: "/cs/o-nas" },
    { name: "ARCHIV", uri: "/cs/archiv" },
  ];
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showLogin, setShowlogin] = React.useState(false);
  const [dropDown, setDropDown] = React.useState(false);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleOpenDropDown = (event) => {
    setDropDown(!dropDown);
  };
  const handleLogin = (event) => {
    setShowlogin(!showLogin);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar elevation={1} className={classes.mobileAppBar}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <img src={"/logo.png"} alt="cso" style={{ width: "80%" }}></img>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <IconButton
                aria-label="search"
                style={{ color: "white" }}
                onClick={handleOpenDropDown}
              >
                {dropDown ? <ArrowDropDownIcon /> : <SearchIcon />}
              </IconButton>
            </div>
            <MobileDrawer navigationPages={navigationPages} />
          </div>
        </Toolbar>
        {/* {dropDown ? (
          <Toolbar>
            <SearchAutoComplete apiUrl={apiUrl} fullWidth={true} />
          </Toolbar>
        ) : (
          ""
        )} */}
      </AppBar>
    </div>
  );
}
