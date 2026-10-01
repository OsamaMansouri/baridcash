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
const BaridPayAgencyFinder: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <section className="py-16 bg-[#F27D30]">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-12 text-white"
          style={{
            direction: i18n.language === "ar" ? "rtl" : "ltr",
            fontFamily:
              i18n.language === "ar"
                ? "Cairo, Arial, sans-serif"
                : "Inter, Arial, sans-serif",
          }}
        >
          {t("baridPay.faq.title")}
        </h2>

        {/* Brown div container for all FAQ content */}
        <div className="rounded-[1.5rem] bg-[#5A433D] p-8 w-[90%] md:w-[80%] lg:w-[70%] min-w-[300px] text-white mx-auto">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {/* Question 1: Comment télécharger l'application */}
              <AccordionItem
                value="item-1"
                className="overflow-hidden rounded-xl border-none"
              >
                <AccordionTrigger className="bg-[#5A433D] text-white p-5 rounded-t-xl hover:no-underline group border-b border-white/20">
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
                    {t("baridPay.faq.downloadQuestion")}
                  </div>
                  <ChevronDown className="h-6 w-6 shrink-0 text-white transition-transform duration-300 group-data-[state=open]:text-[#F27D30] group-data-[state=open]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="bg-[#5A433D] text-white px-5 pb-5 pt-2 rounded-b-xl">
                  <p
                    className="mb-4"
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  >
                    {t("baridPay.faq.downloadAnswer")}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://play.google.com/store/apps/details?id=ma.baridcash.saphir.baridpay"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <button
                        className="bg-[#F27D30] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#E26A20] transition-colors font-medium"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {t("baridPay.faq.downloadPlayStore")}
                      </button>
                    </a>
                    <a
                      href="https://apps.apple.com/ma/app/barid-pay/id1457990295?l=fr-FR"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <button
                        className="bg-[#F27D30] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#E26A20] transition-colors font-medium"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {t("baridPay.faq.downloadAppStore")}
                      </button>
                    </a>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Question 2: Ouvrir un compte */}
              <AccordionItem
                value="item-2"
                className="overflow-hidden rounded-xl border-none"
              >
                <AccordionTrigger className="bg-[#5A433D] text-white p-5 rounded-t-xl hover:no-underline group border-b border-white/20">
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
                    {t("baridPay.faq.accountQuestion")}
                  </div>
                  <ChevronDown className="h-6 w-6 shrink-0 text-white transition-transform duration-300 group-data-[state=open]:text-[#F27D30] group-data-[state=open]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="bg-[#5A433D] text-white px-5 pb-5 pt-2 rounded-b-xl">
                  <p
                    className="mb-3"
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  >
                    {t("baridPay.faq.accountAnswer1")}
                  </p>
                  <div
                    className="mb-4"
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  >
                    {t("baridPay.faq.accountAnswer2")
                      .split("\n")
                      .map((line, index) => (
                        <p key={index} className={index > 0 ? "mt-2" : ""}>
                          {line === "اضغط هنا!" || line === "cliquez ici !" ? (
                            <Link
                              to="/types-de-comptes"
                              className="text-[#F27D30] underline hover:text-[#E26A20]"
                            >
                              {line}
                            </Link>
                          ) : (
                            line
                          )}
                        </p>
                      ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Question 3: Comment activer l'application */}
              <AccordionItem
                value="item-3"
                className="overflow-hidden rounded-xl border-none"
              >
                <AccordionTrigger className="bg-[#5A433D] text-white p-5 rounded-t-xl hover:no-underline group border-b border-white/20">
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
                    {t("baridPay.faq.activateQuestion")}
                  </div>
                  <ChevronDown className="h-6 w-6 shrink-0 text-white transition-transform duration-300 group-data-[state=open]:text-[#F27D30] group-data-[state=open]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="bg-[#5A433D] text-white px-5 pb-5 pt-2 rounded-b-xl">
                  <p
                    className="mb-3"
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  >
                    {t("baridPay.faq.activateAnswer")}
                  </p>
                  <ul
                    className="space-y-2 list-disc list-inside text-sm mb-4"
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  >
                    {t("baridPay.faq.activateSteps", {
                      returnObjects: true,
                    }).map((step: string, index: number) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>
                  <a
                    href="https://web.facebook.com/share/v/1FvRUsmWaF/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="bg-[#F27D30] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#E26A20] transition-colors font-medium"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("baridPay.faq.activateLearnMore")}
                    </button>
                  </a>
                </AccordionContent>
              </AccordionItem>

              {/* Question 4: Changement de smartphone */}
              <AccordionItem
                value="item-4"
                className="overflow-hidden rounded-xl border-none"
              >
                <AccordionTrigger className="bg-[#5A433D] text-white p-5 rounded-t-xl hover:no-underline group border-b border-white/20">
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
                    {t("baridPay.faq.phoneChangeQuestion")}
                  </div>
                  <ChevronDown className="h-6 w-6 shrink-0 text-white transition-transform duration-300 group-data-[state=open]:text-[#F27D30] group-data-[state=open]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="bg-[#5A433D] text-white px-5 pb-5 pt-2 rounded-b-xl">
                  <p
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  >
                    {t("baridPay.faq.phoneChangeAnswer")}
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Question 5: Perte du numéro de téléphone */}
              <AccordionItem
                value="item-5"
                className="overflow-hidden rounded-xl border-none"
              >
                <AccordionTrigger className="bg-[#5A433D] text-white p-5 rounded-t-xl hover:no-underline group border-b border-white/20">
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
                    {t("baridPay.faq.phoneLossQuestion")}
                  </div>
                  <ChevronDown className="h-6 w-6 shrink-0 text-white transition-transform duration-300 group-data-[state=open]:text-[#F27D30] group-data-[state=open]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="bg-[#5A433D] text-white px-5 pb-5 pt-2 rounded-b-xl">
                  <p
                    className="mb-4"
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  >
                    {t("baridPay.faq.phoneLossAnswer")}
                  </p>
                  <Link to="/contactez-nous"></Link>
                </AccordionContent>
              </AccordionItem>

              {/* Question 6: Besoin d'assistance */}
              <AccordionItem
                value="item-6"
                className="overflow-hidden rounded-xl border-none"
              >
                <AccordionTrigger className="bg-[#5A433D] text-white p-5 rounded-t-xl hover:no-underline group border-b border-white/20">
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
                    {t("baridPay.faq.assistanceQuestion")}
                  </div>
                  <ChevronDown className="h-6 w-6 shrink-0 text-white transition-transform duration-300 group-data-[state=open]:text-[#F27D30] group-data-[state=open]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="bg-[#5A433D] text-white px-5 pb-5 pt-2 rounded-b-xl">
                  <p
                    className="mb-4"
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  >
                    {t("baridPay.faq.assistanceAnswer")}
                  </p>
                  <div className="space-y-3">
                    <div>
                      <Link
                        to="/assistance-client"
                        className="text-[#F27D30] underline hover:text-[#E26A20]"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {t("baridPay.faq.assistanceLink")}
                      </Link>
                    </div>
                    <div>
                      <p
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {t("baridPay.faq.assistancePhone")}{" "}
                        <span className="font-bold text-[#F27D30]">
                          {t("baridPay.faq.assistanceNumber")}
                        </span>
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BaridPayAgencyFinder;
