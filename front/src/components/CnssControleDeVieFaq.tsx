import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const CnssControleDeVieFaq: React.FC = () => {
  console.log("CnssControleDeVieFaq component is rendering");
  const { t, i18n } = useTranslation("common");

  return (
    <section className="py-16 bg-[#fef6e4]">
      <div className="container mx-auto px-4 flex flex-col gap-8 items-center">
        <h2
          lang={i18n.language === "ar" ? "ar" : "fr"}
          style={{
            direction: i18n.language === "ar" ? "rtl" : "ltr",
            fontFamily:
              i18n.language === "ar"
                ? "Cairo, Arial, sans-serif"
                : "Inter, Arial, sans-serif",
            color: "#5A433D",
          }}
          className="text-3xl font-bold text-center mb-8"
        >
          {t("cnss.controleDeVie.faq.title")}
        </h2>
        <div className="rounded-[1.5rem] bg-[#5A433D] p-6 w-[60%] min-w-[300px]">
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="item-1" className="border-white pt-2 pb-2">
              <AccordionTrigger className="flex justify-between items-center group p-0 py-2 no-underline hover:no-underline">
                <h3
                  lang={i18n.language === "ar" ? "ar" : "fr"}
                  style={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                  }}
                  className={`text-white text-base font-medium ${
                    i18n.language === "ar" ? "text-right" : "text-left"
                  }`}
                >
                  {t("cnss.controleDeVie.faq.question1")}
                </h3>
                <ChevronDown className="h-6 w-6 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-white" />
              </AccordionTrigger>
              <AccordionContent
                lang={i18n.language === "ar" ? "ar" : "fr"}
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
                className="pt-2 pb-2 text-white/80 text-sm"
              >
                {t("cnss.controleDeVie.faq.answer1")}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-white pt-2 pb-2">
              <AccordionTrigger className="flex justify-between items-center group p-0 py-2 no-underline hover:no-underline">
                <h3
                  lang={i18n.language === "ar" ? "ar" : "fr"}
                  style={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                  }}
                  className={`text-white text-base font-medium ${
                    i18n.language === "ar" ? "text-right" : "text-left"
                  }`}
                >
                  {t("cnss.controleDeVie.faq.question2")}
                </h3>
                <ChevronDown className="h-6 w-6 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-white" />
              </AccordionTrigger>
              <AccordionContent
                lang={i18n.language === "ar" ? "ar" : "fr"}
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
                className="pt-2 pb-2 text-white/80 text-sm"
              >
                {t("cnss.controleDeVie.faq.answer2")}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-white pt-2 pb-2">
              <AccordionTrigger className="flex justify-between items-center group p-0 py-2 no-underline hover:no-underline">
                <h3
                  lang={i18n.language === "ar" ? "ar" : "fr"}
                  style={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                  }}
                  className={`text-white text-base font-medium ${
                    i18n.language === "ar" ? "text-right" : "text-left"
                  }`}
                >
                  {t("cnss.controleDeVie.faq.question3")}
                </h3>
                <ChevronDown className="h-6 w-6 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-white" />
              </AccordionTrigger>
              <AccordionContent
                lang={i18n.language === "ar" ? "ar" : "fr"}
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
                className="pt-2 pb-2 text-white/80 text-sm"
              >
                {t("cnss.controleDeVie.faq.answer3")}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-white pt-2 pb-2">
              <AccordionTrigger className="flex justify-between items-center group p-0 py-2 no-underline hover:no-underline">
                <h3
                  lang={i18n.language === "ar" ? "ar" : "fr"}
                  style={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                  }}
                  className={`text-white text-base font-medium ${
                    i18n.language === "ar" ? "text-right" : "text-left"
                  }`}
                >
                  {t("cnss.controleDeVie.faq.question4")}
                </h3>
                <ChevronDown className="h-6 w-6 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-white" />
              </AccordionTrigger>
              <AccordionContent
                lang={i18n.language === "ar" ? "ar" : "fr"}
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
                className="pt-2 pb-2 text-white/80 text-sm"
              >
                {t("cnss.controleDeVie.faq.answer4")}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CnssControleDeVieFaq;
