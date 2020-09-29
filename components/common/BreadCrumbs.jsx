import React from "react";
import { Breadcrumbs, makeStyles, Typography } from "@material-ui/core";
import Link from "../Link";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#323232",
  },
  crumbStyle: {
    color: "#989898",
    textDecoration: "none",
    fontSize: "0.9rem",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export default function SimpleBreadcrumbs(props) {
  const router = useRouter();
  const classes = useStyles();
  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.root}>
      <Typography
        className={classes.crumbStyle}
        color="inherit"
        component={Link}
        naked
        href="/"
        as="/"
      >
        Hlavní stránka
      </Typography>
      <Typography
        className={classes.crumbStyle}
        color="inherit"
        component={Link}
        naked
        href={props.pages.subpagePath}
        as={props.pages.subpagePath}
      >
        {props.pages.subpageName}
      </Typography>
      <Typography
        className={classes.crumbStyle}
        component={Link}
        style={{ color: "#005A88" }}
        naked
        href={props.pages.friendlyURL}
      >
        {props.pages.name}
      </Typography>
    </Breadcrumbs>
  );
}
