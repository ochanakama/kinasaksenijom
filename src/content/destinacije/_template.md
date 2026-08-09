---
# =====================================================================
# ŠABLON ZA DESTINACIJU
# Kopiraj ovaj fajl, preimenuj u slug (npr. sangaj.md) i popuni.
# URL postaje: /destinacije/sangaj/
# Fajlove koji počinju sa _ Astro ignoriše, pa se šablon NEĆE renderovati.
# =====================================================================

# --- OBAVEZNO ---------------------------------------------------------
naslov: "Naziv destinacije"           # H1 na stranici
title: "Naziv: šta videti i koliko dana treba | Kina sa Ksenijom"   # <title>, do ~60 znakova
description: "Meta opis od 140 do 160 znakova. Šta videti, koliko dana ostati, kada doći."
uvod: "Jedna do dve rečenice ispod H1 koje postavljaju sliku grada."

heroImage: "~/assets/destinacije/slug/hero.jpg"
heroImageAlt: "Opis slike za čitače ekrana"

# --- KLASIFIKACIJA ----------------------------------------------------
regija: "Istočna Kina"                # Istočna / Severna / Južna / Jugozapadna / Posebne administrativne oblasti
kineskiNaziv: "上海"
transliteracije: ["sangaj", "shanghai"]   # alternativni oblici za pretragu na sajtu

# --- PRAKTIČNI PODACI (renderuju se kao info-kartica) -----------------
podaci:
  brojStanovnika: "24.9 miliona"
  vremenskaZona: "UTC+8"
  aerodrom: "PVG (Pudong) / SHA (Hongqiao)"
  preporucenoTrajanje: "3 do 4 dana"
  najboljeVreme: "april i maj, septembar do novembar"
  valuta: "juan (CNY)"

# --- SADRŽAJ ----------------------------------------------------------
znamenitosti:
  - naziv: "Naziv znamenitosti"
    opis: "Jedna rečenica o tome šta je i zašto se ide."
    image: "~/assets/destinacije/slug/znamenitost-01.jpg"
    imageAlt: "Opis slike"

galerija:
  - src: "~/assets/destinacije/slug/galerija-01.jpg"
    alt: "Opis slike"

faq:
  - pitanje: "Koliko dana je dovoljno?"
    odgovor: "Kratak, konkretan odgovor u jednoj ili dve rečenice."

# --- POVEZIVANJE (interno linkovanje) ---------------------------------
povezaneTure: ["slug-ture"]                    # slugovi iz /ture/
povezaniBlogovi: ["slug-posta"]                # slugovi iz /blog/
susedneDestinacije: ["peking", "hong-kong"]

# --- SEO / KONTROLA ---------------------------------------------------
ciljniKeyword: "glavni upit"
sporedniKeywords: ["sporedni upit 1", "sporedni upit 2"]
koordinate: { lat: 31.2304, lng: 121.4737 }    # za schema.org Place
istaknuto: true        # prikazuje se na homepage-u i vrhu liste
redosled: 1            # ručno sortiranje u pregledu destinacija
draft: false           # true znači da se ne buildu je u produkciji
datumObjave: 2026-08-01
datumIzmene: 2026-08-01
---

Glavni tekst destinacije u običnom Markdownu.

## Šta videti

Podnaslovi idu kao `##` i `###` i automatski ulaze u sadržaj (table of contents).

## Gde odsesti

## Kako se kretati

## Koliko dana ostati
