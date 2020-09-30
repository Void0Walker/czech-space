import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";

export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        marginTop: 50,
        width: "100%",
        background: "#003F5F",
        padding: 8,
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
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
      <div
        style={{
          marginLeft: 12,
          marginRight: 12,
          padding: 8,
          alignSelf: "center",
        }}
      >
        <Typography style={{ color: "white", fontSize: "1 rem" }}>
          info@czech-space.cz
        </Typography>
      </div>
    </div>
  );
}
