# Handoff — Page d'accueil « Pillet & Partners » (Variation 1, éditoriale)

## 1. Vue d'ensemble

Ce dossier contient tout le nécessaire pour implémenter **concrètement** la page d'accueil
de **Pillet & Partners** — un cabinet de conseil stratégique en Suisse romande qui accompagne
les dirigeants de PME. La direction artistique retenue est la **V1 « Éditoriale & typographique »** :
sobre, crédible, beaucoup d'espace blanc, typographie forte (un serif d'affichage pour les titres,
un sans-serif pour le corps), usage maîtrisé de la photo. Pas d'univers startup, pas d'effets
tape-à-l'œil. Aucune animation lourde — le site doit rester léger et performant.

**Stack cible :**
- **Astro** (site statique, output `static`)
- **Decap CMS** (ex-Netlify CMS) pour l'édition de contenu par la cliente
- Déploiement **Netlify**
- **Google Fonts uniquement**

Voir `STACK_ASTRO.md` pour l'arborescence Astro proposée et les *content collections*,
et `decap/config.yml` pour la configuration CMS prête à adapter.

---

## 2. À propos des fichiers de design

Les fichiers de `reference/` sont des **références de design réalisées en HTML/React (JSX)** — des
prototypes qui montrent l'apparence et le comportement visés. **Ce ne sont pas du code de production
à copier tel quel.** La tâche consiste à **recréer ce design dans l'environnement Astro** en suivant
ses conventions (composants `.astro`, CSS scopé ou global, `astro:assets` pour les images).

