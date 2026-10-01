import React from "react";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const NarsaCarteGriseAgencyFinder: React.FC = () => {
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
          {t("narsaCarteGrise.faq.title")}
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
                      {t("narsaCarteGrise.faq.question1")}
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
                        className={
                          i18n.language === "ar" ? "text-right" : "text-left"
                        }
                      >
                        {t("narsaCarteGrise.faq.answer1")}
                      </p>
                      <ul
                        className={`mt-2 space-y-1 list-disc ${
                          i18n.language === "ar"
                            ? "pr-6 text-right"
                            : "pl-6 text-left"
                        }`}
                        style={{ listStylePosition: "inside" }}
                      >
                        {t("narsaCarteGrise.faq.answer1List", {
                          returnObjects: true,
                        }).map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
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
                      {t("narsaCarteGrise.faq.question2")}
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
                      {t("narsaCarteGrise.faq.answer2")}
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
                      {t("narsaCarteGrise.faq.question3")}
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
                      {t("narsaCarteGrise.faq.answer3")}
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

export default NarsaCarteGriseAgencyFinder;
