import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

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
    height: "110px",
  },
  footerContainer: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  footerEmail: {
    marginLeft: 12,
    marginRight: 12,
    padding: 8,
    alignSelf: "center",
  },
}));

export default function Footer() {
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
          <Typography style={{ color: "white", fontSize: "1 rem" }}>
            CZECH SPACE OFFICE
          </Typography>
          <Typography style={{ color: "white", fontSize: "0.9rem" }}>
            Sokolovská 32/22
          </Typography>
          <Typography style={{ color: "white", fontSize: "0.9rem" }}>
            186 00 Praha 8
          </Typography>
        </div>
      </div>
      <div className={classes.footerEmail}>
        <Typography style={{ color: "white", fontSize: "1 rem" }}>
          info@czech-space.cz
        </Typography>
      </div>
    </div>
  );
}
