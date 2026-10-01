import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const TransferInternationalFAQContent: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  // Function to render structured answers with bullet points and line breaks
  const renderStructuredAnswer = (answer: string) => {
    const parts = answer.split("\n");
    return (
      <div>
        {parts.map((part, index) => {
          if (part.startsWith("•")) {
            // Render bullet points
            return (
              <ul key={index} className="list-disc list-inside mt-2 mb-2">
                <li>{part.substring(1).trim()}</li>
              </ul>
            );
          } else if (part.trim()) {
            // Render regular text
            return (
              <p key={index} className="mb-2">
                {part}
              </p>
            );
          }
          return null;
        })}
      </div>
    );
  };

  return (
    <section className="py-16 bg-[#F27D30]">
      <div className="container mx-auto px-4 flex flex-col gap-8 items-center">
        <h2
          className="text-white text-3xl font-bold text-center mb-8"
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
          {t("transferInternational.faqContent.title")}
        </h2>

        {/* Envoi d'argent */}
        <div className="rounded-[1.5rem] bg-[#5A433D] p-6 w-[60%] min-w-[300px]">
          <h2
            className="text-white text-2xl font-bold mb-6"
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
              textAlign: i18n.language === "ar" ? "right" : "left",
            }}
          >
            {t("transferInternational.faqContent.sendingMoney.title")}
          </h2>

          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="item-1" className="border-white pt-2 pb-2">
              <AccordionTrigger className="flex justify-between items-center group p-0 py-2 no-underline hover:no-underline">
                <h3
                  className="text-white text-base font-medium"
                  style={{
                    textAlign: i18n.language === "ar" ? "right" : "left",
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                  }}
                >
                  {t("transferInternational.faqContent.sendingMoney.q1")}
                </h3>
                <ChevronDown className="h-6 w-6 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-white" />
              </AccordionTrigger>
              <AccordionContent
                className="pt-2 pb-2 text-white/80 text-sm"
                style={{
                  textAlign: i18n.language === "ar" ? "right" : "left",
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              >
                {t("transferInternational.faqContent.sendingMoney.a1")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-white pt-2 pb-2">
              <AccordionTrigger className="flex justify-between items-center group p-0 py-2 no-underline hover:no-underline">
                <h3
                  className="text-white text-base font-medium"
                  style={{
                    textAlign: i18n.language === "ar" ? "right" : "left",
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                  }}
                >
                  {t("transferInternational.faqContent.sendingMoney.q2")}
                </h3>
                <ChevronDown className="h-6 w-6 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-white" />
              </AccordionTrigger>
              <AccordionContent
                className="pt-2 pb-2 text-white/80 text-sm"
                style={{
                  textAlign: i18n.language === "ar" ? "right" : "left",
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              >
                {t("transferInternational.faqContent.sendingMoney.a2")}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Réception d'argent */}
        <div className="rounded-[1.5rem] bg-[#5A433D] p-6 w-[60%] min-w-[300px]">
          <h2
            className="text-white text-2xl font-bold mb-6"
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
              textAlign: i18n.language === "ar" ? "right" : "left",
            }}
          >
            {t("transferInternational.faqContent.receivingMoney.title")}
          </h2>

          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="item-3" className="border-white pt-2 pb-2">
              <AccordionTrigger className="flex justify-between items-center group p-0 py-2 no-underline hover:no-underline">
                <h3
                  className="text-white text-base font-medium"
                  style={{
                    textAlign: i18n.language === "ar" ? "right" : "left",
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                  }}
                >
                  {t("transferInternational.faqContent.receivingMoney.q1")}
                </h3>
                <ChevronDown className="h-6 w-6 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-white" />
              </AccordionTrigger>
              <AccordionContent
                className="pt-2 pb-2 text-white/80 text-sm"
                style={{
                  textAlign: i18n.language === "ar" ? "right" : "left",
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              >
                {renderStructuredAnswer(
                  t("transferInternational.faqContent.receivingMoney.a1")
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-white pt-2 pb-2">
              <AccordionTrigger className="flex justify-between items-center group p-0 py-2 no-underline hover:no-underline">
                <h3
                  className="text-white text-base font-medium"
                  style={{
                    textAlign: i18n.language === "ar" ? "right" : "left",
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                  }}
                >
                  {t("transferInternational.faqContent.receivingMoney.q2")}
                </h3>
                <ChevronDown className="h-6 w-6 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-white" />
              </AccordionTrigger>
              <AccordionContent
                className="pt-2 pb-2 text-white/80 text-sm"
                style={{
                  textAlign: i18n.language === "ar" ? "right" : "left",
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              >
                {t("transferInternational.faqContent.receivingMoney.a2")}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default TransferInternationalFAQContent;
