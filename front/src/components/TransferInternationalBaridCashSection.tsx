import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const TransferInternationalBaridCashSection: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Detect when section scrolls into view
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
    <section ref={sectionRef} className="py-16 bg-barid-orange">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-12 text-white"
          lang={i18n.language === "ar" ? "ar" : "fr"}
          style={{
            direction: i18n.language === "ar" ? "rtl" : "ltr",
            fontFamily:
              i18n.language === "ar"
                ? "Cairo, Arial, sans-serif"
                : "Inter, Arial, sans-serif",
            textAlign: "center",
          }}
        >
          {t("transferInternational.baridCash.title")}
        </h2>

        {/* Brown div container for service content */}
        <div className="rounded-[1.5rem] bg-[#5A433D] p-8 w-[90%] md:w-[80%] lg:w-[70%] min-w-[300px] text-white mx-auto">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Content */}
            <div className="flex flex-col">
              <p
                className="text-white text-lg leading-relaxed"
                lang={i18n.language === "ar" ? "ar" : "fr"}
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                  textAlign: i18n.language === "ar" ? "right" : "left",
                  lineHeight: i18n.language === "ar" ? "1.2" : "1.6",
                }}
              >
                {t("transferInternational.baridCash.description")}
              </p>
            </div>

            {/* Button */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default TransferInternationalBaridCashSection;
