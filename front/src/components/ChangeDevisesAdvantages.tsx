import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const ChangeDevisesAdvantages: React.FC = () => {
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

  const scrollToLocationSection = () => {
    // Try multiple selectors to find the location section
    const selectors = [
      'section:has(h2:contains("Localisez"))',
      '[class*="LocationSection"]',
      'section h2[class*="Localisez"]',
      "section:last-of-type",
    ];

    let locationSection = null;

    // Try to find section by text content
    const sections = document.querySelectorAll("section");
    for (const section of sections) {
      const heading = section.querySelector("h2");
      if (heading && heading.textContent?.includes("Localisez")) {
        locationSection = section;
        break;
      }
    }

    // Fallback: scroll to the last section (which should be the location section)
    if (!locationSection && sections.length > 0) {
      locationSection = sections[sections.length - 1];
    }

    if (locationSection) {
      locationSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section ref={sectionRef} className="py-16 bg-[#fef6e4]">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center text-[#5A433D] mb-12"
          lang={i18n.language === "ar" ? "ar" : "fr"}
          style={{
            direction: i18n.language === "ar" ? "rtl" : "ltr",
            fontFamily:
              i18n.language === "ar"
                ? "Cairo, Arial, sans-serif"
                : "Inter, Arial, sans-serif",
          }}
        >
          {t("changeDevises.title")}
        </h2>

        {/* Brown div container for all FAQ content */}
        <div className="rounded-[1.5rem] bg-[#5A433D] p-8 w-[90%] md:w-[80%] lg:w-[70%] min-w-[300px] text-white mx-auto">
          <div className="max-w-3xl mx-auto">
            {/* First question */}
            <div className="border-b border-white/100 pb-4 mb-5">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="item-1"
                  className="overflow-hidden rounded-xl border-none"
                >
                  <AccordionTrigger className="bg-[#5A433D] text-white p-5 pt-0 rounded-t-xl hover:no-underline group">
                    <div
                      className={`flex-1 font-medium text-lg ${
                        i18n.language === "ar" ? "text-right" : "text-left"
                      }`}
                      lang={i18n.language === "ar" ? "ar" : "fr"}
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("changeDevises.question1")}
                    </div>
                    <ChevronDown className="h-6 w-6 shrink-0 text-white transition-transform duration-300 group-data-[state=open]:text-[#F27D30] group-data-[state=open]:rotate-180" />
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#5A433D] text-white px-5 pb-5 pt-2 rounded-b-xl">
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
                      {t("changeDevises.answer1")}{" "}
                      <button
                        onClick={scrollToLocationSection}
                        className="text-[#F27D30] underline hover:text-[#d96415] transition-colors ml-1"
                        lang={i18n.language === "ar" ? "ar" : "fr"}
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {t("changeDevises.clickHere")}
                      </button>
                      {t("changeDevises.answer1End")
                        .split("\n")
                        .map((line, index) => (
                          <span key={index}>
                            {index > 0 && <br />}
                            {line}
                          </span>
                        ))}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Second question */}
            <div className="border-b border-white/100 pb-4 mb-5">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="item-2"
                  className="overflow-hidden rounded-xl border-none"
                >
                  <AccordionTrigger className="bg-[#5A433D] text-white p-5 pt-0 rounded-t-xl hover:no-underline group">
                    <div
                      className={`flex-1 font-medium text-lg ${
                        i18n.language === "ar" ? "text-right" : "text-left"
                      }`}
                      lang={i18n.language === "ar" ? "ar" : "fr"}
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("changeDevises.question2")}
                    </div>
                    <ChevronDown className="h-6 w-6 shrink-0 text-white transition-transform duration-300 group-data-[state=open]:text-[#F27D30] group-data-[state=open]:rotate-180" />
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#5A433D] text-white px-5 pb-5 pt-2 rounded-b-xl">
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
                      {t("changeDevises.answer2")}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Third question */}
            <div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="item-3"
                  className="overflow-hidden rounded-xl border-none"
                >
                  <AccordionTrigger className="bg-[#5A433D] text-white p-5 pt-0 rounded-t-xl hover:no-underline group">
                    <div
                      className={`flex-1 font-medium text-lg ${
                        i18n.language === "ar" ? "text-right" : "text-left"
                      }`}
                      lang={i18n.language === "ar" ? "ar" : "fr"}
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("changeDevises.question3")}
                    </div>
                    <ChevronDown className="h-6 w-6 shrink-0 text-white transition-transform duration-300 group-data-[state=open]:text-[#F27D30] group-data-[state=open]:rotate-180" />
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#5A433D] text-white px-5 pb-5 pt-2 rounded-b-xl">
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
                      {t("changeDevises.answer3")}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangeDevisesAdvantages;
