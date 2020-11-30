import React from "react";
import {
  makeStyles,
  Typography,
  IconButton,
  Tooltip,
  withStyles,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import Router from "next/router";

const useStyles = makeStyles((theme) => ({
  footerRoot: {
    display: "flex",
    background: "#003F5F",
    padding: 4,
    justifyContent: "space-between",
    marginTop: 50,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    // height: "110px",
  },
  footerContainer: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  footerTwitter: {
    color: "white",
    padding: 6,
    "&:hover": {
      color: "#1DA1F2",
    },
  },
  footerFacebook: {
    color: "white",
    padding: 6,
    "&:hover": {
      color: "#4267B2",
    },
  },
  footerEmail: {
    marginLeft: 12,
    marginRight: 12,
    padding: 0,
    alignSelf: "center",
  },
}));

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[2],
    fontSize: "1rem",
  },
}))(Tooltip);

export default function Footer({ pageProps, languageSelected }) {
  const device = pageProps.device;
  const classes = useStyles();
  return (
    <div className={classes.footerRoot}>
      <div className={classes.footerContainer}>
        <img
          src={"/logo.png"}
          alt="cso"
          style={{ height: "auto", width: "50%" }}
        ></img>
        <div style={{ marginLeft: 12 }}>
          <Typography
            style={{
              color: "white",
              fontSize: device && device === "mobile" ? "0.7rem" : "0.9rem",
            }}
          >
            Sokolovská 32/22
          </Typography>
          <Typography
            style={{
              color: "white",
              fontSize: device && device === "mobile" ? "0.7rem" : "0.9rem",
            }}
          >
            186 00 Praha 8
          </Typography>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <LightTooltip title="CSO na Twitteru" placement="right-start">
              <IconButton
                color="primary"
                aria-label="twitter CSO"
                className={classes.footerTwitter}
                onClick={(event) => {
                  event.preventDefault();
                  Router.push("https://twitter.com/Czech_Space");
                }}
              >
                <TwitterIcon />
              </IconButton>
            </LightTooltip>
            <LightTooltip title="CSO na Facebooku" placement="right-start">
              <IconButton
                aria-label="facebook CSO"
                className={classes.footerFacebook}
                onClick={(event) => {
                  event.preventDefault();
                  Router.push("https://www.facebook.com/CzechSpaceOffice/");
                }}
              >
                <FacebookIcon />
              </IconButton>
            </LightTooltip>
          </div>
        </div>
      </div>
      <div className={classes.footerEmail}>
        <Typography
          style={{
            color: "white",
            fontSize: device && device === "mobile" ? "0.7rem" : "0.9rem",
          }}
        >
          <a
            href={"mailto:info@czech-space.cz"}
            style={{ textDecoration: "none", color: "white" }}
          >
            {languageSelected === "cs"
              ? "E-mail: info@czech-space.cz"
              : "Email: info@czech-space.cz"}
          </a>
        </Typography>
        <Typography
          style={{
            color: "white",
            fontSize: device && device === "mobile" ? "0.7rem" : "0.9rem",
          }}
        >
          {languageSelected === "cs"
            ? "Telefonní číslo: +420 603 319 407"
            : "Phone number: +420 603 319 407"}
        </Typography>
      </div>
    </div>
  );
}
