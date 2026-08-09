# Kina sa Ksenijom

Statički Astro 5 sajt za `kinasaksenijom.com`. Sadržaj se čita iz Markdown kolekcija u `src/content/`.

## Pokretanje

```bash
npm install
npm run dev
```

Provere i produkcioni build:

```bash
npm run check
npm run build
npm run preview
```

## Dodavanje sadržaja

- Destinacija: kopirati `src/content/destinacije/_template.md` u novi fajl čije ime postaje slug, na primer `sudžou.md` treba preimenovati bez dijakritike u `sudzou.md`.
- Blog: kopirati `src/content/blog/_template.md`, popuniti frontmatter i Markdown telo.
- Tura: kopirati `src/content/ture/_template.md`. Dok je `draft: true`, tura se ne prikazuje i detaljna ruta se ne generiše. Za objavu postaviti `draft: false`.
- Fajlovi čije ime počinje znakom `_` služe kao šabloni i kolekcije ih ignorišu.

## Slike koje treba zameniti

Trenutne JPEG datoteke su lagani, brendirani placeholderi. Zadržati iste putanje i nazive prilikom zamene.

- Homepage hero: `src/assets/hero/kina-hero.jpg`, preporuka 1600 × 1100 px.
- Homepage ponuda: svi fajlovi u `src/assets/ponuda/`, preporuka 1200 × 900 px.
- Pozadine sekcija: svi fajlovi u `src/assets/sekcije/`, preporuka 1600 × 720 px.
- Destinacije: svi fajlovi u `src/assets/destinacije/{sangaj,peking,hainan}/`. Hero 1600 × 900 px, znamenitosti i galerija najmanje 1200 × 900 px.
- Blog: `src/assets/blog/placanje-u-kini/hero.jpg`, preporuka 1600 × 900 px.
- Draft tura: `src/assets/ture/sangaj-hainan/hero.jpg`, preporuka 1600 × 900 px.
- Open Graph: `public/og/homepage.jpg` i `public/og/default.jpg`, tačno 1200 × 630 px.

Sve slike se renderuju kroz Astro Image pipeline. Za ponovno generisanje placeholdera pokrenuti:

```bash
node scripts/generate-placeholders.mjs
```

## Pre lansiranja

- Uneti stvaran telefon ili WhatsApp broj i povezati kontakt CTA.
- Zameniti nule u brojačima na homepage-u stvarnim vrednostima.
- Zameniti sve placeholder slike.
- Proveriti činjenice, datume, cene i uslove ulaska u Kinu u Markdown sadržaju.

## Poznato ograničenje

Projekat je namenski zaključan na Astro 5. `npm audit` prijavljuje advisories u toj starijoj glavnoj verziji i njenoj ugrađenoj Sharp zavisnosti. Sajt je potpuno statički i ne koristi server islands, view transitions ni korisnički unos, ali prelazak na podržanu Astro glavnu verziju treba planirati čim zahtev za Astro 5 prestane da važi.
