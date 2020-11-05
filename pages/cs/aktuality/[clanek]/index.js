import React from "react";
import { Container, Typography, Grid, makeStyles } from "@material-ui/core";
import BreadCrumbs from "../../../../components/common/BreadCrumbs";
import Article from "../../../../components/articles/Article";

export default function Clanek({ article, bredCrumbPages }) {
  return (
    <Grid
      container
      style={{ marginTop: 100 }}
      spacing={0}
      justify="flex-start"
      wrap="wrap"
    >
      <Grid item xs={12}>
        <BreadCrumbs pages={bredCrumbPages} />
      </Grid>
      <Article article={article} />
    </Grid>
  );
}

export async function getServerSideProps(context) {
  let article = await fetch(
    `http://localhost:1337/articles?slug=${context.query.clanek}`
  );
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
    props: { article, bredCrumbPages, pageTitle },
  };
}
