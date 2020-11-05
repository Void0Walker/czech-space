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

// const articles = [
//   {
//     id: 1,
//     articleTitle: "STUDENTSKÉ EXPERIMENTY NA MEZINÁRODNÍM BALÓNOVÉM PROJEKTU",
//     articleImage: "/articles/cam06763.jpg",
//     articleAlt: "studenti",
//     articleDesc:
//       "Česká kosmická kancelář bez projektového financování po roce opět umožnila českým studentským týmům zúčastnit se mezinárodního projektu „Citizen science close to space“.",
//     category: "vox-populi",
//     articleDate: "2019-12-31",
//   },
//   {
//     id: 2,
//     articleTitle: "LUCKY-7 MÍŘÍ DO KOSMU",
//     articleImage: "/articles/n46_lucky.jpg",
//     articleAlt: "lucky",
//     articleDesc:
//       "V pátek 5. července bude na oběžnou dráhu vypuštěna další česká vědecko-technologická družice Lucky-7, postavená soukromou společností SkyFox Labs. Společně s ní bude vypuštěno dalších 31 družic, mezi nimiž bude i družice Socrat-R, na jejíž palubě jsou dva české dozimetry vyvinuté na akademické půdě.“.",
//     category: "other",
//     articleDate: "2019-12-31",
//   },
//   {
//     id: 3,
//     articleTitle: "POJĎME VYUŽÍT ISS",
//     articleImage: "/articles/n44_columbus.jpg",
//     articleAlt: "n44_columbus",
//     articleDesc:
//       "Evropská kosmická agentura vyhlásila několik výzev na vědecké využívání Mezinárodní kosmické stanice ISS zaměřené na materiálový výzkum a studium vlivu prostředí kosmického letu na lidský organizmus. Výzvy jsou jedinečnou příležitostí pro zapojení českých vědeckých institucí do prestižního evropského kosmického výzkumu.",
//     category: "space",
//     articleDate: "2019-12-31",
//   },
//   {
//     id: 4,
//     articleTitle: "ČESKÉ STUDENTSKÉ EXPERIMENTY LETĚLY DO STRATOSFÉRY",
//     articleImage: "/articles/styl2340e.jpg",
//     articleAlt: "styl2340e",
//     articleDesc:
//       "Česká kosmická kancelář bez nároku na finanční odměnu zajistila příležitost pro české studentské týmy k vypuštění jejich experimentů na stratosférickém balónu až do výšky přibližně 22 km v rámci Near Space konference konané během jediného dne, 22. září 2018.",
//     category: "space",
//     articleDate: "2018-10-04",
//   },
//   {
//     id: 5,
//     articleTitle: "OVLIVNĚTE VÝZKUM NA ISS",
//     articleImage: "/articles/n41_plants.jpg",
//     articleAlt: "styl2340e",
//     articleDesc:
//       "Evropská kosmická agentura vyzývá vědeckou komunitu k účasti na diskuzi o budoucím výzkumu zaměřeném na biologii rostlin v podmínkách kosmického letu. K této příležitosti uspořádá 20. listopadu 2017 workshop, který se uskuteční ve středisku ESA ESTEC. Výstupy ovlivní chystanou výzvu na nové experimenty pro ISS.",
//     category: "news",
//     articleDate: "2. listopadu 2017",
//   },
// ];

export default function Aktuality({
  rootPage,
  bredCrumbPages,
  articles,
  articleCount,
  page,
}) {
  const router = useRouter();
  console.log(articleCount);

  const lastPage = Math.ceil(articleCount / 2);

  return (
    <Grid
      container
      style={{ marginTop: 88 }}
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
      <Grid item xs={12}>
        <br />
        <Pagination totalPages={lastPage} pathname={rootPage}></Pagination>
      </Grid>
    </Grid>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const pageTitle = "Aktuality | Czech Space";
  const rootPage = "/cs/aktuality";
  const bredCrumbPages = {
    subpageName: "Aktuality",
    subpagePath: "/cs/aktuality",
  };

  const start = +page === 1 ? 0 : (+page - 1) * 2;

  console.log(start);

  let [articleCount, articles] = await Promise.all([
    fetch(`${process.env.API_URL}/articles/count`),
    fetch(`${process.env.API_URL}/articles?_limit=2&_start=${start}`),
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
    },
  };
}
