import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const imagePath = z.string().startsWith('~/assets/');
const date = z.coerce.date();
const faqItem = z.object({ pitanje: z.string(), odgovor: z.string() });
const ctaLink = z.object({ label: z.string(), href: z.string() });
const seoControl = {
  ciljniKeyword: z.string().optional(),
  sporedniKeywords: z.array(z.string()).optional(),
  istaknuto: z.boolean().optional().default(false),
  redosled: z.number().int().optional().default(999),
  draft: z.boolean().optional().default(false),
  datumObjave: date.optional(),
  datumIzmene: date.optional(),
};

const stranice = defineCollection({
  loader: glob({ pattern: '**/[!_]*.md', base: './src/content/stranice' }),
  schema: z.object({
    seo: z.object({
      title: z.string(),
      description: z.string(),
      canonical: z.string().url(),
      ogImage: z.string(),
      ogImageAlt: z.string(),
      keywords: z.array(z.string()).optional(),
    }),
    hero: z.object({
      eyebrow: z.string(),
      headline: z.string(),
      headlineHighlight: z.string(),
      lead: z.string(),
      cta: ctaLink,
      image: imagePath,
      imageAlt: z.string(),
    }),
    ponuda: z.object({
      heading: z.string(),
      kartice: z.array(z.object({
        naslov: z.string(),
        nadnaslov: z.string(),
        opis: z.string(),
        cta: z.string(),
        href: z.string(),
        image: imagePath,
        imageAlt: z.string(),
        size: z.enum(['tall', 'wide', 'normal']),
      })),
    }),
    prednosti: z.object({
      backgroundImage: imagePath,
      backgroundAlt: z.string(),
      stavke: z.array(z.object({ naslov: z.string(), opis: z.string(), ikonica: z.string() })),
    }),
    oMeni: z.object({
      nadnaslov: z.string(),
      heading: z.string(),
      headingHighlight: z.string(),
      tekst: z.string(),
      cta: ctaLink,
      kredibilitet: z.array(z.object({ naslov: z.string(), opis: z.string(), ikonica: z.string() })),
      lista: z.object({
        naslov: z.string(),
        stavke: z.array(z.object({ naziv: z.string(), podnaslov: z.string(), href: z.string() })),
      }),
    }),
    ctaBaner: z.object({
      nadnaslov: z.string(),
      headline: z.string(),
      headlineHighlight: z.string(),
      tekst: z.string(),
      backgroundImage: imagePath,
      backgroundAlt: z.string(),
      primarniCta: ctaLink,
      sekundarniCta: ctaLink,
    }),
    faq: z.object({ heading: z.string(), pitanja: z.array(faqItem) }).optional(),
    newsletter: z.object({
      aktivno: z.boolean(),
      naslov: z.string(),
      opis: z.string(),
      cta: z.string(),
    }).optional(),
  }),
});

const landing = defineCollection({
  loader: glob({ pattern: '**/[!_]*.md', base: './src/content/landing' }),
  schema: z.object({
    seo: z.object({
      title: z.string(),
      description: z.string(),
      canonical: z.string().url(),
    }),
    purchaseUrl: z.string().url(),
    hero: z.object({
      eyebrow: z.string(),
      naslov: z.string(),
      lead: z.string(),
      opis: z.string(),
      istaknuto: z.string(),
      cta: z.string(),
      microcopy: z.string(),
      imageAlt: z.string(),
    }),
    problem: z.object({
      eyebrow: z.string(),
      naslov: z.string(),
      paragrafi: z.array(z.string()),
      izazovi: z.array(z.object({
        znak: z.string(),
        naslov: z.string(),
      })).length(3),
    }),
    sadrzaj: z.object({
      eyebrow: z.string(),
      naslov: z.string(),
      uvod: z.string(),
      teme: z.array(z.object({
        naslov: z.string(),
        stavke: z.array(z.string()),
        ikonica: z.string(),
        znak: z.string(),
      })).length(4),
    }),
    bonusi: z.object({
      naslov: z.string(),
      stavke: z.array(z.object({ naslov: z.string(), opis: z.string() })).length(3),
      cta: z.string(),
      microcopy: z.string(),
    }),
    preview: z.object({
      eyebrow: z.string(),
      naslov: z.string(),
      opis: z.string(),
      stavke: z.array(z.object({ naslov: z.string(), alt: z.string(), filename: z.string() })).length(3),
    }),
    autor: z.object({
      naslov: z.string(),
      paragrafi: z.array(z.string()),
      linkLabel: z.string(),
      linkHref: z.string(),
      imageAlt: z.string(),
    }),
    faq: z.object({ naslov: z.string(), pitanja: z.array(faqItem) }),
    zavrsniCta: z.object({
      naslov: z.string(),
      tekst: z.string(),
      cta: z.string(),
      microcopy: z.string(),
    }),
  }),
});

