import React, { useRef, useEffect, useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const ETimbreServiceQuestions: React.FC = () => {
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
    <section ref={sectionRef} className="py-16 bg-barid-orange">
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl font-bold mb-12 text-white ${
            i18n.language === "ar" ? "text-right" : "text-center"
          }`}
          style={{
            direction: i18n.language === "ar" ? "rtl" : "ltr",
            fontFamily:
              i18n.language === "ar"
                ? "Cairo, Arial, sans-serif"
                : "Inter, Arial, sans-serif",
          }}
        >
          {t("eTimbreService.faq.title")}
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
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("eTimbreService.faq.whereToPay.question")}
                    </div>
                    <ChevronDown className="h-6 w-6 shrink-0 text-white transition-transform duration-300 group-data-[state=open]:text-[#F27D30] group-data-[state=open]:rotate-180" />
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#5A433D] text-white px-5 pb-5 pt-2 rounded-b-xl">
                    <p
                      className={
                        i18n.language === "ar" ? "text-right" : "text-left"
                      }
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("eTimbreService.faq.whereToPay.answer")}
                    </p>
                    <div
                      className={`mt-4 ${
                        i18n.language === "ar" ? "text-right" : "text-left"
                      }`}
                    >
                      <a
                        href="/nos-points-de-vente"
                        className={`text-[#F27D30] flex items-center hover:underline ${
                          i18n.language === "ar"
                            ? "justify-end flex-row-reverse"
                            : "justify-start"
                        }`}
                      >
                        {i18n.language === "ar" && (
                          <ArrowRight className="ml-2 h-5 w-5" />
                        )}
                        <span
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                          }}
                        >
                          {t("eTimbreService.faq.whereToPay.cta")}
                        </span>
                        {i18n.language !== "ar" && (
                          <ArrowRight className="ml-2 h-5 w-5" />
                        )}
                      </a>
                    </div>
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
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("eTimbreService.faq.documents.question")}
                    </div>
                    <ChevronDown className="h-6 w-6 shrink-0 text-white transition-transform duration-300 group-data-[state=open]:text-[#F27D30] group-data-[state=open]:rotate-180" />
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#5A433D] text-white px-5 pb-5 pt-2 rounded-b-xl">
                    <p
                      className={
                        i18n.language === "ar" ? "text-right" : "text-left"
                      }
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("eTimbreService.faq.documents.answer")}
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
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("eTimbreService.faq.pricing.question")}
                    </div>
                    <ChevronDown className="h-6 w-6 shrink-0 text-white transition-transform duration-300 group-data-[state=open]:text-[#F27D30] group-data-[state=open]:rotate-180" />
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#5A433D] text-white px-5 pb-5 pt-2 rounded-b-xl">
                    <ul
                      className={`space-y-1 ${
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
                      {(
                        t("eTimbreService.faq.pricing.prices", {
                          returnObjects: true,
                        }) as string[]
                      ).map((price, index) => (
                        <li key={index} className="list-disc list-inside">
                          {price}
                        </li>
                      ))}
                    </ul>
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

export default ETimbreServiceQuestions;
