Postavljaš novi Astro sajt za kinasaksenijom.com. Folder već sadrži `CLAUDE.md`
i `src/content/` sa gotovim Markdown sadržajem. **Ne diraj i ne prepisuj ništa u
`src/content/`.** Pročitaj CLAUDE.md pre nego što počneš i drži se svih pravila
za Core Web Vitals, SEO i sadržaj.

Uz ovaj prompt je zakačen screenshot dizajna. **Prati ga za RASPORED sekcija, a
ne za boje** (vidi sekciju „Dizajn i paleta" niže).

## 1. Inicijalizacija

- Inicijalizuj Astro 5 projekat u ovom folderu (statički output), čuvajući
  postojeći `CLAUDE.md` i `src/content/`. TypeScript, strict.
- Instaliraj i podesi: `@astrojs/sitemap`, `sharp` (image optimizacija).
- Podesi `astro.config.mjs`: `site: "https://kinasaksenijom.com"`,
  `output: "static"`, sitemap integracija.
- Dodaj `public/robots.txt` koji dozvoljava indeksiranje i pokazuje na sitemap.

## 2. Content Layer (`src/content.config.ts`)

Definiši četiri kolekcije `glob()` loaderom, sa Zod šemama koje odgovaraju
frontmatter-u u postojećim fajlovima. Otvori po jedan primer iz svakog foldera
da vidiš tačna polja pre nego što napišeš šeme:

- `stranice` (base `./src/content/stranice`). Homepage ima ugnežden
  frontmatter po sekcijama (hero, ponuda, prednosti, oMeni, ctaBaner, faq...).
- `destinacije`, vidi `src/content/destinacije/sangaj.md`.
- `ture`, vidi `src/content/ture/sangaj-hainan.md`. Uključi `draft` polje.
- `blog`, vidi `src/content/blog/placanje-u-kini.md`.

Šeme moraju da obuhvate opciona polja (`faq`, `povezane*`, `koordinate`,
`istaknuto`, `redosled`, `draft`, `karticaOpis`, `noindex`...). Fajlovi koji
počinju sa `_` se ne učitavaju (isključi ih glob patternom).

## 3. Layout i deljene komponente

- Bazni `Layout.astro` sa `<head>` koji prima `title`, `description`, `canonical`,
  `ogImage`, `noindex` i emituje kompletan SEO meta + OG/Twitter tagove.
- Komponenta za JSON-LD (schema.org) koja se poziva po tipu stranice.
- `Header` sa navigacijom: Početna, Ture, Destinacije, Vodič, Blog, O meni,
  Kontakt. `Footer` sa kolonama i kontaktom.
- Reusable `SeoImage` wrapper oko `astro:assets` `<Image>` sa obaveznim
  `width`/`height`/`alt`, lazy po defaultu, eager+preload za hero.
- `Faq.astro` koja renderuje i vizuelni FAQ i `FAQPage` JSON-LD iz istog polja.

## 4. Stranice koje se grade sada

**Homepage (`/`)** iz `src/content/stranice/homepage.md`. Isprati redosled
sekcija iz frontmatter-a. Raspored preuzmi sa zakačenog screenshot-a: bento grid
za ponudu, traka prednosti, „o meni" + brojači + lista destinacija u desnoj
koloni, CTA baner, FAQ. Izmene u odnosu na screenshot: hero ima sliku desno (bez
videa), jedan CTA u hero sekciji, i izbačene su sekcije za recenzije, iskustva i
partnere.

## Dizajn i paleta

**Uzmi RASPORED sa screenshot-a, ali ne i boje.** Screenshot služi kao referenca
za strukturu, grid, proporcije i vizuelni ritam sekcija. Boje i tipografiju
postavljamo posebno, ka kineskom identitetu.

Paleta (tamna osnova, kineski akcenti; sve vrednosti su polazne, doradi ih za
kontrast i pristupačnost, cilj je elegantno a ne kičasto):

- Osnova (pozadina): duboka tamna, ka mastilu i uglju, npr. `#12100E`–`#1B1815`.
- Površine kartica: tamni sloj malo svetliji od pozadine.
- Primarni akcent: kineska crvena u laker/vermilion tonu, prigušena a ne
  vatrogasna, npr. oko `#C1361F`–`#D4472A`. Koristi je za CTA i istaknute reči.
- Sekundarni akcent: zlato/mesing, štedljivo, samo za linije i sitne detalje,
  npr. oko `#C8A24B`. Ne za velike površine.
- Tekst: topla skoro-bela na tamnom, npr. `#F3EEE6`; prigušena za sekundarni.
- Svetle sekcije (ako ih uvodi screenshot): topla off-white, ne čisto bela.

Smernice:
- Crvena i zlatna su akcenti, ne pozadine. Većina stranice ostaje tamna i mirna,
  boja se pojavljuje na dugmadima, hover stanjima i istaknutim rečima.
- Tipografija: jedan izražajan sans-serif za naslove (težak, širok, kao na
  screenshot-u), čitljiv sans za telo teksta. Self-hosted, `font-display: swap`.
- Zadrži osećaj prostora i krupne naslove sa screenshot-a, samo u ovoj paleti.
- Pre nego što kreneš, pročitaj `frontend-design` skill i primeni ga; cilj je
  namerni, prepoznatljiv identitet, a ne default izgled.

**Destinacije:**
- `/destinacije/`: listing sa karticama svih objavljenih destinacija,
  sortiran po `redosled`.
- `/destinacije/[slug]/`: dinamička ruta iz kolekcije. Renderuj hero, info
  karticu (`podaci`), znamenitosti, galeriju, telo Markdown-a, FAQ, i blokove
  internih linkova iz `povezane*`/`susedne*`. JSON-LD `TouristDestination`.

**Blog:**
- `/blog/`: listing sa karticama (`karticaOpis`), sortiran po `datumObjave`
  opadajuće.
- `/blog/[slug]/`: post sa hero slikom, telom, FAQ, `BlogPosting` JSON-LD,
  breadcrumbs.

**Ture (poseban tretman):**
- Kolekcija i šema moraju da postoje.
- `/ture/`: listing koji čita samo NE-draft ture. Trenutno su sve draft, pa
  stranica prikazuje **prazno stanje**: kratak tekst „Termini se uskoro
  objavljuju" i poziv da se ostavi kontakt. Ova stranica cilja upit
  „putovanje u kinu" i mora da bude pravi sadržaj, ne prazan placeholder.
- **Ne generiši pojedinačne `/ture/[slug]/` stranice za draft ture.** Kada
  draft postane `false`, tada se pravi i detaljna ruta.

## 5. SEO i CWV kroz ceo build

Primeni sve iz CLAUDE.md: jedinstveni title/description/canonical po stranici,
sitemap, semantički HTML, jedan h1, breadcrumbs, interni linkovi bez 404,
optimizovane slike bez layout shift-a, self-hosted fontovi sa `swap`, minimum
JS. Cilj je zeleni Lighthouse na mobilnom (Performance, SEO, Accessibility,
Best Practices).

## 6. Placeholderi za slike

Slike još ne postoje. Napravi lagane placeholder fajlove ili SVG na putanjama iz
frontmatter-a (`~/assets/...`), da build prolazi i da se `<Image>` pipeline vidi.
Zabeleži u `README` koje slike treba zameniti pravima i u kojoj rezoluciji.

## 7. Na kraju

- Pokreni `npm run build` i `npm run dev`, potvrdi da build prolazi bez grešaka.
- Napravi kratak `README.md`: kako se pokreće dev, kako se dodaje nova
  destinacija/blog (novi `.md`), kako se objavljuje tura (`draft: false`), i
  spisak slika koje treba dodati.
- Ne diraj tekst u `src/content/`. Ako primetiš grešku u sadržaju, prijavi je,
  ne menjaj sam.

Kada završiš, ukratko mi reci šta je napravljeno i šta je sledeće.
