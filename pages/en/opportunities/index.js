import React from "react";
import { Grid } from "@material-ui/core";
import BreadCrumbs from "../../../components/common/BreadCrumbs";
import Pagination from "../../../components/common/Pagination";
import ResponsiveCard from "../../../components/common/ResponsiveCard";
import parser from "ua-parser-js";

const colorMap = {
  space: "#231F20",
  other: "#f44336",
  news: "#262261",
  "vox-populi": "#F05A28",
};

export default function Aktuality({
  rootPage,
  bredCrumbPages,
  articles,
  articleCount,
  // page,
  device,
}) {
  const lastPage = Math.ceil(articleCount / 10);
  return (
    <Grid
      container
      style={{ marginTop: device && device === "mobile" ? 60 : 88 }}
      spacing={3}
      justify="flex-start"
      wrap="wrap"
    >
      <Grid item xs={12}>
        <BreadCrumbs pages={bredCrumbPages} />
      </Grid>
      {articles.map((e) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={e.id}>
          <ResponsiveCard
            alt={e.articleAlt}
            image={e.articleImage ? e.articleImage[0].url : ""}
            key={e.id}
            title={e.articleTitle}
            shortDesc={e.articleSubTitlePlain}
            articleUrl={"/en/opportunities/" + e.slug}
            customColor={colorMap[e.category]}
            oppurtunitiesCard={true}
          />
        </Grid>
      ))}
      <Grid container item xs={12} justify="center">
        <br />
        <Pagination totalPages={lastPage} pathname={rootPage}></Pagination>
      </Grid>
    </Grid>
  );
}

export async function getServerSideProps({ query: { page = 1 }, req }) {
  const ua = parser(req.headers["user-agent"]);
  const apiUrl = process.env.API_URL;
  const pageTitle = "Opportunities | Czech Space";
  const rootPage = "/en/opportunities";
  const bredCrumbPages = {
    subpageName: "Opportunities",
    subpagePath: "/en/opportunities",
    language: "en",
  };

  let device = "desktop";
  if (ua.device) {
    if (ua.device.type) {
      device = ua.device.type;
    }
  }

  const start = +page === 1 ? 0 : (+page - 1) * 10;

  let [articleCount, articles] = await Promise.all([
    fetch(
      `${process.env.API_URL}/articles/count?category.categoryName=Opportunities`
    ),
    fetch(
      `${process.env.API_URL}/articles?category.categoryName=Opportunities&_limit=10&_start=${start}`
    ),
  ]);

  [articleCount, articles] = await Promise.all([
    articleCount.json(),
    articles.json(),
  ]);

  articles.forEach((e) => {
    e["articleSubTitlePlain"] = e["articleSubTitle"].replace(/\*/gi, "");
  });

  return {
    props: {
      rootPage,
      pageTitle,
      bredCrumbPages,
      articles,
      articleCount,
      page: +page,
      device,
      apiUrl,
    },
  };
}
