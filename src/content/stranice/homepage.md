---
# =====================================================================
# HOMEPAGE, kinasaksenijom.com
# Layout po uzoru na montanaro.rs, bez videa, bez Google recenzija,
# bez sekcije "iskustva" i bez partnera.
# Sav tekst se menja OVDE, ne u .astro komponentama.
# =====================================================================

seo:
  title: "Putovanje u Kinu iz Srbije | Kina sa Ksenijom"
  description: "Organizovana putovanja u Kinu iz Srbije i regiona. Male grupe, vodič koji živi u Kini, Šangaj, Peking, Hainan i gradovi koje aranžmani preskaču."
  canonical: "https://kinasaksenijom.com/"
  ogImage: "/og/homepage.jpg"
  ogImageAlt: "Panorama Šangaja u sumrak"
  keywords:
    - putovanje u kinu
    - kina putovanje
    - kina putovanje cena
    - kina aranzmani 2026
    - kina turisticka ponuda

# ---------------------------------------------------------------------
# 1. HERO, above the fold
#    Levo: eyebrow + H1 + lead + JEDAN CTA. Desno: slika, ne video.
# ---------------------------------------------------------------------
hero:
  eyebrow: "KINA NA DRUGAČIJI NAČIN"
  headline: "PUTOVANJE U KINU"
  headlineHighlight: "KOJE SE NE ZABORAVLJA"
  lead: "Edukativni sadržaj, korisni saveti i grupna putovanja za sve koji žele da upoznaju modernu Kinu iz drugačijeg ugla, bez mitova i nepotpunih informacija."
  cta:
    label: "Pogledaj ture"
    href: "/ture/"
  image: "~/assets/hero/pexels-320383869-15620113.jpg"
  imageAlt: "Dvorište tradicionalnog kineskog hrama sa ukrašenim krovovima"

# ---------------------------------------------------------------------
# 2. BENTO GRID, kod Montanara "Izaberi svoju avanturu"
#    5 kartica: 1 kontakt (mala, u boji) + 4 sadržajne.
#    size kontroliše raspored u gridu (tall / wide / normal)
# ---------------------------------------------------------------------
ponuda:
  heading: "ISTRAŽI Kinu"

  kontaktKartica:
    telefon: "+381 XX XXX XXXX"
    napomena: "Pozovi ili piši na WhatsApp"

  kartice:
    - naslov: "Ture uskoro stižu"
      nadnaslov: "Novi termini su u pripremi"
      opis: "Pripremam nove grupne ture kroz Kinu. Uskoro objavljujem datume polazaka, detaljne itinerere i sve informacije za rezervaciju."
      cta: "Pogledaj najavu"
      href: "/ture/"
      image: "~/assets/ponuda/grupne-ture.jpg"
      imageAlt: "Grupa putnika ispred hrama u Pekingu"
      size: "wide"

    - naslov: "Destinacije"
      nadnaslov: "Gde vas sve vodim"
      opis: "Šangaj, Peking, Hainan, Čengdu, Hong Kong. Šta se vidi, koliko dana treba i kada je najbolje vreme za dolazak."
      cta: "Istraži destinacije"
      href: "/destinacije/"
      image: "~/assets/ponuda/destinacije.jpg"
      imageAlt: "Ulica u starom delu Čengdua"
      size: "tall"

    - naslov: "Kina iz prve ruke"
      nadnaslov: "Priče, saveti i vodiči"
      opis: "Praktični saveti o plaćanju, aplikacijama, običajima i svakodnevnom životu u Kini — sve što vredi znati pre puta."
      cta: "Čitaj blog"
      href: "/blog/"
      image: "~/assets/blog/placanje-u-kini/hero.png"
      imageAlt: "Noćna panorama Šangaja uz reku Huangpu"
      size: "normal"

    - naslov: "Vodič kroz Kinu"
      nadnaslov: "E-book za samostalne putnike"
      opis: "Alipay, WeChat, VPN, vozovi i aplikacije. Sve što podešavate pre polaska ako putujete sami."
      cta: "Saznaj više"
      href: "/vodic/"
      image: "~/assets/ponuda/vodic-ebook.jpg"
      imageAlt: "Telefon sa otvorenom kineskom aplikacijom za plaćanje"
      size: "normal"

# ---------------------------------------------------------------------
# 3. TRAKA SA PREDNOSTIMA, 3 kolone preko pozadinske slike
# ---------------------------------------------------------------------
prednosti:
  backgroundImage: "~/assets/sekcije/prednosti-pozadina.jpg"
  backgroundAlt: "Pirinčane terase u provinciji Junan"
  stavke:
    - naslov: "Poverenje kroz edukaciju"
      opis: "Govorim kineski, poznajem lokalnu kuhinju i znam gde vredi izaći iz turističke zone."
      ikonica: "compass"
    - naslov: "Male grupe, do 12 ljudi"
      opis: "Ulazimo u mesta gde autobusi od pedeset putnika ne staju. Ne gubimo sate na prebrojavanje i čekanje."
      ikonica: "users"
    - naslov: "Sve rešeno pre polaska"
      opis: "Smeštaj, vozove, ulaznice, aplikacije za plaćanje i internet sređujem unapred. Vi dolazite na aerodrom."
      ikonica: "check-circle"

