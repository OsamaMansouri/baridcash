import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const CnssImmatriculationFaq: React.FC = () => {
  console.log("CnssImmatriculationFaq component is rendering");
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
            {/* Text content about immatriculation process */}
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
                {t("cnss.immatriculation.faq.title")}
              </h2>
              <div className="space-y-4">
                <div>
                  <p
                    lang={i18n.language === "ar" ? "ar" : "fr"}
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                    className="mb-2"
                  >
                    <span className="font-semibold">1.</span>{" "}
                    {t("cnss.immatriculation.faq.step1")}
                  </p>
                  <ul
                    lang={i18n.language === "ar" ? "ar" : "fr"}
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                      listStyleType: "disc",
                      listStylePosition: "outside",
                    }}
                    className={`list-disc ${
                      i18n.language === "ar" ? "mr-4" : "ml-4"
                    } space-y-1`}
                  >
                    <li>{t("cnss.immatriculation.faq.step1List1")}</li>
                    <li>{t("cnss.immatriculation.faq.step1List2")}</li>
                  </ul>
                  <p
                    lang={i18n.language === "ar" ? "ar" : "fr"}
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                    className="mt-2 text-sm"
                  >
                    <span className="font-semibold">*</span>{" "}
                    {t("cnss.immatriculation.faq.step1Note")}
                  </p>
                </div>
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
                  {t("cnss.immatriculation.faq.step2")}
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
                  {t("cnss.immatriculation.faq.step3")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CnssImmatriculationFaq;
