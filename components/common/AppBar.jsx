import React from "react";
import {
  fade,
  makeStyles,
  AppBar,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import ArchiveIcon from "@material-ui/icons/Archive";
import Router, { useRouter } from "next/router";
import SearchAutocomplete from "../../components/common/SearchAutocomplete";
import { Language } from "@material-ui/icons";

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
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  csoImageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: "10%",

    [theme.breakpoints.down("md")]: {
      marginRight: "1%",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navigationEntryAktuality: {
    background: "#003F5F",
    color: "white",
    padding: 12,
    width: "12%",
    [theme.breakpoints.down("sm")]: {
      width: "14%",
      padding: "16px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "14%",
      padding: 10,
    },
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
    [theme.breakpoints.down("sm")]: {
      width: "12%",
      padding: "16px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "12%",
      padding: 10,
    },
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
    [theme.breakpoints.down("sm")]: {
      width: "16%",
      padding: "16px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "16%",
      padding: 10,
    },
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
    [theme.breakpoints.down("sm")]: {
      width: "12%",
      padding: "16px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "12%",
      padding: 10,
    },
    width: "13%",
    textAlign: "center",
    cursor: "pointer",
    "&:hover": {
      background: "#f44336",
      color: "white",
    },
  },
  active: {
    // padding: 12,
    [theme.breakpoints.down("sm")]: {
      padding: "16px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: 10,
    },
    textAlign: "center",
    cursor: "pointer",
    background: "#f44336",
    color: "white",
  },
  search: {
    borderRadius: theme.shape.borderRadius,
    // padding: 8,
    width: "25%",
    textAlign: "left",
    marginLeft: "8px",
    marginRight: 8,
    cursor: "pointer",
    background: "#1D6B87",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      width: "29%",
      marginLeft: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      width: "33%",
      margin: 0,
      padding: 0,
      borderRadius: 0,
    },
  },
  navigationText: {
    fontSize: "0.9rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.7rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.6rem",
    },
  },
  languageSelector: {
    margin: 10,
    cursor: "pointer",
    fontSize: "2rem",
    color: "white",
    "&:hover": {
      color: "#f44336",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
      margin: 0,
    },
  },
}));

const urlMap = {
  cs: {
    home: "/",
    news: "/cs/aktuality",
    aboutUs: "/cs/o-nas",
    opportunities: "/cs/prilezitosti",
    archive: "/cs/archiv",
  },
  en: {
    home: "/en",
    news: "/en/news",
    aboutUs: "/en/about-us",
    opportunities: "/en/opportunities",
    archive: "/en/archive",
  },
};

export default function ButtonAppBar({ apiUrl, languageSelected }) {
  const classes = useStyles();
  let path = useRouter();
  path = path.pathname;

  const [language, setLanguage] = React.useState("EN");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className={classes.root}>
      <AppBar elevation={4} className={classes.appBar}>
        <div className={classes.csoImageContainer}>
          <img src={"/logo.png"} alt="cso" className={classes.csoImage}></img>
        </div>
        <div
          className={`${classes.navigationEntryAktuality} ${
            path === "/" ? classes.active : path === "/en" ? classes.active : ""
          }`}
          onClick={(event) => {
            event.preventDefault();
            Router.push(urlMap[languageSelected].home);
          }}
        >
          <HomeIcon></HomeIcon>
          <Typography className={classes.navigationText}>
            {languageSelected === "cs" ? "DOMŮ" : "HOME"}
          </Typography>
        </div>
        <div
          className={`${classes.navigationEntryAktuality} ${
            path === "/cs/aktuality" ? classes.active : ""
          }`}
          onClick={(event) => {
            event.preventDefault();
            Router.push(urlMap[languageSelected].news);
          }}
        >
          <LibraryBooksIcon />
          <Typography className={classes.navigationText}>
            {languageSelected === "cs" ? "AKTUALITY" : "NEWS"}
          </Typography>
        </div>
        <div
          className={`${classes.navigationPrilezitosti} ${
            path === "/cs/prilezitosti" ? classes.active : ""
          }`}
          onClick={(event) => {
            event.preventDefault();
            Router.push(urlMap[languageSelected].opportunities);
          }}
        >
          <FlashOnIcon />
          <Typography className={classes.navigationText}>
            {languageSelected === "cs" ? "PŘÍLEŽITOSTI" : "OPPORTUNITIES"}
          </Typography>
        </div>
        <div
          className={`${classes.navigationEntryOnas} ${
            path === "/cs/o-nas"
              ? classes.active
              : path === "/en/about-us"
              ? classes.active
              : ""
          }`}
          onClick={(event) => {
            event.preventDefault();
            Router.push(urlMap[languageSelected].aboutUs);
          }}
        >
          <InfoIcon></InfoIcon>
          <Typography className={classes.navigationText}>
            {languageSelected === "cs" ? "O NÁS" : "ABOUT US"}
          </Typography>
        </div>
        <div
          className={`${classes.navigationArchiv} ${
            path === "/cs/archiv" ? classes.active : ""
          }`}
          onClick={(event) => {
            event.preventDefault();
            Router.push(urlMap[languageSelected].archive);
          }}
        >
          <ArchiveIcon />
          <Typography className={classes.navigationText}>
            {languageSelected === "cs" ? "ARCHIV" : "ARCHIVE"}
          </Typography>
        </div>
        <div
          className={classes.languageSelector}
          onClick={(event) => {
            event.preventDefault();
            let home = languageSelected === "cs" ? "/en/" : "/";
            Router.push(home);
          }}
        >
          {languageSelected === "cs" ? "EN" : "CS"}
        </div>
        <div className={classes.search}>
          <SearchAutocomplete
            apiUrl={apiUrl}
            languageSelected={languageSelected}
          ></SearchAutocomplete>
        </div>
      </AppBar>
    </div>
  );
}
