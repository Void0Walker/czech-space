import React from "react";
import { Grid } from "@material-ui/core";
import BreadCrumbs from "../../../../components/common/BreadCrumbs";
import Article from "../../../../components/articles/Article";
import parser from "ua-parser-js";

export default function Clanek({ article, bredCrumbPages }) {
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
      <Article
        article={article}
        altFloat={article.articleAltFloat ? true : false}
      />
    </Grid>
  );
}

export async function getServerSideProps(context) {
  let article = articles.filter(
    (e) => e.articleUrl === context.query.clanek
  )[0];

  const pageTitle = `${article.articleTitle} | Czech Space`;

  const bredCrumbPages = {
    name: article.articleTitle,
    friendlyURL: article.articleUrl,
    subpageName: "O nás",
    subpagePath: "/cs/o-nas",
  };

  return {
    props: { article, bredCrumbPages, pageTitle }, // will be passed to the page component as props
  };
}
