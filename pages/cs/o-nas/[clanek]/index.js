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
      articleTitle: "O TERMINOLOGII",
      articleImage: "/articles/gtnasa.jpg",
      articleAlt: "spaceships",
      articleDesc:
        "Pohyb je základní přírodní jev, fenomén, který patří k nejrůznějším projevům všech součástí našeho světa. Jeho druhů může být vícero a proto je i v lidské řeči, češtinu nevyjímaje, řada výrazů, kterými jsou tyto pohyby nazývány. Fyzická konstituce těla člověku umožňuje vlastní silou pohyb po pevném povrchu. Tedy ve dvou rozměrech, když ve třetím rozměru jsou jeho možnosti pohybu velmi omezené.",
      category: "other",
      articleDate: "23. srpna 2018",
      articleAuthor: {
        name: "Jan Kolář",
        position: "Ředitel společnosti",
        phone: "+420 603 319 407",
        email: "jan.kolar@czechspace.cz",
      },
      articleUrl: "o-terminologii",
      articleText:
        "Pohyb je základní přírodní jev, fenomén, který patří k nejrůznějším projevům všech součástí našeho světa. Jeho druhů může být vícero a proto je i v lidské řeči, češtinu nevyjímaje, řada výrazů, kterými jsou tyto pohyby nazývány. Fyzická konstituce těla člověku umožňuje vlastní silou pohyb po pevném povrchu. Tedy ve dvou rozměrech, když ve třetím rozměru jsou jeho možnosti pohybu velmi omezené.\nVe všech třech rozměrech a jen vlastním přičiněním se člověk odjakživa může pohybovat pouze ve vodě (má-li dostatek vzduchu). Pohyb ve vodě je člověku blízký, proto nepřekvapí, že slova plavba, plavání či plavectví se použila k označení trojrozměrného pohybu i v jiném prostředí – ve vzduchu. Pro odlišení se přidal název příslušného prostředí – například vzduchoplavba.\nToto hezké české slovo se používá i v různých dalších odvozeninách jako vzduchoplavec nebo vzduchoplavecký. Také jeho anglický ekvivalent – slovo aeronautics – má obdobnou konstrukci postavenou složením řeckých výrazů aer (vzduch) a nautiké (plavba).\nVybavení lidského těla ale člověku neumožňuje plavání ve vzduchu jako ve vodě. Byla to však neutuchající touha tuto schopnost získat, která provázela generace po dlouhá staletí. Teprve v novověku dosáhlo lidstvo poznání, kdy si dokázalo pomoci. Technické řešení bratrů Montgolfierů využívající Archimédova poznatku o plynech umožnilo koncem osmnáctého století plavbu vzduchem pomocí plynu lehčího než vzduch. A o 120 let později dokázali bratři Wrightové vymyslet a postavit pro pohyb ve vzduchu i stroj těžší než vzduch díky znalostem o proudění kapalin a plynů.\nPohyb balonu naplněného plynem ve vzduchu je mírný a je vcelku věrnou kopií plavání ve vodě. Výraz vzduchoplavectví je tedy zcela na místě, stejně jako výraz vzducholoď pro řiditelný balon. Na rozdíl od balonu je pohyb stroje těžšího než vzduch mnohem dynamičtější, protože ke vzniku vztlaku je zapotřebí určitá rychlost pohybu. Jeho pohyb je více podobný letu ptáka a podle něj dostal i název – letadlo. Ptáci ostatně byli od pradávna vzorem pro pohyb ve vzduchu, který dostal označení létání. V minulých dobách se výrazem „létadlo“ označovalo vše co létá, tedy hlavně ptáci.\nLatinské slovo avis označující ptáka je rovněž základem anglického výrazu aviation, který se začal používat po druhé světové válce. I když se v češtině také používá počeštělý výraz aviatika, ujal se vlastní český název „letectví“. Tento výraz se přednostně používá pro oblast letadel, tedy strojů těžších než vzduch. Podle české normy však zahrnuje veškeré technické prostředky, které létají ve vzduchu. Výrazy vzduchoplavectví či vzducholoď jsou významově přednostně spjaty s prostředky lehčí než vzduch.\n Pro pohyb v tekutém prostředí má tedy čeština označení plavání, pro pohyb v prostředí plynném pak výraz létání. Alternativně vyjadřuje příslušný druh trojrozměrného pohybu ve tvaru složeniny slova „plavání“ a názvu prostředí.\nStejným postupem je vytvořen i název pro pohyb za hranicí atmosféry, arbitrárně stanové do výšky 100 km. Protože čeština nemá pro tento prostor svůj výraz, zdomácněly v naší řeči tvary kosmonautika, méně pak i astronautika. Obě složeniny opět obsahují výraz „plavání“ v podobě řeckého slova nautiké. V prvním případě je s ním spojené rovněž řecké slovo kosmos, ve druhém případě latinské slovo astra znamenající hvězdy. Doslovný význam těchto názvů – ve shodě se vzduchoplavectvím – je „kosmoplavectví“ respektive „hvězdoplavectví“. Z těchto českých forem se však do běžného užívání nedostala ani jedna, přesto, že v starších literárních pracích je jejich autoři různého zaměření použili.\nPravidlu, že složenina má obsahovat v první části název prostředí, ve kterém k pohybu dochází, ale vyhovují jen výrazy kosmonautika nebo kosmoplavectví. Naproti tomu hvězdy představují orientační body, případně cíle pro uvažovaný pohyb, ale prostředí jimi lze označit pouze s poetickou nadsázkou.\nV češtině se pro označení prostoru mimo naši planetu často používá výraz vesmír, což však není zcela správné. Slovo samo má staroslovanský původ a označuje vše co existuje, tedy i naší rodnou planetu. Veškeré galaxie s hvězdami, planetami, plyny, plazmatem, prachem, energiemi včetně všeho co existuje na těchto tělesech i mezi nimi, bez ohledu na to, zda to lidstvo zná či teprve objeví, včetně živých tvorů, včetně nás lidí. To všechno dohromady tvoří vesmír. Každý pohyb se děje ve vesmíru, ať jde o kroužení planet kolem hvězd nebo proudění vzduchu a vody, plavání, létání, běhání. Zkoumat vesmír znamená zkoumat všechny jevy a zákonitosti kolem nás. Perfektním představitelem tohoto pojetí je časopis Vesmír, který svým obsahem názvu přesně odpovídá.\nPodobně přídavné jméno „vesmírný“ znamenající „nacházející se ve vesmíru“ platí pro každý subjekt v našem světě. Vesmírný je strom stejně jako Měsíc, záření stejně jako žížala. V podobné souvislosti je použití výrazu „vesmírný“ sice správné, ale informačně bezobsažné.\nPřesto, že význam slova kosmos se historicky obsahově s výrazem vesmír překrývá, je jeho obsah odlišný. Proto má například angličtina pro vesmír také vlastní výraz universe. Výraz kosmos je primárně zaměřen na prostor, který je mimo naši planetu. Svým pojetím respektuje všechna tělesa, která zde jsou, ale především obrovské prostory mezi nimi. Kosmos není prázdný, je prostoupen proudy elementárních a prachových částic, elektromagnetickým zářením a působí v něm silová pole.\nPřídavné jméno kosmický pak označuje subjekty, které se nacházejí v kosmickém prostoru nebo jsou pro pohyb v něm určeny, jako například kosmické záření, kosmický experiment, kosmická stanice. Dlužno říci, že do kosmonautiky se zatím zahrnuje i pohyb či pobyt na povrchu jiných nebeských těles. Technika k tomu určená však s rostoucí frekvencí takových misí ponese stále častěji označení místa určení například měsíční modul, marsovské vozidlo apod.\nPro pojmenování prostoru mimo Zemi je proto nejvhodnější výraz kosmos. Případné použití slova vesmír vyžaduje ještě další upřesnění o jakou jeho část jde. Stejně tak pro označení pohybu v prostředí za hranicí zemské atmosféry je nejvhodnější slovo kosmonautika. Chceme-li namísto slova kosmonautika použít spíše české označení, pak můžeme zvolit sousloví létání v kosmu. Striktně podle pravidel vytvořené slovo kosmoplavectví není zažité, i výraz plavba ustoupil výrazu létání. Zřejmě proto, že do kosmu vede cesta atmosférou, kde se létá a tak pohyb za atmosférou je považován za pokračování letu.\nNa kosmonautiku je navázaná řada různých řídících, výzkumných a výrobních organizací. Analogicky k jiným oborům, je namístě označovat tyto organizace, činnosti a produkty souhrnně kosmonautické, tedy například kosmonautická služba, kosmonautický průmysl nebo kosmonautická strategie. Široce užívané označení kosmická agentura, není zcela správné, protože se jedná o organizaci zabývající se činností v kosmu, primárně pohybem v kosmu, tedy kosmonautikou, a nikoliv kosmem jako takovým.\nU jmen organizací čeština nabízí použití přívlastku, např. úřad kosmonautiky případně spojení s předložkou „pro“ (agentura pro kosmonautiku). S tímto slovním spojením se setkáme například u názvu americké agentury NASA. Odpovídající česká verze jejího anglického názvu National Aeronautics and Space Administration je Národní úřad pro letectví a kosmonautiku.\nAnglické slovo space – vedle toho, že v nezměněné podobě vystupuje jako podstatné jméno i jako přídavné jméno – má i významové odstíny, které je zapotřebí v češtině odlišovat. Kromě základního a obecného významu „prostor“, je používáno i ve významech, jímž v češtině odpovídají slova kosmos, kosmický nebo kosmonautika, kosmonautický. Rozhodnutí, který český výraz nejlépe vyjádří význam slova space, záleží na celkovém kontextu anglického textu v každém konkrétním případě.\nI když to leckdy nepřipadá důležité, je nesprávně nebo nevhodně použitý termín příčinou toho, že se sdělovaný obsah pokroutí nebo jinak pochopí. To má za následek v lepším případě obtížnější domluvu a v horším případě i nesprávné rozhodnutí se škodlivými následky pro všechny zúčastněné.\nPříklady českého významu některých anglických výrazů:\n\nspace ship – kosmická loď\nspace probe – kosmická sonda\nspace industry – kosmonautický průmysl\nspace policy – kosmonautická politika\nspace flight – kosmický let\nspace telescope – kosmický dalekohled\nspace vocabulary – slovník kosmonautiky\nlife in space – život v kosmu, ve vesmíru\nspace race – závody v kosmonautice\nspace art – umění o kosmonautice\ncommercialization of space – komercionalizace kosmonautiky\nspace manufacturing – výroba v kosmu\nspace treaty – smlouva o kosmickém prostoru",
    },
    {
      id: 2,
      articleTitle: "ZAMĚSTNANCI",
      articleImage: "/articles/kolar_web.jpg",
      articleAlt: "employees",
      articleDesc: "Seznam pracovníků, jejich pozice a kontaktní údaje.",
      category: "other",
      articleDate: "8. února 2018",
      articleAuthor: {
        name: "Kristýna Šaarová",
        position: "Správce webu a editor tiskovin",
        email: "saarova@czechspace.cz",
      },
      articleText:
        "Jan Kolář\n- Ředitel společnosti, rozvoj kosmonautiky, mezinárodní spolupráce\ninfo@czechspace.cz\nPetra Šmatláková\n- Finanční management\nsmatlakova@czechspace.cz\nMichal Václavík\n- Výzkum vesmíru, Pilotované lety, výzkum v mikrogravitaci a průzkum sluneční soustavy\nvaclavik@czechspace.cz\nJaroslav Urbář\n- Sledování kosmického prostoru v blízkosti Země, Vzdělávání a popularizace kosmonautiky\nurbar@czechspace.cz\nMilan Halousek\n- Vzdělávání a popularizace kosmonautiky\nhalousek@czechspace.cz\nKristýna Šaarová\n- Vydávání tiskovin, redakce a správa webu\nsaarova@czehspace.cz",
      articleUrl: "zamestnanci",
      articleAltFloat: true,
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
      articleAuthor: {
        name: "Michal Václavík",
        position:
          "Konzultant pro oblasti pilotovaných letů, kosmických věd a průzkumu sluneční soustavy",
        phone: "+420 731 682 435",
        email: "vaclavik@czechspace.cz",
      },
      articleUrl: "vzhuru-na-mesic",
      articleText:
        "Česká kosmická kancelář (CSO) průběžně využívá své mezinárodní kontakty se zahraničními partnery k rozšíření možností pro možné zapojení českých pracovišť do kosmických programů. Aktuálně se vyskytla zajímavá příležitost v projektu americké společnosti Astrobotic Technology, se kterou je CSO již několik let v profesním spojení. Tato společnost v současnosti dokončuje vývoj a stavbu vlastního modulu pro Peregrine pro měkké přistání na povrchu Měsíce v roce 2019. Astrobotic Technology nyní oslovila Českou kosmickou kancelář s nabídkou možnosti pro česká výzkumná a vývojová pracoviště umístit na přistávací modul svůj vlastní přístroj.\nModelový letový profil počítá s vypuštěním modulu Peregrine jako sekundárního nákladu při startu rakety Atlas V. Následovat bude přeletová fáze k Měsíci, navedení na jeho oběžnou dráhu, přistání a práce na povrchu v oblasti Lacus Mortis. Celková nominální délka první mise je 25 až 55 dní, z toho 8 dní na povrchu Měsíce. Užitečný náklad s hmotností do 1 kg může mít libovolné určení - vědecký přístroj na měření fyzikálního parametru nebo demonstrační zařízení pro zkoušku technického řešení.  Bude upevněn na horní nebo spodní straně přístrojové plošiny ve výšce minimálně 40 cm nad povrchem Měsíce. Pro jeho umístění jsou plánované následující standardizované boxy (je možné je sdílet):\n\n200 × 200 × 120 mm\n200 × 330 × 200 mm\n380 × 330 × 200 mm\n380 × 400 × 330 mm\n380 × 450 × 400 mm\nNa jeden kilogram užitečného zatížení je k standardně dispozici 0,5 W elektrické energie (28 V ss) a přenosová kapacita na Zemi je 2,8 kb/s. Česká kosmická kancelář vyzívá pracoviště aktivní v oblasti spojené s problematikou vývoje a provozování zařízení určených pro fungování v meziplanetárním prostoru a případně i na povrchu jiného nebeského tělesa, k reakci na tuto výzvu a účasti na pracovním setkání, které se uskuteční dne 23. listopadu 2017 v 10:00 v prostorách České kosmické kanceláře, Sokolovská 22, Praha 8.  V případě vašeho zájmu prosím o potvrzení účasti na emailu info@czechspace.cz. Rovněž se na nás neváhejte obrátit v případě jakýchkoli dalších dotazů.",
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
      articleAuthor: {
        name: "Milan Halousek",
        position:
          "Konzultant pro oblasti vzdělávání a popularizace kosmonautiky",
        phone: "+420 602 153 564",
        email: "halousek@czechspace.cz",
      },
      articleUrl: "povidani-s-astronautkou",
      articleText:
        "e středu 27. září 2017 se na půdě Amerického centra Velvyslanectví USA v Praze setkala skupina studentů kosmických vzdělávacích programů organizovaných Českou kosmickou kanceláří s americkou astronautkou Dorothy Metcalf-Lindenburgerovou. Ta letěla do vesmíru v dubnu 2010 na palubě amerického raketoplánu Discovery (mise STS-131) v rámci patnáctidenního zásobovacího letu na Mezinárodní kosmickou stanici ISS.\nDo oddílu kosmonautů byla vybrána v roce 2004 a připravovala se na pozici vzdělávací specialistky mise, neboť je svým občanským povoláním středoškolská učitelka přírodovědných předmětů. Jejím úkolem během kosmického letu byly, kromě všech běžných povinností člena posádky raketoplánu, vzdělávací a popularizační aktivity především směrem k americkým středoškolákům. Zajímavostí jejího letu bylo také, že poprvé a prozatím i naposledy v historii kosmonautiky byly ve vesmíru najednou hned čtyři ženy. Na palubě Discovery vedle Dottie Metcalf-Lindenburgerové ještě Stephanie Wilsonová a japonská astronautka Naoko Yamazakiová, na ISS vtom čase dlouhodobě pracovala Tracy Caldwell-Dysonová. Po odchodu z NASA v červnu 2014 působí Dorothy Metcalf-Lindenburgerová na University of Washington v Seattlu.\nO svém kosmickém letu, ale i téměř dvoutýdenním pobytu na podmořské základně NEEMO, vyprávěla americká astronautka vybrané třicetičlenné skupině českých studentů. Ti jsou účastníky vzdělávacích projektů České kosmické kanceláře, jako je Kosmická akademie, Expedice Mars a Odysseus. Věk přítomných dívek a chlapců byl od desíti desetiletých žáků až po dospělé vysokoškolské studenty.\nNa začátku setkání byly Dottie Metcalf-Lindenburgerové představeny vzdělávací programy České kosmické kanceláře. A poté následovalo zajímavé vyprávění její životní cesty od malého děvčete, které si vyrobilo figurku Valentiny Těreškovové a postavilo papírový model raketoplánu s tím, že jednou určitě poletí do vesmíru. Pokračovala přes přípravu na kosmický let až po těch krásných 15 dní prožitých na oběžné dráze kolem Země.\nVšem účastníkům setkání popřála mnoho štěstí v jejich studiu a vyzvala je k poctivé práci, která jim pomůže vyplnit jejich sny. Následně odpověděla na řadu dotazů mladých zájemců. S každým studentem se poté Dottie Metcalf-Lindenburgerové vyfotografovala a věnovala mu svojí podepsanou fotografii. Přitom ještě stihla s každým z nich prohodit pár slov. Na závěr dvouhodinového setkání následovala společná fotografie všech účastníků, při které americká astronautka vyjádřila potěšení z toho, že v České republice existuje tolik mladých nadšených zájemců o vesmír, kosmickou vědu a techniku.\nProgram zorganizovala Česká kosmická kancelář ve spolupráci s Americkým centrem Velvyslanectví USA v Praze. Americká astronautka Dorothy Metcalf-Lindenburgerová během setkání velice přesvědčivě a citlivě ukázala mladým českým zájemcům o kosmonautiku, že pokud si člověk jde za svým snem a cílem, dokáže dojít až k nejvyšším metám – v jejím případě až do vesmíru. To symbolicky ukázala posledním obrázkem své prezentace, na kterém vedle sebe představila svůj dětský papírový raketoplán a raketoplán Discovery, na jehož palubě do vesmíru opravdu vzlétla.\nOrganizátoři tohoto setkání věří, že především těm nejmladším účastníkům ukázalo novou cestu a podnítilo je k dalšímu a ještě intenzivnějšímu studiu a vzdělávání.",
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
      articleUrl: "kosmicka-akademie-2017",
      articleAuthor: {
        name: "Milan Halousek",
        position:
          "Konzultant pro oblasti vzdělávání a popularizace kosmonautiky",
        phone: "+420 602 153 564",
        email: "halousek@czechspace.cz",
      },
      articleText:
        "O posledním letním prázdninovém víkendu proběhl v Praze první kurz druhého ročníku vzdělávací projektu pro nadané studenty Space Academy – Kosmická akademie 2017, kterou organizuje Česká kosmická kancelář s podporou grantu od Ministerstva školství, mládeže a tělovýchovy. Hlavním cílem Kosmické akademie je podchycení a rozšíření zájmu a osobní iniciativy mladých zájemců o kosmické vědy. Ti nyní často pracují a vzdělávají se samostatně, bez výraznější možnosti odborného vedení a kontaktu s podobně zaměřenými vrstevníky a komunitou vědců a odborníků, od nichž by mohli čerpat informace, zkušenosti a nadšení pro daný vědecký obor.\nDíky vzdělávacímu programu Kosmické akademie tak poprvé v České republice funguje dlouhodobý projekt cílený na tuto specifickou skupinu nadaných a talentovaných studentů, který jim poskytuje maximální možnou odbornou i vědomostní podporu. Cyklu čtyř víkendových kurzů se účastní celkem 13 chlapců a děvčat ve věku od 10 do 18 let z různých měst České republiky. Jedná se o žáky základních škol i středoškoláky, kteří se velmi intenzivně a dlouhodobě věnují kosmonautice a astronomii, ale i dalším oblastem moderní vědy a techniky.\nFormou přednášek o odborných tématech kosmonautiky, besed s předními českými vědci a exkurzí získají mladí účastníci nový náhled na historii, současnost a budoucnost kosmonautiky, astronomie a příbuzných věd v České republice i ve světě. Důležitým aspektem kurzů bude i vzájemný kontakt studentů mezi sebou a kontakty mezi posluchači a přednášejícími, které přinesou informace a znalosti, jež jsou v tomto nepříliš rozšířeném oboru jinak těžko dohledatelné.\nV průběhu prvního kurzu, v sobotu 2. září 2017, si účastníci vyslechli přednášku o životě kosmonautů na Mezinárodní kosmické stanici ISS a několik kratších informací o aktuálním dění v kosmonautice. Odpoledne navštívili pražské planetárium, kde si ve foyer prohlédli expozici zaměřenou na astronomii a kosmonautiku a poté shlédli program o vzniku Sluneční soustavy. Sobotní den zakončila večerní motivační beseda s jednou z velitelek vzdělávací soutěže Expedice Mars, Beátou Plaskurovou ze Slovenska. Ta pohovořila nejenom o svých začátcích s astronomií, ale i o tom, jak se dá dělat popularizace vědy s dětmi na základních školách a jak je důležité mít před sebou vytýčené dlouhodobé cíle.\nV neděli 3. září 2017 se účastníci Kosmické akademie 2017 přesunuli do Dolních Břežan nedaleko Prahy, kde se již od pátku konalo semifinále mezinárodní vzdělávací soutěže Expedice Mars 2017. Dopoledne zde probíhala studentská vědecká konference věnovaná chystanému startu stratosférického balónu, na který účastníci Expedice Mars připravovali během semifinále své vědecké experimenty. \nBěhem podzimu letošního roku zorganizuje Česká kosmická kancelář ještě další tři víkendové kurzy druhého ročníku Kosmické akademie. Na nich se účastníci setkají s několika významnými osobnostmi české a československé kosmické vědy, zúčastní se zajímavých exkurzí a navštíví i ostravské science centrum Svět techniky. Původně neplánovanou a mimořádnou událostí bude setkání studentů zapojených do vzdělávacích programů České kosmické kanceláře s americkou astronautkou Dorothy Metcalf-Lindenburgerovou, které se uskuteční v rámci její návštěvy Prahy na konci září 2017.\nSoučástí programu Kosmické akademie 2017 budou i vzdělávací a popularizační přednášky a besedy na základních a středních školách po celé České republice. Žákům a studentům přiblíží kosmonautiku jako obor zajímavý a perspektivní ke studiu. Ukážou také čím, a jak pomáhá kosmonautika lidem v jejich každodenním životě.\nLoňského prvního ročníku Kosmické akademie se zúčastnilo celkem 11 mladých zájemců. Během pěti podzimních víkendových kurzů vyslechli celkem 10 přednášek a 31 kratších informačních příspěvků. Besedovat s nimi přišli i tři osobnosti české kosmonautiky – Jan Kolář, ředitel České kosmické kanceláře; Luboš Perek, bývalý ředitel Astronomického ústavu a vedoucí Úřadu OSN pro kosmické záležitosti a Karel Pacner, vědecký novinář a spisovatel. Dále se uskutečnilo 5 motivačních besed s bývalými účastníky vzdělávacích soutěží a programů České kosmické kanceláře, kteří na sobě ukázali, jak pokračovat ve studiu zaměřeném na vědu a techniku. V každém víkendovém kurzu se uskutečnila i exkurze do instituce, jejíž činnost má vztah ke kosmonautice. Jednalo o Letecké muzeum v Praze-Kbelích, Science centrum Techmania v Plzni, Národní technické muzeum v Praze, Centrum kosmického výzkumu Hydronaut v Praze-Radotíně a Planetárium Praha.\nV doprovodném programu Kosmické akademie 2016 se uskutečnilo celkem 36 školních vzdělávacích přednášek a besed s účastí 1777 posluchačů, většinou žáků základních a středních škol a gymnázií.",
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
