/**
 * Case studies. ALL ENTRIES ARE PLACEHOLDERS (ethics rule 5.8): no invented
 * client, quote or figure is presented as real. Each case is visibly flagged
 * and must be replaced by a real, attributed case study (with the client's
 * agreement) before publishing. Template: Situation → Déclencheur → Frein →
 * Solution → Résultats → Témoignage.
 */

export interface CaseStudy {
  slug: string;
  sectorSlug: string;
  sectorLabel: string;
  type: string; // e.g. "E-mails", "Documents", "Données"
  title: string; // result-led
  summary: string;
  kpis: { value: string; label: string }[];
  situation: string;
  trigger: string;
  obstacle: string;
  solution: string;
  results: string[];
  quote: { text: string; name: string; role: string };
  placeholder: boolean;
}

// TODO (propriétaire) — ajouter ici de vrais cas clients attribués, avec
// l'accord du client, en suivant le modèle CaseStudy ci-dessus :
// Situation → Déclencheur → Frein → Solution → Résultats → Témoignage.
// Tant que ce tableau est vide, la page /cas-client/ affiche un état neutre
// honnête et aucune fiche [slug] n'est générée.
export const cases: CaseStudy[] = [];

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}
