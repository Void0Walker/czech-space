import React from "react";
import { Grid, Typography, makeStyles, Button } from "@material-ui/core";
import ResponsiveCard from "../components/common/ResponsiveCard";
import parser from "ua-parser-js";
import Router from "next/router";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "2.5rem",
    margin: 16,
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
}));

const colorMap = {
  space: "#231F20",
  Opportunities: "#f44336",
  News: "#262261",
  News: "#262261",
  "vox-populi": "#F05A28",
};
export default function Index({ articles }) {
  // console.log({ articles });

  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid
        container
        style={{ marginTop: 10 }}
        spacing={4}
        justify="flex-start"
        wrap="wrap"
      >
        <Grid item xs={12}>
          <Typography className={classes.title}>NEJNOVĚJŠÍ ČLÁNKY</Typography>
        </Grid>
        {articles.map((e) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={e.id}>
            <ResponsiveCard
              alt={e.articleAlt}
              image={e.articleImage ? e.articleImage[0].formats.small.url : ""}
              key={e.id}
              title={e.articleTitle}
              shortDesc={e.articleSubTitlePlain}
              articleUrl={"/cs/prilezitosti/" + e.slug}
              customColor={colorMap[e.category]}
              category={e.category.categoryName}
              // oppurtunitiesCard={true}
            ></ResponsiveCard>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button
            style={{ fontSize: "1.2rem", background: "white", borderRadius: 0 }}
            variant="contained"
            onClick={(event) => {
              event.preventDefault();
              Router.push("/cs/aktuality");
            }}
          >
            Zobrazit více
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  const pageTitle = "Hlavní | Czech Space";
  const page = "/";
  const ua = parser(context.req.headers["user-agent"]);
  const apiUrl = process.env.API_URL;
  let device = "desktop";

  let [pageContent, articles] = await Promise.all([
    fetch(`${process.env.API_URL}/home-page`),
    fetch(
      `${process.env.API_URL}/articles?_sort=published_at:desc&_limit=4&category.categoryName_in=Opportunities&category.categoryName_in=News`
    ),
  ]);

  [pageContent, articles] = await Promise.all([
    pageContent.json(),
    articles.json(),
  ]);

  articles.forEach((e) => {
    e["articleSubTitlePlain"] = e["articleSubTitle"].replace(/\*/gi, "");
  });

  if (ua.device) {
    if (ua.device.type) {
      device = ua.device.type;
    }
  }
  return {
    props: { page, pageTitle, device, apiUrl, pageContent, articles },
  };
}
