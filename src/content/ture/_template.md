---
# =====================================================================
# ŠABLON ZA TURU
# Kopiraj, preimenuj u slug (npr. klasicna-kina-10-dana.md), popuni.
# URL postaje: /ture/klasicna-kina-10-dana/
# =====================================================================

# --- OBAVEZNO ---------------------------------------------------------
naslov: "Klasična Kina za 10 dana"
title: "Putovanje u Kinu, 10 dana: Peking i Šangaj | Kina sa Ksenijom"
description: "Organizovano putovanje u Kinu iz Beograda. Peking, Kineski zid i Šangaj za 10 dana, mala grupa, vodič koji govori kineski."
uvod: "Ruta za prvi dolazak u Kinu. Pokriva ono što se mora videti, bez trčanja."

heroImage: "~/assets/ture/klasicna-kina/hero.jpg"
heroImageAlt: "Kineski zid kod Mutianjua u jesen"

# --- OSNOVNI PARAMETRI (kartica na vrhu stranice) ---------------------
tip: "grupna"                  # grupna | privatna
trajanjeDana: 10
trajanjeNoci: 9
polazakIz: "Beograd"
destinacije: ["peking", "sangaj"]        # slugovi iz /destinacije/
nivoZahtevnosti: "lak"                   # lak | umeren | zahtevan
velicinaGrupe: { min: 6, max: 12 }
jezikVodica: "srpski i kineski"

# --- CENA -------------------------------------------------------------
cena:
  od: 0                        # 0 znači "na upit", unesi broj kada bude poznato
  valuta: "EUR"
  napomena: "po osobi, u dvokrevetnoj sobi"
  doplataZaJednokrevetnu: 0

# --- TERMINI ----------------------------------------------------------
# status: dostupno | poslednja-mesta | popunjeno | najava
termini:
  - polazak: 2026-04-12
    povratak: 2026-04-21
    cena: 0
    slobodnihMesta: 12
    status: "dostupno"
  - polazak: 2026-09-20
    povratak: 2026-09-29
    cena: 0
    slobodnihMesta: 12
    status: "najava"

# --- ŠTA JESTE I ŠTA NIJE UKLJUČENO -----------------------------------
ukljuceno:
  - "Smeštaj u hotelima 4* sa doručkom"
  - "Svi interni prevozi, brzi voz Peking do Šangaja i transferi"
  - "Vodič sa srpskog govornog područja tokom celog puta"
  - "Ulaznice za sve lokacije iz programa"
  - "Podešavanje Alipay-a, WeChat-a i interneta pre polaska"

nijeUkljuceno:
  - "Avio-karta Beograd do Pekinga i Šangaj do Beograda"
  - "Putno osiguranje"
  - "Ručkovi i večere osim onih navedenih u programu"
  - "Lični troškovi i napojnice"

# --- ITINERER ---------------------------------------------------------
itinerer:
  - dan: 1
    naslov: "Dolazak u Peking"
    opis: "Transfer sa aerodroma, smeštaj i lagana šetnja kvartom hutonga uz prvu večeru u grupi."
    nocenje: "Peking"
    obroci: ["večera"]
  - dan: 2
    naslov: "Zabranjeni grad i Tjenanmen"
    opis: "Ceo dan u istorijskom centru, sa ulaskom u Zabranjeni grad i usponom na brdo Đingšan za pogled odozgo."
    nocenje: "Peking"
    obroci: ["doručak"]
  - dan: 3
    naslov: "Kineski zid, deonica Mutianju"
    opis: "Deo zida bez gužve, sa žičarom u oba pravca. Povratak u grad u kasno popodne."
    nocenje: "Peking"
    obroci: ["doručak", "ručak"]

# --- DODATNO ----------------------------------------------------------
faq:
  - pitanje: "Da li mi treba viza za ovu turu?"
    odgovor: "Državljanima Srbije viza nije potrebna za boravak do 30 dana. Za ostale zemlje regiona proveravam pojedinačno."
  - pitanje: "Kada se plaća i kolika je akontacija?"
    odgovor: "Akontacija se uplaćuje pri rezervaciji, ostatak najkasnije 30 dana pre polaska."

spisakZaPakovanje: "~/dokumenti/spisak-za-pakovanje.pdf"    # opciono, link na PDF

# --- SEO / KONTROLA ---------------------------------------------------
ciljniKeyword: "putovanje u kinu"
sporedniKeywords: ["kina putovanje cena", "kina aranzmani 2026", "peking putovanje"]
istaknuto: true
redosled: 1
draft: false
datumObjave: 2026-08-01
datumIzmene: 2026-08-01
---

Slobodan tekst o turi u Markdownu, ide ispod itinerera.

## Kome je ova tura namenjena

## Kakav je tempo

## Šta ova tura ne pokriva
