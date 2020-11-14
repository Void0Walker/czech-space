import React from "react";
import { Grid } from "@material-ui/core";
import BreadCrumbs from "../../../../components/common/BreadCrumbs";
import Article from "../../../../components/articles/Article";
import parser from "ua-parser-js";

export default function Clanek({ article, bredCrumbPages, device }) {
  return (
    <Grid
      container
      style={{ marginTop: device && device === "mobile" ? 72 : 100 }}
      spacing={0}
      justify="flex-start"
      wrap="wrap"
    >
      <Grid item xs={12}>
        <BreadCrumbs pages={bredCrumbPages} />
      </Grid>
      <Article article={article} device={device} />
    </Grid>
  );
}

export async function getServerSideProps(context) {
  const apiUrl = process.env.API_URL;
  const ua = parser(context.req.headers["user-agent"]);
  let device = "desktop";
  if (ua.device) {
    if (ua.device.type) {
      device = ua.device.type;
    }
  }

  let article = await fetch(`${apiUrl}/articles?slug=${context.query.clanek}`);
  article = await article.json();
  Array.isArray(article) ? (article = article[0]) : (article = article);

  const pageTitle = `${article.articleTitle} | Czech Space`;

  const bredCrumbPages = {
    name: article.articleTitle,
    friendlyURL: article.slug,
    subpageName: "Aktuality",
    subpagePath: "/cs/aktuality",
  };

  return {
    props: { article, bredCrumbPages, pageTitle, device },
  };
}