const destinacije = defineCollection({
  loader: glob({ pattern: '**/[!_]*.md', base: './src/content/destinacije' }),
  schema: z.object({
    naslov: z.string(),
    title: z.string(),
    description: z.string(),
    uvod: z.string(),
    heroImage: imagePath,
    heroImageAlt: z.string(),
    regija: z.string(),
    kineskiNaziv: z.string(),
    transliteracije: z.array(z.string()).optional(),
    podaci: z.object({
      brojStanovnika: z.string().optional(),
      vremenskaZona: z.string().optional(),
      aerodrom: z.string().optional(),
      preporucenoTrajanje: z.string().optional(),
      najboljeVreme: z.string().optional(),
      valuta: z.string().optional(),
    }),
    znamenitosti: z.array(z.object({
      naziv: z.string(), opis: z.string(), image: imagePath, imageAlt: z.string(),
    })).optional().default([]),
    galerija: z.array(z.object({ src: imagePath, alt: z.string() })).optional().default([]),
    faq: z.array(faqItem).optional(),
    povezaneTure: z.array(z.string()).optional().default([]),
    povezaniBlogovi: z.array(z.string()).optional().default([]),
    susedneDestinacije: z.array(z.string()).optional().default([]),
    koordinate: z.object({ lat: z.number(), lng: z.number() }).optional(),
    noindex: z.boolean().optional().default(false),
    ...seoControl,
  }),
});

const termini = z.object({
  polazak: date,
  povratak: date,
  cena: z.number().optional(),
  slobodnihMesta: z.number().int().nonnegative(),
  status: z.enum(['dostupno', 'poslednja-mesta', 'popunjeno', 'najava']),
});

const ture = defineCollection({
  loader: glob({ pattern: '**/[!_]*.md', base: './src/content/ture' }),
  schema: z.object({
    naslov: z.string(),
    title: z.string(),
    description: z.string(),
    uvod: z.string(),
    karticaOpis: z.string().optional(),
    heroImage: imagePath,
    heroImageAlt: z.string(),
    tip: z.enum(['grupna', 'privatna']),
    trajanjeDana: z.number().int().positive(),
    trajanjeNoci: z.number().int().nonnegative(),
    polazakIz: z.string(),
    destinacije: z.array(z.string()),
    nivoZahtevnosti: z.enum(['lak', 'umeren', 'zahtevan']),
    velicinaGrupe: z.object({ min: z.number().int(), max: z.number().int() }),
    jezikVodica: z.string(),
    sezona: z.string().optional(),
    cena: z.object({
      od: z.number().nonnegative(),
      valuta: z.string(),
      napomena: z.string().optional(),
      doplataZaJednokrevetnu: z.number().nonnegative().optional(),
    }).optional(),
    termini: z.array(termini).optional().default([]),
    terminiNapomena: z.string().optional(),
    cta: z.object({ naslov: z.string(), tekst: z.string(), dugme: z.string(), href: z.string() }).optional(),
    ukljuceno: z.array(z.string()).optional().default([]),
    nijeUkljuceno: z.array(z.string()).optional().default([]),
    itinerer: z.array(z.object({
      dan: z.number().int(), naslov: z.string(), opis: z.string(), nocenje: z.string().nullable(), obroci: z.array(z.string()),
    })).optional().default([]),
    faq: z.array(faqItem).optional(),
    spisakZaPakovanje: z.string().optional(),
    noindex: z.boolean().optional().default(false),
    ...seoControl,
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    naslov: z.string(),
    title: z.string(),
    description: z.string(),
    uvod: z.string(),
    karticaOpis: z.string().optional(),
    heroImage: imagePath,
    heroImageAlt: z.string(),
    autor: z.string(),
    kategorija: z.string(),
    tagovi: z.array(z.string()).optional().default([]),
    datumObjave: date,
    datumIzmene: date.optional(),
    vremeCitanja: z.number().int().positive().optional(),
    povezaneDestinacije: z.array(z.string()).optional().default([]),
    povezaneTure: z.array(z.string()).optional().default([]),
    povezaniBlogovi: z.array(z.string()).optional().default([]),
    ciljniKeyword: z.string().optional(),
    sporedniKeywords: z.array(z.string()).optional(),
    faq: z.array(faqItem).optional(),
    istaknuto: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
    noindex: z.boolean().optional().default(false),
  }),
});

export const collections = { stranice, landing, destinacije, ture, blog };
