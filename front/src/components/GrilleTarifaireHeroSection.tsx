import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslation } from "react-i18next";

const GrilleTarifaireHeroSection: React.FC = () => {
  const isMobile = useIsMobile();
  const { t, i18n } = useTranslation("common");
  return (
    <section
      className="relative bg-white overflow-visible"
      style={{
        minHeight: isMobile ? "150px" : "200px",
        paddingBottom: "40px",
      }}
    >
      {/* Orange trapezoid background - positioned behind */}
      <div
        className="absolute inset-0 z-10 overflow-visible"
        style={{
          height: isMobile ? "150px" : "200px",
        }}
      >
        <img
          src="/lovable-uploads/b4854d27-5f95-497a-85a2-7ffc711c4fad.png"
          alt="Orange background shape"
          className="w-full h-full object-cover object-top"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      {/* Brown trapezoid foreground - positioned in front */}
      <div
        className="absolute inset-0 z-20 overflow-visible"
        style={{
          height: isMobile ? "150px" : "200px",
        }}
      >
        <img
          src="/lovable-uploads/b4fa3350-dd7d-44fc-997d-ecd10260846c.png"
          alt="Brown foreground shape"
          className="w-full h-full object-cover object-top"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      {/* Left content - Only Logo in brown area with responsive positioning */}
      <div
        className={`absolute ${
          isMobile ? "top-6 left-6" : "top-12 left-12"
        } z-30 flex items-center`}
      >
        <img
          src="/lovable-uploads/166cc560-500b-423f-a9c0-204f268b00d9.png"
          alt="BaridCash Logo"
          className={`${isMobile ? "h-8" : "h-12"}`}
        />
      </div>

      {/* Right content - Title in orange area with responsive text */}
      <div
        className={`absolute ${
          isMobile ? "top-4 right-6" : "top-6 right-12"
        } z-30 text-white`}
        style={{ textAlign: i18n.language === "ar" ? "right" : "right" }}
      >
        <h1
          className={`${
            isMobile ? "text-xl" : "text-3xl"
          } font-bold tracking-wider mb-1`}
          style={{
            fontFamily:
              i18n.language === "ar"
                ? "Cairo, Arial, sans-serif"
                : "Arial, sans-serif",
            direction: i18n.language === "ar" ? "rtl" : "ltr",
            textAlign: "right",
          }}
        >
          {t("grilleTarifaire.hero.title")}
        </h1>
        <h1
          className={`${
            isMobile ? "text-xl" : "text-3xl"
          } font-bold tracking-wider ${isMobile ? "mb-1" : "mb-2"}`}
          style={{
            fontFamily:
              i18n.language === "ar"
                ? "Cairo, Arial, sans-serif"
                : "Arial, sans-serif",
            direction: i18n.language === "ar" ? "rtl" : "ltr",
            textAlign: "right",
          }}
        >
          {t("grilleTarifaire.hero.titleLine2")}
        </h1>
      </div>
    </section>
  );
};
export default GrilleTarifaireHeroSection;
