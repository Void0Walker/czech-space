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
    articleTitle: "O TERMINOLOGII",
    articleImage: "/articles/gtnasa.jpg",
    articleAlt: "spaceships",
    articleDesc:
      "Pohyb je základní přírodní jev, fenomén, který patří k nejrůznějším projevům všech součástí našeho světa. Jeho druhů může být vícero a proto je i v lidské řeči, češtinu nevyjímaje, řada výrazů, kterými jsou tyto pohyby nazývány. Fyzická konstituce těla člověku umožňuje vlastní silou pohyb po pevném povrchu. Tedy ve dvou rozměrech, když ve třetím rozměru jsou jeho možnosti pohybu velmi omezené.",
    category: "other",
    articleDate: "23. srpna 2018",
  },
  {
    id: 2,
    articleTitle: "ZAMĚSTNANCI",
    articleImage: "/articles/kolar_web.jpg",
    articleAlt: "lucky",
    articleDesc: "Seznam pracovníků, jejich pozice a kontaktní údaje.",
    category: "other",
    articleDate: "8. února 2018",
  },
  {
    id: 3,
    articleTitle: "VZHŮRU NA MĚSÍC",
    articleImage: "/articles/n42_lander_all.jpeg",
    articleAlt: "n44_columbus",
    articleDesc:
      "Česká kosmická kancelář navázala spolupráci s americkou společností Astrobotic Technology, která našim pracovištím nabízí dopravu malého vědeckého zařízení na povrch Měsíce. Bližší informace o technických i finančních aspektech budou poskytnuty na připravovaném workshopu, který se uskuteční 23. listopadu 2017 v kanceláři CSO.",
    category: "space",
    articleDate: "20. listopadu 2017",
  },
  {
    id: 4,
    articleTitle: "POVÍDÁNÍ S ASTRONAUTKOU",
    articleImage: "/articles/metc09.jpg",
    articleAlt: "styl2340e",
    articleDesc:
      "Čeští studenti se ve středu 27. září 2017 setkali se s americkou astronautkou Dorothy Metcalf-Lindenburgerovou, jež se v roce 2010 vydala na patnáctidenní misi raketoplánu Discovery k Mezinárodní kosmické stanici. Vzdělávací akci uspořádala Česká kosmická kancelář ve spolupráci s Americkým centrem Velvyslanectví USA v Praze.",
    category: "space",
    articleDate: "16. října 2017",
  },
  {
    id: 5,
    articleTitle: "KOSMICKÁ AKADEMIE 2017",
    articleImage: "/articles/01-ucastnici.jpg",
    articleAlt: "01-ucastnici",
    articleDesc:
      "Česká kosmická kancelář zahájila druhý ročník vzdělávacího projektu Space Academy – Kosmická akademie pro nadané studenty. Letos se jej účastní celkem 13 chlapců a děvčat ve věku od 10 do 18 let, pro které je připraven bohatý program spojený s návštěvou zajímavých míst a osobností české kosmonautiky.",
    category: "space",
    articleDate: "13. září 2017",
  },
];

export default function Aktuality({ page, bredCrumbPages }) {
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
  const pageTitle = "O nás | Czech Space";

  const page = "/cs/o-nas";
  const bredCrumbPages = {
    subpageName: "O nás",
    subpagePath: "/cs/o-nas",
  };

  return {
    props: { page, pageTitle, bredCrumbPages, device },
  };
}
