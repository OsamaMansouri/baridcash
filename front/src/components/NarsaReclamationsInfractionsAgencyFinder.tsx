import React from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const NarsaReclamationsInfractionsAgencyFinder: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <section className="py-16 bg-[#F27D30]">
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
          {t("narsaReclamationsInfractions.faq.title")}
        </h2>

        {/* Brown div container for all FAQ content */}
        <div className="rounded-[1.5rem] bg-[#5A433D] p-8 w-[90%] md:w-[80%] lg:w-[70%] min-w-[300px] text-white mx-auto">
          <div className="max-w-3xl mx-auto">
            {/* First question */}
            <div className="border-b border-white/100 pb-4 mb-5">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
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
                      {t("narsaReclamationsInfractions.faq.question1")}
                    </div>
                    <ChevronDown className="h-6 w-6 shrink-0 text-white transition-transform duration-300 group-data-[state=open]:text-[#F27D30] group-data-[state=open]:rotate-180" />
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#5A433D] text-white px-5 pb-5 pt-2 rounded-b-xl">
                    <div
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      <p
                        className={`mb-3 ${
                          i18n.language === "ar" ? "text-right" : "text-left"
                        }`}
                      >
                        {t("narsaReclamationsInfractions.faq.answer1")}
                      </p>
                      <ul
                        className={`mt-2 space-y-1 list-disc text-sm ${
                          i18n.language === "ar"
                            ? "pr-6 text-right"
                            : "pl-6 text-left"
                        }`}
                        style={{ listStylePosition: "inside" }}
                      >
                        {t("narsaReclamationsInfractions.faq.answer1List", {
                          returnObjects: true,
                        }).map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      <div className="mt-4">
                        {(() => {
                          const contactText = t(
                            "narsaReclamationsInfractions.faq.contactButton"
                          );
                          const parts = contactText.split("\n");

                          if (parts.length > 1) {
                            // Arabic version with line break
                            return (
                              <>
                                <p
                                  className={`mb-3 text-sm ${
                                    i18n.language === "ar"
                                      ? "text-right"
                                      : "text-left"
                                  }`}
                                  style={{
                                    direction:
                                      i18n.language === "ar" ? "rtl" : "ltr",
                                    fontFamily:
                                      i18n.language === "ar"
                                        ? "Cairo, Arial, sans-serif"
                                        : "Inter, Arial, sans-serif",
                                  }}
                                >
                                  {parts[0]}
                                </p>
                                <Link to="/contactez-nous">
                                  <button className="bg-[#F27D30] text-white px-6 py-3 rounded-lg text-sm hover:bg-[#E26A20] transition-colors font-medium">
                                    {parts[1]}
                                  </button>
                                </Link>
                              </>
                            );
                          } else {
                            // French version without line break
                            return (
                              <Link to="/contactez-nous">
                                <button className="bg-[#F27D30] text-white px-6 py-3 rounded-lg text-sm hover:bg-[#E26A20] transition-colors font-medium">
                                  {contactText}
                                </button>
                              </Link>
                            );
                          }
                        })()}
                      </div>
                    </div>
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

export default NarsaReclamationsInfractionsAgencyFinder;
