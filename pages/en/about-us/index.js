import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import parser from "ua-parser-js";
import WysiWyg from "../../../components/articles/WysiWyg";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    background: "white",
    minHeight: "30vh",
  },
  aboutTitle: {
    textAlign: "center",
    marginTop: 145,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginTop: 60,
    },
    color: "#045A88",
    fontWeight: 600,
    fontSize: "2.5rem",
  },
  aboutParagraph: {
    background: "#045A88",
  },
  peopleParagraph: {
    background: "white",
  },
}));
export default function Aktuality({ pageContent, device }) {
  const classes = useStyles();
  return (
    <Grid container justify="flex-start" wrap="wrap">
      <Grid item xs={12} className={classes.aboutContainer}>
        <Typography className={classes.aboutTitle}>
          {pageContent.title}
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.aboutParagraph}>
        <Typography
          style={{
            color: "white",
            padding: "2%",
            textAlign: "center",
            marginLeft: "10%",
            marginRight: "10%",
            fontSize: "1.1rem",
          }}
        >
          <WysiWyg data={pageContent.description}></WysiWyg>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          style={{
            color: "black",
            padding: "2%",
            textAlign: "center",
            marginLeft: "10%",
            marginRight: "10%",
          }}
        >
          <WysiWyg data={pageContent.description2}></WysiWyg>
        </Typography>
      </Grid>
    </Grid>
  );
}

export async function getServerSideProps(context) {
  const apiUrl = process.env.API_URL;
  const ua = parser(context.req.headers["user-agent"]);
  let device = "desktop";
  let pageContent = await fetch(`${process.env.API_URL}/o-nas`);
  pageContent = await pageContent.json();
  if (ua.device) {
    if (ua.device.type) {
      device = ua.device.type;
    }
  }
  const pageTitle = "About us | Czech Space";
  const page = "/en/about-us";

  return {
    props: { page, pageTitle, device, pageContent, apiUrl },
  };
}
