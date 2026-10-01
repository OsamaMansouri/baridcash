import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./i18n";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import TransfertArgentNational from "./pages/TransfertArgentNational";
import TransfertArgentInternational from "./pages/TransfertArgentInternational";
import ChangeDevises from "./pages/ChangeDevises";

import BaridPay from "./pages/BaridPay";
import CartesMonetiques from "./pages/CartesMonetiques";
import TaxesImpots from "./pages/TaxesImpots";
import ETimbreService from "./pages/ETimbreService";
import Rokhas from "./pages/Rokhas";
import FacturesEauElectricite from "./pages/FacturesEauElectricite";
import FacturesAchat from "./pages/FacturesAchat";
import NarsaPermisDeConduire from "./pages/NarsaPermisDeConduire";
import NarsaCarteGrise from "./pages/NarsaCarteGrise";
import NarsaReclamationsInfractions from "./pages/NarsaReclamationsInfractions";
import NarsaMutation from "./pages/NarsaMutation";
import Amana from "./pages/Amana";
import Chronopost from "./pages/Chronopost";
import CnssDepotDeDossiers from "./pages/CnssDepotDeDossiers";
import CnssControleDeVie from "./pages/CnssControleDeVie";
import CnssImmatriculation from "./pages/CnssImmatriculation";
import ProduitsAssurance from "./pages/ProduitsAssurance";
import AnnoncesLegales from "./pages/AnnoncesLegales";
import FAQs from "./pages/FAQs";
import GrilleTarifaire from "./pages/GrilleTarifaire";
import ContactezNous from "./pages/ContactezNous";
import AssistanceClient from "./pages/AssistanceClient";
import NousConnaitre from "./pages/NousConnaitre";
import QuiSommesNous from "./pages/QuiSommesNous";
import NousRejoindre from "./pages/NousRejoindre";
import NosPartenaires from "./pages/NosPartenaires";
import BaridPayPro from "./pages/BaridPayPro";
import AmanaECommerce from "./pages/AmanaECommerce";
import BaridESign from "./pages/BaridESign";
import PermisConduireMasseEntreprise from "./pages/PermisConduireMasseEntreprise";
import ServiceMiseDisposition from "./pages/ServiceMiseDisposition";
import Forever from "./pages/Forever";
import SolutionsPaiement from "./pages/SolutionsPaiement";
import PayExpress from "./pages/PayExpress";
import DevenirPartenaire from "./pages/DevenirPartenaire";
import EntrepriseContact from "./pages/EntrepriseContact";
import VosQuestions from "./pages/VosQuestions";
import NousContacter from "./pages/NousContacter";
import NosPointsDeVente from "./pages/NosPointsDeVente";
import NosComptesDePaiements from "./pages/NosComptesDePaiements";
import DevenezMandataire from "./pages/DevenezMandataire";
import TypesDeComptes from "./pages/TypesDeComptes";
import Actualites from "./pages/Actualites";
import ActualitesEn from "./pages/ActualitesEn";
import NosPointsDeVenteEn from "./pages/NosPointsDeVenteEn";
import Accueil from "./pages/Accueil";

const queryClient = new QueryClient();

