import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface MenuItem {
  label: string;
  path?: string;
  subItems?: MenuItem[];
}

interface NavbarDropdownProps {
  title: string;
  items: MenuItem[];
  isWide?: boolean;
}

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({
  title,
  items,
  isWide = false,
}) => {
  const { i18n, t } = useTranslation("common");

  // Function to translate menu items
  const translateMenuItem = (item: MenuItem): MenuItem => {
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
      translatedItem.subItems = item.subItems.map((subItem) =>
        translateMenuItem(subItem)
      );
    }

    return translatedItem;
  };

  // Translate all items
  const translatedItems = items.map((item) => translateMenuItem(item));
  const renderMenuItem = (item: MenuItem, index: number) => {
    if (item.subItems) {
      return (
        <React.Fragment key={item.label}>
          {index > 0 && (
            <DropdownMenuSeparator className="bg-barid-orange/50" />
          )}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger
              className={`bg-barid-orange text-white hover:bg-white hover:text-black p-3 cursor-pointer text-base data-[state=open]:bg-white data-[state=open]:text-black ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {item.label}
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent
              className={`bg-barid-orange text-white border-none rounded-none w-60 p-0 ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {item.subItems.map((subItem) => (
                <DropdownMenuItem
                  key={subItem.label}
                  className={`bg-barid-orange text-white hover:bg-white hover:text-black p-0 cursor-pointer text-base ${
                    i18n.language === "ar" ? "text-right" : "text-left"
                  }`}
                  asChild
                >
                  {subItem.path && subItem.path !== "#" ? (
                    <Link
                      to={subItem.path}
                      className={`w-full block p-3 ${
                        i18n.language === "ar" ? "text-right" : "text-left"
                      }`}
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {subItem.label}
                    </Link>
                  ) : (
                    <span
                      className={`w-full block p-3 ${
                        i18n.language === "ar" ? "text-right" : "text-left"
                      }`}
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {subItem.label}
                    </span>
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </React.Fragment>
      );
    }

    return (
      <DropdownMenuItem
        key={item.label}
        className={`bg-barid-orange text-white hover:bg-white hover:text-black p-0 cursor-pointer text-base ${
          i18n.language === "ar" ? "text-right" : "text-left"
        }`}
        asChild
      >
        {item.path && item.path !== "#" ? (
          <Link
            to={item.path}
            className={`w-full block p-3 ${
              i18n.language === "ar" ? "text-right" : "text-left"
            }`}
            onClick={(e) => e.stopPropagation()}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {item.label}
          </Link>
        ) : (
          <span
            className={`w-full block p-3 ${
              i18n.language === "ar" ? "text-right" : "text-left"
            }`}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {item.label}
          </span>
        )}
      </DropdownMenuItem>
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={`text-white mx-3 flex items-center hover:text-barid-orange transition-colors text-lg ${
            i18n.language === "ar" ? "flex-row-reverse" : ""
          }`}
          style={{
            direction: i18n.language === "ar" ? "rtl" : "ltr",
            fontFamily:
              i18n.language === "ar"
                ? "Cairo, Arial, sans-serif"
                : "Inter, Arial, sans-serif",
          }}
        >
          {title}{" "}
          <ChevronDown
            size={18}
            className={i18n.language === "ar" ? "mr-1" : "ml-1"}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={`bg-barid-orange text-white border-none rounded-none p-0 ${
          isWide ? "w-80" : "w-60"
        } ${i18n.language === "ar" ? "text-right" : "text-left"}`}
        style={{
          direction: i18n.language === "ar" ? "rtl" : "ltr",
          fontFamily:
            i18n.language === "ar"
              ? "Cairo, Arial, sans-serif"
              : "Inter, Arial, sans-serif",
        }}
      >
        {translatedItems.map((item, index) => renderMenuItem(item, index))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarDropdown;
