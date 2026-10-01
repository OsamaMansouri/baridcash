import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
const CnssDepotDeDossiersFaq: React.FC = () => {
  console.log("CnssDepotDeDossiersFaq component is rendering");
  const { t, i18n } = useTranslation("common");
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section ref={sectionRef} className="py-16 bg-barid-background">
      <div className="container mx-auto px-4 flex flex-col gap-8 items-center">
        {/* Brown div container for FAQ content */}
        <div className="rounded-[1.5rem] bg-[#5A433D] p-8 w-[90%] md:w-[80%] lg:w-[70%] min-w-[300px] text-white mx-auto">
          <div className="max-w-3xl mx-auto">
            {/* Text content about how to deposit files */}
            <div>
              <h2
                lang={i18n.language === "ar" ? "ar" : "fr"}
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
                className="text-xl font-semibold mb-6 text-white"
              >
                {t("cnss.depotDeDossiers.faq.title")}
              </h2>
              <div className="space-y-4">
                <p
                  lang={i18n.language === "ar" ? "ar" : "fr"}
                  style={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                  }}
                >
                  <span className="font-semibold">1.</span>{" "}
                  {t("cnss.depotDeDossiers.faq.step1")}
                </p>
                <p
                  lang={i18n.language === "ar" ? "ar" : "fr"}
                  style={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                  }}
                >
                  <span className="font-semibold">2.</span>{" "}
                  {t("cnss.depotDeDossiers.faq.step2")}
                </p>
                <p
                  lang={i18n.language === "ar" ? "ar" : "fr"}
                  style={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                  }}
                >
                  <span className="font-semibold">3.</span>{" "}
                  {t("cnss.depotDeDossiers.faq.step3")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CnssDepotDeDossiersFaq;
