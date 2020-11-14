import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
// import ArticleRow from "../../../components/aktuality/ArticleRow";
import BreadCrumbs from "../../../components/common/BreadCrumbs";
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
    // padding: 16,
    fontWeight: 600,
    fontSize: "2.5rem",
  },
  aboutParagraph: {
    background: "#045A88",
    // background: "#1D6B87",
    // minHeight: "25vh",
  },
  peopleParagraph: {
    background: "white",
  },
}));
export default function Aktuality({
  page,
  bredCrumbPages,
  pageContent,
  device,
}) {
  const classes = useStyles();
  return (
    <Grid
      container
      // style={{ marginTop: 88 }}
      // spacing={3}
      justify="flex-start"
      wrap="wrap"
    >
      {/* <Grid item xs={12}>
        <BreadCrumbs pages={bredCrumbPages} />
      </Grid> */}
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
  const pageTitle = "O nás | Czech Space";

  const page = "/cs/o-nas";
  const bredCrumbPages = {
    subpageName: "O nás",
    subpagePath: "/cs/o-nas",
  };

  return {
    props: { page, pageTitle, bredCrumbPages, device, pageContent, apiUrl },
  };
}
