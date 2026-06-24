/**
 * The 4 services. Drives: /services (synthesis), /services/[slug] (detail),
 * the "Services" mega-menu, and footer links.
 * Content is realistic placeholder copy written in benefit-first language (FAB).
 * Figures presented as proof must be replaced by real data before publishing.
 */

export interface FAQ {
  q: string;
  a: string;
}

export interface FeatureItem {
  title: string;
  benefit: string;
}

export interface Service {
  slug: string;
  navLabel: string;
  /** short description shown in the mega-menu */
  megaDesc: string;
  icon: string;
  eyebrow: string;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  /** PAS: the problem we agitate */
  problem: { title: string; body: string };
  /** what it is */
  intro: { title: string; body: string };
  features: FeatureItem[];
  benefits: string[];
  /** optional process / deliverables */
  deliverables?: string[];
  faqs: FAQ[];
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: 'audit-complet',
    navLabel: 'Audit complet',
    megaDesc: 'Cartographie de vos processus et priorisation des automatisations à fort impact.',
    icon: 'radar',
    eyebrow: 'Le point de départ',
    title: 'Audit complet',
    heroTitle: "Découvrez où votre entreprise perd du temps — et ce qu'il faut automatiser en premier",
    heroSubtitle:
      "Un audit clair de vos processus, une cartographie des opportunités d'automatisation et un plan d'action priorisé par impact. Vous repartez avec une vision nette, même si vous décidez de tout faire vous-même.",
    problem: {
      title: 'Le vrai problème : on ne sait pas où l’on perd du temps',
      body: "Les tâches manuelles répétitives sont si quotidiennes qu'elles deviennent invisibles. Personne ne les chronomètre, mais cumulées sur l'année elles coûtent des centaines d'heures et freinent la croissance. Avant d'automatiser, il faut voir clair.",
    },
    intro: {
      title: "Ce qu'est l'audit complet",
      body: "On analyse l'ensemble de vos processus et flux de travail, on identifie les opérations chronophages et sources d'erreurs, puis on dresse une cartographie des opportunités d'automatisation. Chaque opportunité est priorisée selon son impact (temps gagné, coûts évités, risque réduit) et sa facilité de mise en œuvre.",
    },
    features: [
      { title: 'Analyse des processus', benefit: 'Vous voyez enfin, noir sur blanc, où part le temps de vos équipes.' },
      { title: "Cartographie des opportunités", benefit: "Une vue d'ensemble claire de tout ce qui peut être automatisé, sans jargon." },
      { title: 'Priorisation par impact', benefit: "Vous savez exactement par quoi commencer pour un retour rapide." },
      { title: "Estimation des gains", benefit: 'Des ordres de grandeur de temps et de coûts économisés pour décider sereinement.' },
      { title: "Feuille de route", benefit: 'Un plan d’action séquencé que vous gardez, que vous travailliez avec nous ou non.' },
    ],
    benefits: [
      'Une vision claire de votre potentiel d’automatisation',
      'Des gains parfois insoupçonnés mis en lumière',
      'Des décisions basées sur l’impact réel, pas sur des intuitions',
      'Aucun engagement : le plan vous appartient',
    ],
    deliverables: [
      'Cartographie de vos processus actuels',
      'Liste priorisée des automatisations à fort impact',
      "Estimation des gains de temps et de coûts",
      "Feuille de route d'implémentation",
    ],
    faqs: [
      { q: "L'audit est-il vraiment gratuit ?", a: "Le premier échange et le diagnostic initial sont gratuits et sans engagement. Ils vous donnent déjà une vision claire de vos opportunités. Un audit approfondi sur l'ensemble de l'entreprise peut faire l'objet d'une prestation dédiée, dont le périmètre est défini ensemble à l'avance." },
      { q: 'Combien de temps cela prend-il ?', a: "Le premier échange dure environ 30 minutes. Un audit approfondi s'étale généralement sur quelques jours selon la taille de l'entreprise, en limitant au maximum la charge pour vos équipes." },
      { q: 'Dois-je déjà savoir quoi automatiser ?', a: "Non. C'est justement le rôle de l'audit : partir de votre fonctionnement réel pour identifier les opportunités, y compris celles auxquelles vous n'auriez pas pensé." },
      { q: 'Mes données restent-elles confidentielles ?', a: "Oui. Vos informations sont traitées de manière confidentielle et conformément au RGPD. Un accord de confidentialité peut être signé si vous le souhaitez." },
    ],
    metaDescription:
      "Audit d'automatisation : cartographie de vos processus et plan d'action priorisé par impact. Voyez où vous perdez du temps. Premier diagnostic gratuit, sans engagement.",
  },
  {
    slug: 'automatisation-sur-mesure',
    navLabel: 'Automatisation sur mesure',
    megaDesc: "Vous avez déjà identifié une tâche à simplifier ? On conçoit la solution dédiée.",
    icon: 'puzzle',
    eyebrow: 'Demande précise',
    title: 'Automatisation sur mesure',
    heroTitle: 'Vous avez identifié une tâche à automatiser ? Construisons la solution dédiée',
    heroSubtitle:
      "Pas de logiciel standardisé à adopter. On conçoit une automatisation taillée pour votre besoin précis, qui s'intègre à vos outils et à vos habitudes — robuste, simple et durable.",
    problem: {
      title: 'Une tâche répétitive vous coûte chaque semaine',
      body: "Re-saisir des données d'un outil à l'autre, trier des e-mails, relancer des clients, préparer les mêmes documents… Ces opérations semblent anodines, mais elles grignotent vos journées et ouvrent la porte aux erreurs.",
    },
    intro: {
      title: "Une solution conçue autour de votre besoin",
      body: "On part toujours du besoin concret. On écoute, on analyse le déroulé exact de la tâche, puis on conçoit un scénario d'automatisation qui s'intègre à vos outils existants. Vous validez, on met en place et on teste en conditions réelles avant de livrer.",
    },
    features: [
      { title: 'Gestion automatique des e-mails', benefit: 'Vos équipes ne traitent plus que les messages qui comptent vraiment.' },
      { title: 'Transferts de données entre outils', benefit: 'Fini la double saisie : l’information circule seule, sans erreur de recopie.' },
      { title: 'Préparation de documents', benefit: 'Vos documents récurrents se génèrent à partir de vos modèles, en quelques secondes.' },
      { title: 'Relances automatiques', benefit: 'Plus aucune relance oubliée, sans y penser et sans y passer du temps.' },
      { title: 'Suivi de demandes', benefit: 'Chaque demande est tracée et avance toute seule d’une étape à la suivante.' },
    ],
    benefits: [
      'Une solution qui épouse votre façon de travailler',
      'Une mise en place testée en conditions réelles',
      'Moins d’erreurs et une exécution régulière',
      'Un dispositif simple et durable, pas une usine à gaz',
    ],
    faqs: [
      { q: 'Faut-il changer nos outils actuels ?', a: "Le plus souvent non. L'objectif est justement de nous intégrer à vos outils et habitudes existants plutôt que de tout remplacer." },
      { q: 'Combien de temps pour mettre en place une automatisation ?', a: "Cela dépend de la complexité. Une automatisation ciblée peut être opérationnelle rapidement ; nous définissons ensemble un calendrier réaliste dès le départ." },
      { q: "Que se passe-t-il si mon besoin évolue ?", a: "Les solutions sont pensées pour durer et évoluer. On assure l'ajustement et l'optimisation dans le temps." },
      { q: 'Et si l’automatisation tombe en panne ?', a: "Les dispositifs sont conçus pour être robustes et supervisés. Des garde-fous et des alertes sont prévus pour détecter tout problème rapidement." },
    ],
    metaDescription:
      "Automatisation sur mesure : une solution dédiée à votre tâche répétitive, intégrée à vos outils. E-mails, transferts de données, relances, documents. Réservez un audit gratuit.",
  },
  {
    slug: 'automatisation-predictive',
    navLabel: 'Automatisation prédictive',
    megaDesc: "Anticipez grâce à vos données : prévision, priorisation et alertes proactives.",
    icon: 'trending',
    eyebrow: 'Anticiper avec l’IA',
    title: 'Automatisation prédictive',
    heroTitle: 'Passez de la réaction à l’anticipation grâce à vos données',
    heroSubtitle:
      "L'automatisation prédictive utilise l'IA et vos données pour anticiper plutôt que subir : prévoir la demande, prioriser ce qui compte, repérer les anomalies avant qu'elles ne coûtent cher.",
    problem: {
      title: 'Réagir trop tard coûte cher',
      body: "Quand on découvre un problème une fois qu'il est arrivé — une rupture de stock, un client mécontent, une anomalie — il est souvent trop tard pour l'éviter. Vos données contiennent pourtant les signaux qui permettent d'anticiper.",
    },
    intro: {
      title: "Ce qu'est l'automatisation prédictive",
      body: "À partir de vos données existantes, on conçoit des systèmes qui détectent des tendances et déclenchent des actions au bon moment. L'objectif reste pragmatique : des prédictions utiles qui débouchent sur une action concrète, pas des modèles abstraits.",
    },
    features: [
      { title: 'Anticipation de la demande', benefit: 'Vous préparez vos ressources avant le pic, pas pendant.' },
      { title: 'Scoring et priorisation', benefit: 'Vos équipes traitent d’abord les dossiers à plus forte valeur.' },
      { title: "Détection d'anomalies", benefit: 'Les écarts inhabituels sont repérés tôt, avant qu’ils ne s’aggravent.' },
      { title: 'Maintenance préventive', benefit: 'Vous intervenez avant la panne plutôt qu’après l’incident.' },
      { title: 'Alertes proactives', benefit: 'Les bonnes personnes sont prévenues au bon moment, automatiquement.' },
    ],
    benefits: [
      'Des décisions prises en avance, pas en urgence',
      'Des ressources mieux allouées',
      'Moins d’imprévus coûteux',
      'Une meilleure réactivité face aux signaux faibles',
    ],
    faqs: [
      { q: "Faut-il beaucoup de données pour commencer ?", a: "Pas nécessairement. On commence par évaluer les données dont vous disposez déjà. Beaucoup d'entreprises ont plus de données exploitables qu'elles ne le pensent." },
      { q: 'Les prédictions sont-elles fiables à 100 % ?', a: "Aucune prédiction n'est certaine. L'objectif est d'améliorer significativement vos décisions par rapport à l'absence d'anticipation, avec des garde-fous et une supervision humaine." },
      { q: 'Est-ce réservé aux grandes entreprises ?', a: "Non. Des cas d'usage simples et concrets apportent de la valeur même à petite échelle, dès lors que les données existent." },
    ],
    metaDescription:
      "Automatisation prédictive : anticipez la demande, priorisez, détectez les anomalies et recevez des alertes proactives grâce à l'IA et à vos données. Réservez un audit gratuit.",
  },
  {
    slug: 'integration-robot-ia',
    navLabel: 'Intégration robot IA',
    megaDesc: "Des agents IA intégrés à vos flux : tri et réponses e-mails, documents, assistants internes.",
    icon: 'bot',
    eyebrow: 'Agents intelligents',
    title: 'Intégration robot IA',
    heroTitle: 'Intégrez des agents IA dans vos flux — disponibles, réguliers, supervisés',
    heroSubtitle:
      "Tri et réponse aux e-mails, traitement de documents, assistants internes, agents autonomes : on intègre des assistants IA directement dans vos outils existants, avec les garde-fous nécessaires.",
    problem: {
      title: 'Les tâches de traitement saturent vos équipes',
      body: "Lire et trier des messages, extraire des informations de documents, répondre aux mêmes questions internes : ces tâches sont sans fin et mobilisent un temps précieux qui pourrait aller ailleurs.",
    },
    intro: {
      title: "Ce qu'est l'intégration de robots IA",
      body: "On intègre des agents et assistants IA dans vos flux de travail : ils lisent, classent, rédigent des réponses adaptées, traitent des documents ou répondent aux questions internes. Ils s'intègrent à vos outils existants et fonctionnent sous supervision, avec des règles claires.",
    },
    features: [
      { title: 'Tri et réponse aux e-mails', benefit: 'Les messages sont classés par nature et priorité, et les réponses courantes sont préparées.' },
      { title: 'Traitement de documents', benefit: 'Les informations clés sont extraites et structurées automatiquement.' },
      { title: 'Assistants internes', benefit: 'Vos équipes obtiennent des réponses immédiates à leurs questions récurrentes.' },
      { title: 'Agents autonomes', benefit: 'Certaines tâches s’exécutent de bout en bout, 24h/24, sans intervention.' },
    ],
    benefits: [
      'Une disponibilité continue, sans fatigue',
      'Une exécution régulière et homogène',
      'Vos équipes recentrées sur les tâches à valeur',
      'Une supervision humaine qui garde le contrôle',
    ],
    faqs: [
      { q: "L'IA peut-elle se tromper ?", a: "Oui, comme tout système. C'est pourquoi les agents sont encadrés par des règles, des validations et une supervision humaine sur les actions sensibles. La fiabilité est testée avant la mise en production." },
      { q: "Mes données sont-elles envoyées n'importe où ?", a: "Non. Le traitement des données est défini avec vous dans le respect du RGPD, en choisissant des solutions adaptées à votre niveau de sensibilité." },
      { q: "Cela remplace-t-il mes équipes ?", a: "L'objectif est de décharger vos équipes des tâches répétitives, pas de les remplacer. Les agents prennent le travail ingrat ; l'humain garde la décision et la relation." },
    ],
    metaDescription:
      "Intégration de robots et agents IA dans vos flux : tri et réponse e-mails, traitement de documents, assistants internes. Autonomie supervisée et conforme RGPD. Audit gratuit.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
