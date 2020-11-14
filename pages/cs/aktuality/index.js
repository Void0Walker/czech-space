import React from "react";
import { Grid } from "@material-ui/core";
import ArticleRow from "../../../components/aktuality/ArticleRow";
import BreadCrumbs from "../../../components/common/BreadCrumbs";
import Pagination from "../../../components/common/Pagination";
import { useRouter } from "next/router";
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
  device,
}) {
  // const router = useRouter();
  // console.log(articleCount);

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
        <ArticleRow
          {...e}
          key={e.id}
          customColor={colorMap[e.category]}
          page={rootPage}
        />
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
  const pageTitle = "Aktuality | Czech Space";
  const rootPage = "/cs/aktuality";
  const bredCrumbPages = {
    subpageName: "Aktuality",
    subpagePath: "/cs/aktuality",
  };

  let device = "desktop";
  if (ua.device) {
    if (ua.device.type) {
      device = ua.device.type;
    }
  }

  console.log({ device });

  const start = +page === 1 ? 0 : (+page - 1) * 10;

  let [articleCount, articles] = await Promise.all([
    fetch(`${process.env.API_URL}/articles/count?category.categoryName=News`),
    // fetch(`${process.env.API_URL}/articles?_limit=10&_start=${start}`),
    fetch(
      `${process.env.API_URL}/articles?category.categoryName=News&_limit=10&_start=${start}`
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
    },
  };
}
