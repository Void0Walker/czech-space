import React from "react";
import { Container, Typography, Grid, makeStyles } from "@material-ui/core";
import BreadCrumbs from "../../../../components/common/BreadCrumbs";
import Article from "../../../../components/articles/Article";

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
      articleAuthor: {
        name: "Michal Václavík",
        position:
          "Konzultant pro oblasti pilotovaných letů, kosmických věd a průzkumu sluneční soustavy",
        phone: "+420 731 682 435",
        email: "vaclavik@czechspace.cz",
      },
      articleUrl: "veda-pro-dsg",
      articleText:
        "Dalším krokem v pronikání člověka hlouběji do sluneční soustavy je výstavba kosmické stanice v blízkosti Měsíce. Na její podobě se dohodli současní partneři výstavby a provozu Mezinárodní kosmické stanice ISS, tj. NASA, Roskosmos, ESA, JAXA a CSA. Nová stanice je nyní označována jako Deep Space Gateway (DSG) a v budoucnosti má posloužit i k pilotovaným výpravám nejenom na povrch Měsíce, ale i k Marsu.\nHlavním cílem DSG je v první fázi připravit technologie a rozšířit znalosti potřebné pro uskutečnění dlouhodobých pilotovaných výprav. Vzhledem k omezenému prostoru na stanici i dostupnosti zdrojů nebude možné uskutečňovat tak rozsáhlé výzkumné programy jako na ISS. DSG bude optimalizována a vybudována tak, aby sloužila zejména svému primárnímu úkolu. Stanice DSG bude také střídavě provozována v pilotovaném a nepilotovaném režimu, což opět limituje rozsah prováděných vědeckých experimentů.\nPro co nejefektivnější využití dostupných zdrojů a kapacit na DSG vyhlásila Evropská kosmická agentura výzvu k předkládání nápadů, jaké experimenty by bylo vhodné na stanici provádět a jaké technické vybavení je k tomu zapotřebí včetně času posádky. Výsledky této výzvy budou využity k definici technických požadavků při návrhu a stavbě DSG a formulaci budoucích výzev na vědecké experimenty na ní prováděné. Očekává se uplatnění DSG zejména v těchto oblastech:\nvýzkum povrchu Měsíce za využití teleprezence,\nshromažďování vzorků z jiných kosmických těles a jejich návrat na Zemi,\npochopení vlivu kosmického záření a snížené gravitace (zejména na živé organizmy),\n\npozorování Země,\nastronomická pozorování,\nzákladní fyzika,\nsamotnou kapitolou je možný výzkum v době přeletu nákladní nebo pilotované kosmické lodi od Země k DSG.\nDokumentace k výzvě a jednoduchý formulář ke stručnému popsání potenciálního vědeckého experimentu pro DSG jsou ke stažení v levém panelu stránky. Vyplněný formulář je potřeba odeslat nejpozději do 6. října 2017 na emailovou adresu DSGateway@esa.int a v kopii na vaclavik@czechspace.cz. Autoři vybraných návrhů budou pozváni k jejich prezentaci na workshopu, který se uskuteční 5. a 6. prosince 2017 v nizozemském středisku ESA ESTEC. Registrace na workshop, která není podmíněna zasláním návrhu na experiment, se otevře 1. září 2017. Kapacita je omezena na 120 účastníků.\nPro další dotazy, konzultaci vědeckého tématu či pomoc s vyplněním formuláře se neváhejte obrátit na autora článku, který je zároveň hlavním českým delegátem v Programové radě ESA pro pilotované lety, výzkum v mikrogravitaci a průzkum sluneční soustavy (PB-HME).",
    },
  ];

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
