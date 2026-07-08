# AS-Automobile — Website (statisches Paket)

Self-contained, ohne Build lauffähig (GitHub Pages, Netlify, Vercel, klassisches Hosting).
Skalierbar aufgebaut: **jedes Angebot/Auto hat einen eigenen Ordner** unter `angebote/`.

## Struktur
```
as-automobile-website/
├─ index.html                       ← Startseite (Hauptlandingpage, alle Angebote)
├─ assets/                          ← GETEILT über alle Seiten
│  ├─ support.js                    ← Laufzeit (rendert die Seiten)
│  ├─ ds-base.js                    ← lädt Inter-Font + Design-Tokens
│  └─ img/
│     └─ placeholder-car.svg        ← Platzhalterbild für Angebote ohne Foto
└─ angebote/
   └─ skoda-fabia/                  ← EIN Angebot = EIN Ordner
      ├─ index.html                 ← Landingpage      → /angebote/skoda-fabia/
      ├─ anfrage.html               ← Anfrage-Formular → /angebote/skoda-fabia/anfrage.html
      ├─ danke.html                 ← Bestätigung      → /angebote/skoda-fabia/danke.html
      └─ img/                       ← Bilder NUR für dieses Fahrzeug
```

Saubere URLs ergeben sich automatisch aus den Ordnern:
`/` · `/angebote/skoda-fabia/` · `/angebote/skoda-fabia/anfrage.html`.

## Der Funnel
Startseite → Karte „Zum Angebot" → `angebote/skoda-fabia/` → CTA → `anfrage.html`
(Rechnerwerte werden per URL-Parameter übergeben und füllen das Formular vor) →
Absenden → `danke.html` (personalisierte Bestätigung).

## 🚗 Neues Angebot hinzufügen (Vorlage)
1. Ordner `angebote/skoda-fabia/` **kopieren** → z. B. `angebote/seat-ibiza/`.
2. In den 3 HTML-Dateien Inhalt anpassen: Fahrzeugdaten, Preise, Effizienzklasse,
   Farb-Konfigurator und — **wichtig** — den `--sk-*` CSS-Variablenblock am äußersten
   `<div>` auf das **Marken-Farbkonzept** setzen (Škoda = Grün/Mint; SEAT/CUPRA folgen).
3. Fahrzeugbilder in den neuen `img/`-Ordner legen (gleiche Dateinamen behalten = keine
   weiteren Änderungen nötig).
4. Auf der **Startseite** (`index.html`) im Array `offers` (im `<script data-dc-script>`)
   eine Karte ergänzen: `{ brand, title, km, reg, ps, price, badge, featured, img, href:'angebote/seat-ibiza/' }`.

Die geteilte Laufzeit (`assets/`) wird von allen Angeboten mitbenutzt — nichts zu duplizieren.

## Vor dem Livegang
- **Formular an CRM/E-Mail anbinden:** in `angebote/<auto>/anfrage.html` die Methode
  `submit(e)` erweitern (Daten senden, dann weiter zu `danke.html`). Alle Feldwerte
  liegen in `this.state`.
- **Rechner-Formeln** (`computeLeasing` / `computeFinanzierung`) durch die exakte Matrix
  eurer Leasing-/Finanzierungspartner ersetzen. Raten sind als *unverbindliche Schätzung*
  gekennzeichnet.

## Externe Ressourcen (laufen auf echter Domain)
Font Awesome & Google Fonts Inter (CDN) · Google-Bewertungen via Elfsight
(`elfsightcdn.com`) · Google-Maps-Embed + Link auf euer Google-Profil ·
Berater-Foto von `onecdn.io` (optional lokal nach `img/` legen).

## Aktuelles Angebot
Škoda Fabia Essence 1.0 MPI · Vorführwagen · 59 kW (80 PS) · 5-Gang · EZ 06/2026 · 50 km ·
5,1 l/100km · CO₂ 116 g/km · Klasse D · 20.719,99 € · Leasing ab 139 €/Monat ·
Ansprechpartner Martin Kedzierski · 0201 83 14 83 24 · mk@skoda-as.de.
