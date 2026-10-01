export const nousConnaitreMenu = [
  { label: "Qui sommes nous", path: "/nous-connaitre" },
  { label: "Mot du Directeur Général", path: "#" },
  { label: "Nous rejoindre", path: "/nous-rejoindre" },
  { label: "Nos partenaires", path: "/nos-partenaires" },
  { label: "Actualités", path: "/actualites" },
];

export const nosServicesMenu = [
  { label: "Transfert d'argent national", path: "/transfert-argent-national" },
  {
    label: "Transfert d'argent international",
    path: "/transfert-argent-international",
  },
  { label: "Change de devises", path: "/change-devises" },
  {
    label: "Ouverture de compte",
    subItems: [
      { label: "Types de Comptes", path: "/types-de-comptes" },
      { label: "BARID PAY", path: "/barid-pay" },
    ],
  },
  { label: "Carte monétique", path: "/cartes-monetiques" },
  {
    label: "Impôts, taxes, vignette automobile",
    subItems: [
      { label: "TVA, IS, IR, vignette automobile", path: "/taxes-impots" },
      { label: "E-timbre", path: "/e-timbre" },
      { label: "ROKHAS", path: "/rokhas" },
    ],
  },
  {
    label: "Paiement de factures: Eau, électricité et télécom",
    path: "/factures-eau-electricite",
  },
  {
    label: "Paiement partenaires: achat e-commerce, transport",
    path: "/factures-achat",
  },
  {
    label: "Services NARSA",
    subItems: [
      { label: "Permis de conduire", path: "/narsa-permis-de-conduire" },
      { label: "Carte grise", path: "/narsa-carte-grise" },
      {
        label: "Réclamations aux infractions",
        path: "/narsa-reclamations-infractions",
      },
      { label: "Mutation de véhicule", path: "/narsa-mutation" },
    ],
  },
  {
    label: "AMANA et CHRONOPOST",
    subItems: [
      { label: "Amana", path: "/amana" },
      { label: "Chronopost", path: "/chronopost" },
    ],
  },
  {
    label: "Services CNSS",
    subItems: [
      { label: "Dépôt de dossiers", path: "/cnss-depot-de-dossiers" },
      { label: "Contrôle vie", path: "/cnss-controle-de-vie" },
      { label: "Immatriculation", path: "/cnss-immatriculation" },
    ],
  },
  { label: "Produits d'assurance", path: "/produits-assurance" },
  { label: "Annonces légales", path: "/annonces-legales" },
];

export const entrepriseMenu = [
  { label: "ACCUEIL", path: "/accueil" },
  {
    label: "NOS SERVICES",
    subItems: [
      { label: "Barid Pay pro", path: "/barid-pay-pro" },
      { label: "Amana Pro", path: "/amana-ecommerce" },
      { label: "Barid e-sign", path: "/barid-e-sign" },
      {
        label: "Renouvellement du permis de conduire de masse",
        path: "/permis-conduire-masse-entreprise",
      },
      {
        label: "Service de mise à disposition",
        path: "/service-mise-disposition",
      },
      { label: "Forever", path: "/forever" },
      { label: "Pay Express", path: "/pay-express" },
    ],
  },
  {
    label: "DEVENIR PARTENAIRE",
    subItems: [
      { label: "Devenir partenaire", path: "/devenir-partenaire" },
      { label: "Nos points de vente", path: "/nos-points-de-vente-en" },
    ],
  },
  {
    label: "NOUS CONNAITRE",
    subItems: [
      { label: "Mot du Directeur Général", path: "#" },
      { label: "Qui sommes nous", path: "/qui-sommes-nous" },
      { label: "Actualités", path: "/actualites-en" },
    ],
  },
  {
    label: "SERVICE CLIENT",
    subItems: [
      { label: "Vos questions", path: "/vos-questions" },
      { label: "Nous contacter", path: "/nous-contacter" },
    ],
  },
];

export const serviceClientMenu = [
  { label: "Vos questions", path: "/faqs" },
  { label: "Grille tarifaire", path: "/grille-tarifaire" },
  { label: "Nous contacter", path: "/contactez-nous" },
  { label: "Assistance Client", path: "/assistance-client" },
];
