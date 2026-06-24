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

const PH = '[À REMPLACER PAR DONNÉE RÉELLE]';

export const cases: CaseStudy[] = [
  {
    slug: 'exemple-cabinet-avocats',
    sectorSlug: 'bureau-avocats',
    sectorLabel: "Bureau d'avocats",
    type: 'E-mails & dossiers',
    title: `[Résultat chiffré, ex. « 6 h par semaine rendues au cabinet »] ${PH}`,
    summary: `${PH} — En une phrase, le bénéfice principal obtenu par ce cabinet grâce à l'automatisation du tri des e-mails et de l'intake client.`,
    kpis: [
      { value: PH, label: 'heures économisées / semaine' },
      { value: PH, label: 'délai de réponse client' },
      { value: PH, label: "dossiers traités sans ressaisie" },
    ],
    situation: `${PH} — Présentez le cabinet (taille, spécialité, organisation) et son fonctionnement avant l'automatisation.`,
    trigger: `${PH} — Qu'est-ce qui a déclenché la démarche ? (surcharge administrative, échéances manquées, croissance…)`,
    obstacle: `${PH} — Quel frein retardait l'action ? (crainte pour la confidentialité, manque de temps…)`,
    solution: `${PH} — Décrivez l'automatisation mise en place : tri des e-mails par dossier, intake via formulaire, génération de documents.`,
    results: [
      `${PH} — Résultat concret et chiffré n°1`,
      `${PH} — Résultat concret et chiffré n°2`,
      `${PH} — Résultat concret et chiffré n°3`,
    ],
    quote: { text: `${PH} — Citation authentique du client.`, name: '[Prénom Nom]', role: "[Rôle — Cabinet]" },
    placeholder: true,
  },
  {
    slug: 'exemple-e-commerce',
    sectorSlug: 'e-commerce',
    sectorLabel: 'E-commerce',
    type: 'Commandes & service client',
    title: `[Résultat chiffré, ex. « 2× plus de commandes, même équipe »] ${PH}`,
    summary: `${PH} — En une phrase, le bénéfice principal obtenu par cette boutique grâce à l'automatisation des commandes et du service client.`,
    kpis: [
      { value: PH, label: 'commandes traitées / jour' },
      { value: PH, label: 'temps de réponse support' },
      { value: PH, label: 'erreurs de stock évitées' },
    ],
    situation: `${PH} — Présentez la boutique (taille, canaux, volume) et son fonctionnement avant l'automatisation.`,
    trigger: `${PH} — Qu'est-ce qui a déclenché la démarche ? (pics de commandes, support débordé…)`,
    obstacle: `${PH} — Quel frein retardait l'action ?`,
    solution: `${PH} — Décrivez l'automatisation : tri et réponses support, synchronisation des stocks, relances panier.`,
    results: [
      `${PH} — Résultat concret et chiffré n°1`,
      `${PH} — Résultat concret et chiffré n°2`,
      `${PH} — Résultat concret et chiffré n°3`,
    ],
    quote: { text: `${PH} — Citation authentique du client.`, name: '[Prénom Nom]', role: '[Rôle — Boutique]' },
    placeholder: true,
  },
  {
    slug: 'exemple-btp',
    sectorSlug: 'btp',
    sectorLabel: 'BTP',
    type: 'Devis & suivi de chantier',
    title: `[Résultat chiffré, ex. « Devis émis 3× plus vite »] ${PH}`,
    summary: `${PH} — En une phrase, le bénéfice principal obtenu par cette entreprise du BTP grâce à l'automatisation des devis et du suivi de chantier.`,
    kpis: [
      { value: PH, label: "délai d'émission des devis" },
      { value: PH, label: 'heures administratives / semaine' },
      { value: PH, label: 'factures rapprochées sans pointage' },
    ],
    situation: `${PH} — Présentez l'entreprise (taille, type de chantiers) et son fonctionnement avant l'automatisation.`,
    trigger: `${PH} — Qu'est-ce qui a déclenché la démarche ?`,
    obstacle: `${PH} — Quel frein retardait l'action ?`,
    solution: `${PH} — Décrivez l'automatisation : génération de devis, suivi de chantier, rapprochement de factures.`,
    results: [
      `${PH} — Résultat concret et chiffré n°1`,
      `${PH} — Résultat concret et chiffré n°2`,
      `${PH} — Résultat concret et chiffré n°3`,
    ],
    quote: { text: `${PH} — Citation authentique du client.`, name: '[Prénom Nom]', role: '[Rôle — Entreprise]' },
    placeholder: true,
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}
