import React from "react";
import { Grid } from "@material-ui/core";
import ArticleRow from "../../../components/aktuality/ArticleRow";
import BreadCrumbs from "../../../components/common/BreadCrumbs";
import parser from "ua-parser-js";

const colorMap = {
  space: "#231F20",
  other: "#f44336",
  news: "#262261",
  "vox-populi": "#F05A28",
};

const articles = [
  {
    id: 1,
    articleTitle: "VĚDA PRO DSG",
    articleImage: "/articles/n40_dsg.jpg",
    articleAlt: "spaceships",
    articleDesc:
      "Evropská kosmická agentura vyhlásila výzvu k předkládání nápadů na možné vědecké využití stanice Deep Space Gateway, která se bude nacházet v okolí Měsíce. Očekávají se zejména experimenty spojené se zajištěním dlouhodobých pilotovaných výprav. Návrhy vědeckých experimentů je nutné odevzdat nejpozději do 6. října 2017.",
    category: "other",
    articleDate: "30. srpna 2017",
  },
];

export default function Aktuality({ page, bredCrumbPages, device }) {
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
          page={page}
        />
      ))}
    </Grid>
  );
}

export async function getServerSideProps(context) {
  const ua = parser(context.req.headers["user-agent"]);
  let device = "desktop";
  if (ua.device) {
    if (ua.device.type) {
      device = ua.device.type;
    }
  }
  const pageTitle = "Příležitosti | Czech Space";

  const page = "/cs/prilezitosti";
  const bredCrumbPages = {
    subpageName: "Příležitosti",
    subpagePath: "/cs/prilezitosti",
  };

  return {
    props: { page, pageTitle, bredCrumbPages, device }, // will be passed to the page component as props
  };
}
