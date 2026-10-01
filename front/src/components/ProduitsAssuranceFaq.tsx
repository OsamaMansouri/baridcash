import React from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const ProduitsAssuranceFaq: React.FC = () => {
  console.log("ProduitsAssuranceFaq component is rendering");
  const { t, i18n } = useTranslation("common");

  return (
    <section className="py-16 bg-[#fef6e4]">
      <div className="container mx-auto px-4 flex flex-col gap-8 items-center">
        <h2
          className="text-3xl font-bold text-center mb-8"
          style={{
            color: "#5A433D",
            direction: i18n.language === "ar" ? "rtl" : "ltr",
            fontFamily:
              i18n.language === "ar"
                ? "Cairo, Arial, sans-serif"
                : "Inter, Arial, sans-serif",
          }}
        >
          {t("produitsAssurance.faq.title")}
        </h2>
        <div className="rounded-[1.5rem] bg-[#5A433D] p-6 w-[60%] min-w-[300px]">
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="item-1" className="border-white pt-2 pb-2">
              <AccordionTrigger className="flex justify-between items-center group p-0 py-2 no-underline hover:no-underline">
                <h3
                  className={`text-white text-base font-medium ${
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
                  {t("produitsAssurance.faq.questions.eligibilityAzaa")}
                </h3>
                <ChevronDown className="h-6 w-6 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-white" />
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-2 text-white/80 text-sm">
                <ul className="space-y-1">
                  {(
                    t("produitsAssurance.faq.questions.eligibilityAzaaAnswer", {
                      returnObjects: true,
                    }) as string[]
                  ).map((item, index) => (
                    <li
                      key={index}
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-white pt-2 pb-2">
              <AccordionTrigger className="flex justify-between items-center group p-0 py-2 no-underline hover:no-underline">
                <h3
                  className={`text-white text-base font-medium ${
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
                  {t("produitsAssurance.faq.questions.documentsAzaa")}
                </h3>
                <ChevronDown className="h-6 w-6 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-white" />
              </AccordionTrigger>
              <AccordionContent
                className="pt-2 pb-2 text-white/80 text-sm"
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              >
                {t("produitsAssurance.faq.questions.documentsAzaaAnswer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-white pt-2 pb-2">
              <AccordionTrigger className="flex justify-between items-center group p-0 py-2 no-underline hover:no-underline">
                <h3
                  className={`text-white text-base font-medium ${
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
                  {t("produitsAssurance.faq.questions.eligibilityIstishfaa")}
                </h3>
                <ChevronDown className="h-6 w-6 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-white" />
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-2 text-white/80 text-sm">
                <ul className="space-y-1">
                  {(
                    t(
                      "produitsAssurance.faq.questions.eligibilityIstishfaaAnswer",
                      { returnObjects: true }
                    ) as string[]
                  ).map((item, index) => (
                    <li
                      key={index}
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-white pt-2 pb-2">
              <AccordionTrigger className="flex justify-between items-center group p-0 py-2 no-underline hover:no-underline">
                <h3
                  className={`text-white text-base font-medium ${
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
                  {t("produitsAssurance.faq.questions.documentsIstishfaa")}
                </h3>
                <ChevronDown className="h-6 w-6 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-white" />
              </AccordionTrigger>
              <AccordionContent
                className="pt-2 pb-2 text-white/80 text-sm"
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              >
                {t("produitsAssurance.faq.questions.documentsIstishfaaAnswer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-white pt-2 pb-2">
              <AccordionTrigger className="flex justify-between items-center group p-0 py-2 no-underline hover:no-underline">
                <h3
                  className={`text-white text-base font-medium ${
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
                  {t("produitsAssurance.faq.questions.eligibilityDouayer")}
                </h3>
                <ChevronDown className="h-6 w-6 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-white" />
              </AccordionTrigger>
              <AccordionContent
                className="pt-2 pb-2 text-white/80 text-sm"
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              >
                {t("produitsAssurance.faq.questions.eligibilityDouayerAnswer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-white pt-2 pb-2">
              <AccordionTrigger className="flex justify-between items-center group p-0 py-2 no-underline hover:no-underline">
                <h3
                  className={`text-white text-base font-medium ${
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
                  {t("produitsAssurance.faq.questions.documentsDouayer")}
                </h3>
                <ChevronDown className="h-6 w-6 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-white" />
              </AccordionTrigger>
              <AccordionContent
                className="pt-2 pb-2 text-white/80 text-sm"
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              >
                {t("produitsAssurance.faq.questions.documentsDouayerAnswer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-white pt-2 pb-2">
              <AccordionTrigger className="flex justify-between items-center group p-0 py-2 no-underline hover:no-underline">
                <h3
                  className={`text-white text-base font-medium ${
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
                  {t("produitsAssurance.faq.questions.ceilingDouayer")}
                </h3>
                <ChevronDown className="h-6 w-6 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-white" />
              </AccordionTrigger>
              <AccordionContent
                className="pt-2 pb-2 text-white/80 text-sm"
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              >
                {t("produitsAssurance.faq.questions.ceilingDouayerAnswer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border-white pt-2 pb-2">
              <AccordionTrigger className="flex justify-between items-center group p-0 py-2 no-underline hover:no-underline">
                <h3
                  className={`text-white text-base font-medium ${
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
                  {t("produitsAssurance.faq.questions.minimumDouayer")}
                </h3>
                <ChevronDown className="h-6 w-6 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-white" />
              </AccordionTrigger>
              <AccordionContent
                className="pt-2 pb-2 text-white/80 text-sm"
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              >
                {t("produitsAssurance.faq.questions.minimumDouayerAnswer")}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Orange CTA Button */}
        <div className="mt-8">
          <Link
            to="/nos-points-de-vente"
            className="bg-barid-orange hover:bg-opacity-90 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center gap-3 text-lg shadow-lg"
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            <MapPin className="w-6 h-6" />
            {t("produitsAssurance.faq.cta.text")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProduitsAssuranceFaq;
