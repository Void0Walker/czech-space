import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Container } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import ArchiveIcon from "@material-ui/icons/Archive";
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
    // marginRight: "auto",
  },
  navigationEntryAktuality: {
    // borderTopLeftRadius: 12,
    // borderBottomLeftRadius: 12,
    background: "#003F5F",
    color: "white",
    // fontSize: "0.8rem",
    // fontWeight: 700,
    padding: 12,
    width: "12%",
    textAlign: "center",
    // borderLeft: "1px solid white",
    // borderRight: "4px solid #003F5F",
    cursor: "pointer",
    "&:hover": {
      // background: "#ef6c00",
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
    // borderRight: "4px solid #003F5F",
    cursor: "pointer",
    "&:hover": {
      // background: "#388e3c",
      background: "#f44336",
      color: "white",
      // borderRight: "white",
    },
  },
  navigationPrilezitosti: {
    color: "white",
    background: "#003F5F",
    padding: 12,
    width: "12%",
    textAlign: "center",
    // borderRight: "4px solid #003F5F",
    cursor: "pointer",
    "&:hover": {
      background: "#f44336",
      // background: "#0288d1",
      color: "white",
      // borderRight: "white",
    },
  },
  navigationArchiv: {
    // background: "white",
    color: "white",
    background: "#003F5F",
    padding: 12,
    width: "12%",
    textAlign: "center",
    cursor: "pointer",
    "&:hover": {
      background: "#f44336",
      color: "white",
      // borderRight: "white",
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
}));

export default function ButtonAppBar({ page }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar elevation={4} className={classes.appBar}>
        {/* <div
          style={{
            background: "#003F5F",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        > */}
        <div style={{ marginRight: "10%" }}>
          <img src={"/logo.png"} alt="cso"></img>
        </div>
        {/* <Typography
          component="div"
          style={{ color: "white", fontSize: "1.2rem", flexGrow: 1 }}
        >
          CZECH SPACE OFFICE
        </Typography> */}

        <div
          className={`${classes.navigationEntryAktuality} ${
            page === "/" ? classes.active : ""
          }`}
        >
          <HomeIcon></HomeIcon>
          <Typography style={{ fontSize: "0.9rem" }}>Domu</Typography>
        </div>
        <div className={classes.navigationEntryAktuality}>
          <LibraryBooksIcon />
          <Typography style={{ fontSize: "0.9rem" }}>AKTUALITY</Typography>
        </div>
        <div className={classes.navigationEntryOnas}>
          <InfoIcon></InfoIcon>
          <Typography style={{ fontSize: "0.9rem" }}>O NÁS</Typography>
        </div>
        <div className={classes.navigationPrilezitosti}>
          <FlashOnIcon />
          <Typography style={{ fontSize: "0.9rem" }}>PŘÍLEŽITOSTI</Typography>
        </div>
        <div className={classes.navigationArchiv}>
          <ArchiveIcon />
          <Typography style={{ fontSize: "0.9rem" }}>ARCHIV</Typography>
        </div>
        {/* </div> */}
      </AppBar>
    </div>
  );
}
