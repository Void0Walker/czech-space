import React from "react";
import {
  Container,
  Typography,
  Grid,
  makeStyles,
  Divider,
} from "@material-ui/core";
import ArticleRow from "../../../components/aktuality/ArticleRow";
import Link from "../../../components/Link";

const colorMap = {
  space: "#231F20",
  other: "#f44336",
  news: "#262261",
  "vox-populi": "#F05A28",
};

const articles = [
  {
    id: 1,
    articleTitle: "STUDENTSKÉ EXPERIMENTY NA MEZINÁRODNÍM BALÓNOVÉM PROJEKTU",
    articleImage: "/articles/cam06763.jpg",
    articleAlt: "studenti",
    articleDesc:
      "Česká kosmická kancelář bez projektového financování po roce opět umožnila českým studentským týmům zúčastnit se mezinárodního projektu „Citizen science close to space“.",
    category: "vox-populi",
    articleDate: "2019-12-31",
  },
  {
    id: 2,
    articleTitle: "LUCKY-7 MÍŘÍ DO KOSMU",
    articleImage: "/articles/n46_lucky.jpg",
    articleAlt: "lucky",
    articleDesc:
      "V pátek 5. července bude na oběžnou dráhu vypuštěna další česká vědecko-technologická družice Lucky-7, postavená soukromou společností SkyFox Labs. Společně s ní bude vypuštěno dalších 31 družic, mezi nimiž bude i družice Socrat-R, na jejíž palubě jsou dva české dozimetry vyvinuté na akademické půdě.“.",
    category: "other",
    articleDate: "2019-12-31",
  },
  {
    id: 1,
    articleTitle: "POJĎME VYUŽÍT ISS",
    articleImage: "/articles/n44_columbus.jpg",
    articleAlt: "n44_columbus",
    articleDesc:
      "Evropská kosmická agentura vyhlásila několik výzev na vědecké využívání Mezinárodní kosmické stanice ISS zaměřené na materiálový výzkum a studium vlivu prostředí kosmického letu na lidský organizmus. Výzvy jsou jedinečnou příležitostí pro zapojení českých vědeckých institucí do prestižního evropského kosmického výzkumu.",
    category: "space",
    articleDate: "2019-12-31",
  },
  {
    id: 1,
    articleTitle: "ČESKÉ STUDENTSKÉ EXPERIMENTY LETĚLY DO STRATOSFÉRY",
    articleImage: "/articles/styl2340e.jpg",
    articleAlt: "styl2340e",
    articleDesc:
      "Česká kosmická kancelář bez nároku na finanční odměnu zajistila příležitost pro české studentské týmy k vypuštění jejich experimentů na stratosférickém balónu až do výšky přibližně 22 km v rámci Near Space konference konané během jediného dne, 22. září 2018.",
    category: "space",
    articleDate: "2018-10-04",
  },
];

export default function Aktuality() {
  return (
    <Grid
      container
      style={{ marginTop: 100 }}
      spacing={5}
      justify="flex-start"
      wrap="wrap"
    >
      {articles.map((e) => (
        <ArticleRow {...e} customColor={colorMap[e.category]} />
      ))}
    </Grid>
  );
}

export async function getServerSideProps(context) {
  const page = "/cs/aktuality";
  return {
    props: { page }, // will be passed to the page component as props
  };
}
