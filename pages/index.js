import React from "react";
import HomeCarousel from "../components/homepage/HomeCarousel";

import { Grid, Typography } from "@material-ui/core";
import BootstarpCarousel from "../components/homepage/BootstarpCarousel";
import ResponsiveCard from "../components/homepage/ResponsiveCard";

const articles = [
  {
    id: 1,
    title: "O TERMINOLOGII",
    shortDesc: `Pohyb je základní přírodní jev, fenomén, který patří k nejrůznějším
projevům všech součástí našeho světa. Jeho druhů může být vícero a
proto je i v lidské řeči, češtinu nevyjímaje, řada výrazů, kterými
jsou tyto pohyby nazývány. Fyzická konstituce těla člověku umožňuje
vlastní silou pohyb po pevném povrchu. Tedy ve dvou rozměrech, když
ve třetím rozměru jsou jeho možnosti pohybu velmi omezené.`,
    img: "/space-carousel/gtnasa.jpg",
    alt: "nasa",
    category: "other",
    articleUrl: "/cs/o-nas/o-terminologii",
  },
  {
    id: 2,
    title: "VZHŮRU NA MĚSÍC",
    shortDesc: `Česká kosmická kancelář navázala spolupráci s americkou společností Astrobotic Technology, která našim pracovištím nabízí dopravu malého vědeckého zařízení na povrch Měsíce. Bližší informace o technických i finančních aspektech budou poskytnuty na připravovaném workshopu, který se uskuteční 23. listopadu 2017 v kanceláři CSO.`,
    img: "/space-carousel/n42_lander_all.jpeg",
    alt: "lander_all",
    category: "space",
    articleUrl: "/cs/o-nas/vzhuru-na-mesic",
  },
  {
    id: 3,
    title: "OVLIVNĚTE VÝZKUM NA ISS",
    shortDesc: `Evropská kosmická agentura vyzývá vědeckou komunitu k účasti na diskuzi o budoucím výzkumu zaměřeném na biologii rostlin v podmínkách kosmického letu. K této příležitosti uspořádá 20. listopadu 2017 workshop, který se uskuteční ve středisku ESA ESTEC. Výstupy ovlivní chystanou výzvu na nové experimenty pro ISS.`,
    img: "/space-carousel/n41_plants.jpg",
    alt: "lander_all",
    articleUrl: "/cs/aktuality/ovlivnete-vyzkum-na-iss",
    category: "",
  },
  {
    id: 4,
    title: "KOSMICKÁ AKADEMIE 2017",
    shortDesc: `Česká kosmická kancelář zahájila druhý ročník vzdělávacího projektu Space Academy – Kosmická akademie pro nadané studenty. Letos se jej účastní celkem 13 chlapců a děvčat ve věku od 10 do 18 let, pro které je připraven bohatý program spojený s návštěvou zajímavých míst a osobností české kosmonautiky.`,
    img: "/space-carousel/01-ucastnici.jpg",
    alt: "people",
    category: "vox-populi",
    articleUrl: "/cs/o-nas/kosmicka-akademie-2017",
  },
  {
    id: 5,
    title: "VĚDA PRO DSG",
    shortDesc: `Česká kosmická kancelář zahájila druhý ročník vzdělávacího projektu Space Academy – Kosmická akademie pro nadané studenty. Letos se jej účastní celkem 13 chlapců a děvčat ve věku od 10 do 18 let, pro které je připraven bohatý program spojený s návštěvou zajímavých míst a osobností české kosmonautiky.`,
    img: "/space-carousel/n40_dsg.jpg",
    alt: "lander_all",
    category: "space",
    articleUrl: "/cs/prilezitosti/veda-pro-dsg",
  },
  {
    id: 6,
    title: "POVÍDÁNÍ S ASTRONAUTKOU",
    shortDesc: `Čeští studenti se ve středu 27. září 2017 setkali se s americkou astronautkou Dorothy Metcalf-Lindenburgerovou, jež se v roce 2010 vydala na patnáctidenní misi raketoplánu Discovery k Mezinárodní kosmické stanici. Vzdělávací akci uspořádala Česká kosmická kancelář ve spolupráci s Americkým centrem Velvyslanectví USA v Praze.`,
    img: "/space-carousel/metc09.jpg",
    alt: "lander_all",
    category: "vox-populi",
    articleUrl: "/cs/o-nas/povidani-s-astronautkou",
  },
];
const colorMap = {
  space: "#231F20",
  other: "#f44336",
  news: "#262261",
  "vox-populi": "#F05A28",
};
export default function Index() {
  return (
    <React.Fragment>
      <Grid
        container
        style={{ marginTop: 10 }}
        spacing={4}
        justify="flex-start"
        wrap="wrap"
      >
        {/* <Grid item xs={12}>
          <Typography style={{ fontSize: "2rem", fontWeight: 600 }}>
            CZECH SPACE OFFICE
          </Typography>
        </Grid> */}
        {/* <Grid item xs={12}>
          <BootstarpCarousel />
        </Grid> */}
        <Grid xs={12}>
          <Typography
            style={{ fontSize: "2.5rem", margin: 16, fontWeight: 600 }}
          >
            NEJNOVĚJŠÍ ČLÁNKY
          </Typography>
        </Grid>
        {articles.map((e) => (
          <Grid item xs={12} lg={3} xl={3} key={e.id}>
            <ResponsiveCard
              customColor={colorMap[e.category]}
              image={e.img}
              shortDesc={e.shortDesc}
              title={e.title}
              alt={e.alt}
              articleUrl={e.articleUrl}
            ></ResponsiveCard>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  const pageTitle = "Hlavní | Czech Space";
  const page = "/";
  return {
    props: { page, pageTitle }, // will be passed to the page component as props
  };
}
