import React from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AmanaFAQ: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <section className="py-16 bg-[#F27D30]">
      <div
        id="amana-faq-container"
        className="container mx-auto px-4 flex flex-col gap-8 items-center"
      >
        {/* FAQ content section */}
        <div className="rounded-[1.5rem] bg-[#5A433D] p-8 w-[90%] md:w-[80%] lg:w-[70%] min-w-[300px] text-white">
          <h2
            className="text-4xl font-bold mb-8"
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("amana.faq.title")}
          </h2>

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
                      {t("amana.faq.question1")}
                    </div>
                    <ChevronDown className="h-6 w-6 shrink-0 text-white transition-transform duration-300 group-data-[state=open]:text-[#F27D30] group-data-[state=open]:rotate-180" />
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#5A433D] text-white px-5 pb-5 pt-2 rounded-b-xl">
                    <p
                      className="mb-3"
                      lang={i18n.language === "ar" ? "ar" : "fr"}
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("amana.faq.answer1")}{" "}
                      <span className="text-[#F27D30]">
                        {t("amana.faq.here")}
                      </span>
                    </p>
                    <Link to="/grille-tarifaire">
                      <Button className="bg-[#F27D30] hover:bg-[#E76D20] inline-flex items-center">
                        <span
                          lang={i18n.language === "ar" ? "ar" : "fr"}
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                          }}
                        >
                          {t("amana.faq.pricingButton")}
                        </span>
                        <ChevronDown className="ml-2 h-4 w-4 rotate-[-90deg]" />
                      </Button>
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Second question */}
            <div>
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
                      {t("amana.faq.question2")}
                    </div>
                    <ChevronDown className="h-6 w-6 shrink-0 text-white transition-transform duration-300 group-data-[state=open]:text-[#F27D30] group-data-[state=open]:rotate-180" />
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#5A433D] text-white px-5 pb-5 pt-2 rounded-b-xl">
                    <p
                      className="mb-3"
                      lang={i18n.language === "ar" ? "ar" : "fr"}
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("amana.faq.answer2")}{" "}
                      <Link
                        to="/nos-points-de-vente"
                        className="text-[#F27D30] hover:underline cursor-pointer"
                      >
                        {t("amana.faq.here2")}
                      </Link>
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
export default AmanaFAQ;
