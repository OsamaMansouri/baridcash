import React from "react";
import Navbar from "../components/Navbar";
import LocationSection from "@/components/LocationSection";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const NosPointsDeVenteParticulier: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-barid-background to-white pt-12 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1
                className="text-4xl md:text-5xl font-bold text-barid-brown mb-6 force-center"
                style={{
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              >
                {i18n.language === "ar"
                  ? "نقاط البيع الخاصة بنا"
                  : "Nos points de vente"}
              </h1>
              <div className="w-32 h-1.5 bg-barid-orange mx-auto mb-6"></div>
              <p
                className="text-xl text-gray-700 max-w-3xl mx-auto force-center"
                style={{
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                  lineHeight: i18n.language === "ar" ? "1.2" : "1.6",
                }}
              >
                {i18n.language === "ar"
                  ? "اكتشفوا جميع نقاط البيع الخاصة ببريد كاش في جميع أنحاء المغرب. اعثروا على الوكالة الأقرب منكم للاستفادة من خدماتنا."
                  : "Découvrez tous nos points de vente Barid Cash à travers le Maroc. Trouvez l'agence la plus proche de vous pour bénéficier de nos services."}
              </p>
            </div>
          </div>
        </section>

        {/* Location Section with Map */}
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default NosPointsDeVenteParticulier;
