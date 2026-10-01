import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import LocaleSwitcher from "../LocaleSwitcher";
import {
  nousConnaitreMenu,
  nosServicesMenu,
  serviceClientMenu,
} from "./navbarData";
import { useTranslation } from "react-i18next";

interface NavbarMobileProps {
  isOpen: boolean;
  onSearchOpen: () => void;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({
  isOpen,
  onSearchOpen,
}) => {
  const { t } = useTranslation("common");
  const [nousConnaitreOpen, setNousConnaitreOpen] = useState(false);
  const [nosServicesOpen, setNosServicesOpen] = useState(false);
  const [serviceClientOpen, setServiceClientOpen] = useState(false);

  // Function to translate menu items
  const translateMenuItem = (item: any): any => {
    const translatedItem = { ...item };

    // Map French labels to translation keys
    const labelMap: { [key: string]: string } = {
      "Qui sommes nous": "nav.quiSommesNous",
      "Mot du Directeur Général": "nav.motDirecteurGeneral",
      Actualités: "nav.actualites",
      "Nous rejoindre": "nav.nousRejoindre",
      "Nos partenaires": "nav.nosPartenaires",
      "Transfert d'argent national": "nav.transfertArgentNational",
      "Transfert d'argent international": "nav.transfertArgentInternational",
      "Change de devises": "nav.changeDevises",
      "Ouverture de compte": "nav.ouvertureCompte",
      "Types de Comptes": "nav.typesComptes",
      "BARID PAY": "nav.baridPay",
      "Carte monétique": "nav.carteMonetique",
      "Impôts, taxes, vignette automobile": "nav.impotsTaxesVignette",
      "TVA, IS, IR, vignette automobile": "nav.tvaIsIrVignette",
      "E-timbre": "nav.eTimbre",
      ROKHAS: "nav.rokhas",
      "Paiement de factures: Eau, électricité et télécom":
        "nav.paiementFacturesEauElectricite",
      "Paiement partenaires: achat e-commerce, transport":
        "nav.paiementPartenairesAchat",
      "Services NARSA": "nav.servicesNarsa",
      "Permis de conduire": "nav.permisConduire",
      "Carte grise": "nav.carteGrise",
      "Réclamations aux infractions": "nav.reclamationsInfractions",
      "Mutation de véhicule": "nav.mutationVehicule",
      "AMANA et CHRONOPOST": "nav.amanaChronopost",
      Amana: "nav.amana",
      Chronopost: "nav.chronopost",
      "Services CNSS": "nav.servicesCnss",
      "Dépôt de dossiers": "nav.depotDossiers",
      "Contrôle vie": "nav.controleVie",
      Immatriculation: "nav.immatriculation",
      "Produits d'assurance": "nav.produitsAssurance",
      "Annonces légales": "nav.annoncesLegales",
      "Vos questions": "nav.vosQuestions",
      "Nous contacter": "nav.nousContacter",
      "Grille tarifaire": "nav.grilleTarifaire",
      "Assistance Client": "nav.assistanceClient",
      ACCUEIL: "nav.accueil",
      "NOS SERVICES": "nav.nosServicesEn",
      "DEVENIR PARTENAIRE": "nav.devenirPartenaireEn",
      "NOUS CONNAITRE": "nav.nousConnaitreEn",
      "SERVICE CLIENT": "nav.serviceClientEn",
      "Barid Pay pro": "nav.baridPayPro",
      "Amana Pro": "nav.amanaPro",
      "Barid e-sign": "nav.baridESign",
      "Renouvellement du permis de conduire de masse":
        "nav.renouvellementPermisMasse",
      "Service de mise à disposition": "nav.serviceMiseDisposition",
      Forever: "nav.forever",
      "Pay Express": "nav.payExpress",
      "Devenir partenaire": "nav.devenirPartenaire",
      "Nos points de vente": "nav.nosPointsDeVenteEn",
    };

    // Translate the main label
    if (labelMap[item.label]) {
      translatedItem.label = t(labelMap[item.label]);
    }

    // Translate sub-items if they exist
    if (item.subItems) {
      translatedItem.subItems = item.subItems.map((subItem: any) =>
        translateMenuItem(subItem)
      );
    }

    return translatedItem;
  };

  const renderMenuItems = (items: any[]) => {
    const translatedItems = items.map((item) => translateMenuItem(item));
    return translatedItems.map((item, index) => {
      if (item.subItems) {
        return (
          <div key={index} className="mt-3">
            <span className="block py-2 text-white text-base font-semibold">
              {item.label}
            </span>
            <div className="space-y-1">
              {item.subItems.map((subItem: any, subIndex: number) => (
                <Link
                  key={subIndex}
                  to={subItem.path}
                  className="block py-1 text-white hover:text-barid-orange transition-colors text-sm"
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          </div>
        );
      } else {
        return (
          <Link
            key={index}
            to={item.path}
            className="block py-2 text-white hover:text-barid-orange transition-colors text-base"
          >
            {item.label}
          </Link>
        );
      }
    });
  };

  return (
    <div
      className={`lg:hidden ${
        isOpen ? "block" : "hidden"
      } pt-4 px-4 max-h-[80vh] overflow-y-auto`}
    >
      <div className="flex flex-col space-y-2 pb-6">
        {/* Nous connaître Section */}
        <Collapsible
          open={nousConnaitreOpen}
          onOpenChange={setNousConnaitreOpen}
        >
          <CollapsibleTrigger className="flex items-center justify-between w-full py-3 text-white hover:text-barid-orange transition-colors text-lg text-left">
            <span>{t("nav.nousConnaitre")}</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                nousConnaitreOpen ? "rotate-180" : ""
              }`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-4 space-y-2">
            {renderMenuItems(nousConnaitreMenu)}
          </CollapsibleContent>
        </Collapsible>

        {/* Nos Services Section */}
        <Collapsible open={nosServicesOpen} onOpenChange={setNosServicesOpen}>
          <CollapsibleTrigger className="flex items-center justify-between w-full py-3 text-white hover:text-barid-orange transition-colors text-lg text-left">
            <span>{t("nav.nosServices")}</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                nosServicesOpen ? "rotate-180" : ""
              }`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-4 space-y-2">
            {renderMenuItems(nosServicesMenu)}
          </CollapsibleContent>
        </Collapsible>

        {/* Devenez mandataire - Direct Link */}
        <Link
          to="/devenez-mandataire"
          className="flex items-center w-full py-3 text-white hover:text-barid-orange transition-colors text-lg text-left"
        >
          {t("nav.devenezMandataire")}
        </Link>

        {/* Service Client Section */}
        <Collapsible
          open={serviceClientOpen}
          onOpenChange={setServiceClientOpen}
        >
          <CollapsibleTrigger className="flex items-center justify-between w-full py-3 text-white hover:text-barid-orange transition-colors text-lg text-left">
            <span>{t("nav.serviceClient")}</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                serviceClientOpen ? "rotate-180" : ""
              }`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-4 space-y-2">
            {renderMenuItems(serviceClientMenu)}
          </CollapsibleContent>
        </Collapsible>

        {/* Nos points de vente - Direct Link */}
        <Link
          to="/nos-points-de-vente"
          className="flex items-center w-full py-3 text-white hover:text-barid-orange transition-colors text-lg text-left"
        >
          {t("nav.nosPointsDeVente")}
        </Link>
      </div>

      <div className="flex items-center justify-between mt-6 mb-4">
        <button className="text-white" onClick={onSearchOpen}>
          <Search size={24} />
        </button>
        <LocaleSwitcher />
      </div>
    </div>
  );
};

export default NavbarMobile;
