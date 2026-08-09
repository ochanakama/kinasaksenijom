# kinasaksenijom.com

Sajt o organizovanim putovanjima u Kinu iz Srbije i regiona. Usluge: vođene
ture i jedan e-book vodič. Jedna osoba (Ksenija) vodi grupe. Sajt je na srpskom.

## Stack i prioriteti

- **Astro 5**, statički build (`output: "static"`). Bez frameworka za UI osim
  ako je neophodno. JavaScript samo tamo gde stvarno treba (islands).
- **Dva neodvojiva cilja: besprekoran Core Web Vitals i SEO.** Svaka odluka o
  kodu meri se prema njima. Ako nešto ubrzava sajt ili poboljšava SEO, ide;
  ako usporava, ne ide.
- Deploy meta: statični hosting (Netlify/Vercel/Cloudflare Pages).

## Core Web Vitals, tvrda pravila

- Slike isključivo preko `astro:assets` (`<Image>` / `<Picture>`). Nikad sirov
  `<img>` sa neoptimizovanim fajlom. Uvek `width`, `height` i `alt`, da nema
  layout shift-a (CLS).
- Hero slika se `preload`-uje i ima `loading="eager"`, `fetchpriority="high"`.
  Sve ispod prvog ekrana ide `loading="lazy"`.
- Fontovi: self-hosted, `font-display: swap`, `preload` samo za font koji se
  vidi u prvom ekranu. Bez Google Fonts sa strane.
- Bez CLS: rezerviši prostor za svaku sliku, embed i dinamički element.
- Minimum third-party skripti. Analitiku (ako se doda) učitati odloženo.
- Cilj: LCP < 2.5s, INP < 200ms, CLS < 0.1, sve zeleno na mobilnom.

## SEO, tvrda pravila

- Svaka stranica: jedinstven `<title>` (do ~60 znakova) i `meta description`
  (140 do 160 znakova), oboje iz frontmatter-a (`title`, `description`).
- Kanonski URL na svakoj stranici. Open Graph i Twitter kartice.
- Jedan `<h1>` po stranici (iz polja `naslov`). Semantički HTML.
- `sitemap.xml` (@astrojs/sitemap) i `robots.txt`.
- Schema.org (JSON-LD) po tipu stranice, generisan iz frontmatter-a:
  - destinacije → `TouristDestination` / `Place` (+ `koordinate`)
  - ture → `TouristTrip` (BEZ `offers` dok nema cene i datuma)
  - blog → `BlogPosting`
  - `faq` polje → `FAQPage` gde postoji
  - breadcrumbs → `BreadcrumbList`
- Interni linkovi iz polja `povezane*` i `susedneDestinacije` (slug → URL).
- Svaki interni link mora da vodi na postojeću stranicu. Bez 404 u navigaciji.
- URL-ovi su mala slova, bez dijakritike: `/destinacije/congcing/`.

## Sadržaj (content collections)

Sav tekst živi u `src/content/` kao Markdown. Kolekcije se definišu u
`src/content.config.ts` (Content Layer API, `glob()` loader, Zod šeme).

| Folder                   | Ruta                     | Šta je        |
| ------------------------ | ------------------------ | ------------- |
| `stranice/`              | homepage i statične      | homepage.md   |
| `destinacije/`           | `/destinacije/[slug]/`   | gradovi       |
| `ture/`                  | `/ture/[slug]/`          | ture          |
| `blog/`                  | `/blog/[slug]/`          | blog postovi  |

Pravila kolekcija:
- **Ime fajla = slug = URL.** `sangaj.md` → `/destinacije/sangaj/`.
- **Fajl koji počinje sa `_` se ignoriše** (npr. `_template.md`). To su šabloni.
- **`draft: true` znači da se stranica NE builduje** u produkciji.
- Nova `.md` datoteka u folderu = nova stranica pri sledećem buildu, bez
  izmene koda. Listing i dinamičke rute čitaju ceo folder preko `getCollection`.
- Listing stranice (`/destinacije/`, `/blog/`, `/ture/`) prikazuju **kartice**.
  Kartica koristi polje `karticaOpis` (ili `uvod` ako `karticaOpis` ne postoji),
  ne ceo tekst.
- Kada kolekcija vrati nula objavljenih stavki, listing prikazuje prazno stanje,
  ne praznu mrežu.

## Copywriting pravila (VAŽNO za svaki tekst)

Sav tekst na srpskom (latinica). Kada pišeš ili menjaš copy:

- **Nikad crtice `—` ni `–`.** Koristi zarez ili novu rečenicu.
- **Nikad konstrukcije tipa „ne X, već Y", „ne samo X nego i Y", „nije X, nego
  Y".** To je fluff. Piši direktno u pozitivnom obliku.
- Aktivan glas, kratke rečenice, bez pop-fraza i bez praznog uvoda.
- Ne izmišljaj činjenice, brojeve ni cene. Ako podatak nije poznat, ostavi
  placeholder ili pitaj. Cene i datumi se menjaju, ne upisuj ih napamet.
- Prvo lice jednine (brend je lična priča): „vodim", „rešavam".

## Trenutni status (ažurirati kako projekat raste)

- **Ture se još NE objavljuju.** Kolekcija `ture` postoji i šema je spremna,
  ali sve ture su `draft: true`. `/ture/` je listing sa praznim stanjem koji
  cilja upit „putovanje u kinu". Ne renderovati pojedinačne ture dok su draft.
- E-book `/vodic/` još ne postoji. Ne linkovati na njega dok se ne napravi,
  ili link preusmeriti na `/kontakt/`.
- Objavljeno: homepage, 3 destinacije (sangaj, peking, hainan), 1 blog post.
