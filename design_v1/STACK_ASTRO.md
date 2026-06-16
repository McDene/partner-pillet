# Implémentation Astro — Pillet & Partners

Guide d'implémentation de la page d'accueil (V1) dans **Astro**, avec contenu éditable via **Decap CMS**
et déploiement **Netlify**. À lire après `README.md` (qui contient toutes les specs visuelles).

## 1. Principes
- **Astro statique** (`output: 'static'`). Aucune hydratation nécessaire pour cette page (pas de JS
  côté client hormis d'éventuels survols gérés en CSS). Ne pas charger de framework UI.
- **Contenu piloté par le CMS** : tous les textes des §6 du README vivent dans des fichiers de contenu
  (Markdown/JSON/YAML) édités par la cliente via Decap. Les composants `.astro` ne contiennent que la
  structure + le style, jamais le texte en dur.
- **Composants par section** : un `.astro` par bloc, pour que la page d'accueil soit lisible et que
  chaque section soit réutilisable.
- **Images via `astro:assets`** (`<Image />`) pour l'optimisation (formats modernes, dimensions, lazy).

## 2. Arborescence proposée
```
src/
├── styles/
│   └── tokens.css            # :root { --navy … } + @font-face/import, reset léger
├── layouts/
│   └── Base.astro            # <html>, <head> (fonts, meta SEO), header, footer, <slot/>
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Eyebrow.astro         # filet + texte sur-titre (props: text, color, onDark)
│   ├── Button.astro          # CTA primaire/secondaire (props: variant, href, label)
│   ├── Hero.astro
│   ├── SignatureBand.astro   # bandeau coupe de tronc
│   ├── Challenges.astro      # « Les défis »
│   ├── Domains.astro         # « Nos domaines »
│   ├── Approach.astro        # « Notre approche »
│   ├── WhyUs.astro           # « Pourquoi Pillet & Partners »
│   ├── Audience.astro        # « Pour qui ? »
│   └── FinalCta.astro
├── content/
│   ├── config.ts             # collections typées (Zod)
│   └── home/
│       └── index.json        # (ou .md) contenu de la home, édité par Decap
└── pages/
    └── index.astro           # assemble les composants à partir du contenu
public/
├── admin/
│   ├── index.html            # point d'entrée Decap CMS
│   └── config.yml            # ← copier depuis decap/config.yml
├── assets/                   # logo.svg (idéalement), line-pillet.jpg, wood-rings.png
└── uploads/                  # média uploadés via le CMS (media_folder)
```

## 3. Tokens & fontes
`src/styles/tokens.css` : déclarer les variables du README §4 dans `:root`, plus un reset léger
(`box-sizing`, `margin:0`). Importer dans `Base.astro`.

**Fontes — préférer le self-host** (perf + RGPD, pas d'appel à Google sur un site suisse) :
```bash
npm i @fontsource/inter @fontsource/spectral
```
```astro
---
// Base.astro
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/spectral/400.css';
import '@fontsource/spectral/400-italic.css';
import '@fontsource/spectral/500.css';
import '../styles/tokens.css';
---
```
> Si self-host impossible, utiliser le `<link>` Google Fonts du README §4 avec `preconnect` + `display=swap`.

## 4. Content Collections (`src/content/config.ts`)
Modéliser la home en une collection `home` (un seul fichier `index`). Schéma Zod aligné sur le contenu :
```ts
import { defineCollection, z } from 'astro:content';

const home = defineCollection({
  type: 'data', // JSON/YAML
  schema: z.object({
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
    hero: z.object({
      eyebrow: z.string(),
      title: z.string(),          // peut contenir du HTML léger pour l'accent <em>, ou champ séparé
      titleAccent: z.string(),    // « étapes décisives »
      subtitle: z.string(),
      ctaPrimary: z.object({ label: z.string(), href: z.string() }),
      ctaSecondary: z.object({ label: z.string(), href: z.string() }),
    }),
    signature: z.object({
      eyebrow: z.string(),
      quote: z.string(),
      quoteAccent: z.string(),    // « cernes d'un arbre »
      image: z.string(),
    }),
    challenges: z.object({
      eyebrow: z.string(),
      title: z.string(),
      intro: z.string(),
      items: z.array(z.string()).length(6),
      conclusion: z.string(),
    }),
    domains: z.object({
      title: z.string(),
      eyebrow: z.string(),
      items: z.array(z.object({
        number: z.string(),
        title: z.string(),
        description: z.string(),
        href: z.string().optional(),
      })),
    }),
    approach: z.object({
      eyebrow: z.string(),
      subtitle: z.string(),
      steps: z.array(z.object({ name: z.string(), description: z.string() })).length(4),
    }),
    whyUs: z.object({
      eyebrow: z.string(),
      title: z.string(),
      portrait: z.string(),
      portraitCaption: z.string(),
      reasons: z.array(z.object({ title: z.string(), description: z.string() })).length(4),
    }),
    audience: z.object({
      eyebrow: z.string(),
      items: z.array(z.string()),
    }),
    finalCta: z.object({
      title: z.string(),
      text: z.string(),
      cta: z.object({ label: z.string(), href: z.string() }),
    }),
  }),
});

export const collections = { home };
```
> Pour les accents typographiques (`<em>` dans le H1 et la citation), deux options :
> (1) champ `titleAccent` séparé que le composant insère stylé ; (2) autoriser un sous-ensemble HTML.
> L'option (1) est plus sûre avec un CMS grand public — privilégiez-la.

`pages/index.astro` lit `getEntry('home', 'index')` et passe les données en props aux composants.

## 5. Mapping section → composant
| Section README | Composant | Notes d'implémentation |
|---|---|---|
| §6.1 Header | `Header.astro` | logo + nav ; gouttière 96px |
| §6.2 Hero | `Hero.astro` | H1 avec accent `--blue` sur `titleAccent` |
| §6.3 Bandeau | `SignatureBand.astro` | pleine largeur, overlay dégradé 90deg, `<Image>` cover |
| §6.4 Défis | `Challenges.astro` | grille 1fr/1fr, liste filetée numérotée |
| §6.5 Domaines | `Domains.astro` | 4 lignes grille `92px 1fr 26px` |
| §6.6 Approche | `Approach.astro` | titre multicolore, 4 colonnes filet haut |
| §6.7 Pourquoi | `WhyUs.astro` | portrait + 4 raisons en grille 2×2 |
| §6.8 Pour qui | `Audience.astro` | pastilles flex-wrap |
| §6.9 CTA final | `FinalCta.astro` | encart `--paper`, centré |
| §6.10 Footer | `Footer.astro` | à concevoir avec la cliente |

Respecter **au pixel** les valeurs du README §6 (tailles, paddings, couleurs, line-heights).

## 6. Performance (exigence cliente : léger & rapide)
- `output: 'static'`, zéro JS d'hydratation sur la home.
- Images via `astro:assets` (`<Image>`), `loading="lazy"` sauf le hero/visuels au-dessus de la ligne de flottaison.
- Fontes self-hostées, poids strictement nécessaires (cf. §3), `font-display: swap`.
- Pas de librairie d'animation. Survols en CSS pur (`transition: … .18s`).
- Viser Lighthouse ~100 perf : c'est atteignable vu la sobriété du design.

## 7. astro.config + Netlify
- Pas besoin d'adaptateur si 100% statique (`output:'static'`). Netlify sert le `dist/`.
- `netlify.toml` :
  ```toml
  [build]
    command = "npm run build"
    publish = "dist"
  ```
- **Decap + Netlify Identity** pour l'auth CMS : activer Identity + Git Gateway dans Netlify, ou
  utiliser un backend GitHub OAuth. Voir `decap/config.yml`.
- **Formulaire de contact** : Netlify Forms (`<form name="contact" data-netlify="true">`) — pas de backend à écrire.
```
