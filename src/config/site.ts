/**
 * Central site configuration.
 * Placeholders flagged with [À REMPLACER PAR DONNÉE RÉELLE] must be filled
 * with real data before going live. Never invent fake values.
 */

export const site = {
  name: 'talos automatisation',
  founder: 'Bilel Salhi',
  // Tagline / value prop reused for meta + structured data
  tagline: 'Automatisez vos tâches répétitives. Récupérez des heures chaque semaine.',
  description:
    "talos automatisation conçoit des systèmes d'automatisation sur mesure pour les entreprises : gagnez du temps, réduisez les erreurs et économisez de l'argent grâce à des solutions taillées pour vos processus.",
  // Replace with the real production domain before deploy.
  url: 'https://talos-automatisation.fr',
  locale: 'fr-FR',
  lang: 'fr',
  area: 'France',
  // Contact — not provided yet. Keep null so UI shows the right fallback.
  email: null as string | null, // [À REMPLACER PAR DONNÉE RÉELLE]
  phone: null as string | null, // [À REMPLACER PAR DONNÉE RÉELLE]
  // Booking link (Calendly / Cal.com). When null, the on-site form is used.
  bookingUrl: null as string | null, // [À REMPLACER PAR DONNÉE RÉELLE]
  social: {
    // [À REMPLACER PAR DONNÉE RÉELLE] — aucun réseau social pour l'instant
    linkedin: null as string | null,
  },
} as const;

// The single primary action across the whole site.
export const primaryCta = {
  label: 'Réserver un audit gratuit',
  href: '/audit-gratuit/',
  // Risk reducers shown next to the CTA
  note: 'Sans engagement · 30 min · Réponse sous 24 h',
};
