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

const NarsaPermisDeConduireAgencyFinder: React.FC = () => {
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
          {t("narsaPermisDeConduire.faq.title")}
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
                  <AccordionTrigger
                    className={`bg-[#5A433D] text-white p-5 pt-0 rounded-t-xl hover:no-underline group ${
                      i18n.language === "ar" ? "flex-row-reverse" : ""
                    }`}
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  >
                    <div
                      className={`flex-1 font-medium text-lg ${
                        i18n.language === "ar" ? "text-right" : "text-left"
                      }`}
                    >
                      {t("narsaPermisDeConduire.faq.question1.question")}
                    </div>
                    <ChevronDown
                      className={`h-6 w-6 shrink-0 text-white transition-transform duration-300 group-data-[state=open]:text-[#F27D30] group-data-[state=open]:rotate-180 ${
                        i18n.language === "ar" ? "mr-2" : "ml-2"
                      }`}
                    />
                  </AccordionTrigger>
                  <AccordionContent
                    className="bg-[#5A433D] text-white px-5 pb-5 pt-2 rounded-b-xl"
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
                      {t("narsaPermisDeConduire.faq.question1.answer")}
                    </p>
                    <ul
                      className={`mt-2 space-y-1 list-disc ${
                        i18n.language === "ar"
                          ? "pr-6 text-right"
                          : "pl-6 text-left"
                      }`}
                      style={{ listStylePosition: "inside" }}
                    >
                      {t("narsaPermisDeConduire.faq.question1.cases", {
                        returnObjects: true,
                      }).map((caseItem: string, index: number) => (
                        <li key={index}>{caseItem}</li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <p
                        className={`mb-2 font-medium ${
                          i18n.language === "ar" ? "text-right" : "text-left"
                        }`}
                      >
                        {t("narsaPermisDeConduire.faq.question1.moreInfo")}{" "}
                        <Link
                          to="/contactez-nous"
                          className="text-[#F27D30] underline hover:text-[#E26A20]"
                        >
                          {t("narsaPermisDeConduire.faq.question1.clickHere")}
                        </Link>
                      </p>
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
                  <AccordionTrigger
                    className={`bg-[#5A433D] text-white p-5 pt-0 rounded-t-xl hover:no-underline group ${
                      i18n.language === "ar" ? "flex-row-reverse" : ""
                    }`}
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  >
                    <div
                      className={`flex-1 font-medium text-lg ${
                        i18n.language === "ar" ? "text-right" : "text-left"
                      }`}
                    >
                      {t("narsaPermisDeConduire.faq.question2.question")}
                    </div>
                    <ChevronDown
                      className={`h-6 w-6 shrink-0 text-white transition-transform duration-300 group-data-[state=open]:text-[#F27D30] group-data-[state=open]:rotate-180 ${
                        i18n.language === "ar" ? "mr-2" : "ml-2"
                      }`}
                    />
                  </AccordionTrigger>
                  <AccordionContent
                    className="bg-[#5A433D] text-white px-5 pb-5 pt-2 rounded-b-xl"
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
                      {t("narsaPermisDeConduire.faq.question2.answer")}
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
                  <AccordionTrigger
                    className={`bg-[#5A433D] text-white p-5 pt-0 rounded-t-xl hover:no-underline group ${
                      i18n.language === "ar" ? "flex-row-reverse" : ""
                    }`}
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  >
                    <div
                      className={`flex-1 font-medium text-lg ${
                        i18n.language === "ar" ? "text-right" : "text-left"
                      }`}
                    >
                      {t("narsaPermisDeConduire.faq.question3.question")}
                    </div>
                    <ChevronDown
                      className={`h-6 w-6 shrink-0 text-white transition-transform duration-300 group-data-[state=open]:text-[#F27D30] group-data-[state=open]:rotate-180 ${
                        i18n.language === "ar" ? "mr-2" : "ml-2"
                      }`}
                    />
                  </AccordionTrigger>
                  <AccordionContent
                    className="bg-[#5A433D] text-white px-5 pb-5 pt-2 rounded-b-xl"
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
                      {t("narsaPermisDeConduire.faq.question3.answer")}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* CTA Section */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default NarsaPermisDeConduireAgencyFinder;
