import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface SearchResult {
  title: string;
  path: string;
  description: string;
}

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchDialog: React.FC<SearchDialogProps> = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation("common");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  // Define all pages with their searchable content
  const getPages = (): SearchResult[] => [
    {
      title:
        i18n.language === "ar"
          ? "تحويل الأموال الوطني"
          : "Transfert d'argent national",
      path: "/transfert-argent-national",
      description:
        i18n.language === "ar"
          ? "أرسلوا الأموال في جميع أنحاء المغرب مع بريد كاش. خدمة سريعة وآمنة ومتوفرة في جميع نقاط البيع لدينا."
          : "Envoyez de l'argent partout au Maroc avec BaridCash. Service rapide, sécurisé et disponible dans tous nos points de vente.",
    },
    {
      title:
        i18n.language === "ar"
          ? "تحويل الأموال الدولي"
          : "Transfert d'argent international",
      path: "/transfert-argent-international",
      description:
        i18n.language === "ar"
          ? "التحويلات الدولية مع ويسترن يونيون ومانيغرام. أرسلوا واستقبلوا الأموال في جميع أنحاء العالم."
          : "Transferts internationaux avec Western Union et MoneyGram. Envoyez et recevez de l'argent dans le monde entier.",
    },
    {
      title: i18n.language === "ar" ? "تغيير العملات" : "Change de devises",
      path: "/change-devises",
      description:
        i18n.language === "ar"
          ? "خدمة تغيير العملات بأفضل الأسعار. تبادل العملات الأجنبية في وكالاتنا."
          : "Service de change de devises aux meilleurs taux. Échange de monnaies étrangères dans nos agences.",
    },
    {
      title: i18n.language === "ar" ? "بريد باي" : "BARID PAY",
      path: "/barid-pay",
      description:
        i18n.language === "ar"
          ? "حساب الدفع المحمول لمعاملاتكم اليومية. ادفعوا فواتيركم وحولوا الأموال بسهولة."
          : "Compte de paiement mobile pour vos transactions quotidiennes. Payez vos factures et transférez de l'argent facilement.",
    },
    {
      title: i18n.language === "ar" ? "البطاقات النقدية" : "Cartes monétiques",
      path: "/cartes-monetiques",
      description:
        i18n.language === "ar"
          ? "بطاقات الدفع لشراءاتكم وسحوباتكم. حلول الدفع الإلكتروني الآمنة."
          : "Cartes de paiement pour vos achats et retraits. Solutions de paiement électronique sécurisées.",
    },
    {
      title: i18n.language === "ar" ? "الضرائب والرسوم" : "Taxes et impôts",
      path: "/taxes-impots",
      description:
        i18n.language === "ar"
          ? "دفع الضريبة على القيمة المضافة، ضريبة الشركات، ضريبة الدخل وطابع السيارة. خدمة دفع الضرائب والرسوم عبر الإنترنت."
          : "Paiement de la TVA, IS, IR et vignette automobile. Service de paiement des taxes et impôts en ligne.",
    },
    {
      title: i18n.language === "ar" ? "الطابع الإلكتروني" : "E-timbre",
      path: "/e-timbre",
      description:
        i18n.language === "ar"
          ? "خدمة الطابع الإلكتروني لوثائقكم الرسمية. طوابع ضريبية غير مادية."
          : "Service de timbre électronique pour vos documents officiels. Timbres fiscaux dématérialisés.",
    },
    {
      title: "ROKHAS",
      path: "/rokhas",
      description:
        "Service ROKHAS pour l'obtention de documents administratifs. Facilitez vos démarches administratives.",
    },
    {
      title: "Permis de conduire - NARSA",
      path: "/narsa-permis-de-conduire",
      description:
        "Services NARSA pour le permis de conduire. Renouvellement, duplicata et autres services liés au permis.",
    },
    {
      title: "Carte grise - NARSA",
      path: "/narsa-carte-grise",
      description:
        "Services NARSA pour la carte grise. Immatriculation, transfert et modification de carte grise.",
    },
    {
      title: "Réclamations infractions - NARSA",
      path: "/narsa-reclamations-infractions",
      description:
        "Réclamations aux infractions routières avec NARSA. Contestez vos contraventions facilement.",
    },
    {
      title: "Mutation véhicule - NARSA",
      path: "/narsa-mutation",
      description:
        "Mutation de véhicule avec les services NARSA. Changement de propriétaire simplifié.",
    },
    {
      title: "AMANA",
      path: "/amana",
      description:
        "Services postaux AMANA. Envoi de colis et courrier avec suivi et assurance.",
    },
    {
      title: "CHRONOPOST",
      path: "/chronopost",
      description:
        "Service express CHRONOPOST. Livraison rapide et sécurisée de vos envois urgents.",
    },
    {
      title: "CNSS - Dépôt de dossiers",
      path: "/cnss-depot-de-dossiers",
      description:
        "Dépôt de dossiers CNSS. Services de sécurité sociale et prestations familiales.",
    },
    {
      title: "CNSS - Contrôle de vie",
      path: "/cnss-controle-de-vie",
      description:
        "Contrôle de vie CNSS pour les retraités. Attestation de vie et continuation des pensions.",
    },
    {
      title: "CNSS - Immatriculation",
      path: "/cnss-immatriculation",
      description:
        "Immatriculation à la CNSS. Inscription au régime de sécurité sociale.",
    },
    {
      title: "Produits d'assurance",
      path: "/produits-assurance",
      description:
        "Produits d'assurance disponibles chez BaridCash. Protection et couverture pour vos besoins.",
    },
    {
      title: "Paiement factures achat",
      path: "/factures-achat",
      description:
        "Paiement de factures d'achat e-commerce et transport. Réglez vos achats en ligne facilement.",
    },
    {
      title: "Factures eau et électricité",
      path: "/factures-eau-electricite",
      description:
        "Paiement des factures d'eau, électricité et télécom. Tous vos paiements utilitaires en un seul endroit.",
    },
    {
      title: "Devenez mandataire",
      path: "/devenez-mandataire",
      description:
        "Rejoignez le réseau BaridCash en tant que mandataire. Opportunité d'affaires et partenariat.",
    },
    {
      title: "Questions fréquentes",
      path: "/faqs",
      description:
        "Foire aux questions sur les services BaridCash. Trouvez rapidement les réponses à vos questions.",
    },
    {
      title: "Contactez-nous",
      path: "/contactez-nous",
      description:
        "Contactez l'équipe BaridCash. Nos coordonnées et formulaire de contact.",
    },
    {
      title: "Assistance client",
      path: "/assistance-client",
      description:
        "Service d'assistance client BaridCash. Support technique et aide personnalisée.",
    },
    {
      title: "Nous rejoindre",
      path: "/nous-rejoindre",
      description:
        "Carrières chez BaridCash. Opportunités d'emploi et candidatures spontanées.",
    },
    {
      title: "Nos partenaires",
      path: "/nos-partenaires",
      description:
        "Découvrez nos partenaires. Réseau de collaborateurs et entreprises partenaires.",
    },
    {
      title: "Annonces légales",
      path: "/annonces-legales",
      description:
        "Publication d'annonces légales. Service de publication officielle et légale.",
    },
    {
      title: "Qui sommes-nous",
      path: "/nous-connaitre",
      description:
        "Découvrez BaridCash. Notre histoire, mission et engagement envers nos clients.",
    },
    {
      title: "Grille tarifaire",
      path: "/grille-tarifaire",
      description:
        "Tarifs des services BaridCash. Consultez nos prix transparents et compétitifs.",
    },
    // Enterprise Services
    {
      title: "Barid Pay Pro",
      path: "/barid-pay-pro",
      description:
        "Solution de paiement professionnelle pour entreprises. Compte de paiement dédié aux professionnels avec fonctionnalités avancées.",
    },
    {
      title: "Amana Pro",
      path: "/amana-ecommerce",
      description:
        "Service de messagerie professionnelle pour e-commerces. Envoi de colis et courrier avec suivi pour entreprises.",
    },
    {
      title: "Barid E-Sign",
      path: "/barid-e-sign",
      description:
        "Signature électronique sécurisée pour documents professionnels. Solution de signature digitale pour entreprises.",
    },
    {
      title: "Renouvellement permis de conduire de masse",
      path: "/permis-conduire-masse-entreprise",
      description:
        "Service de renouvellement de permis de conduire en masse pour entreprises. Gestion groupée des permis de vos employés.",
    },
    {
      title: "Service de mise à disposition",
      path: "/service-mise-disposition",
      description:
        "Service de mise à disposition de personnel. Solutions de gestion de mandats et transferts d'argent pour entreprises.",
    },
    {
      title: "Forever",
      path: "/forever",
      description:
        "Service de paiement Forever pour entreprises. Solution de paiement en espèces pour vos clients.",
    },
    {
      title: "Pay Express",
      path: "/pay-express",
      description:
        "Solution de paiement express pour entreprises. Alternative de paiement en espèces pour vos clients.",
    },
    {
      title: "Devenir partenaire",
      path: "/devenir-partenaire",
      description:
        "Rejoignez le réseau BaridCash en tant que partenaire. Opportunités de partenariat et collaboration.",
    },
    {
      title: "Contact entreprise",
      path: "/entreprise-contact",
      description:
        "Contactez l'équipe BaridCash pour les entreprises. Support dédié aux professionnels et entreprises.",
    },
    {
      title: "Vos questions",
      path: "/vos-questions",
      description:
        "Foire aux questions pour les services entreprise. Trouvez les réponses à vos questions professionnelles.",
    },
    {
      title: "Accueil entreprise",
      path: "/accueil",
      description:
        "Page d'accueil des solutions entreprise BaridCash. Découvrez nos services dédiés aux professionnels.",
    },
    {
      title: "Actualités entreprise",
      path: "/actualites-en",
      description:
        "Actualités et nouveautés pour les entreprises. Restez informé des dernières évolutions de nos services.",
    },
    {
      title: "Nos points de vente entreprise",
      path: "/nos-points-de-vente-en",
      description:
        "Points de vente dédiés aux entreprises. Trouvez l'agence la plus proche pour vos besoins professionnels.",
    },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    const pages = getPages();
    const results = pages.filter(
      (page) =>
        page.title.toLowerCase().includes(query.toLowerCase()) ||
        page.description.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(results);
  };

  const handleClose = () => {
    setSearchQuery("");
    setSearchResults([]);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent
        className="max-w-2xl max-h-[80vh] overflow-hidden"
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
      >
        {/* Custom close button positioned correctly for RTL */}
        <button
          onClick={handleClose}
          className={`absolute top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
            i18n.language === "ar" ? "left-4" : "right-4"
          }`}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <DialogHeader>
          <DialogTitle
            className={i18n.language === "ar" ? "text-right" : "text-left"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("search.title")}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="relative">
            <Search
              className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 ${
                i18n.language === "ar" ? "right-3" : "left-3"
              }`}
              size={20}
            />
            <Input
              placeholder={t("search.placeholder")}
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className={
                i18n.language === "ar" ? "pr-10 text-right" : "pl-10 text-left"
              }
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
              autoFocus
            />
          </div>

          <div className="max-h-96 overflow-y-auto space-y-2">
            {searchResults.length > 0 ? (
              searchResults.map((result, index) => (
                <Link
                  key={index}
                  to={result.path}
                  onClick={handleClose}
                  className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-barid-brown mb-1">
                    {result.title}
                  </h3>
                  <p className="text-sm text-gray-600">{result.description}</p>
                </Link>
              ))
            ) : searchQuery ? (
              <div className="text-center py-8 text-gray-500">
                <Search size={48} className="mx-auto mb-4 opacity-30" />
                <p
                  style={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                  }}
                >
                  {t("search.noResults", { query: searchQuery })}
                </p>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Search size={48} className="mx-auto mb-4 opacity-30" />
                <p
                  style={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                  }}
                >
                  {t("search.startTyping")}
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
