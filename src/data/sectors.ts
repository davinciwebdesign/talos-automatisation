/**
 * The 7 sector pages (message match by audience). Drives: /secteurs (synthesis),
 * /secteurs/[slug] (detail), the "Secteurs" mega-menu, footer links.
 * All figures shown as proof are placeholders flagged for real data.
 */

import type { FAQ, FeatureItem } from './services';

export interface Sector {
  slug: string;
  navLabel: string;
  megaDesc: string;
  icon: string;
  heroTitle: string;
  heroSubtitle: string;
  pains: string[];
  automations: FeatureItem[];
  benefits: string[];
  /** sensitive-sector compliance note, shown prominently when present */
  note?: string;
  faqs: FAQ[];
  metaDescription: string;
}

export const sectors: Sector[] = [
  {
    slug: 'bureau-etudes',
    navLabel: "Bureau d'études",
    megaDesc: 'Devis, documents techniques, transferts CAO/ERP, suivi de projets.',
    icon: 'ruler',
    heroTitle: "Automatisation pour les bureaux d'études",
    heroSubtitle:
      "Libérez vos ingénieurs des tâches administratives et de la double saisie pour les recentrer sur la conception et l'expertise technique.",
    pains: [
      'Devis et chiffrages longs à préparer manuellement',
      'Re-saisie des données entre logiciels CAO et ERP',
      'Génération répétitive de documents techniques et de rapports',
      'Suivi de projets dispersé entre fichiers et e-mails',
      'Relances clients et fournisseurs oubliées',
    ],
    automations: [
      { title: 'Génération de devis et chiffrages', benefit: 'Vos devis se préparent à partir de vos modèles, en une fraction du temps.' },
      { title: 'Transferts CAO ↔ ERP', benefit: "L'information circule sans recopie ni erreur entre vos outils." },
      { title: 'Documents techniques automatisés', benefit: 'Vos rapports et livrables se compilent à partir des données du projet.' },
      { title: 'Suivi de projets centralisé', benefit: 'Chaque projet avance et son état est visible sans chercher.' },
      { title: 'Relances automatiques', benefit: 'Plus aucune relance client ou fournisseur ne passe à la trappe.' },
    ],
    benefits: [
      'Des ingénieurs concentrés sur la valeur technique',
      'Moins d’erreurs de saisie',
      'Des livrables plus rapides et homogènes',
    ],
    faqs: [
      { q: "Vos automatisations s'intègrent-elles à nos logiciels métier ?", a: "L'objectif est précisément de m'intégrer à vos outils existants (CAO, ERP, GED…) plutôt que de les remplacer. Nous vérifions la faisabilité dès le premier échange." },
      { q: 'Nos projets sont complexes et tous différents — est-ce automatisable ?', a: "On automatise les parties répétitives (saisies, mises en forme, transferts, suivis), pas l'expertise. C'est là que se trouvent les gains les plus rapides." },
    ],
    metaDescription:
      "Automatisation pour bureaux d'études : devis, documents techniques, transferts CAO/ERP, suivi de projets et relances. Recentrez vos ingénieurs sur l'essentiel. Audit gratuit.",
  },
  {
    slug: 'bureau-avocats',
    navLabel: "Bureau d'avocats",
    megaDesc: 'Tri des e-mails, intake client, génération de documents, gestion des délais.',
    icon: 'scale',
    heroTitle: "Automatisation pour les cabinets d'avocats",
    heroSubtitle:
      "Réduisez le temps administratif et sécurisez le suivi des délais, pour consacrer votre énergie au conseil et à la défense de vos clients.",
    pains: [
      'Tri et classement chronophages des e-mails clients',
      'Saisie manuelle des nouveaux dossiers (intake)',
      'Rédaction répétitive de documents à partir de modèles',
      'Suivi des délais et échéances à risque',
      'Facturation et relances fastidieuses',
    ],
    automations: [
      { title: 'Tri et classement des e-mails', benefit: 'Les messages clients sont rangés par dossier et par priorité automatiquement.' },
      { title: 'Intake client', benefit: "Un formulaire alimente directement le dossier, sans ressaisie." },
      { title: 'Génération de documents', benefit: 'Vos actes et courriers se génèrent à partir de vos modèles validés.' },
      { title: 'Gestion des délais et échéances', benefit: 'Chaque échéance est suivie et rappelée avant qu’il ne soit trop tard.' },
      { title: 'Facturation et relances', benefit: 'Les factures partent et les impayés sont relancés sans y penser.' },
    ],
    benefits: [
      'Du temps rendu au cœur de métier juridique',
      'Un risque d’échéance manquée fortement réduit',
      'Une organisation des dossiers irréprochable',
    ],
    note: "Confidentialité et déontologie sont au cœur du dispositif : les données restent maîtrisées, traitées conformément au RGPD et au secret professionnel. Aucune décision juridique n'est automatisée.",
    faqs: [
      { q: 'Le secret professionnel est-il garanti ?', a: "Oui. Les solutions sont conçues pour respecter le secret professionnel et le RGPD : maîtrise des données, accès restreints, et choix d'outils adaptés à la sensibilité juridique." },
      { q: "L'IA va-t-elle rédiger mes conclusions ?", a: "Non. L'automatisation prend en charge les tâches répétitives et la mise en forme. L'analyse juridique et les décisions restent entièrement entre vos mains." },
    ],
    metaDescription:
      "Automatisation pour cabinets d'avocats : tri des e-mails, intake client, génération de documents, gestion des délais et facturation. Confidentialité et RGPD. Audit gratuit.",
  },
  {
    slug: 'btp',
    navLabel: 'BTP',
    megaDesc: 'Devis, suivi de chantier, sous-traitants, rapprochement de factures, planning.',
    icon: 'hardhat',
    heroTitle: 'Automatisation pour le BTP',
    heroSubtitle:
      "Gardez le contrôle de vos chantiers et de votre administratif sans y passer vos soirées : devis, suivi, factures et plannings au carré.",
    pains: [
      'Préparation manuelle des devis',
      'Suivi de chantier dispersé et difficile à consolider',
      'Coordination des sous-traitants chronophage',
      'Rapprochement de factures fastidieux',
      "Rapports d'avancement et demandes de matériel à rédiger sans cesse",
    ],
    automations: [
      { title: 'Génération de devis', benefit: 'Vos devis sortent plus vite, à partir de vos bibliothèques de prix.' },
      { title: 'Suivi de chantier', benefit: "L'avancement remonte automatiquement, consolidé en un coup d'œil." },
      { title: 'Gestion des sous-traitants', benefit: 'Documents, échéances et relances des sous-traitants sont pilotés seuls.' },
      { title: 'Rapprochement de factures', benefit: 'Les factures sont rapprochées des commandes sans pointage manuel.' },
      { title: 'Rapports et demandes de matériel', benefit: 'Vos rapports d’avancement et demandes se préparent automatiquement.' },
    ],
    benefits: [
      'Une administration de chantier maîtrisée',
      'Des devis plus rapides à émettre',
      'Moins d’oublis et d’erreurs de facturation',
    ],
    faqs: [
      { q: 'Ça marche même sur le terrain, sans bureau ?', a: "Oui. Les automatisations peuvent s'appuyer sur des saisies mobiles simples (photos, formulaires) qui alimentent vos suivis sans repasser au bureau." },
      { q: 'Nos sous-traitants utilisent des outils différents — c’est gérable ?', a: "Oui. On automatise les échanges (documents, relances, validations) quels que soient les outils, en s'adaptant à l'existant." },
    ],
    metaDescription:
      'Automatisation pour le BTP : devis, suivi de chantier, gestion des sous-traitants, rapprochement de factures et plannings. Reprenez le contrôle de votre administratif. Audit gratuit.',
  },
  {
    slug: 'notaires',
    navLabel: 'Notaires',
    megaDesc: 'Collecte des pièces, génération d’actes, relances, gestion des dossiers.',
    icon: 'stamp',
    heroTitle: 'Automatisation pour les études notariales',
    heroSubtitle:
      "Fluidifiez la collecte des pièces et la préparation des actes, et sécurisez le suivi des dossiers — sans rien céder sur la sécurité ni la confidentialité.",
    pains: [
      'Collecte des pièces longue et relances multiples',
      "Génération d'actes à partir de modèles, répétitive",
      'Suivi des dossiers réparti entre plusieurs outils',
      "Organisation de l'agenda de signatures",
      'Communication client à tenir à jour',
    ],
    automations: [
      { title: 'Collecte automatisée des pièces', benefit: 'Les pièces manquantes sont demandées et relancées automatiquement.' },
      { title: "Génération d'actes", benefit: 'Vos actes se préparent à partir de vos modèles et des données du dossier.' },
      { title: 'Gestion des dossiers', benefit: 'Chaque dossier avance d’une étape à la suivante, sans rien oublier.' },
      { title: 'Agenda de signatures', benefit: 'Les rendez-vous de signature s’organisent et se rappellent seuls.' },
      { title: 'Relances clients', benefit: 'Les clients reçoivent les bons rappels au bon moment.' },
    ],
    benefits: [
      'Des dossiers complets plus vite',
      'Un suivi sécurisé et sans oubli',
      'Du temps rendu à l’accompagnement client',
    ],
    note: "Sécurité et confidentialité sont prioritaires : les données sensibles sont traitées conformément au RGPD, avec des accès maîtrisés. La validation juridique des actes reste entièrement de votre ressort.",
    faqs: [
      { q: 'La sécurité des données est-elle assurée ?', a: "Oui. Les dispositifs sont conçus pour la confidentialité et la sécurité : maîtrise des données, accès restreints et conformité RGPD adaptée à la sensibilité notariale." },
      { q: "L'acte final est-il généré sans contrôle ?", a: "Non. L'automatisation prépare et pré-remplit ; la vérification et la validation juridique restent assurées par l'étude." },
    ],
    metaDescription:
      "Automatisation pour notaires : collecte des pièces, génération d'actes, relances et gestion des dossiers. Sécurité, confidentialité et RGPD. Réservez un audit gratuit.",
  },
  {
    slug: 'e-commerce',
    navLabel: 'E-commerce',
    megaDesc: 'Commandes, service client, stocks, multicanal, relances panier, retours.',
    icon: 'cart',
    heroTitle: "Automatisation pour l'e-commerce",
    heroSubtitle:
      "Traitez plus de commandes sans grossir l'équipe : service client, stocks, relances et reporting tournent en pilote automatique.",
    pains: [
      'Gestion manuelle des commandes',
      'Service client débordé par les questions répétitives',
      'Suivi des stocks et synchronisation multicanal',
      'Paniers abandonnés sans relance',
      'Traitement des retours et reporting chronophages',
    ],
    automations: [
      { title: 'Gestion des commandes', benefit: 'Chaque commande suit son flux automatiquement, de la prise au suivi.' },
      { title: 'Service client (tri et réponses)', benefit: 'Les demandes sont triées et les réponses courantes préparées instantanément.' },
      { title: 'Suivi des stocks multicanal', benefit: 'Vos stocks restent synchronisés sur tous vos canaux, sans surventes.' },
      { title: 'Relances panier', benefit: 'Les paniers abandonnés sont relancés automatiquement, au bon moment.' },
      { title: 'Retours et reporting', benefit: 'Les retours sont traités et vos indicateurs se mettent à jour seuls.' },
    ],
    benefits: [
      'Une capacité à absorber la croissance sans embaucher',
      'Un service client plus réactif',
      'Moins d’erreurs de stock et de commande',
    ],
    faqs: [
      { q: 'Ça fonctionne avec ma boutique (Shopify, WooCommerce…) ?', a: "Oui. Les automatisations s'intègrent aux plateformes e-commerce courantes et à vos outils annexes (logistique, support, comptabilité)." },
      { q: 'Le service client automatisé reste-t-il humain ?', a: "L'automatisation traite le répétitif et prépare les réponses ; les cas sensibles sont escaladés à votre équipe. Le client garde un interlocuteur humain quand il en a besoin." },
    ],
    metaDescription:
      "Automatisation e-commerce : commandes, service client, stocks multicanal, relances panier, retours et reporting. Absorbez la croissance sans grossir l'équipe. Audit gratuit.",
  },
  {
    slug: 'immobilier',
    navLabel: 'Immobilier',
    megaDesc: 'Qualification des leads, RDV/visites, mandats/annonces, portails, relances.',
    icon: 'home',
    heroTitle: "Automatisation pour l'immobilier",
    heroSubtitle:
      "Ne laissez plus aucun lead refroidir : qualification, prise de rendez-vous, annonces et relances avancent automatiquement pendant que vous êtes sur le terrain.",
    pains: [
      'Qualification des leads lente, prospects perdus',
      'Prise de rendez-vous et organisation des visites manuelle',
      'Génération des mandats et annonces répétitive',
      'Suivi des dossiers dispersé',
      'Diffusion et synchronisation des portails chronophages',
    ],
    automations: [
      { title: 'Qualification des leads', benefit: 'Chaque lead est qualifié et priorisé dès son arrivée, sans délai.' },
      { title: 'Prise de rendez-vous et visites', benefit: 'Les visites se planifient et se rappellent automatiquement.' },
      { title: 'Génération de mandats et annonces', benefit: 'Vos mandats et annonces se préparent à partir de vos modèles.' },
      { title: 'Synchronisation des portails', benefit: 'Vos biens sont diffusés et mis à jour sur tous les portails d’un coup.' },
      { title: 'Relances et suivi des dossiers', benefit: 'Acquéreurs et vendeurs sont relancés au bon moment, sans oubli.' },
    ],
    benefits: [
      'Des leads traités à chaud, taux de conversion amélioré',
      'Plus de temps sur le terrain et la relation',
      'Une diffusion d’annonces sans double saisie',
    ],
    faqs: [
      { q: 'Mes leads viennent de plusieurs portails — c’est centralisable ?', a: "Oui. Les leads de vos différentes sources peuvent être centralisés, qualifiés et suivis au même endroit, automatiquement." },
      { q: 'La relation client reste-t-elle personnelle ?', a: "L'automatisation gère le suivi et les rappels ; vous gardez tout le relationnel, mieux préparé et au bon moment." },
    ],
    metaDescription:
      "Automatisation immobilier : qualification des leads, prise de rendez-vous, génération de mandats et annonces, synchronisation des portails et relances. Audit gratuit.",
  },
  {
    slug: 'medecins',
    navLabel: 'Médecins',
    megaDesc: 'Prise de RDV, rappels, tri des demandes, gestion administrative.',
    icon: 'stethoscope',
    heroTitle: 'Automatisation administrative pour les professionnels de santé',
    heroSubtitle:
      "Allégez la charge administrative de votre cabinet — prise de rendez-vous, rappels, tri des demandes — pour consacrer plus de temps à vos patients.",
    pains: [
      'Prise de rendez-vous et gestion des annulations',
      'Rappels de rendez-vous manuels',
      'Tri des demandes administratives entrantes',
      'Préparation de documents administratifs répétitifs',
      'Suivi administratif des dossiers',
    ],
    automations: [
      { title: 'Prise de rendez-vous', benefit: 'Les rendez-vous se prennent et se réorganisent sans mobiliser le secrétariat.' },
      { title: 'Rappels automatiques', benefit: 'Les rappels réduisent les rendez-vous manqués, automatiquement.' },
      { title: 'Tri des demandes', benefit: 'Les demandes administratives sont classées et orientées seules.' },
      { title: 'Documents administratifs', benefit: 'Les documents récurrents se préparent à partir de vos modèles.' },
      { title: 'Suivi administratif', benefit: 'Le suivi des dossiers administratifs avance sans relances manuelles.' },
    ],
    benefits: [
      'Un secrétariat déchargé des tâches répétitives',
      'Moins de rendez-vous manqués',
      'Plus de temps pour les patients',
    ],
    note: "⚠️ Cadre strictement administratif. Aucune automatisation d'acte médical ni de décision clinique. Les données de santé sont traitées dans le respect du RGPD, du secret médical et des hébergeurs de données de santé agréés lorsque requis.",
    faqs: [
      { q: 'Les données de santé sont-elles protégées ?', a: "La confidentialité est impérative : les données sont traitées conformément au RGPD et au secret médical, avec recours à un hébergement de données de santé agréé (HDS) lorsque c'est requis." },
      { q: 'Est-ce que cela touche au médical ?', a: "Non. L'intervention se limite strictement à l'administratif (rendez-vous, rappels, documents, tri). Aucun acte médical ni décision clinique n'est automatisé." },
    ],
    metaDescription:
      "Automatisation administrative pour médecins et professionnels de santé : prise de rendez-vous, rappels, tri des demandes. Cadre administratif, RGPD et secret médical. Audit gratuit.",
  },
];

export function getSector(slug: string): Sector | undefined {
  return sectors.find((s) => s.slug === slug);
}