// Component to handle language initialization
const LanguageInitializer: React.FC = () => {
  const { i18n } = useTranslation("common");

  useEffect(() => {
    // Set initial language and direction
    const currentLang = i18n.language || "fr";
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

    if (currentLang === "ar") {
      document.body.classList.add("rtl");
    } else {
      document.body.classList.remove("rtl");
    }
  }, [i18n.language]);

  return null;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <LanguageInitializer />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* French routes (default, no prefix) */}
            <Route path="/" element={<Index />} />
            <Route
              path="/transfert-argent-national"
              element={<TransfertArgentNational />}
            />
            <Route
              path="/transfert-argent-international"
              element={<TransfertArgentInternational />}
            />
            <Route path="/change-devises" element={<ChangeDevises />} />
            <Route path="/barid-pay" element={<BaridPay />} />
            <Route path="/cartes-monetiques" element={<CartesMonetiques />} />
            <Route path="/taxes-impots" element={<TaxesImpots />} />
            <Route path="/e-timbre" element={<ETimbreService />} />
            <Route path="/rokhas" element={<Rokhas />} />
            <Route
              path="/factures-eau-electricite"
              element={<FacturesEauElectricite />}
            />
            <Route path="/factures-achat" element={<FacturesAchat />} />
            <Route
              path="/narsa-permis-de-conduire"
              element={<NarsaPermisDeConduire />}
            />
            <Route path="/narsa-carte-grise" element={<NarsaCarteGrise />} />
            <Route
              path="/narsa-reclamations-infractions"
              element={<NarsaReclamationsInfractions />}
            />
            <Route path="/narsa-mutation" element={<NarsaMutation />} />
            <Route path="/amana" element={<Amana />} />
            <Route path="/chronopost" element={<Chronopost />} />
            <Route
              path="/cnss-depot-de-dossiers"
              element={<CnssDepotDeDossiers />}
            />
            <Route
              path="/cnss-controle-de-vie"
              element={<CnssControleDeVie />}
            />
            <Route
              path="/cnss-immatriculation"
              element={<CnssImmatriculation />}
            />
            <Route path="/produits-assurance" element={<ProduitsAssurance />} />
            <Route path="/annonces-legales" element={<AnnoncesLegales />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/grille-tarifaire" element={<GrilleTarifaire />} />
            <Route path="/contactez-nous" element={<ContactezNous />} />
            <Route path="/assistance-client" element={<AssistanceClient />} />
            <Route path="/nous-connaitre" element={<NousConnaitre />} />
            <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
            <Route path="/nous-rejoindre" element={<NousRejoindre />} />
            <Route path="/nos-partenaires" element={<NosPartenaires />} />
            <Route path="/barid-pay-pro" element={<BaridPayPro />} />
            <Route path="/amana-ecommerce" element={<AmanaECommerce />} />
            <Route path="/barid-e-sign" element={<BaridESign />} />
            <Route
              path="/permis-conduire-masse-entreprise"
              element={<PermisConduireMasseEntreprise />}
            />
            <Route
              path="/service-mise-disposition"
              element={<ServiceMiseDisposition />}
            />
            <Route path="/forever" element={<Forever />} />
            <Route path="/solutions-paiement" element={<SolutionsPaiement />} />
            <Route path="/pay-express" element={<PayExpress />} />
            <Route path="/devenir-partenaire" element={<DevenirPartenaire />} />
            <Route path="/entreprise-contact" element={<EntrepriseContact />} />
            <Route path="/vos-questions" element={<VosQuestions />} />
            <Route path="/nous-contacter" element={<NousContacter />} />
            <Route path="/nos-points-de-vente" element={<NosPointsDeVente />} />
            <Route
              path="/nos-comptes-de-paiements"
              element={<NosComptesDePaiements />}
            />
            <Route path="/devenez-mandataire" element={<DevenezMandataire />} />
            <Route path="/types-de-comptes" element={<TypesDeComptes />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/actualites-en" element={<ActualitesEn />} />
            <Route
              path="/nos-points-de-vente-en"
              element={<NosPointsDeVenteEn />}
            />
            <Route path="/accueil" element={<Accueil />} />

            {/* Arabic routes (with /ar prefix) */}
            <Route path="/ar" element={<Index />} />
            <Route
              path="/ar/transfert-argent-national"
              element={<TransfertArgentNational />}
            />
            <Route
              path="/ar/transfert-argent-international"
              element={<TransfertArgentInternational />}
            />
            <Route path="/ar/change-devises" element={<ChangeDevises />} />
            <Route path="/ar/barid-pay" element={<BaridPay />} />
            <Route
              path="/ar/cartes-monetiques"
              element={<CartesMonetiques />}
            />
            <Route path="/ar/taxes-impots" element={<TaxesImpots />} />
            <Route path="/ar/e-timbre" element={<ETimbreService />} />
            <Route path="/ar/rokhas" element={<Rokhas />} />
            <Route
              path="/ar/factures-eau-electricite"
              element={<FacturesEauElectricite />}
            />
            <Route path="/ar/factures-achat" element={<FacturesAchat />} />
            <Route
              path="/ar/narsa-permis-de-conduire"
              element={<NarsaPermisDeConduire />}
            />
            <Route path="/ar/narsa-carte-grise" element={<NarsaCarteGrise />} />
            <Route
              path="/ar/narsa-reclamations-infractions"
              element={<NarsaReclamationsInfractions />}
            />
            <Route path="/ar/narsa-mutation" element={<NarsaMutation />} />
            <Route path="/ar/amana" element={<Amana />} />
            <Route path="/ar/chronopost" element={<Chronopost />} />
            <Route
              path="/ar/cnss-depot-de-dossiers"
              element={<CnssDepotDeDossiers />}
            />
            <Route
              path="/ar/cnss-controle-de-vie"
              element={<CnssControleDeVie />}
            />
            <Route
              path="/ar/cnss-immatriculation"
              element={<CnssImmatriculation />}
            />
            <Route
              path="/ar/produits-assurance"
              element={<ProduitsAssurance />}
            />
            <Route path="/ar/annonces-legales" element={<AnnoncesLegales />} />
            <Route path="/ar/faqs" element={<FAQs />} />
            <Route path="/ar/grille-tarifaire" element={<GrilleTarifaire />} />
            <Route path="/ar/contactez-nous" element={<ContactezNous />} />
            <Route
              path="/ar/assistance-client"
              element={<AssistanceClient />}
            />
            <Route path="/ar/nous-connaitre" element={<NousConnaitre />} />
            <Route path="/ar/qui-sommes-nous" element={<QuiSommesNous />} />
            <Route path="/ar/nous-rejoindre" element={<NousRejoindre />} />
            <Route path="/ar/nos-partenaires" element={<NosPartenaires />} />
            <Route path="/ar/barid-pay-pro" element={<BaridPayPro />} />
            <Route path="/ar/amana-ecommerce" element={<AmanaECommerce />} />
            <Route path="/ar/barid-e-sign" element={<BaridESign />} />
            <Route
              path="/ar/permis-conduire-masse-entreprise"
              element={<PermisConduireMasseEntreprise />}
            />
            <Route
              path="/ar/service-mise-disposition"
              element={<ServiceMiseDisposition />}
            />
            <Route path="/ar/forever" element={<Forever />} />
            <Route
              path="/ar/solutions-paiement"
              element={<SolutionsPaiement />}
            />
            <Route path="/ar/pay-express" element={<PayExpress />} />
            <Route
              path="/ar/devenir-partenaire"
              element={<DevenirPartenaire />}
            />
            <Route
              path="/ar/entreprise-contact"
              element={<EntrepriseContact />}
            />
            <Route path="/ar/vos-questions" element={<VosQuestions />} />
            <Route path="/ar/nous-contacter" element={<NousContacter />} />
            <Route
              path="/ar/nos-points-de-vente"
              element={<NosPointsDeVente />}
            />
            <Route
              path="/ar/nos-comptes-de-paiements"
              element={<NosComptesDePaiements />}
            />
            <Route
              path="/ar/devenez-mandataire"
              element={<DevenezMandataire />}
            />
            <Route path="/ar/types-de-comptes" element={<TypesDeComptes />} />
            <Route path="/ar/actualites" element={<Actualites />} />
            <Route path="/ar/actualites-en" element={<ActualitesEn />} />
            <Route
              path="/ar/nos-points-de-vente-en"
              element={<NosPointsDeVenteEn />}
            />
            <Route path="/ar/accueil" element={<Accueil />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