# ---------------------------------------------------------------------
# 4. O MENI + KREDIBILITET + LISTA DESTINACIJA
#    Levo: tekst i ključne kvalifikacije. Desno: fotografija.
# ---------------------------------------------------------------------
oMeni:
  nadnaslov: "Ko stoji iza ovoga"
  heading: "Više od agencije,"
  headingHighlight: "Kina iznutra"
  tekst: >
    Brend je nastao iz ličnog iskustva, studija kineskog jezika i godina saradnje sa Kinezima. Cilj je da Kinu predstavi kao pristupačnu i uzbudljivu destinaciju za putnike iz Srbije i regiona.
  cta:
    label: "Pročitaj moju priču"
    href: "/o-meni/"

  kredibilitet:
    - naslov: "Diplomirala kineski jezik"
      opis: "Formalno obrazovanje iz kineskog jezika i kulture kao osnova za sigurnu komunikaciju."
      ikonica: "graduation"
    - naslov: "Putovala po Kini"
      opis: "Lično iskustvo kineskih gradova, ruta i svakodnevnog života van tipičnih turističkih programa."
      ikonica: "map"
    - naslov: "Iskustvo u prevođenju"
      opis: "Rad sa Kinezima, prevođenje i iskustvo u direktnoj međukulturnoj komunikaciji."
      ikonica: "messages"

  # Desna kolona, kod Montanara "Naši projekti"
  lista:
    naslov: "Gde vas vodim:"
    stavke:
      - naziv: "ŠANGAJ"
        podnaslov: "Neboderi i francuska četvrt"
        href: "/destinacije/sangaj/"
      - naziv: "PEKING"
        podnaslov: "Zabranjeni grad i Kineski zid"
        href: "/destinacije/peking/"
      - naziv: "HAINAN"
        podnaslov: "Tropsko ostrvo i plaže Sanje"
        href: "/destinacije/hainan/"
      - naziv: "ČENGDU"
        podnaslov: "Pande i sečuanska kuhinja"
        href: "/destinacije/cengdu/"
      - naziv: "ČONGĆING"
        podnaslov: "Grad na više nivoa"
        href: "/destinacije/congcing/"
      - naziv: "HONG KONG"
        podnaslov: "Zaliv, tramvaji i pijace"
        href: "/destinacije/hong-kong/"

# ---------------------------------------------------------------------
# 5. CTA BANER, kod Montanara "AJMO. AJMO."
# ---------------------------------------------------------------------
ctaBaner:
  nadnaslov: "Sledeći polazak čeka"
  headline: "KINA."
  headlineHighlight: "SADA."
  tekst: "Grupe su male i mesta se popune brzo. Javite se dok ima slobodnih termina. Pišite i ako još ne znate kada putujete."
  backgroundImage: "~/assets/sekcije/cta-pozadina.jpg"
  backgroundAlt: "Putnici na trgu Tjenanmen u sumrak"
  primarniCta:
    label: "Pogledaj ture"
    href: "/ture/"
  sekundarniCta:
    label: "Pošalji poruku"
    href: "/kontakt/"

# ---------------------------------------------------------------------
# 6. FAQ, nije u Montanaro dizajnu, dodato zbog SEO-a
#    Renderuje se i kao FAQPage schema.org markup.
#    Ako ne želiš ovu sekciju, obriši ceo blok.
# ---------------------------------------------------------------------
faq:
  heading: "Česta pitanja o putovanju u Kinu"
  pitanja:
    - pitanje: "Da li mi treba viza za Kinu?"
      odgovor: "Državljani Srbije ulaze u Kinu bez vize za boravak do 30 dana, uz pasoš koji važi još najmanje šest meseci. Za putnike iz drugih zemalja regiona pravila se razlikuju, pa ih proveravam pre rezervacije."
    - pitanje: "Koliko košta put u Kinu iz Srbije?"
      odgovor: "Cena zavisi od dužine ture i sezone. Avio-karta iz Beograda uz presedanje čini najveću stavku, dok je život u Kini jeftiniji nego što većina očekuje. Tačna cena za svaki termin stoji na stranici ture."
    - pitanje: "Kada je najbolje vreme za putovanje u Kinu?"
      odgovor: "Proleće od aprila do maja i jesen od septembra do oktobra donose najprijatnije vreme u većini zemlje. Leto je vrelo i vlažno, a Hainan na jugu radi kao zimska destinacija od novembra do aprila."
    - pitanje: "Kako se plaća u Kini ako mi kartica ne radi?"
      odgovor: "Gotovo sve ide preko Alipay-a i WeChat Pay-a, uključujući i pijace. Obe aplikacije danas primaju strane kartice, ali ih podešavamo zajedno pre polaska."
    - pitanje: "Da li se u Kini može proći sa engleskim?"
      odgovor: "Van velikih hotela i aerodroma retko. Zato grupe vodim lično i prevodim na licu mesta."

# ---------------------------------------------------------------------
# 7. NEWSLETTER (opciono, iznad footera)
# ---------------------------------------------------------------------
newsletter:
  aktivno: false
  naslov: "Jednom mesečno, ono što vredi znati o Kini"
  opis: "Novi termini, saveti pred put i tekstovi sa bloga. Bez spama."
  cta: "Prijavi se"
---

<!--
Telo dokumenta se NE renderuje na homepage-u. Sve sekcije se čitaju iz
frontmatter-a iznad. Ovaj prostor koristi za interne beleške.

TODO pre lansiranja:
- [ ] Uneti stvaran broj telefona u ponuda.kontaktKartica.telefon
- [ ] Ubaciti slike u /src/assets/ po putanjama navedenim gore
- [ ] Napraviti og/homepage.jpg (1200x630)
- [ ] Odlučiti da li /ture/privatne/ ide kao zasebna stranica ili kao
      sekcija na /ture/
-->