- `reference/Aperçu V1 - Pillet & Partners.html` — la page complète, telle qu'elle doit s'afficher
  (ouvrir dans un navigateur ; elle se met à l'échelle selon la largeur de fenêtre).
- `reference/variation1.jsx` — le code React de la maquette. **C'est la source de vérité** pour la
  structure, les textes exacts et toutes les valeurs (tailles, couleurs, espacements). Les valeurs
  sont en styles inline ; ce README les transcrit en tokens.

Les images de référence sont dans `assets/`.

## 3. Fidélité

**Haute fidélité (hifi).** Couleurs, typographie, espacements et états sont définitifs. Recréez l'UI
au pixel près avec les valeurs ci-dessous. La seule liberté attendue est l'adaptation **responsive**
(la maquette est dessinée à 1440px de large — voir §9).

---

## 4. Design tokens

À déclarer une seule fois (ex. `:root` dans un CSS global, ou un fichier de tokens importé partout).

### Couleurs (issues du logo)
| Token | Hex | Usage |
|---|---|---|
| `--navy` | `#0E3A5C` | Titres, texte de marque, fonds sombres (bandeau, dégradé) |
| `--blue` | `#1A5E86` | CTA primaire, accents (mot « décisives », flèches domaines) |
| `--cyan` | `#2FA8D6` | Réserve (non utilisé en V1, conservé pour cohérence de marque) |
| `--teal` | `#169A9E` | Accent « Aligner » dans le titre Approche |
| `--teal-deep` | `#0F6E72` | Réserve |
| `--sand` | `#B7A079` | Eyebrows (sur-titres), numéros, filets d'accent, mot « Ancrer » |
| `--sand-2` | `#C9B896` | Accents sur fond marine (bandeau signature) |
| `--sand-soft` | `#EDE6D8` | Réserve (fonds doux) |
| `--paper` | `#FAF8F3` | Fond du bloc CTA final |
| `--paper-cool` | `#F4F6F7` | Réserve |
| `--ink` | `#1A2733` | Texte courant foncé, titres de domaines |
| `--ink-soft` | `#52606B` | Paragraphes, sous-titres, liens de nav |

Lignes/filets : `rgba(26,39,51,.13)` (séparateurs), `rgba(26,39,51,.22)` (bordure CTA secondaire),
`rgba(26,39,51,.2)` (pastilles « Pour qui »).

### Typographie
Deux familles Google Fonts :
- **Spectral** (serif d'affichage) → titres, eyebrows en serif, citations. *Équivalent premium du serif éditorial.*
- **Inter** (sans-serif) → corps de texte, navigation, CTA, libellés. *Équivalent moderne de Calibri/Tahoma demandé par la cliente.*

Import (poids réellement utilisés) :
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Spectral:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
```
> Note perf : `&display=swap`, `preconnect`, et idéalement self-host des fontes (ex. `@fontsource/inter`
> + `@fontsource/spectral`) pour éviter une dépendance réseau externe sur un site statique Netlify.

**Échelle typographique utilisée (px / line-height / weight / letter-spacing) :**
| Rôle | Police | Taille | Line-height | Weight | Letter-spacing | Couleur |
|---|---|---|---|---|---|---|
| H1 hero | Spectral | 74 | 1.06 | 400 | -0.012em | `--navy` (mot accent `--blue`, italique) |
| Sous-titre hero | Inter | 21 | 1.62 | 400 | — | `--ink-soft` |
| Eyebrow (sur-titre) | Inter | 13.5 | — | 600 | 0.22em, UPPERCASE | `--sand` (`--sand-2` sur marine) |
| H2 section (défis, pourquoi) | Spectral | 42 | 1.12 | 400 | -0.01em | `--navy` |
| H2 « Nos domaines » | Spectral | 38 | — | 400 | -0.01em | `--navy` |
| H2 Approche | Spectral | 46 | — | 400 | -0.015em | `--navy` |
| H2 CTA final | Spectral | 48 | — | 400 | -0.015em | `--navy` |
| Citation bandeau signature | Spectral | 40 | 1.28 | 400 | — | `#fff` (accent `--sand-2`, italique) |
| Phrase-bilan défis | Spectral italique | 25 | 1.5 | 400 | — | `--navy` |
| Titre domaine (H3) | Spectral | 27 | — | 400 | — | `--ink` |
| Titre approche (H3) | Spectral | 26 | — | 400 | — | `--navy` |
| Titre « pourquoi » (H3) | Spectral | 22 | 1.25 | 500 | — | `--ink` |
| Pastille « Pour qui » | Spectral | 22 | — | 400 | — | `--navy` |
| Numéro domaine | Spectral | 30 | — | 400 | — | `--sand` |
| Corps / descriptions | Inter | 16–18.5 | 1.5–1.6 | 400 | — | `--ink-soft` |
| Nav liens | Inter | 15 | — | 500 | — | `--ink-soft` |
| CTA | Inter | 16 | — | 600 | — | `#fff` ou `--ink` |

### Espacement & rythme
- **Gouttière de page (padding horizontal) : `96px`** de chaque côté (le bandeau signature et le bloc
  CTA s'alignent sur cette gouttière).
- Largeur de référence du design : **1440px**. Largeurs max de contenu : H1 `1120px`, paragraphes
  hero `760px`, autres paragraphes `520–900px` (voir §6).
- Rythme vertical entre sections : `padding-top` de **92–110px** selon la section (valeurs exactes en §6).

### Rayons, bordures, ombres
- Rayons : CTA `2px` ; bloc CTA final `4px` ; cadre photo `3px` ; pastilles « Pour qui » `999px` (pilule).
- Bordures : `1px solid rgba(26,39,51,.13)` (filets de listes) ; `2px solid var(--navy)` (filet haut des cartes Approche).
- **Pas d'ombres portées en V1** (parti pris éditorial). Ne pas en ajouter.

### Transitions (légères, pas d'animation lourde)
- CTA primaire : `background .18s` → au survol, fond passe à `--navy`.
- CTA secondaire : `border-color .18s, color .18s` → au survol, bordure et texte passent à `--navy`.
- C'est tout. Aucune animation d'entrée, aucun parallax, aucune boucle.

---

## 5. Assets

| Fichier | Contenu | Usage en V1 |
|---|---|---|
| `assets/logo.png` | Logo carré : arbre (feuilles en gouttes bleu/cyan/turquoise) jaillissant de deux mains, + texte « PILLET & PARTNERS » serif | **Picto seul** recadré en haut du carré pour la nav (voir note ↓) |
| `assets/line-pillet.jpg` | Portrait de Line Pillet (blazer sombre, atrium lumineux) | Section « Pourquoi », `object-position: center 18%` |
| `assets/wood-rings.png` | Coupe de tronc, cernes en spirale (clin d'œil au logo) | Bandeau signature pleine largeur, `object-position: center 60%` |

**Note logo :** la maquette recadre le **pictogramme arbre** depuis le PNG carré via une astuce CSS
(`background-image` cadré en haut, `background-size: 76px 76px` dans une boîte `46×46`). **Recommandation
forte pour la prod :** demander à la cliente un **logo vectoriel (SVG)** — idéalement une version
horizontale (picto + mot-symbole) — pour la nav et le footer. À défaut, exporter proprement le picto
seul en PNG/SVG détouré plutôt que de recadrer le carré complet.

---

## 6. Sections (de haut en bas)

> Toutes les sections partagent la gouttière horizontale de `96px`, sauf indication contraire.
> Les textes ci-dessous sont **exacts** — à reprendre tels quels (ce sont les contenus validés par la cliente).

### 6.1 — Header / navigation
- Layout : `flex`, `space-between`, `align-items:center`. Padding `34px 96px 0`.
- Gauche : picto logo (`46×46`) + `gap:14px` + mot-symbole « PILLET & PARTNERS » en **Spectral 21px / weight 500 / letter-spacing .14em / couleur --navy**.
- Droite : `nav` en `flex`, `gap:40px`. Liens : **Approche · Domaines · Line Pillet · Contact** (Inter 15px / 500 / `--ink-soft`).
- Pas de CTA dans la nav en V1 (parti pris épuré). *(Optionnel prod : ancres vers les sections / page Contact.)*

### 6.2 — Hero
- Padding `92px 96px 0`.
- **Eyebrow** : filet `38×1px` couleur `--sand` + `gap:16px` + texte « **Conseil stratégique · Suisse romande** » (style eyebrow). `margin-bottom:28px`.
- **H1** (Spectral 74/1.06/400, `--navy`, `max-width:1120px`, `text-wrap:balance`) :
  > Accompagner les dirigeants dans les *étapes décisives* de leur entreprise

  → « **étapes décisives** » en `<em>` italique, couleur `--blue`.
- **Sous-titre** (Inter 21/1.62, `--ink-soft`, `max-width:760px`, `margin-top:36px`) :
  > Croissance, transformation, transmission, repositionnement ou évolution de la gouvernance : nous aidons les dirigeant·e·s et leurs équipes à aligner stratégie, organisation et dynamiques humaines pour transformer leurs ambitions en résultats durables.
- **CTA** (`flex`, `gap:18px`, `margin-top:46px`) :
  - **CTA primaire** : « **Planifier un premier échange confidentiel** » — fond `--blue`, texte `#fff`, Inter 16/600, padding `17px 30px`, radius `2px`. Hover → fond `--navy`.
  - **CTA secondaire** : « **Demander une offre d'accompagnement** » + flèche `→` (couleur `--sand`) — texte `--ink`, bordure `1px solid rgba(26,39,51,.22)`, padding `17px 26px`, radius `2px`. Hover → bordure + texte `--navy`.

### 6.3 — Bandeau signature (coupe de tronc)
- **Pleine largeur** (`width:100%`, hauteur `468px`, `overflow:hidden`). `margin-top:96px`.
- Image `assets/wood-rings.png` en `object-fit:cover`, `object-position:center 60%`.
- Overlay dégradé **horizontal** : `linear-gradient(90deg, rgba(14,58,92,.88) 0%, rgba(14,58,92,.62) 40%, rgba(14,58,92,.12) 72%, rgba(14,58,92,0) 100%)` (le texte est lisible à gauche, l'image respire à droite).
- Contenu (centré verticalement, padding `0 96px`, `max-width:820px`) :
  - Eyebrow sur fond marine : filet `--sand-2` + « **Notre signature** » (couleur `--sand-2`).
  - Citation (Spectral 40/1.28/400, `#fff`, `max-width:660px`) :
    > Comme les *cernes d'un arbre*, chaque décision inscrit l'entreprise dans la durée.

    → « **cernes d'un arbre** » en `<em>` italique, couleur `--sand-2`.

### 6.4 — Les défis
- Padding `92px 96px 0`. Grille `1fr 1fr`, `gap:80px`, `align-items:start`.
- **Colonne gauche :** eyebrow « **Le contexte** » + H2 (Spectral 42/1.12) :
  > Les défis que rencontrent les entreprises en croissance

  + paragraphe (Inter 18.5/1.6, `max-width:520px`) :
  > Lorsque l'entreprise évolue, les enjeux se multiplient. Ces situations sont naturelles ; elles deviennent problématiques lorsqu'elles créent un *écart entre la vision des dirigeants et la réalité du terrain.*

  → la fin en `<em>` Spectral italique couleur `--navy`.
- **Colonne droite :** liste de 6 défis, chacun = ligne `flex` `gap:22px` `align-items:baseline`, padding `18px 0`, `border-top:1px solid rgba(26,39,51,.13)`. Puce = numéro `1`→`6` en Spectral 16 italique `--sand` (largeur fixe `22px`) ; texte en Inter 19/1.4 `--ink`. Les 6 défis :
  1. les décisions deviennent plus complexes
  2. les responsabilités se chevauchent
  3. les équipes perdent en visibilité
  4. la gouvernance atteint ses limites
  5. les projets avancent plus lentement
  6. l'organisation peine à suivre les ambitions
- **Phrase-bilan** sous la grille (`margin-top:56px`, Spectral italique 25/1.5 `--navy`, `max-width:900px`) :
  > Chez Pillet & Partners, nous accompagnons les entreprises pour franchir ces étapes avec clarté, cohérence et engagement collectif.

### 6.5 — Nos domaines d'accompagnement
- Padding `96px 96px 0`.
- En-tête : `flex` `space-between` `align-items:baseline`, `margin-bottom:30px`. À gauche H2 « **Nos domaines d'accompagnement** » (Spectral 38) ; à droite eyebrow « **Quatre expertises** » (letter-spacing .16em).
- **4 lignes** (liste, pas cartes). Chaque ligne = grille `92px 1fr 26px`, `align-items:center`, `gap:30px`, padding `30px 4px`, `border-top:1px solid rgba(26,39,51,.13)` (+ `border-bottom` sur la dernière) :
  - Col 1 : numéro `01`–`04` (Spectral 30 `--sand`).
  - Col 2 : sous-grille `flex baseline gap:28px` → titre (Spectral 27 `--ink`, largeur fixe `flex:0 0 360px`) + description (Inter 16.5/1.5 `--ink-soft`, `max-width:520px`).
  - Col 3 : flèche `→` (20px, `--blue`).
  - Données :
    | N° | Titre | Description |
    |---|---|---|
    | 01 | Transitions stratégiques | Clarifier les choix, sécuriser les décisions et mobiliser les acteurs autour d'une nouvelle trajectoire. |
    | 02 | Transformation organisationnelle | Faire évoluer les structures, les responsabilités et les modes de fonctionnement pour soutenir la croissance. |
    | 03 | Transmission & gouvernance | Préparer les étapes sensibles de succession, d'association ou de réorganisation. |
    | 04 | Direction stratégique externalisée | Bénéficier d'un regard externe et d'un accompagnement régulier dans les décisions stratégiques. |

### 6.6 — Notre approche
- Padding `100px 96px 0`.
- Eyebrow « **Notre approche** » + H2 (Spectral 46) avec accents de couleur par mot :
  > Clarifier. <span style="--teal">Aligner.</span> Activer. <span style="--sand">Ancrer.</span>

  → « Aligner. » couleur `--teal`, « Ancrer. » couleur `--sand`, le reste `--navy`.
- Sous-titre (Inter 18.5/1.6, `max-width:680px`, `margin:24px 0 56px`) :
  > Une méthode structurée pour transformer les intentions stratégiques en changements concrets et durables.
- **4 colonnes** (`grid repeat(4,1fr)`, `gap:36px`). Chaque carte : `border-top:2px solid --navy`, `padding-top:22px` ; libellé « **Étape N** » (Spectral 15 italique `--sand`) ; H3 (Spectral 26 `--navy`) ; description (Inter 16/1.55 `--ink-soft`). Données :
  1. **Clarifier** — Comprendre les enjeux réels et identifier les priorités.
  2. **Aligner** — Créer une cohérence entre vision, gouvernance, leadership et organisation.
  3. **Activer** — Transformer les décisions en actions.
  4. **Ancrer** — Faire vivre les changements dans la durée.

### 6.7 — Pourquoi Pillet & Partners ?
- Padding `100px 96px 0`. Grille `0.8fr 1.2fr`, `gap:80px`, `align-items:start`.
- **Colonne gauche :** eyebrow « **Pourquoi nous** » + H2 « **Pourquoi Pillet & Partners ?** » (Spectral 42/1.12), puis `figure` (`margin-top:40px`) :
  - Cadre photo `height:440px`, `border-radius:3px`, `overflow:hidden`. Image `line-pillet.jpg`, `object-position:center 18%`.
  - `figcaption` (`margin-top:18px`, `flex gap:14px`) : filet `26×1px` `--sand` + « *Line Pillet* — Fondatrice & Managing Partner » (« Line Pillet » en Spectral italique, le reste Inter 16 `--ink`).
- **Colonne droite :** grille `1fr 1fr`, `gap:44px 56px`. 4 blocs : H3 (Spectral 22/1.25/500 `--ink`) + description (Inter 16.5/1.55 `--ink-soft`) :
  | Titre | Description |
  |---|---|
  | Une double expertise stratégique et humaine | Nous intervenons à la fois sur les enjeux de performance et sur les conditions humaines qui permettent leur réussite. |
  | Une lecture systémique | Nous analysons les interactions entre stratégie, gouvernance, organisation et leadership. |
  | Un interlocuteur unique | Fondatrice et Managing Partner de Pillet & Partners, j'accompagne personnellement chaque mission. |
  | La force d'un collectif d'experts | Selon les besoins, je mobilise un réseau de partenaires spécialisés afin d'apporter les compétences les plus adaptées à chaque situation. |

### 6.8 — Pour qui ?
- Padding `100px 96px 0`. Eyebrow « **Pour qui ?** ».
- Pastilles : `flex wrap`, `gap:14px`, `max-width:1040px`. Chaque pastille = Spectral 22 `--navy`, padding `12px 26px`, `border:1px solid rgba(26,39,51,.2)`, `border-radius:999px`. Items :
  Dirigeants de PME · Fondateurs et entrepreneurs · Associés · Comités de direction · Entreprises en croissance · Organisations en transformation

### 6.9 — CTA final
- `margin:110px 96px 96px` (donc **pas** pleine largeur — encadré dans la gouttière). Fond `--paper`, `border-radius:4px`, padding `72px 80px`, `text-align:center`.
- H2 (Spectral 48 `--navy`) : « **Vous préparez une étape décisive ?** »
- Paragraphe (Inter 19/1.6 `--ink-soft`, `max-width:620px`, centré) :
  > Parlons-en. Un premier échange permet souvent de clarifier rapidement les enjeux et les options possibles.
- CTA primaire (même style que hero) : « **Planifier un entretien confidentiel** », `margin-top:36px`, padding `18px 34px`.

### 6.10 — Footer
La maquette ne dessine pas de footer. **À créer en prod** dans le même esprit sobre : picto/logo +
mot-symbole, coordonnées (Suisse romande), liens (Mentions légales, Confidentialité), éventuellement
LinkedIn. Fond `--navy` ou `--paper`. À cadrer avec la cliente.

---

## 7. Interactions & comportement
- **Survols CTA** uniquement (voir §4 Transitions). Rien d'autre n'est animé.
- **Navigation :** liens d'ancrage vers les sections (`#approche`, `#domaines`, etc.) et/ou pages
  dédiées. Les flèches `→` des domaines pointeront vers les futures pages de détail (4 pages domaine).
- **CTA** → page/section Contact (formulaire) ou `mailto:`. À brancher selon le choix de la cliente
  (formulaire Netlify Forms recommandé : simple, sans backend).
- **Accessibilité :** contrastes OK (navy/sand sur blanc) ; garder `alt` sur les images (déjà rédigés
  dans la maquette) ; hiérarchie de titres `h1 > h2 > h3` respectée ; cibles tactiles ≥ 44px.

## 8. État / données
Site **statique**, aucun état applicatif. Tout le contenu est éditorial et provient du CMS (voir
`STACK_ASTRO.md` + `decap/config.yml`). Pas de fetch côté client. Formulaire de contact = Netlify Forms.

## 9. Responsive
La maquette est dessinée à **1440px**. À implémenter en *fluid* :
- **Gouttière** : `96px` desktop → ~`clamp(20px, 6vw, 96px)` pour tablette/mobile.
- **H1** : `clamp(34px, 6.2vw, 74px)`. Autres titres : réduire proportionnellement (ex. H2 `clamp(28px, 3.5vw, 46px)`).
- **Grilles 2 / 4 colonnes** (défis, approche, pourquoi) → passer en 1 colonne sous ~900px ;
  les domaines (grille `92px 1fr 26px`) → empiler titre/description sous ~720px.
- **Bandeau signature** : garder `cover` ; sous mobile réduire la hauteur (~`320px`) et passer le
  dégradé en vertical (`180deg`) pour la lisibilité du texte.
- **Largeur de contenu max** confortable sur très grand écran : centrer le contenu dans un conteneur
  `max-width: ~1280–1440px`.

## 10. Fichiers de ce dossier
```
design_handoff_pillet_homepage_v1/
├── README.md                       ← ce document (source de vérité design)
├── STACK_ASTRO.md                  ← arborescence Astro + content collections + perf
├── decap/
│   └── config.yml                  ← configuration Decap CMS prête à adapter
├── reference/
│   ├── Aperçu V1 - Pillet & Partners.html   ← rendu visuel complet (ouvrir au navigateur)
│   └── variation1.jsx              ← code React source = vérité sur structure/valeurs/textes
└── assets/
    ├── logo.png                    ← logo carré (voir §5 : préférer un SVG en prod)
    ├── line-pillet.jpg             ← portrait
    └── wood-rings.png              ← coupe de tronc (bandeau signature)
```

---

*Document de handoff généré pour implémentation par Claude Code. Pour toute ambiguïté visuelle,
`reference/variation1.jsx` fait foi sur les valeurs ; `reference/Aperçu V1 ….html` fait foi sur le rendu.*
