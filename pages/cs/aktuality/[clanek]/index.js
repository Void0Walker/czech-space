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
  const articles = [
    {
      id: 1,
      articleTitle: "STUDENTSKÉ EXPERIMENTY NA MEZINÁRODNÍM BALÓNOVÉM PROJEKTU",
      articleImage: "/articles/cam06763.jpg",
      articleAlt: "studenti",
      articleDesc:
        "Česká kosmická kancelář bez projektového financování po roce opět umožnila českým studentským týmům zúčastnit se mezinárodního projektu „Citizen science close to space“.",
      category: "vox-populi",
      articleUrl: "studentske-experimenty-na-mezinarodnim-balonovem-projektu",
      articleAuthor: {
        name: "Jan Kolář",
        position: "Ředitel společnosti",
        phone: "+420 603 319 407",
        email: "jan.kolar@czechspace.cz",
      },
      articleDate: "23. prosince 2019",
      articleText:
        "Česká kosmická kancelář bez projektového financování po roce opět umožnila českým studentským týmům zúčastnit se mezinárodního projektu „Citizen science close to space“. Projekt je tématicky zaměřený na problematiku praktického výzkumu stratosféry a je určen pro studenty středních škol. Je finančně podporovaný Visegrádským fondem a jeho hlavním řešitelem je polské Inovační centrum Mlýn znalostí (Centrum Nowoczesności Młyn Wiedzy) z Toruně. Dalšími partnery ze zemí Visegrádu byla polská Projekt Fundacja Copernicus, Slovenská organizace pro vesmírné aktivity, astronautický klub z Maďarska (Magyar Asztronautikai Tarsasag) a Srbská kosmická organizace.\nLetošní ročník této akce se v rodišti Mikuláše Koperníka konal již počtvrté. Ve dnech 18. a 19. října 2019 se na něm sešla řada odborníků a studentů z Polska, Česka, Slovenska, Maďarska a dalších zemí. Součástí setkání byla konference Near Space se vzdělávacími přednáškami. Jednu z nich přednesl Dr. Jaroslav Urbář z Matematicko-fyzikální fakulty UK, ve které studenty seznámil s vlivem kosmického počasí na stav ionosféry určujícím podmínky pro radiové spojení při stratosférických experimentech.  Studenti měly možnost se dozvědět nové poznatky v několika workshopech s praktickými ukázkami způsobů jak zkoumat stratosféru bez sofistikovaného vybavení. Studenti se například seznámili s postupem stavby jednoduché přijímací antény pro stratosférické experimenty nebo s ukázkami MiniSAT experimentů, které se vejdou do objemu o velikosti ping-pongového míčku.\nHlavní částí projektu je vypuštění stratosférických balónů se studentskými experimenty. Zúčastněné studentské týmy z pěti zemí představily celkem 18 balónových experimentů, které byly usazeny na čtyřech balónech. V České republice se do přípravy balónového experimentu pustily 4 studentské týmy, svoje přístroje však do termínu konání akce uspěly připravit jen dva z nich. Další dva týmy v závěrečné fázi příprav spojily své síly a připravily jeden společný experiment. Výsledné zařízení splňovalo zadaný váhový limit 500 g při zachování plného rozsahu plánovaných měření.\nExperiment měl astrobiologické zaměření. Jeho cílem bylo sledování odlišností v chování několika různě připravených kolonií řas chlorella při reakci na podmínky panující ve stratosférických výškách. Balón s českou aparaturou dosáhl výšky 33 km. Součástí experimentu byla i technologická demonstrace prověřující funkci nové konstrukce pneumatického mechanismu otevírání kazety s biologickým materiálem. Jeho správná funkce byla zásadní pro zajištění, že na řasy bude působit pouze prostředí stratosféry. Parametry okolního prostředí zaznamenával palubní teploměr a barometr. Výčet provedených činností pak doplnil test CMOS detektoru kosmického záření (Raspi Cam) a stratosférická zkouška letového hardware na bázi Arduino nano, připraveného nadanými studenty z Pardubic pro projekt CanSat 2020.",
    },
    {
      id: 2,
      articleTitle: "LUCKY-7 MÍŘÍ DO KOSMU",
      articleImage: "/articles/n46_lucky.jpg",
      articleAlt: "lucky",
      articleDesc:
        "V pátek 5. července bude na oběžnou dráhu vypuštěna další česká vědecko-technologická družice Lucky-7, postavená soukromou společností SkyFox Labs. Společně s ní bude vypuštěno dalších 31 družic, mezi nimiž bude i družice Socrat-R, na jejíž palubě jsou dva české dozimetry vyvinuté na akademické půdě.“.",
      category: "other",
      articleDate: "4. července 2019",
      articleUrl: "lucky-7-miri-do-kosmu",
      articleAuthor: {
        name: "Michal Václavík",
        position:
          "Konzultant pro oblasti pilotovaných letů, kosmických věd a průzkumu sluneční soustavy",
        phone: "+420 731 682 435",
        email: "vaclavik@czechspace.cz",
      },
      articleText:
        "Obdobně jako v případě družice VZLUSat-1 (23. června 2017) i další český CubeSat bude vypuštěn v pátek. Jedná se o malou družici Lucky-7, která bude vypuštěna raketou Sojuz 2.1b z nového ruského kosmodromu Vostočnyj. Start je naplánován, jak již bylo uvedeno, na pátek 5. července 2019 v 7:41:46 SELČ. Hlavní náklad tvoří meteorologická družice Meteor-M 2-2 a dodatečných 32 menších družic, mezi které patří také Lucky-7.\nHistorie malé družice Lucky-7 se začala psát v roce 2011 a to paralelně. V jedné rovině šlo o vývoj celého CubeSatu ČVUT, označovaného jako CzechTechSat-1, jehož vývoj byl ukončen rozpadem studentského týmu a soukromou aktivitou doc. Pavla Kováře. Síly se spojily a z týmu CzechTechSat-1 zůstal pouze duchovní otec Dr. Jaroslav Laifr. Oba odborníci společně začali pomalu a mnohdy, pod hlavičkou společnosti SkyFox Labs, s. r. o., utajeně připravovat technické zázemí pro vývoj a zejména stavbu malé družice. To se jim podařilo a utajeně tuto informaci mezi příteli šířili necelý rok a půl před samotným startem.\nObavy byly na místě. Česká společnost sice kosmonautiku miluje, ale hlavní koordinátor těchto aktivit v České republice, Ministerstvo dopravy, se k obdobným aktivitám staví pasivně (v době vydání článku nebyla na oficiálních stránkách či sociálních sítích ministerstva žádná informace). Proč je to divné? V případě VZLUSat-1 takto mlčenlivé ministerstvo nebylo, můžeme si tedy jenom domýšlet jaká politická hra je za tím schovaná. Ale nechme politiku politikou a zaměřme se na to podstatné.\nDružice Lucky-7, jak již bylo zmíněno, vychází z projektu CzechTechSat-1, který byl řešen přibližně od roku 2012 do roku 2014 na Fakultě elektrotechnické ČVUT v Praze. Po ukončení grantu a rozpadnutí týmů přešel projekt do krátké hibernace, ze které jej probral právě Dr. Laifr. Ve spojení s doc. Kovářem vytvořili opravdu malý tým, jak sami říkají „two man show“. I v této malé sestavě se jim podařilo dotáhnou do konce návrh, vývoj a výrobu všech potřebných částí mise. A nešlo jenom o samotnou družici, ale i o software či pozemní přijímací stanici.\nLucky-7 je družice řady CubeSat respektující poslední aktualizaci normy těchto malých družic. Proto tedy má hmotnost lehounce pod 1,5 kg a rozměry 112,0 × 112,0 × 113,5 mm. Vybavení družice lze rozdělit na tři části napájecí, řídící a vědeckou.\nPrimární část napájecího systému tvoři pět fotovoltaických článků (logicky ne všechny budou osvětleny v jeden okamžik), z nichž každý má výkon okolo 1,5 W. Sekundární sytém tvoří 4 LiFePo4 akumulátory o celkové kapacitě 15 Wh, které jsou schopny napájet družici po dobu několika dní v základním režimu.\nŘídící část družice tvoří dva nezávislé palubní počítače, včetně zdvojené komunikační linky. Výkon vysílače je 1W s přenosovou rychlostí maximálně 4 800 b/s a vnitřní palubní paměť má kapacitu 2 MB. Součástí palubního počítače je také systém určování a řízení polohy a orientace, ten využívá jedna experimentální GPS modul a dále tříosy gyroskop a tříosý systém magnetických cívek.\nPro mnoho lidí nejzásadnější je modul vědecký. Je třeba ale znova připomenout že drtivá většina součástek použitých při stavbě elektroniky družice Lucky-7 pochází z běžně dostupné produkce. Zpět ale k vědeckému modulu. Ten obsahuje kameru s malým rozlišení (VGA) pro zachycení obrazu Země, ideálně pak polární záře. Dále jde o dva senzory kosmického záření v energiích od 0,3 do 3,0 MeV a 0,3 – 10,0 MeV, které mohou napomoci například k časovému určení vybraných a pro astronomy nesmírně důležitých gama záblesků.\nMalá družice Lucky-7 však není jediným zařízením s českou účastí. Na palubě nosné rakety bude také ruská malá družice Socrat-R, na jejíž palubě je dvojice pixelových dozimetrů X-CHIP-03 a SpacePix vyvinutých Fakultou jaderně a fyzikálně inženýrskou ČVUT a Ústavem jaderné fyziky AV ČR, společně se soukromou společností esc Aerospace s. r. o.\nPomineme-li Lucky-7, Socrat-R a hlavní družici Meteor-M 2-2 je na palubě nosné rakety 30 dalších družic z Německa, Francie, Spojených států amerických, Izraele, Velké Británie, Švédska, Finska, Thajska a Estonska.\nCelý tým České kosmické kanceláře přeje našim odborníkům zapojeným do mise Lucky-7 i Socrat-R mnoho úspěchů a těšíme se na první prezentované výsledky. Zejména pak obrázky z VGA kamery Lucky-7. Přímý přenos ze startu je možné najít na stránkce http://www.tvroscosmos.ru/5129/ a nebo s českým komentářem a přítomností odborníka CSO na popularizačním serveru Kosmonautix https://kosmonautix.cz/2019/07/zive-a-cesky-dva-cubesaty-s-ceskou-krvi-startuji/.",
    },
    {
      id: 3,
      articleTitle: "POJĎME VYUŽÍT ISS",
      articleImage: "/articles/n44_columbus.jpg",
      articleAlt: "n44_columbus",
      articleAuthor: {
        name: "Michal Václavík",
        position:
          "Konzultant pro oblasti pilotovaných letů, kosmických věd a průzkumu sluneční soustavy",
        phone: "+420 731 682 435",
        email: "vaclavik@czechspace.cz",
      },
      articleDesc:
        "Evropská kosmická agentura vyhlásila několik výzev na vědecké využívání Mezinárodní kosmické stanice ISS zaměřené na materiálový výzkum a studium vlivu prostředí kosmického letu na lidský organizmus. Výzvy jsou jedinečnou příležitostí pro zapojení českých vědeckých institucí do prestižního evropského kosmického výzkumu.",
      category: "space",
      articleDate: "2019-12-31",
      articleUrl: "pojdme-vyuzit-iss",
      articleText:
        "Evropská kosmická agentura vyhlásila několik výzev na vědecké využívání Mezinárodní kosmické stanice ISS zaměřené na materiálový výzkum a studium vlivu prostředí kosmického letu na lidský organizmus. Výzvy jsou jedinečnou příležitostí pro zapojení českých vědeckých institucí do prestižního evropského kosmického výzkumu.\nI přesto, že ještě mnoho evropských experimentů čeká na svoji realizaci na palubě Mezinárodní kosmické stanice, změny v provozu ISS a optimalizace přístupu, umožnily zařadit do střednědobého vědeckého programu několik nových experimentů z oblasti materiálového výzkumu a studia lidské fyziologie. Předností těchto experimentů by mělo být využívání stávajícího přístrojového a materiálního vybavení ISS, nevyžadující pokud možno žádný anebo jen minimální a nerizikový vývoj. S ohledem na tento základní požadavek ESA vyhlásila několik vědeckých výzev, do nichž se mohou zapojit také vědci a výzkumné instituce z České republiky.\nPrvní dvě výzvy se týkají problematiky člověka ve kosmickém prostředí. Kosmický let (zejména dlouhodobý, jaké jsou na ISS) přináší celou řadu rizik, který musí lidský organizmus čelit. Obecným cílem výzkumu je najít a popsat příčiny problémů a vyvinout efektivní opatření k potlačení těchto negativních vlivů (mikrogravitace, kosmické záření, narušeni cirkadiálních cyklů, dlouhodobá izolace, problematika malých skupin a další). Mnoho fyziologických i psychologických změn jde vysledovat po přistání posádky po dlouhodobém pobytu na Mezinárodní kosmické stanici. Výzva tedy otevírá možnosti pro přípravu nových předletových a poletových experimentů na posádkách ISS.\nDruhá výzva využije netradiční rotace posádek Mezinárodní kosmické stanice ISS při další jednoroční misi na její palubě (první proběhla v letech 2015 a 2016), která by se měla začít nejdříve v roce 2020. Do rotací posádek tak přibytou krátké „návštěvní“ mise v délce od dvou do čtyř týdnů, které přináší nové příležitosti k realizaci snadných a rychlých experimentů, neboť vliv kosmického prostředí se na lidském organizmu projeví takřka okamžitě (změny kardiovaskulárního systému, redistribuce tělních tekutin, zvýšení intrakraniálního tlaku, prostorová dezorientace apod.).\nObě výzvy jsou otevřena do 1. června 2019, kdy je nejzazší termín k odeslání projektového návrhu. Ještě předtím je nutné odeslat stručné vyjádření zájmu o účast ve výzvě a to nejpozději 15. března 2019. Následně bude 1. dubna 2019 (v případě velkého zájmu 1. až 2. dubna) uspořádán ve středisku ESA ESTEC workshop, kde mohou zájemci mezi sebou i s odborníky z ESA projednat své nápady jak po vědecké, technické, tak i organizační a finanční stránce.\nDruhá tematická výzva je oproti předchozím úžeji zaměřena na materiálový výzkum a využití tavící pícky s elektromagnetickým levitátorem MSL-EML (Material Science Laboratory Electromagnetic Levitator), která je umístěna na ISS v laboratorním modulu Columbus a umožňující sledovat a měřit širokou škálu vlastností zkoumaných materiálů. Výzva počítá s přípravou čtvrté sady materiálových experimentů, které by se měly začít realizovat v letech 2022 a 2023. Možné zkoumané materiály jsou téměř neomezeném např. litiny hliník-uhlík, měď-kobalt, superslitiny na bázi niklu či titanu, polovodičové materiály (křemík-germanium) nebo amorfní kovy.\nVýzvy na využití EML je otevřena do 1. července 2019, kdy je nejzazší termín k odeslání projektového návrhu. Ještě předtím je nutné odeslat stručné vyjádření zájmu o účast ve výzvě a to nejpozději 1. května 2019. Následně bude 21. května 2019 uspořádán ve společnosti Airbus Defence and Space (ADS) ve Friedrichshafenu workshop, kde mohou zájemci mezi sebou i s odborníky z ESA a ADS projednat své nápady jak po vědecké, technické, tak i organizační a finanční stránce.\nPro úplnost uvádíme, že ESA má trvale otevřenou výzvu CORA (Continuously Open Research Announcement) na využívání zejména pozemního vybavení:\nPádová věž – využití pádové věže ZARM v Brémách pro realizaci krátkodobých (4,74 s nebo 9,3 s) experimentů v podmínkách mikrogravitace (zbytkové zrychlení ≤ 10-6 g0).\nParabolické lety – využití letadla A310 společnosti Novespace pro realizaci krátkodobých (31 parabol po 20 s) experimentů v podmínkách snížené gravitace (zbytkové zrychlení ≥ 10-2 g0).\nVýškové rakety – využití výškových raket TEXUS, MASER a MAXUS pro realizaci krátkodobých (3 až 13 min) experimentů v podmínkách kvazimikrogravitace (zbytkové zrychlení ≤ 10-5 g0). Experimenty lze rozšířit o problematiku kosmického záření, vakua, ale také návratu atmosférou a přetížení.\nIBER (Investigating Biological Effects of space Radiation) – využití některého z pěti zapojených evropských pracovišť s urychlovači ke zkoumání biologických dopadů kosmického záření k přesnějšímu posouzení rizik a navržení spolehlivějších protiopatření.\nDalší pozemní vybavení – využití široké rodiny vědeckého vybavení napříč evropskými výzkumnými institucemi. Jedná se o klinostaty, RPM (Random Positioning Machine), centrifugy, klimatické komory, analogy apod. ESA poskytuje jednotný rámec k jejich přístupu a využívání.\nMAP (Microgravity Application Promotion) – iniciativa na propojení výzkumu (pozemního i na ISS) s průmyslem a případným komerčním uplatněním.\nTematické týmy – ESA umožňuje založit nový nebo se zapojit do některého ze stávajících expertních týmů pracujících na rozpracování některých širších výzkumných otázek.\nV případě zájmu o zapojení do některé z výzev kontaktujte autora článku, který je zároveň hlavním českým delegátem v Programové radě ESA pro pilotované lety, výzkum v mikrogravitaci a průzkum sluneční soustavy (PB-HME), na email vaclavik@czechspace.cz. Zmíněný kontakt můžete využít i pro jakékoli další dotazy a komentáře. Zadávací dokumentace a potřebné formuláře k výzvám jsou ke stažení k dispozici v levém panelu.",
      articleFiles: [
        {
          name: "Dokumentace k výzvě Pre-Post",
          url:
            "https://www.czechspace.cz/sites/default/files/n44_pre-and_post-flight_ao_information_package_final.pdf",
        },
        {
          name: "Formulář LoI k výzvě Pre-Post",
          url:
            "https://www.czechspace.cz/sites/default/files/n44_letter_of_intent_ao-2019-iss_pp.doc",
        },
        {
          name: "Formulář projektového návrhu Pre-Post",
          url:
            "https://www.czechspace.cz/sites/default/files/n44_ao-2019-iss_pp_proposal_template.doc",
        },
        {
          name: "Dokumentace k výzvě SDM",
          url:
            "https://www.czechspace.cz/sites/default/files/n44_sdm_ao_information_package_final.pdf",
        },
        {
          name: "Dokumentace k výzvě EML",
          url:
            "https://www.czechspace.cz/sites/default/files/n44_ao-2019-iss_eml_information_package.pdf",
        },
        {
          name: "Formulář projektového návrhu SDM",
          url:
            "https://www.czechspace.cz/sites/default/files/n44_ao-2019-iss_sdm_proposal_template.doc",
        },
        {
          name: "Formulář LoI k výzvě EML",
          url:
            "https://www.czechspace.cz/sites/default/files/n44_ao-2019-iss_eml_loi_template.doc",
        },
        {
          name: "Formulář projektového návrhu EML",
          url:
            "https://www.czechspace.cz/sites/default/files/n44_ao-2019-iss_eml_proposal_submission_template.doc",
        },
      ],
    },
    {
      id: 4,
      articleTitle: "ČESKÉ STUDENTSKÉ EXPERIMENTY LETĚLY DO STRATOSFÉRY",
      articleImage: "/articles/styl2340e.jpg",
      articleAlt: "styl2340e",
      articleDesc:
        "Česká kosmická kancelář bez nároku na finanční odměnu zajistila příležitost pro české studentské týmy k vypuštění jejich experimentů na stratosférickém balónu až do výšky přibližně 22 km v rámci Near Space konference konané během jediného dne, 22. září 2018.",
      category: "space",
      articleDate: "2018-10-04",
      articleUrl: "ceske-studentske-experimenty-letely-do-stratosfery",
      articleAuthor: {
        name: "Jaroslav Urbář",
        position:
          "Konzultant pro oblasti kosmického počasí a studentských aktivit",
        phone: "+420 605 938 9585",
        email: "urbar@czechspace.cz",
      },
      articleText:
        "Česká kosmická kancelář bez nároku na finanční odměnu zajistila příležitost pro české studentské týmy k vypuštění jejich experimentů na stratosférickém balónu až do výšky přibližně 22 km v rámci Near Space konference konané během jediného dne, 22. září 2018.\nHlavním cílem české účasti bylo vypuštění testovacích verzí experimentů pro následující důležité lety – první tým totiž vylepšoval řídící systém na gondolu pro stratosférický balón, který v listopadu ponese experimenty účastníků středoškolské soutěže Expedice Mars.\nDruhý tým ze Západočeské univerzity též se zapojením středoškoláků zase během stratosférického balónového letu úspěšně otestoval senzory a experimenty pro připravovanou studentskou družici PilsenCUBE II. Šlo o kameru uCAM III, infrakameru Panasonic AMG88, elektronické akcelerometry a gyroskopy ICM20689 a experimentální modul pro testování procesorů. Palubní počítač prováděl záznam dat v několikasekundových intervalech od zapnutí na vzletové ploše až do ručního vypnutí systému po návratu z mise bez jediného restartu.\n Všechny senzory českých experimentů naměřily užitečná data a zkušenosti z tohoto letu pomohly upravit některé komponenty pro lety nadcházející.\nNa již třetím ročníku této akce podporované Visegrádským fondem a zaměřené na výzkum stratosféry se sešla řada odborníků a studentů z Polska, Česka, Slovenska, Maďarska a dalších zemí. Tým Expedice Mars představili ve své prezentaci Kryštof Hes a Soňa Kernerová s Miroslavem Lžičařem. Studenti vedení Dr. Ivo Veřtátem přijeli z Plzně díky podpoře Západočeské univerzity hned v sedmičlenné sestavě a zaujali detailní prezentací o sérii na katedře vyvíjených družic PilsenCUBE.\nNa konferenci vystoupila řada dalších zajímavých osobností jako Američan Bill Brown, který za svůj život vypustil již přes 500 stratosférických balónů či Dariusz Brzozowski, který stál za rekordním seskokem z balónu při letu FL-365. Díky mnoha zajímavým přednáškám získali čeští účastníci množství nápadů pro vlastní balónové projekty.\nBěhem konference byly uspořádány různé aktivity pro návštěvníky ukazující, jak lze zkoumat stratosféru bez sofistikovaného vybavení. To zahrnovalo například MiniSAT experimenty, kde kdokoliv mohl do stratosféry vyslat svůj experiment o velikosti ping-pongového míčku.\nV současné době díky technologickému pokroku může získávat stále více lidí vlastní zkušenosti s kosmickým výzkumem. To je důležité, jelikož kosmické technologie poskytují naší společnosti nebývalé příležitosti a výhody. Organizátoři takto podporovali zapojení nadšenců do „citizen science“. Projekt ukázal, že věda je přístupná všem a každý může být zvídavý.\nProjekt „Citizen science close to space“ navrhlo a vedlo polské science centrum „Inovační centrum Mlýn znalostí“ (Centrum Nowoczesności Młyn Wiedzy) z Toruně, kde se také celá akce konala.\nDalšími partnery ze zemí Visegrádu byla polská Projekt Fundacja Copernicus, zajišťující vlastní vypuštění balónu a Slovenská organizace pro vesmírné aktivity. Nezúčastnil se nakonec partner z Maďarska (Magyar Asztronautikai Tarsasag).\nProjekt byl spolufinancován vládou České republiky, Maďarska, Polska a Slovenska prostřednictvím Visegrádských grantů z Mezinárodního visegrádského fondu. Posláním fondu je prosazovat myšlenky udržitelné regionální spolupráce ve střední Evropě.",
    },
  ];

  let article = articles.filter(
    (e) => e.articleUrl === context.query.clanek
  )[0];

  const pageTitle = `${article.articleTitle} | Czech Space`;

  const bredCrumbPages = {
    name: article.articleTitle,
    friendlyURL: article.articleUrl,
    subpageName: "Aktuality",
    subpagePath: "/cs/aktuality",
  };

  return {
    props: { article, bredCrumbPages, pageTitle }, // will be passed to the page component as props
  };
}
