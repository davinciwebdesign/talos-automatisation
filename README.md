# talos automatisation — site vitrine

Site marketing de **talos automatisation** (Bilel Salhi) — conseil en
automatisation sur mesure pour les entreprises, zone France. Objectif unique :
générer des leads qualifiés via la réservation d'un **audit gratuit**.

## Stack

- **[Astro](https://astro.build)** (sortie statique) — pas de JS côté client sauf
  petits scripts d'interaction (menus, formulaire, thème).
- **[Tailwind CSS v4](https://tailwindcss.com)** en mode CSS-first
  (`@import 'tailwindcss'` + `@theme`), via `@tailwindcss/vite`.
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)**
  — `sitemap-index.xml` généré au build.
- **[@fontsource-variable/inter](https://fontsource.org)** — police variable
  auto-hébergée (`font-display: swap`).

## Commandes

| Commande          | Action                                          |
| :---------------- | :---------------------------------------------- |
| `npm install`     | Installe les dépendances                        |
| `npm run dev`     | Serveur local sur `localhost:4321`              |
| `npm run build`   | Build de production dans `./dist/`              |
| `npm run preview` | Prévisualise le build avant déploiement         |

## Structure

```
public/                 favicon, og-default.svg, robots.txt
src/
├─ components/          composants UI (Header, Footer, Button, Faq, ContactForm…)
├─ config/
│  ├─ site.ts           config centrale (marque, contact, CTA principal)
│  └─ nav.ts            navigation + mega-menus dérivés des données
├─ data/
│  ├─ services.ts       4 services (audit, sur mesure, prédictif, robot IA)
│  ├─ sectors.ts        7 secteurs (avocats, BTP, notaires, e-commerce…)
│  └─ cases.ts          cas client (GABARITS — voir Placeholders)
├─ layouts/Layout.astro composition page + SEO + schema JSON-LD
├─ pages/               routes (voir ci-dessous)
├─ styles/global.css    design system (tokens, typo, boutons, formulaires)
└─ utils/schema.ts      helpers JSON-LD (FAQPage, Service)
```

### Pages (27 au total)

- `/` — accueil
- `/services/` + 4 pages détail `/services/[slug]/`
- `/secteurs/` + 7 pages détail `/secteurs/[slug]/`
- `/methode/`, `/a-propos/`, `/faq/`
- `/cas-client/` (liste filtrable) + `/cas-client/[slug]/` (gabarit)
- `/audit-gratuit/` (page de conversion), `/contact/`
- `/mentions-legales/`, `/confidentialite/`, `/cgv/`, `/404`

## Design system

Tout est piloté par des variables CSS dans `src/styles/global.css` :

- **Couleurs 60-30-10** : neutres (slate) / marque (violet) / **accent (fuchsia)
  réservé EXCLUSIVEMENT aux actions**. Rampes 50→900, contrastes WCAG AA.
- **Mode sombre** via `:root[data-theme='dark']` + script anti-FOUC inline.
- **Typo fluide** modulaire (`clamp()`, ratio ~1.25, corps ≥16px, mesure 66ch,
  un seul `h1` par page).
- **Accessibilité (WCAG 2.2 AA)** : skip link, `focus-visible` ≥3px, ARIA sur
  menus/accordéons, cibles tactiles ≥48px, formulaires une colonne avec
  labels au-dessus, validation au blur, résumé d'erreurs `role="alert"`.
- **Motion** : transitions ≤300ms, `prefers-reduced-motion` respecté, pas de CLS.

## SEO & analytics

- Titres/metas uniques par page, OpenGraph + Twitter, canonical.
- JSON-LD : `Organization` (global), `BreadcrumbList`, `FAQPage`, `Service`.
- `robots.txt` + sitemap automatique.
- Analytics consenti (`src/components/Analytics.astro`) : `window.talos.track()`,
  `dataLayer`, auto-bind des `[data-track-cta]` et `[data-track-form]`,
  bufferisé jusqu'au consentement. Prêt pour A/B testing.
- **RGPD** : bandeau cookies, refus des non-essentiels par défaut.

## ⚠️ Placeholders à remplacer avant mise en ligne

Aucune donnée n'est inventée (règle d'éthique). Tout ce qui doit être renseigné
est visiblement marqué `[À REMPLACER PAR DONNÉE RÉELLE]` :

- **Contact** — `src/config/site.ts` : `email`, `phone`, `bookingUrl`,
  `social.linkedin` (actuellement `null` → affichés comme placeholders).
- **Domaine de prod** — `src/config/site.ts` (`url`) et `astro.config.mjs` (`site`).
- **Endpoint formulaire** — `src/components/ContactForm.astro` (`action = '#'`) :
  brancher Formspree / Netlify Forms / API. En l'état, succès simulé en preview.
- **Témoignages** — `src/components/Testimonials.astro` : gabarits à bordure
  pointillée, à remplacer par de vrais témoignages attribués.
- **Cas client** — `src/data/cases.ts` : 3 gabarits (`placeholder: true`,
  `noindex`) à remplacer par des cas réels validés par le client.
- **Chiffres / KPI** — `ProofBar` et pages secteurs : valeurs entre crochets à
  mesurer réellement lors de l'audit.
- **Mentions légales / Confidentialité / CGV** — SIRET, adresse, hébergeur, etc.
  à compléter et faire valider juridiquement.

## Checklist de mise en ligne

- [ ] Renseigner email / téléphone / lien de réservation (`site.ts`).
- [ ] Définir le vrai domaine de production (`site.ts` + `astro.config.mjs`).
- [ ] Brancher l'endpoint du formulaire de contact.
- [ ] Remplacer témoignages, cas client et tous les chiffres par des données
      réelles ; retirer les badges « gabarit » et `placeholder: true`.
- [ ] Compléter et faire valider les pages légales.
- [ ] Remplacer `og-default.svg` par une vraie image OG si souhaité.
- [ ] Vérifier le bon fonctionnement de l'analytics avec votre outil réel.
