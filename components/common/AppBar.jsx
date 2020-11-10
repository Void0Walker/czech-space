import React from "react";
import { makeStyles, AppBar, Typography } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import ArchiveIcon from "@material-ui/icons/Archive";
import Router from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: "#003F5F",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "black",
  },
  toolBarStyles: {
    display: "flex",
    borderBottom: "1px solid #222222",
  },
  subToolbar: {
    display: "flex",
    height: "3%",
  },
  title: {
    fontWeight: 600,
    fontSize: "2rem",
  },
  csoImage: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  csoImageContainer: {
    marginRight: "10%",
    [theme.breakpoints.down("md")]: {
      marginRight: "1%",
    },
  },
  navigationEntryAktuality: {
    background: "#003F5F",
    color: "white",
    padding: 12,
    width: "12%",
    textAlign: "center",
    cursor: "pointer",
    "&:hover": {
      background: "#f44336",
      color: "white",
      borderRight: "white",
    },
  },
  navigationEntryOnas: {
    color: "white",
    background: "#003F5F",
    padding: 12,
    width: "12%",
    textAlign: "center",
    cursor: "pointer",
    "&:hover": {
      background: "#f44336",
      color: "white",
    },
  },
  navigationPrilezitosti: {
    color: "white",
    background: "#003F5F",
    padding: 12,
    width: "12%",
    textAlign: "center",
    cursor: "pointer",
    "&:hover": {
      background: "#f44336",
      color: "white",
    },
  },
  navigationArchiv: {
    color: "white",
    background: "#003F5F",
    padding: 12,
    width: "12%",
    textAlign: "center",
    cursor: "pointer",
    "&:hover": {
      background: "#f44336",
      color: "white",
    },
  },
  active: {
    padding: 12,
    width: "12%",
    textAlign: "center",
    cursor: "pointer",
    background: "#f44336",
    color: "white",
  },
  search: {
    padding: 24,
    width: "25%",
    textAlign: "left",
    marginLeft: "auto",
    marginRight: 0,
    cursor: "pointer",
    background: "#005a88",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      width: "12%",
    },
  },
}));

export default function ButtonAppBar({ page }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar elevation={4} className={classes.appBar}>
        <div className={classes.csoImageContainer}>
          <img src={"/logo.png"} alt="cso" className={classes.csoImage}></img>
        </div>
        <div
          className={`${classes.navigationEntryAktuality} ${
            page === "/" ? classes.active : ""
          }`}
          onClick={(event) => {
            event.preventDefault();
            Router.push("/  ");
          }}
        >
          <HomeIcon></HomeIcon>
          <Typography style={{ fontSize: "0.9rem" }}>DOMU</Typography>
        </div>
        <div
          className={`${classes.navigationEntryAktuality} ${
            page === "/cs/aktuality" ? classes.active : ""
          }`}
          onClick={(event) => {
            event.preventDefault();
            Router.push("/cs/aktuality");
          }}
        >
          <LibraryBooksIcon />
          <Typography style={{ fontSize: "0.9rem" }}>AKTUALITY</Typography>
        </div>
        <div
          className={`${classes.navigationPrilezitosti} ${
            page === "/cs/prilezitosti" ? classes.active : ""
          }`}
          onClick={(event) => {
            event.preventDefault();
            Router.push("/cs/prilezitosti");
          }}
        >
          <FlashOnIcon />
          <Typography style={{ fontSize: "0.9rem" }}>PŘÍLEŽITOSTI</Typography>
        </div>
        <div
          className={`${classes.navigationEntryOnas} ${
            page === "/cs/o-nas" ? classes.active : ""
          }`}
          onClick={(event) => {
            event.preventDefault();
            Router.push("/cs/o-nas");
          }}
        >
          <InfoIcon></InfoIcon>
          <Typography style={{ fontSize: "0.9rem" }}>O NÁS</Typography>
        </div>
        <div
          className={`${classes.navigationArchiv} ${
            page === "/cs/archiv" ? classes.active : ""
          }`}
          onClick={(event) => {
            event.preventDefault();
            Router.push("/cs/archiv");
          }}
        >
          <ArchiveIcon />
          <Typography style={{ fontSize: "0.9rem" }}>ARCHIV</Typography>
        </div>
        <div className={classes.search}>
          <Typography>Hledání...</Typography>
        </div>
      </AppBar>
    </div>
  );
}
