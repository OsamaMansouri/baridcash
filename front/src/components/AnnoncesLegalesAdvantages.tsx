import React, { useRef, useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const AnnoncesLegalesAdvantages: React.FC = () => {
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

  const faqQuestions = t("annoncesLegales.faq.questions", {
    returnObjects: true,
  }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <section ref={sectionRef} className="py-16 bg-[#fef6e4]">
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl font-bold text-center text-[#5A433D] mb-12 ${
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
          {t("annoncesLegales.faq.title")}
        </h2>

        {/* Brown div container for all FAQ content */}
        <div className="rounded-[1.5rem] bg-[#5A433D] p-8 w-[90%] md:w-[80%] lg:w-[70%] min-w-[300px] text-white mx-auto">
          <div className="max-w-3xl mx-auto">
            {faqQuestions.map((faq, index) => (
              <div
                key={index}
                className={
                  index < faqQuestions.length - 1
                    ? "border-b border-white/100 pb-4 mb-5"
                    : ""
                }
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem
                    value={`item-${index + 1}`}
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
                        {faq.question}
                      </div>
                      <ChevronDown className="h-6 w-6 shrink-0 text-white transition-transform duration-300 group-data-[state=open]:text-[#F27D30] group-data-[state=open]:rotate-180" />
                    </AccordionTrigger>
                    <AccordionContent className="bg-[#5A433D] text-white px-5 pb-5 pt-2 rounded-b-xl">
                      <p
                        className="mb-2"
                        lang={i18n.language === "ar" ? "ar" : "fr"}
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {faq.answer.includes("www.annonceslegales.gov.ma") ? (
                          <>
                            {faq.answer.split("www.annonceslegales.gov.ma")[0]}
                            <a
                              href="https://www.annonceslegales.gov.ma"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#F27D30] hover:underline"
                            >
                              www.annonceslegales.gov.ma
                            </a>
                            {faq.answer.split("www.annonceslegales.gov.ma")[1]}
                          </>
                        ) : (
                          faq.answer
                        )}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AnnoncesLegalesAdvantages;
