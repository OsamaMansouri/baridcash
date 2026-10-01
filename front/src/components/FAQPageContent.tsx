import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FAQPageContent: React.FC = () => {
  const { t, i18n } = useTranslation("common");

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
            textAlign: i18n.language === "ar" ? "right" : "left",
          }}
        >
          {i18n.language === "ar"
            ? "نجيب على أسئلتكم"
            : "Nous répondons à vos questions"}
        </h2>

        {/* Transfert d'argent au niveau national */}
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
            {i18n.language === "ar"
              ? "تحويل الأموال على المستوى الوطني"
              : "Transfert d'argent au niveau national"}
          </h2>

          <h3
            className="text-white text-xl font-semibold mb-4"
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
            {i18n.language === "ar" ? "إرسال الأموال" : "Envoi d'argent"}
          </h3>

          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem
              value="faq-national-envoi-1"
              className="border-white pt-2 pb-2"
            >
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
                  {i18n.language === "ar"
                    ? "هل ترغبون في إرسال الأموال من مدينة إلى أخرى داخل المغرب، ولكن لا تعرفون كيف؟"
                    : "Vous souhaitez envoyer de l'argent au Maroc, d'une ville à une autre, mais vous ne savez pas comment faire ?"}
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
                {(() => {
                  const firstPart =
                    i18n.language === "ar"
                      ? t("faqs.content.nationalTransfer.sending.a1")
                      : t("faqs.content.moneyTransfer.questions.a1");
                  const bulletList =
                    i18n.language === "ar"
                      ? t("faqs.content.nationalTransfer.sending.a1List", {
                          returnObjects: true,
                        })
                      : t("faqs.content.moneyTransfer.questions.a1List", {
                          returnObjects: true,
                        });
                  const lastPart =
                    i18n.language === "ar"
                      ? t("faqs.content.nationalTransfer.sending.a1App")
                      : t("faqs.content.moneyTransfer.questions.a1App");
                  return (
                    <>
                      <p className="mb-2">{firstPart}</p>
                      <ul
                        className={`list-disc ${
                          i18n.language === "ar" ? "pr-5" : "pl-5"
                        }`}
                      >
                        {bulletList.map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      <p className="mt-2">{lastPart}</p>
                    </>
                  );
                })()}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-national-envoi-2"
              className="border-white pt-2 pb-2"
            >
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون كيف تتأكدون من استلام المستفيد لأموال التحويل؟"
                    : "Vous vous demandez comment savoir si le bénéficiaire a bien reçu son transfert d'argent ?"}
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
                {(() => {
                  const firstPart =
                    i18n.language === "ar"
                      ? t("faqs.content.nationalTransfer.sending.a2")
                      : t("faqs.content.moneyTransfer.questions.a2");
                  const bulletList =
                    i18n.language === "ar"
                      ? t("faqs.content.nationalTransfer.sending.a2List", {
                          returnObjects: true,
                        })
                      : t("faqs.content.moneyTransfer.questions.a2List", {
                          returnObjects: true,
                        });
                  return (
                    <>
                      <p className="mb-2">{firstPart}</p>
                      <ul
                        className={`list-disc ${
                          i18n.language === "ar" ? "pr-5" : "pl-5"
                        }`}
                      >
                        {bulletList.map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </>
                  );
                })()}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-national-envoi-3"
              className="border-white pt-2 pb-2"
            >
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون ما هو الحد الأقصى للمبلغ الذي يمكنكم إرساله؟"
                    : "Vous vous demandez quelle est la somme maximale que vous pouvez envoyer ?"}
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
                {i18n.language === "ar"
                  ? t("faqs.content.nationalTransfer.sending.a3")
                  : t("faqs.content.moneyTransfer.questions.a3")}
              </AccordionContent>
            </AccordionItem>

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
                  {i18n.language === "ar"
                    ? "هل تتساءلون إذا كان يمكنكم إلغاء تحويل قيد التنفيذ؟"
                    : "Vous vous demandez s'il est possible d'annuler un transfert en cours d'exécution ?"}
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
                {(() => {
                  const text =
                    i18n.language === "ar"
                      ? t("faqs.content.nationalTransfer.sending.a4")
                      : t("faqs.content.moneyTransfer.questions.a4");
                  if (text.includes("\n")) {
                    const parts = text.split("\n");
                    return (
                      <>
                        <p className="mb-2">{parts[0]}</p>
                        <p>{parts[1]}</p>
                      </>
                    );
                  }
                  return <p>{text}</p>;
                })()}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <h3
            className="text-white text-xl font-semibold mt-8 mb-4"
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
            {i18n.language === "ar" ? "استلام الأموال" : "Réception d'argent"}
          </h3>

          <Accordion type="single" collapsible className="space-y-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون كيف تعرفون أن التحويل متوفر للاستلام؟"
                    : "Vous vous demandez comment savoir si votre transfert est disponible pour le récupérer ?"}
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
                {i18n.language === "ar"
                  ? t("faqs.content.nationalTransfer.receiving.a1")
                  : t("faqs.content.moneyReception.questions.ra1")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون ما هي الوثائق المطلوبة لاستلام التحويل؟"
                    : "Vous vous demandez quels sont les documents que vous devez fournir lors de la réception de votre transfert ?"}
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
                {(() => {
                  const firstPart =
                    i18n.language === "ar"
                      ? t("faqs.content.nationalTransfer.receiving.a2")
                      : t("faqs.content.moneyReception.questions.ra2");
                  const bulletList =
                    i18n.language === "ar"
                      ? t("faqs.content.nationalTransfer.receiving.a2List", {
                          returnObjects: true,
                        })
                      : t("faqs.content.moneyReception.questions.ra2List", {
                          returnObjects: true,
                        });

                  return (
                    <>
                      <p className="mb-2">{firstPart}</p>
                      <ul
                        className={`list-disc ${
                          i18n.language === "ar" ? "pr-5" : "pl-5"
                        }`}
                      >
                        {bulletList.map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </>
                  );
                })()}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون ما هي المدة القصوى لاستلام الأموال؟"
                    : "Vous vous demandez quelle est la durée maximale pour récupérer votre argent ?"}
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
                {i18n.language === "ar"
                  ? t("faqs.content.nationalTransfer.receiving.a3")
                  : t("faqs.content.moneyReception.questions.ra3")}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Transfert d'argent au niveau international */}
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
            {i18n.language === "ar"
              ? "تحويل الأموال على المستوى الدولي"
              : "Transfert d'argent au niveau international"}
          </h2>

          <h3
            className="text-white text-xl font-semibold mb-4"
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
            {i18n.language === "ar" ? "إرسال الأموال" : "Envoi d'argent"}
          </h3>
          <Accordion type="single" collapsible className="space-y-2 mb-6">
            <AccordionItem
              value="int-item-1"
              className="border-white pt-2 pb-2"
            >
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون إذا كان بإمكانكم إرسال المال إلى طفلكم في الخارج عبر بريد كاش؟"
                    : "Vous vous demandez si Barid Cash vous permet d'envoyer de l'argent à votre enfant à l'étranger ?"}
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
                {t("faqs.content.internationalTransfer.sending.a1")}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <h3
            className="text-white text-xl font-semibold mb-4"
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
            {i18n.language === "ar" ? "استلام الأموال" : "Réception d'argent"}
          </h3>
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem
              value="int-item-2"
              className="border-white pt-2 pb-2"
            >
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون كيف تستلمون الأموال التي وصلتك من الخارج؟"
                    : "Vous vous demandez comment récupérer l'argent que vous avez reçu de l'étranger ?"}
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
                {t("faqs.content.internationalTransfer.receiving.a1")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="int-item-3"
              className="border-white pt-2 pb-2"
            >
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون بأي عملة ستستلمون التحويل؟"
                    : "Vous vous demandez dans quelle devise vous allez recevoir votre transfert ?"}
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
                {t("faqs.content.internationalTransfer.receiving.a2")}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Change de devises */}
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
            {i18n.language === "ar"
              ? "تبادل العملات الأجنبية"
              : "Change de devises"}
          </h2>

          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="change-1" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل ترغبون في تحويل الدرهم المغربي إلى عملات أجنبية، وتتساءلون في أي وكالة يجب أن تذهبوا؟"
                    : "Vous souhaitez faire le change de Dirhams Marocains en devises étrangères, et vous vous demandez dans quelle agence vous rendre ?"}
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
                {i18n.language === "ar" ? (
                  <>
                    <p>صرف العملات متوفر في العديد من وكالات بريد كاش.</p>
                    <div className="mt-4">
                      <Link to="/nos-points-de-vente">
                        <button className="bg-[#F27D30] text-white px-6 py-3 rounded-lg text-sm hover:bg-[#E26A20] transition-colors font-medium">
                          اكتشفوا أقرب وكالة
                        </button>
                      </Link>
                    </div>
                    <p className="mt-2">
                      أو اتصلوا بخدمة العملاء على{" "}
                      <span className="phone-number">06 99 34 15 71</span>
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Le change de devises est disponible dans de nombreuses
                      agences Barid Cash.
                    </p>
                    <div className="mt-4">
                      <Link to="/nos-points-de-vente">
                        <button className="bg-[#F27D30] text-white px-6 py-3 rounded-lg text-sm hover:bg-[#E26A20] transition-colors font-medium">
                          Découvrez l'agence la plus proche
                        </button>
                      </Link>
                    </div>
                    <p className="mt-2">
                      ou contactez notre service client au{" "}
                      <span className="phone-number">06 99 34 15 71</span>
                    </p>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="change-2" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل ترغبون في تحويل العملات الأجنبية إلى الدرهم المغربي، ما هي وثائق الهوية المطلوبة؟"
                    : "Vous souhaitez faire le change de devises étrangères en Dirham Marocain, quelles sont les pièces d'identité qu'il vous faut ?"}
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
                {i18n.language === "ar"
                  ? "لإجراء صرف العملة الأجنبية بالدرهم المغربي، يجب أن تكونوا حاملين لجواز سفركم الساري المفعول."
                  : "Pour effectuer votre change de monnaie étrangère en Dirham Marocain, vous devez être muni de votre passeport en cours de validité."}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="change-3" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل ترغبون في تحويل الدرهم المغربي إلى عملات أجنبية، ما هي وثائق الهوية المطلوبة؟"
                    : "Vous souhaitez faire le change de Dirham Marocain en devises, quelles sont les pièces d'identité qu'il vous faut ?"}
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
                {i18n.language === "ar"
                  ? "الوثائق المطلوبة هي جواز السفر وبطاقة الهوية الوطنية."
                  : "Les pièces à présenter sont le passeport et la CIN."}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Types de comptes */}
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
            {i18n.language === "ar" ? "أنواع الحسابات" : "Types de comptes"}
          </h2>

          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="compte-1" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون من يمكنه فتح حساب لدى بريد كاش؟"
                    : "Vous vous demandez qui peut avoir un compte Barid Cash ?"}
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
                {i18n.language === "ar" ? (
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold">
                        {t(
                          "nosComptesDePaiements.process.faq.whoCanHaveAccount.malyAndMalyUp.title"
                        )}
                      </p>
                      {(() => {
                        const text = t(
                          "nosComptesDePaiements.process.faq.whoCanHaveAccount.malyAndMalyUp.description"
                        );
                        if (text.includes("•")) {
                          const items = text
                            .split("•")
                            .filter((item) => item.trim());
                          return (
                            <ul
                              className={`list-disc ${
                                i18n.language === "ar" ? "pr-5" : "pl-5"
                              }`}
                            >
                              {items.map((item, index) => (
                                <li key={index}>{item.trim()}</li>
                              ))}
                            </ul>
                          );
                        }
                        return <p>{text}</p>;
                      })()}
                    </div>
                    <div>
                      <p className="font-semibold">
                        {t(
                          "nosComptesDePaiements.process.faq.whoCanHaveAccount.malyPlus.title"
                        )}
                      </p>
                      <ul
                        className={`list-disc ${
                          i18n.language === "ar" ? "pr-5" : "pl-5"
                        }`}
                      >
                        {t(
                          "nosComptesDePaiements.process.faq.whoCanHaveAccount.malyPlus.requirements",
                          { returnObjects: true }
                        ).map((req: string, index: number) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                      <p className="mt-2 font-semibold">
                        {t(
                          "nosComptesDePaiements.process.faq.whoCanHaveAccount.malyPlus.documentsTitle"
                        )}
                      </p>
                      {(() => {
                        const text = t(
                          "nosComptesDePaiements.process.faq.whoCanHaveAccount.malyPlus.description"
                        );
                        if (text.includes("•")) {
                          const items = text
                            .split("•")
                            .filter((item) => item.trim());
                          return (
                            <ul
                              className={`list-disc ${
                                i18n.language === "ar" ? "pr-5" : "pl-5"
                              }`}
                            >
                              {items.map((item, index) => (
                                <li key={index}>{item.trim()}</li>
                              ))}
                            </ul>
                          );
                        }
                        return <p>{text}</p>;
                      })()}
                    </div>
                    <div>
                      <p className="font-semibold">
                        {t(
                          "nosComptesDePaiements.process.faq.whoCanHaveAccount.malyPremium.title"
                        )}
                      </p>
                      <ul
                        className={`list-disc ${
                          i18n.language === "ar" ? "pr-5" : "pl-5"
                        }`}
                      >
                        {t(
                          "nosComptesDePaiements.process.faq.whoCanHaveAccount.malyPremium.requirements",
                          { returnObjects: true }
                        ).map((req: string, index: number) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                      <p className="mt-2 font-semibold">
                        {t(
                          "nosComptesDePaiements.process.faq.whoCanHaveAccount.malyPremium.documentsTitle"
                        )}
                      </p>
                      <p className="font-semibold">
                        {i18n.language === "ar"
                          ? "للمغاربة:"
                          : "Pour les marocains :"}
                      </p>
                      {(() => {
                        const text = t(
                          "nosComptesDePaiements.process.faq.whoCanHaveAccount.malyPremium.moroccans"
                        );
                        if (text.includes("•")) {
                          const items = text
                            .split("•")
                            .filter((item) => item.trim());
                          return (
                            <ul
                              className={`list-disc ${
                                i18n.language === "ar" ? "pr-5" : "pl-5"
                              } mb-3`}
                            >
                              {items.map((item, index) => (
                                <li key={index}>{item.trim()}</li>
                              ))}
                            </ul>
                          );
                        }
                        return <p className="mb-3">{text}</p>;
                      })()}
                      <p className="font-semibold">
                        {i18n.language === "ar"
                          ? "للأجانب:"
                          : "Pour les étrangers :"}
                      </p>
                      {(() => {
                        const text = t(
                          "nosComptesDePaiements.process.faq.whoCanHaveAccount.malyPremium.foreigners"
                        );
                        if (text.includes("•")) {
                          const items = text
                            .split("•")
                            .filter((item) => item.trim());
                          return (
                            <ul
                              className={`list-disc ${
                                i18n.language === "ar" ? "pr-5" : "pl-5"
                              }`}
                            >
                              {items.map((item, index) => (
                                <li key={index}>{item.trim()}</li>
                              ))}
                            </ul>
                          );
                        }
                        return <p>{text}</p>;
                      })()}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold">
                        Pour les comptes Maly et Maly UP :
                      </p>
                      <p>
                        Toute personne disposant d'un numéro de téléphone valide
                        et d'une carte d'identité nationale en cours de
                        validité.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">Pour le compte Maly + :</p>
                      <ul
                        className={`list-disc ${
                          i18n.language === "ar" ? "pr-5" : "pl-5"
                        }`}
                      >
                        <li>Être âgé(e) d'au moins 18 ans</li>
                        <li>Avoir un numéro de téléphone valide</li>
                      </ul>
                      <p className="mt-2 font-semibold">Documents requis :</p>
                      <p>
                        Pour les marocains : La carte d'identité nationale en
                        cours de validité.
                      </p>
                      <p>
                        Pour les étrangers : Le passeport ou la carte de séjour
                        en cours de validité.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">
                        Pour le compte Maly Premium :
                      </p>
                      <ul
                        className={`list-disc ${
                          i18n.language === "ar" ? "pr-5" : "pl-5"
                        }`}
                      >
                        <li>Être âgé(e) d'au moins 18 ans</li>
                        <li>Avoir un numéro de téléphone valide</li>
                      </ul>
                      <p className="mt-2 font-semibold">Documents requis :</p>
                      <p>Pour les marocains :</p>
                      <ul
                        className={`list-disc ${
                          i18n.language === "ar" ? "pr-5" : "pl-5"
                        }`}
                      >
                        <li>
                          La carte d'identité nationale en cours de validité
                        </li>
                        <li>
                          Un justificatif de domicile (quittance d'électricité…)
                        </li>
                      </ul>
                      <p>Pour les étrangers :</p>
                      <ul
                        className={`list-disc ${
                          i18n.language === "ar" ? "pr-5" : "pl-5"
                        }`}
                      >
                        <li>
                          Le passeport ou la carte de séjour en cours de
                          validité
                        </li>
                        <li>
                          Un justificatif de domicile (quittance d'électricité…)
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="compte-2" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "كيفية فتح حساب دفع"
                    : "Vous vous demandez comment ouvrir un compte de paiement ?"}
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
                {i18n.language === "ar" ? (
                  <>
                    {(() => {
                      const text = t(
                        "nosComptesDePaiements.process.faq.howToOpenAccount.answer"
                      );
                      if (text.includes("•")) {
                        const items = text
                          .split("•")
                          .filter((item) => item.trim());
                        return (
                          <ul
                            className={`list-disc ${
                              i18n.language === "ar" ? "pr-5" : "pl-5"
                            }`}
                          >
                            {items.map((item, index) => (
                              <li key={index}>{item.trim()}</li>
                            ))}
                          </ul>
                        );
                      }
                      return <div className="whitespace-pre-line">{text}</div>;
                    })()}
                  </>
                ) : (
                  <>
                    <p className="mb-2">
                      Vous pouvez ouvrir un compte de la manière suivante :
                    </p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      }`}
                    >
                      <li>
                        <strong>Comptes Maly et Maly UP :</strong> L'ouverture
                        du compte peut se faire directement à travers le
                        téléchargement de l'application via Play store ou Apple
                        store
                      </li>
                      <li>
                        <strong>Compte Maly + :</strong> Il vous suffit de vous
                        rendre à l'agence Barid Cash la plus proche de chez
                        vous, muni de votre carte d'identité en cours de
                        validité, ou passeport si vous êtes étranger résidant au
                        Maroc
                      </li>
                      <li>
                        <strong>Compte Maly Premium :</strong> Il vous suffit de
                        vous rendre à l'agence Barid Cash la plus proche de chez
                        vous, muni de votre carte d'identité en cours de
                        validité, ou de votre passeport pour les étrangers
                        résidants au Maroc ainsi que d'un justificatif de
                        domicile
                      </li>
                    </ul>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="compte-3" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "ما هو الحد الأدنى لفتح حساب؟"
                    : "Vous vous demandez quel est le montant minimum pour ouvrir un compte de paiement ?"}
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
                {i18n.language === "ar"
                  ? "لا يوجد حد أدنى، وفتح الحساب مجاني بالكامل."
                  : "Il n'y a pas de minimum et l'ouverture de compte est gratuite."}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="compte-4" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "ما هي رسوم تسيير الحساب؟"
                    : "Vous vous demandez quels sont les frais de tenue de compte ?"}
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
                {i18n.language === "ar"
                  ? "لا توجد أية رسوم على تسيير الحساب."
                  : "Il n'y a aucun frais de tenue de compte."}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="compte-5" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "ما هي العمليات التي يمكنكم القيام بها من خلال حسابكم؟"
                    : "Vous vous demandez quelles opérations d'émission vous pouvez effectuer depuis votre compte ?"}
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
                {i18n.language === "ar" ? (
                  <>
                    <p>يتيح لكم حسابكم إرسال الأموال إلى:</p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      }`}
                    >
                      <li>حساب دفع بريد كاش</li>
                      <li>حساب دفع تابع لشركة أخرى</li>
                      <li>حساب بنكي تابع لشركة أخرى</li>
                      <li>وكالة بريد كاش</li>
                      <li>صراف آلي</li>
                    </ul>
                  </>
                ) : (
                  <>
                    <p>Votre compte vous permet d'envoyer de l'argent vers :</p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      }`}
                    >
                      <li>Un compte de paiement Barid Cash</li>
                      <li>Un compte de paiement confrère</li>
                      <li>Un compte bancaire confrère</li>
                      <li>Une agence Barid Cash</li>
                      <li>Un guichet automatique</li>
                    </ul>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="compte-6" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "ما الذي يتيحه لكم حساب الدفع الخاص بكم؟"
                    : "Vous vous demandez qu'est-ce que vous permet votre compte de paiement ?"}
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
                {i18n.language === "ar" ? (
                  <>
                    <p>مع حساب دفع بريد كاش، يمكنكم:</p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      }`}
                    >
                      <li>إجراء التحويلات المالية</li>
                      <li>استلام الأموال على حسابكم</li>
                      <li>الحصول على بطاقة إلكترونية (بطاقة دفع إلكترونية)</li>
                      <li>الحصول على رقم الحساب البنكي الدولي (IBAN)</li>
                    </ul>
                  </>
                ) : (
                  <>
                    <p>
                      Avec votre compte de paiement Barid Cash vous pouvez :
                    </p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      }`}
                    >
                      <li>Effectuer des virements</li>
                      <li>Recevoir de l'argent sur votre compte</li>
                      <li>Disposer d'une carte monétique</li>
                      <li>Disposer d'un IBAN</li>
                    </ul>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Carte Monétique */}
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
            {i18n.language === "ar"
              ? "بطاقة الدفع الإلكترونية"
              : "Carte Monétique"}
          </h2>

          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="carte-1" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون أين يمكن استخدام بطاقتكم؟"
                    : "Vous vous demandez où est utilisable votre carte ?"}
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
                {i18n.language === "ar" ? (
                  <>
                    <p>بطاقة بريد كاش قابلة للاستخدام في:</p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      }`}
                    >
                      <li>
                        السحب من أجهزة الصراف الآلي الخاصة بـ بريد بنك وكذلك
                        أجهزة الصراف الآلي التابعة للبنوك الأخرى.
                      </li>
                      <li>
                        الدفع لدى التجار المزودين بأجهزة نقاط البيع (TPE).
                      </li>
                      <li>
                        الدفع الإلكتروني لعمليات الشراء عبر الإنترنت داخل
                        المغرب.
                      </li>
                    </ul>
                  </>
                ) : (
                  <>
                    <p>La carte de Barid Cash est utilisable :</p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      }`}
                    >
                      <li>
                        Pour le retrait dans les guichets automatiques Al Barid
                        Bank et dans les guichets automatiques confrères
                      </li>
                      <li>
                        Pour le règlement chez les commerçants équipés de TPE
                      </li>
                      <li>
                        Pour le règlement des achats sur internet au Maroc
                      </li>
                    </ul>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="carte-2" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون كم من الوقت يستغرق تحضير بطاقة الدفع الخاصة بكم؟"
                    : "Vous vous demandez combien de temps faut-il pour que votre carte monétique soit prête ?"}
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
                {i18n.language === "ar"
                  ? "البطاقة متوفرة فورًا في وكالة بريد كاش عند فتح الحساب."
                  : "La carte est disponible immédiatement en agence Barid Cash lors de l'ouverture de votre compte."}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* M-Wallet Barid Pay */}
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
            {i18n.language === "ar"
              ? "المحفظة الإلكترونية – تطبيق Barid Pay"
              : "M-Wallet Barid Pay"}
          </h2>

          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="wallet-1" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون كيف تقومون بتحميل تطبيق Barid Pay؟"
                    : "Vous vous demandez comment télécharger l'application Barid Pay ?"}
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
                {i18n.language === "ar"
                  ? "يمكن تحميل تطبيق Barid Pay من خلال متجر بلاي ستور أو آب ستور."
                  : "L'application Barid Pay est téléchargeable via Play Store et Apple Store."}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="wallet-2" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون ما هي ميزات تطبيق Barid Pay؟"
                    : "Vous vous demandez ce que vous permet l'application Barid Pay ?"}
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
                {i18n.language === "ar" ? (
                  <>
                    <p className="mb-2">
                      بفضل تطبيق بريد پاي، يمكنكم فتح حساب مالي ومالي-آب مباشرة
                      من هاتفكم.
                    </p>
                    <p className="mb-2">
                      أما بالنسبة لحسابات مالي + ومالي بريميوم، فيجب التوجه إلى
                      أقرب وكالة مرفوقين بالوثائق المطلوبة.
                    </p>
                    <p className="mb-2">
                      للمزيد من المعلومات،{" "}
                      <Link
                        to="/types-de-comptes"
                        className="text-[#F27D30] underline hover:text-[#E26A20]"
                      >
                        اضغط هنا!
                      </Link>
                    </p>
                  </>
                ) : (
                  <>
                    <p className="mb-2">
                      Grâce à l'application Barid Pay vous pouvez :
                    </p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      }`}
                    >
                      <li>
                        Ouvrir un compte Maly ou Maly UP depuis votre téléphone
                      </li>
                      <li>
                        Pour les comptes Maly + et Maly Premium, vous rendre en
                        agence muni des pièces justificatives nécessaires
                      </li>
                    </ul>
                    <p className="mt-2">
                      Pour plus d'informations{" "}
                      <Link
                        to="/types-de-comptes"
                        className="text-[#F27D30] underline hover:text-[#E26A20]"
                      >
                        cliquez ici !
                      </Link>
                    </p>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="wallet-3" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون كيف تقومون بتفعيل تطبيق Barid Pay؟"
                    : "Vous vous demandez comment activer votre application Barid Pay ?"}
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
                {i18n.language === "ar" ? (
                  <>
                    <p>الأمر بسيط، يكفي:</p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      } mb-4`}
                    >
                      <li>
                        تحميل تطبيق Barid Pay من أحد متاجر التطبيقات بلاي ستور
                        أو آب ستور.
                      </li>
                      <li>
                        الدخول إلى التطبيق عبر خيار "عميل جديد" وملء نموذج
                        الاشتراك.
                      </li>
                      <li>
                        تفعيل الحساب بإدخال رمز التفعيل الذي سيرسله لكم بريد كاش
                        عبر رسالة نصية.
                      </li>
                    </ul>
                    <p>
                      بالنسبة لحسابي Maly + و Maly Premium، يكفي التوجه إلى أقرب
                      وكالة مع بطاقة الهوية الوطنية السارية ورقم الهاتف المحمول.
                    </p>
                    <a
                      href="https://web.facebook.com/share/v/1FvRUsmWaF/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-[#F27D30] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#E26A20] transition-colors font-medium">
                        شاهد الشرح
                      </button>
                    </a>
                  </>
                ) : (
                  <>
                    <p>C'est simple, il vous suffit de :</p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      } mb-4`}
                    >
                      <li>
                        Télécharger l'application Barid Pay depuis l'une des
                        plateformes de téléchargement Play Store ou Apple Store
                      </li>
                      <li>
                        D'accéder à l'application à travers l'onglet nouveau
                        client et de renseigner le formulaire de souscription
                      </li>
                      <li>
                        Activer votre compte en saisissant le code d'activation
                        que Barid Cash vous enverra par SMS. Pour les comptes
                        Maly + et Maly Premium, il vous suffira de vous rendre à
                        l'agence la plus proche de chez vous muni de votre carte
                        d'identité en cours de validité et de votre téléphone
                        mobile
                      </li>
                    </ul>
                    <a
                      href="https://web.facebook.com/share/v/1FvRUsmWaF/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-[#F27D30] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#E26A20] transition-colors font-medium">
                        En savoir plus
                      </button>
                    </a>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="wallet-4" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون ماذا يحدث في حال تغيير الهاتف الذكي؟"
                    : "Vous vous demandez ce qui se passe en cas de changement de smartphone ?"}
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
                {i18n.language === "ar"
                  ? "إذا قمتم بتغيير هاتفكم المحمول دون تغيير رقم الهاتف، يكفي تفعيل تطبيق Barid Pay على الهاتف الجديد بإدخال اسم المستخدم وكلمة المرور."
                  : "Si vous changez de téléphone portable, sans changer de numéro de téléphone, il vous suffira d'activer l'application Barid Pay sur votre nouveau téléphone en saisissant votre identifiant et votre mot de passe."}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="wallet-5" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون كيف يمكنكم تغذية حسابكم؟"
                    : "Vous vous demandez comment alimenter votre compte ?"}
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
                {i18n.language === "ar" ? (
                  <>
                    <p>يمكنكم تغذية حسابكم عن طريق:</p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      }`}
                    >
                      <li>
                        الإيداع في أقرب وكالة بريد كاش أو عند وكيل معتمد لشركاء
                        بريد كاش؛
                      </li>
                      <li>تغذية الحساب من حساب بنكي آخر؛</li>
                      <li>استلام أموال من حساب دفع تابع لشركة أخرى؛</li>
                      <li>استلام أموال عبر تحويل بنكي.</li>
                    </ul>
                  </>
                ) : (
                  <>
                    <p>Vous pouvez alimenter votre compte en :</p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      }`}
                    >
                      <li>
                        Faisant un dépôt au sein de l'agence Barid Cash la plus
                        proche de chez vous ou auprès d'un agent agréé
                        partenaire Barid Cash
                      </li>
                      <li>
                        Alimentant votre compte depuis un autre compte bancaire
                      </li>
                      <li>
                        Recevant de l'argent d'un compte de paiement confrère
                      </li>
                      <li>
                        Recevant de l'argent à travers un virement bancaire
                      </li>
                    </ul>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="wallet-6" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون كيف يمكنكم سحب الأموال من حسابكم؟"
                    : "Vous vous demandez comment retirer de l'argent de votre compte ?"}
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
                {i18n.language === "ar" ? (
                  <>
                    <p>يمكن سحب الأموال بعدة طرق:</p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      }`}
                    >
                      <li>
                        سحب نقدي من الوكالة أو عبر وكيل معتمد من بريد كاش؛
                      </li>
                      <li>طلب صرف الأموال عبر التطبيق؛</li>
                      <li>السحب بواسطة البطاقة من أجهزة الصراف الآلي.</li>
                    </ul>
                  </>
                ) : (
                  <>
                    <p>
                      Vous pouvez retirer de l'argent de votre compte de
                      différentes manières :
                    </p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      }`}
                    >
                      <li>
                        En faisant un retrait en agence ou auprès d'un agent
                        partenaire Barid Cash
                      </li>
                      <li>
                        En faisant une mise à disposition depuis l'application
                      </li>
                      <li>
                        En faisant un retrait par carte depuis un guichet
                        automatique
                      </li>
                    </ul>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="wallet-7" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون ماذا تفعلون في حال فقدان رقم الهاتف المرتبط بحسابكم؟"
                    : "Vous vous demandez ce que vous devez faire en cas de perte du numéro de téléphone associé à votre compte ?"}
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
                {i18n.language === "ar"
                  ? "في حال فقدان رقم الهاتف المرتبط بحسابكم، ندعوكم إلى التوجه إلى أقرب وكالة بريد كاش لتحديث رقم الهاتف الجديد."
                  : "En cas de perte du numéro de téléphone associé à votre compte nous vous invitons à vous rendre à l'agence Barid Cash la plus proche de chez vous afin de communiquer votre nouveau numéro de téléphone."}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="wallet-8" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تحتاجون للمساعدة وتتساءلون كيف تحصلون عليها؟"
                    : "Vous avez besoin d'assistance et vous vous demandez comment faire ?"}
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
                {i18n.language === "ar" ? (
                  <>
                    إذا كانت لديكم أي أسئلة أو شكاوى، يمكنكم زيارة مركز الدعم
                    عبر الضغط{" "}
                    <Link
                      to="/assistance-client"
                      className="text-[#F27D30] underline hover:text-[#E26A20]"
                    >
                      هنا
                    </Link>{" "}
                    أو الاتصال على الرقم: 0699341571.
                  </>
                ) : (
                  <>
                    Si vous avez une question ou une réclamation vous pouvez
                    consulter le centre d'aide, en{" "}
                    <Link
                      to="/assistance-client"
                      className="text-[#F27D30] underline hover:text-[#E26A20]"
                    >
                      cliquant ici
                    </Link>{" "}
                    ou en appelant le 0699341571.
                  </>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* E-timbre */}
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
            {i18n.language === "ar" ? "الطابع الإلكترونيE-timbre" : "E-timbre"}
          </h2>

          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="etimbre-1" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون أين يمكنكم دفع الطابع الإلكتروني؟"
                    : "Vous vous demandez où est ce que vous pouvez payer votre E-timbre ?"}
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
                {i18n.language === "ar" ? (
                  <>
                    <p>يمكنكم دفع الطابع الإلكتروني في وكالة بريد كاش.</p>
                    <div className="mt-4">
                      <Link to="/nos-points-de-vente">
                        <button className="bg-[#F27D30] text-white px-6 py-3 rounded-lg text-sm hover:bg-[#E26A20] transition-colors font-medium">
                          اكتشف الوكالة الأقرب إليك
                        </button>
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <p>
                      Vous pouvez payer votre E-timbre en agence Barid Cash.
                    </p>
                    <div className="mt-4">
                      <Link to="/nos-points-de-vente">
                        <button className="bg-[#F27D30] text-white px-6 py-3 rounded-lg text-sm hover:bg-[#E26A20] transition-colors font-medium">
                          Découvrez l'agence la plus proche
                        </button>
                      </Link>
                    </div>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="etimbre-2" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون ما هي الوثائق المطلوبة؟"
                    : "Vous vous demandez quelles sont les pièces à fournir ?"}
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
                {i18n.language === "ar"
                  ? "يكفي أن تتوجهوا إلى وكالة بريد كاش مع رقم المرجع للدفع."
                  : "Il vous suffit de vous présenter à l'agence Barid Cash muni de votre référence de paiement."}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="etimbre-3" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون كم يجب عليكم الدفع؟"
                    : "Vous vous demandez combien vous devez payer ?"}
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
                {i18n.language === "ar" ? (
                  <ul
                    className={`list-disc ${
                      i18n.language === "ar" ? "pr-5" : "pl-5"
                    }`}
                  >
                    <li>جواز السفر: 500 درهم مغربي</li>
                    <li>رخصة حمل السلاح: 300 درهم مغربي</li>
                    <li>الرخصة الدولية: 300 درهم مغربي</li>
                    <li>رخصة الصيد: 200 درهم مغربي</li>
                  </ul>
                ) : (
                  <ul
                    className={`list-disc ${
                      i18n.language === "ar" ? "pr-5" : "pl-5"
                    }`}
                  >
                    <li>Passeport : 500 Dirhams marocains</li>
                    <li>Permis port d'arme : 300 Dirhams marocains</li>
                    <li>Permis international : 300 Dirhams marocains</li>
                    <li>Permis de chasse : 200 Dirhams marocains</li>
                  </ul>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Rokhas */}
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
            {i18n.language === "ar" ? "منصة رخصRokhas" : "Rokhas"}
          </h2>

          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="rokhas-1" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون ما هي منصة رخص ؟"
                    : "Vous vous demandez qu'est-ce que la plateforme ROKHAS ?"}
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
                {i18n.language === "ar"
                  ? "تمكّن منصة Rokhas.ma كل شخص طبيعي أو معنوي من تقديم طلب الترخيص الاقتصادي، دفع الرسوم في وكالات بريد كاش، ومتابعة حالة الطلب إلكترونياً."
                  : "La plateforme Rokhas.ma permet à toute personne physique ou morale de déposer sa demande d'autorisation économique, de régler la prestation au niveau des agences Barid Cash et de suivre en ligne l'état d'avancement de son dossier."}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="rokhas-2" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون أين يمكنكم دفع رسوم منتجات رخص ؟"
                    : "Vous vous demandez où est ce que vous pouvez payer vos produits Rokhas ?"}
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
                {i18n.language === "ar" ? (
                  <>
                    <p>يمكنكم دفع رسوم منتجات رخص في وكالة بريد كاش.</p>
                    <div className="mt-4">
                      <Link to="/nos-points-de-vente">
                        <button className="bg-[#F27D30] text-white px-6 py-3 rounded-lg text-sm hover:bg-[#E26A20] transition-colors font-medium">
                          اكتشف الوكالة الأقرب إليك
                        </button>
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <p>
                      Vous pouvez payer vos produits Rokhas en agence Barid
                      Cash.
                    </p>
                    <div className="mt-4">
                      <Link to="/nos-points-de-vente">
                        <button className="bg-[#F27D30] text-white px-6 py-3 rounded-lg text-sm hover:bg-[#E26A20] transition-colors font-medium">
                          Découvrez l'agence la plus proche
                        </button>
                      </Link>
                    </div>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="rokhas-3" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون ما هي الوثائق المطلوبة؟"
                    : "Vous vous demandez quelles sont les pièces à fournir ?"}
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
                {i18n.language === "ar" ? (
                  <>
                    <p>يكفي التوجه إلى وكالة بريد كاش مع:</p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      }`}
                    >
                      <li>بطاقة الهوية الوطنية السارية</li>
                      <li>إشعار رخص</li>
                    </ul>
                  </>
                ) : (
                  <>
                    <p>
                      Il vous suffit de vous présenter à l'agence Barid Cash
                      muni :
                    </p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      }`}
                    >
                      <li>
                        De votre carte d'identité nationale en cours de validité
                      </li>
                      <li>De l'avis Rokhas</li>
                    </ul>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Services NARSA */}
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
            {i18n.language === "ar" ? "خدمات نارسا" : "Services NARSA"}
          </h2>

          <h3
            className="text-white text-xl font-semibold mb-4"
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
            {i18n.language === "ar" ? "رخصة السياقة" : "Permis de conduire"}
          </h3>
          <Accordion type="single" collapsible className="space-y-2 mb-6">
            <AccordionItem value="permis-1" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون ما هو هذا الخدمة؟"
                    : "Vous vous demandez en quoi consiste ce service ?"}
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
                {i18n.language === "ar" ? (
                  <>
                    <p>
                      تمكنكم هذه الخدمة من تجديد رخصة السياقة أو طلب نسخة بدل
                      فاقد مباشرة من وكالة بريد كاش في الحالات التالية:
                    </p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      }`}
                    >
                      <li>تلف رخصة السياقة</li>
                      <li>انتهاء صلاحية رخصة السياقة</li>
                    </ul>
                  </>
                ) : (
                  <>
                    <p>
                      Ce service vous permet renouveler votre permis de conduire
                      ou de demander un duplicata directement en agence Barid
                      Cash en cas de :
                    </p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      }`}
                    >
                      <li>Détérioration de votre permis de conduire.</li>
                      <li>D'expiration de votre permis de conduire.</li>
                    </ul>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="permis-2" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون ما هو مبلغ التجديد؟"
                    : "Vous vous demandez quel est le montant à payer afin de renouveler votre permis de conduire ?"}
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
                {i18n.language === "ar"
                  ? "مبلغ تجديد رخصة السياقة هو 415 درهم."
                  : "Le montant de renouvellement du permis de conduire est de 415 DHS."}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="permis-3" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون ما هو مبلغ طلب نسخة بدل فاقد؟"
                    : "Vous vous demandez quel est le montant à payer afin de demander un duplicata de votre permis de conduire ?"}
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
                {i18n.language === "ar"
                  ? "مبلغ طلب نسخة بدل فاقد هو 415 درهم."
                  : "Le montant afin d'effectuer le duplicata de votre permis de conduire est de 415 DHS."}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <h3
            className="text-white text-xl font-semibold mb-4"
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
            {i18n.language === "ar" ? "البطاقة الرمادية" : "Carte grise"}
          </h3>
          <Accordion type="single" collapsible className="space-y-2 mb-6">
            <AccordionItem
              value="carte-grise-1"
              className="border-white pt-2 pb-2"
            >
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون ما هو هذا الخدمة؟"
                    : "Vous vous demandez en quoi consiste ce service ?"}
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
                {i18n.language === "ar" ? (
                  <>
                    <p>تمكنكم هذه الخدمة من تجديد البطاقة الرمادية في حالات:</p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      }`}
                    >
                      <li>تلف البطاقة الرمادية</li>
                      <li>انتهاء صلاحية البطاقة الرمادية</li>
                      <li>رفع الحجز في حالة تصفية القرض</li>
                      <li>تغيير هوية حامل البطاقة الرمادية</li>
                      <li>فقدان أو سرقة البطاقة الرمادية</li>
                    </ul>
                  </>
                ) : (
                  <>
                    <p>
                      Ce service vous permet de renouveler votre carte grise en
                      cas de :
                    </p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      }`}
                    >
                      <li>Détérioration de la carte grise</li>
                      <li>D'expiration de la carte grise</li>
                      <li>Mainlevée en cas de liquidation de crédit</li>
                      <li>
                        Changement d'identité du titulaire de la carte grise
                      </li>
                      <li>Perte ou vol de la carte grise</li>
                    </ul>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="carte-grise-2"
              className="border-white pt-2 pb-2"
            >
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون ما هو مبلغ التجديد؟"
                    : "Vous vous demandez quel est le montant à payer afin de renouveler votre carte grise ?"}
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
                {i18n.language === "ar"
                  ? "مبلغ التجديد هو 305 دراهم لدى المديرية العامة للضرائب."
                  : "Le montant à payer est de 305 DHS au niveau de la Direction Générale des Impôts."}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="carte-grise-3"
              className="border-white pt-2 pb-2"
            >
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون ما هو مبلغ طلب نسخة بدل فاقد؟"
                    : "Vous vous demandez quel est le montant à payer afin d'effectuer un duplicata de votre carte grise ?"}
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
                {i18n.language === "ar"
                  ? "مبلغ طلب نسخة بدل فاقد هو 305 دراهم لدى المديرية العامة للضرائب."
                  : "Le montant à payer est de 305 DHS au niveau de la Direction Générale des Impôts."}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <h3
            className="text-white text-xl font-semibold mb-4"
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
            {i18n.language === "ar"
              ? "الشكاوى ضد المخالفات"
              : "Réclamations aux infractions"}
          </h3>
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem
              value="reclamations-1"
              className="border-white pt-2 pb-2"
            >
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون ما هي الأسباب التي يمكنكم بناءً عليها طلب إلغاء المخالفة؟"
                    : "Vous vous demandez quels sont les motifs pour lesquels vous pouvez demander l'annulation de la contravention ?"}
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
                {i18n.language === "ar" ? (
                  <>
                    <p>
                      يمكن لمتلقي إشعار المخالفة طلب إلغاء المخالفة لأحد الأسباب
                      التالية:
                    </p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      }`}
                    >
                      <li>الاستخدام غير المشروع لرقم لوحة تسجيل السيارة.</li>
                      <li>
                        السيارة تم الإعلان عنها مسروقة قبل تاريخ تسجيل المخالفة.
                      </li>
                      <li>السيارة في مهمة طارئة.</li>
                    </ul>
                  </>
                ) : (
                  <>
                    <p>
                      Le destinataire de l'avis de contravention peut demander
                      l'annulation de l'infraction pour l'un des motifs suivants
                      :
                    </p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      }`}
                    >
                      <li>
                        Utilisation abusive du numéro de la plaque
                        d'immatriculation du véhicule.
                      </li>
                      <li>
                        Véhicule déclaré volé avant la date de la constatation
                        de l'infraction.
                      </li>
                      <li>Véhicule en mission d'urgence.</li>
                    </ul>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Services CNSS */}
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
            {i18n.language === "ar"
              ? "خدمة الصندوق الوطني للضمان الاجتماعي"
              : "Services CNSS"}
          </h2>

          <h3
            className="text-white text-xl font-semibold mb-4"
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
            {i18n.language === "ar" ? "التسجيل" : "Immatriculation"}
          </h3>
          <Accordion type="single" collapsible className="space-y-2 mb-6">
            <AccordionItem value="cnss-1" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون هل أنتم معنيون بهذا التسجيل؟"
                    : "Vous vous demandez si vous êtes concerné par cette immatriculation ?"}
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
                {i18n.language === "ar" ? (
                  <>
                    <p className="mb-2">
                      الأشخاص المعنيون بالتسجيل هم العمال غير الأجراء الخاضعون
                      للمساهمة المهنية الوحيدة (CPU)، وهم: التجار والحرفيون
                      الذين يسيرون حسابات، والمقاولون الذاتيون، والمحترفون
                      (الذين يمارسون مهن حرة) مثل الأطباء، الصيادلة، أطباء
                      الأسنان، الموثقين ، أخصائيي العلاج الطبيعي...
                    </p>
                  </>
                ) : (
                  <>
                    <p className="mb-2">
                      Les travailleurs non-salariés assujettis à la contribution
                      professionnelle unique (CPU) concernés par cette
                      immatriculation sont :
                    </p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      }`}
                    >
                      <li>
                        Les commerçants et artisans tenant une comptabilité
                      </li>
                      <li>Les auto entrepreneurs</li>
                      <li>
                        Les professionnels (exerçant une profession libérale) :
                      </li>
                      <ul
                        className={`list-disc ${
                          i18n.language === "ar" ? "pr-5" : "pl-5"
                        } mt-1`}
                      >
                        <li>Médecins</li>
                        <li>Pharmaciens</li>
                        <li>Dentistes</li>
                        <li>Notaires</li>
                        <li>Sages-femmes</li>
                        <li>Kinésithérapeutes</li>
                      </ul>
                    </ul>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cnss-2" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون ما هي الوثائق المطلوبة للتسجيل في نظام العمال غير الأجراء؟"
                    : "Vous vous demandez quelles sont les pièces à fournir afin de vous inscrire au régime des Travailleurs Non-Salariés ?"}
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
                {i18n.language === "ar" ? (
                  <>
                    <p className="mb-2">
                      توجهوا إلى أقرب وكالة بريد كاش تقدم هذه الخدمة، مع إحضار:
                    </p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      } mb-4`}
                    >
                      <li>
                        بطاقة الهوية الوطنية سارية المفعول أو تصريح الإقامة
                        الساري للأجانب (بطاقة الإقامة أو بطاقة التسجيل)
                      </li>
                      <li>
                        الوثائق التي تثبت الانتماء للفئة المعنية (رخصة مهنية،
                        شهادة...)
                      </li>
                    </ul>
                    <p className="font-semibold mb-2">
                      بالنسبة لإقرار الزوج أو الزوجة:
                    </p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      }`}
                    >
                      <li>
                        نسخة من بطاقة الهوية الوطنية أو تصريح الإقامة الساري
                      </li>
                      <li>نسخة من عقد الزواج</li>
                      <li>للزوج العامل: شهادة عمل أو أي وثيقة تثبت النشاط</li>
                      <li>
                        للزوج غير العامل: تصريح شرفي بعدم النشاط موقع من المؤمن
                        عليه
                      </li>
                      <li>للزوج المطلق: نسخة من وثيقة الطلاق</li>
                      <li>للزوج المتوفى: مستخرج شهادة وفاة</li>
                    </ul>
                  </>
                ) : (
                  <>
                    <p className="mb-2">
                      Rendez-vous en agence Barid Cash qui propose ce service,
                      la plus proche de chez vous, muni de :
                    </p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      } mb-4`}
                    >
                      <li>
                        Votre carte d'identité nationale valide ou votre titre
                        de séjour valide pour les étrangers (carte de résidence
                        ou carte d'immatriculation)
                      </li>
                      <li>
                        Pièces justificatives de l'appartenance à la catégorie
                        concernée (agrément de profession, diplôme…)
                      </li>
                    </ul>
                    <p className="font-semibold mb-2">
                      Pour la déclaration d'un conjoint :
                    </p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      }`}
                    >
                      <li>
                        Copie de la carte d'identité nationale valide ou du
                        titre de séjour valide pour les étrangers (carte de
                        résidence ou carte d'immatriculation)
                      </li>
                      <li>Copie de l'acte de mariage</li>
                      <li>
                        Pour le conjoint actif : attestation de travail ou toute
                        pièce justifiant l'activité
                      </li>
                      <li>
                        Pour le conjoint inactif : déclaration sur l'honneur de
                        non activité signée par l'assuré
                      </li>
                      <li>
                        Pour le conjoint divorcé : copie de l'acte de divorce
                      </li>
                      <li>Pour le conjoint décédé : extrait d'acte de décès</li>
                    </ul>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cnss-3" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون ما هي الوثائق المطلوبة لإدخال ابنكم الذي يقل عمره عن 26 سنة؟"
                    : "Vous vous demandez quelles sont les pièces à fournir afin de déclarer votre enfant âgé de moins de 26 ans ?"}
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
                {i18n.language === "ar" ? (
                  <>
                    <p className="mb-2">
                      توجهوا إلى أقرب وكالة بريد كاش تقدم هذه الخدمة، مع إحضار:
                    </p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      }`}
                    >
                      <li>مستخرج شهادة ميلاد الابن</li>
                      <li>
                        للابن الذي تجاوز عمره 18 سنة: نسخة من بطاقة الهوية
                        الوطنية أو تصريح الإقامة الساري
                      </li>
                      <li>
                        إذا كان الابن يدرس ويتراوح عمره بين 21 و26 سنة: شهادة
                        تسجيل دراسي
                      </li>
                    </ul>
                  </>
                ) : (
                  <>
                    <p className="mb-2">
                      Rendez-vous en agence Barid Cash qui propose ce service,
                      la plus proche de chez vous, muni de :
                    </p>
                    <ul
                      className={`list-disc ${
                        i18n.language === "ar" ? "pr-5" : "pl-5"
                      }`}
                    >
                      <li>L'extrait de l'acte de naissance de votre enfant</li>
                      <li>
                        Pour l'enfant âgé de plus de 18 ans : il vous faudra une
                        copie de sa carte nationale d'identité valide ou de son
                        titre de séjour valide pour un étranger (carte de
                        résidence ou carte d'immatriculation)
                      </li>
                      <li>
                        Si votre enfant est scolarisé et âgé entre 21 et 26 ans
                        : il faudra un certificat de scolarité
                      </li>
                    </ul>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <h3
            className="text-white text-xl font-semibold mb-4"
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
            {i18n.language === "ar" ? "إيداع الملفات" : "Dépôt de dossiers"}
          </h3>
          <Accordion type="single" collapsible className="space-y-2 mb-6">
            <AccordionItem value="depot-1" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون ما هي الملفات الخاصة بـ الصندوق الوطني للضمان الاجتماعي   المقبولة في وكالات بريد كاش؟"
                    : "Vous vous demandez quels sont les dossiers CNSS qui sont recevables chez Barid Cash ?"}
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
                {i18n.language === "ar"
                  ? "الملفات المقبولة هي الملفات التي تقل قيمتها عن 4000 درهم، مثل طلبات تعويضات المرض والطلبات الخاصة بالتعويضات الطبية للأسنان."
                  : "Les dossiers déposables chez Barid Cash sont les dossiers, d'un montant inférieur à 4000 Dhs, de remboursement de maladies et les dossiers de remboursement dentaire."}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="depot-2" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون ما هي الملفات غير المقبولة في وكالات بريد كاش؟"
                    : "Vous vous demandez quels sont les dossiers CNSS qui ne sont pas recevables chez Barid Cash ?"}
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
                {i18n.language === "ar"
                  ? "الملفات التي تزيد قيمتها عن 4000 درهم غير مقبولة، ويجب على المؤمن عليه التوجه مباشرة إلى وكالة الصندوق الوطني للضمان الاجتماعي   ."
                  : "Les dossiers qui ne sont pas recevables sont les dossiers d'un montant supérieur à 4000 Dhs. Pour ces dossiers l'assuré doit se rendre en agence CNSS directement."}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <h3
            className="text-white text-xl font-semibold mb-4"
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
            {i18n.language === "ar" ? "مراقبة الحياة" : "Contrôle vie"}
          </h3>
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem
              value="controle-1"
              className="border-white pt-2 pb-2"
            >
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون من هم الأشخاص المعنيون بمراقبة الحياة؟"
                    : "Vous vous demandez quelles sont les personnes concernées par le contrôle de vie ?"}
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
                {i18n.language === "ar"
                  ? "المعنيون هم المستفيدون من معاشات التقاعد (المسنين) لدى الصندوق الوطني للضمان الاجتماعي   الذين بلغوا السن القانوني للتقاعد."
                  : "Les personnes concernées sont les bénéficiaires des pensions de vieillesse (retraite) de la CNSS ayant atteint l'âge légal de départ en retraite."}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="controle-2"
              className="border-white pt-2 pb-2"
            >
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون متى يجب عليكم القيام بمراقبة الحياة؟"
                    : "Vous vous demandez quand vous devez faire votre contrôle de vie ?"}
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
                {i18n.language === "ar"
                  ? "يجري الصندوق الوطني للضمان الاجتماعي    عملية مراقبة الحياة سنوياً لضمان استمرار صرف المعاشات. يتلقى المعنيون رسالة أو رسالة نصية تدعوهم لإجراء المراقبة."
                  : "L'opération de contrôle de vie est menée chaque année par la CNSS afin d'assurer la continuité du service de la pension. Les personnes concernées reçoivent une lettre ou un SMS de la part de la CNSS les conviant à effectuer leur contrôle de vie."}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="controle-3"
              className="border-white pt-2 pb-2"
            >
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون ما هي الرسوم التي يجب دفعها؟"
                    : "Vous vous demandez quels sont les frais que vous devez payer ?"}
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
                {i18n.language === "ar"
                  ? "المتقاعدون يدفعون رسوم خدمة قدرها 10 دراهم."
                  : "Les pensionnés de la CNSS sont amenés à payer des frais de service de 10 DHS."}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="controle-4"
              className="border-white pt-2 pb-2"
            >
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون ما هي الوثائق المطلوبة؟"
                    : "Vous vous demandez quelles sont les pièces à fournir ?"}
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
                {i18n.language === "ar"
                  ? "يكفي التوجه إلى أقرب وكالة بريد كاش ومعكم بطاقة الهوية الوطنية سارية المفعول."
                  : "Il vous suffit de vous rendre en agence Barid Cash, la plus proche de chez vous, muni de votre carte d'identité nationale en cours de validité."}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Annonces légales */}
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
            {i18n.language === "ar"
              ? "الإعلانات القانونية"
              : "Annonces légales"}
          </h2>

          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem
              value="annonces-1"
              className="border-white pt-2 pb-2"
            >
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون عن المبلغ الذي يجب دفعه؟"
                    : "Vous vous demandez quel est le montant que vous devez payer ?"}
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
                {i18n.language === "ar" ? (
                  <>
                    يتم احتساب التعريفة تلقائيًا حسب نوع الإعلان عبر بوابة
                    الإعلانات القانونية:{" "}
                    <a
                      href="https://www.annonceslegales.gov.ma"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F27D30] underline hover:text-[#E26A20]"
                    >
                      www.annonceslegales.gov.ma
                    </a>
                  </>
                ) : (
                  <>
                    Le tarif à payer est calculé automatiquement en fonction du
                    type d'annonces au niveau du portail des Annonces Légales :{" "}
                    <a
                      href="https://www.annonceslegales.gov.ma"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F27D30] underline hover:text-[#E26A20]"
                    >
                      www.annonceslegales.gov.ma
                    </a>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="annonces-2"
              className="border-white pt-2 pb-2"
            >
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون ما هي الوثائق المطلوبة لأداء مبلغ الإعلان؟"
                    : "Vous vous demandez quels sont les documents nécessaires pour le paiement de votre annonce ?"}
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
                {i18n.language === "ar"
                  ? "يكفي أن تتوجهوا إلى أقرب وكالة لبريد كاش مصحوبين بمرجع الأداء وبطاقة تعريف وطنية سارية المفعول."
                  : "Il vous suffit de vous rendre à l'agence Barid Cash la plus proche de chez vous muni de votre référence de paiement et de votre carte d'identité en cours de validité."}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Barid e-sign */}
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
            {i18n.language === "ar"
              ? "التوقيع الإلكتروني Barid e-sign"
              : "Barid e-sign"}
          </h2>

          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="esign-1" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون كيف يمكنكم التوقيع إلكترونيًا على مستنداتكم؟"
                    : "Vous vous demandez comment signer électroniquement vos documents ?"}
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
                {i18n.language === "ar"
                  ? "الأمر بسيط، ما عليكم سوى إدخال مفتاح USB الخاص بـ BARID E SIGN في الحاسوب، إدخال رمز PIN، ثم تأكيد التوقيع."
                  : "C'est très simple, il vous suffit d'introduire la clé USB BARID E SIGN dans votre ordinateur, de saisir le code PIN associé et de confirmer votre signature."}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Amana */}
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
            {i18n.language === "ar" ? "أمانة" : "Amana"}
          </h2>

          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="amana-1" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون ما هي تعريفة كل منتج؟"
                    : "Vous vous demandez quels sont les tarifs de chaque produit ?"}
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
                {i18n.language === "ar" ? (
                  <p>
                    جميع أسعار منتجاتنا متوفرة عبر النقر{" "}
                    <Link
                      to="/grille-tarifaire"
                      className="text-[#F27D30] underline hover:text-[#E26A20]"
                    >
                      هنا
                    </Link>
                  </p>
                ) : (
                  <p>
                    Vous trouverez l'ensemble des prix de nos produits en{" "}
                    <Link
                      to="/grille-tarifaire"
                      className="text-[#F27D30] underline hover:text-[#E26A20]"
                    >
                      cliquant ici !
                    </Link>
                  </p>
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="amana-2" className="border-white pt-2 pb-2">
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
                  {i18n.language === "ar"
                    ? "هل تتساءلون ما هي أقرب وكالة توفر هذه الخدمة؟"
                    : "Vous vous demandez quelle est l'agence la plus proche de chez vous qui propose ce service ?"}
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
                {i18n.language === "ar" ? (
                  <p>
                    الأمر بسيط، يكفي النقر{" "}
                    <Link
                      to="/nos-points-de-vente"
                      className="text-[#F27D30] underline hover:text-[#E26A20]"
                    >
                      هنا
                    </Link>
                  </p>
                ) : (
                  <p>
                    C'est simple, il vous suffit de{" "}
                    <Link
                      to="/nos-points-de-vente"
                      className="text-[#F27D30] underline hover:text-[#E26A20]"
                    >
                      cliquer ici !
                    </Link>
                  </p>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQPageContent;
