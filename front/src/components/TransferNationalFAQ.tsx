import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const TransferNationalFAQ: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  // Function to render structured answers with bullet points and line breaks
  const renderStructuredAnswer = (answer: string) => {
    const parts = answer.split("\n");
    const bulletItems = [];
    const textParts = [];

    // Separate bullet items from regular text
    parts.forEach((part, index) => {
      if (
        part.startsWith("•") ||
        part.startsWith(" -") ||
        part.startsWith(" - ") ||
        (part.trim() &&
          !part.includes(":") &&
          !part.includes("،") &&
          !part.includes(".") &&
          !part.includes("أو يمكنكم") &&
          part.trim().length < 100)
      ) {
        bulletItems.push(part.replace(/^[•\s-]+/, "").trim());
      } else if (part.trim()) {
        textParts.push(part.trim());
      }
    });

    return (
      <div>
        {textParts.map((part, index) => (
          <p key={`text-${index}`} className="mb-2">
            {part}
          </p>
        ))}
        {bulletItems.length > 0 && (
          <ul
            className={`list-disc ${
              i18n.language === "ar" ? "pr-5" : "pl-5"
            } mt-2 mb-2`}
          >
            {bulletItems.map((item, index) => (
              <li key={`bullet-${index}`}>{item}</li>
            ))}
          </ul>
        )}
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
          }}
        >
          {t("faqNational.title")}
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
            }}
          >
            {t("faqNational.sendingMoney.title")}
          </h2>

          <Accordion
            type="single"
            collapsible
            className="space-y-2"
            defaultValue=""
          >
            <AccordionItem value="envoi-1" className="border-white pt-2 pb-2">
              <AccordionTrigger className="flex justify-between items-center group p-0 py-2 no-underline hover:no-underline">
                <h3
                  className="text-white text-base font-medium text-left"
                  lang={i18n.language === "ar" ? "ar" : "fr"}
                  style={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                  }}
                >
                  {t("faqNational.sendingMoney.questions.howToSend.question")}
                </h3>
                <ChevronDown className="h-6 w-6 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-white" />
              </AccordionTrigger>
              <AccordionContent
                className="pt-2 pb-2 text-white/80 text-sm"
                lang={i18n.language === "ar" ? "ar" : "fr"}
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              >
                {renderStructuredAnswer(
                  t("faqNational.sendingMoney.questions.howToSend.answer")
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="envoi-2" className="border-white pt-2 pb-2">
              <AccordionTrigger className="flex justify-between items-center group p-0 py-2 no-underline hover:no-underline">
                <h3
                  className="text-white text-base font-medium text-left"
                  lang={i18n.language === "ar" ? "ar" : "fr"}
                  style={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                  }}
                >
                  {t(
                    "faqNational.sendingMoney.questions.howToKnowReceived.question"
                  )}
                </h3>
                <ChevronDown className="h-6 w-6 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-white" />
              </AccordionTrigger>
              <AccordionContent
                className="pt-2 pb-2 text-white/80 text-sm"
                lang={i18n.language === "ar" ? "ar" : "fr"}
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              >
                {renderStructuredAnswer(
                  t(
                    "faqNational.sendingMoney.questions.howToKnowReceived.answer"
                  )
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="envoi-3" className="border-white pt-2 pb-2">
              <AccordionTrigger className="flex justify-between items-center group p-0 py-2 no-underline hover:no-underline">
                <h3
                  className="text-white text-base font-medium text-left"
                  lang={i18n.language === "ar" ? "ar" : "fr"}
                  style={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                  }}
                >
                  {t("faqNational.sendingMoney.questions.maxAmount.question")}
                </h3>
                <ChevronDown className="h-6 w-6 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-white" />
              </AccordionTrigger>
              <AccordionContent
                className="pt-2 pb-2 text-white/80 text-sm"
                lang={i18n.language === "ar" ? "ar" : "fr"}
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              >
                {t("faqNational.sendingMoney.questions.maxAmount.answer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="envoi-4" className="border-white pt-2 pb-2">
              <AccordionTrigger className="flex justify-between items-center group p-0 py-2 no-underline hover:no-underline">
                <h3
                  className="text-white text-base font-medium text-left"
                  lang={i18n.language === "ar" ? "ar" : "fr"}
                  style={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                  }}
                >
                  {t("faqNational.sendingMoney.questions.canCancel.question")}
                </h3>
                <ChevronDown className="h-6 w-6 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-white" />
              </AccordionTrigger>
              <AccordionContent
                className="pt-2 pb-2 text-white/80 text-sm"
                lang={i18n.language === "ar" ? "ar" : "fr"}
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              >
                {t("faqNational.sendingMoney.questions.canCancel.answer")}
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
            }}
          >
            {t("faqNational.receivingMoney.title")}
          </h2>

          <Accordion
            type="single"
            collapsible
            className="space-y-2"
            defaultValue=""
          >
            <AccordionItem
              value="reception-1"
              className="border-white pt-2 pb-2"
            >
              <AccordionTrigger className="flex justify-between items-center group p-0 py-2 no-underline hover:no-underline">
                <h3
                  className="text-white text-base font-medium text-left"
                  lang={i18n.language === "ar" ? "ar" : "fr"}
                  style={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                  }}
                >
                  {t(
                    "faqNational.receivingMoney.questions.howToKnowAvailable.question"
                  )}
                </h3>
                <ChevronDown className="h-6 w-6 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-white" />
              </AccordionTrigger>
              <AccordionContent
                className="pt-2 pb-2 text-white/80 text-sm"
                lang={i18n.language === "ar" ? "ar" : "fr"}
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              >
                {t(
                  "faqNational.receivingMoney.questions.howToKnowAvailable.answer"
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="reception-2"
              className="border-white pt-2 pb-2"
            >
              <AccordionTrigger className="flex justify-between items-center group p-0 py-2 no-underline hover:no-underline">
                <h3
                  className="text-white text-base font-medium text-left"
                  lang={i18n.language === "ar" ? "ar" : "fr"}
                  style={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                  }}
                >
                  {t(
                    "faqNational.receivingMoney.questions.requiredDocuments.question"
                  )}
                </h3>
                <ChevronDown className="h-6 w-6 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-white" />
              </AccordionTrigger>
              <AccordionContent
                className="pt-2 pb-2 text-white/80 text-sm"
                lang={i18n.language === "ar" ? "ar" : "fr"}
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              >
                {t(
                  "faqNational.receivingMoney.questions.requiredDocuments.answer"
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="reception-3"
              className="border-white pt-2 pb-2"
            >
              <AccordionTrigger className="flex justify-between items-center group p-0 py-2 no-underline hover:no-underline">
                <h3
                  className="text-white text-base font-medium text-left"
                  lang={i18n.language === "ar" ? "ar" : "fr"}
                  style={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                  }}
                >
                  {t(
                    "faqNational.receivingMoney.questions.maxDuration.question"
                  )}
                </h3>
                <ChevronDown className="h-6 w-6 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-white" />
              </AccordionTrigger>
              <AccordionContent
                className="pt-2 pb-2 text-white/80 text-sm"
                lang={i18n.language === "ar" ? "ar" : "fr"}
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              >
                {t("faqNational.receivingMoney.questions.maxDuration.answer")}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default TransferNationalFAQ;
