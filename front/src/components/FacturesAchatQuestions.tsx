import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const FacturesAchatQuestions: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <>
      {/* Decorative image at the top with no padding/margin */}
      <div className="w-full">
        <img
          src="/lovable-uploads/4ebab3ba-fcd7-4c86-9dc4-20d5790aff8c.png"
          alt="BaridCash Decorative Wave"
          className="w-full h-auto"
        />
      </div>

      <section className="py-16 bg-barid-orange">
        <div className="container mx-auto px-4">
          <div
            className={`mb-12 ${
              i18n.language === "ar" ? "text-right" : "text-center"
            }`}
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("facturesAchat.faq.title")}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-barid-brown p-8 rounded-2xl">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem
                  value="item-1"
                  className="border-white/30 border-b pb-4"
                >
                  <AccordionTrigger className="flex justify-between items-center group p-0 py-3 no-underline hover:no-underline">
                    <h3
                      className={`text-white text-lg font-medium ${
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
                      {t("facturesAchat.faq.fees.question")}
                    </h3>
                    <ChevronDown className="h-6 w-6 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-white" />
                  </AccordionTrigger>
                  <AccordionContent
                    className="pt-3 pb-2 text-white/90 text-base"
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  >
                    {t("facturesAchat.faq.fees.answer")}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FacturesAchatQuestions;
