import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const FAQContent: React.FC = () => {
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

        {/* Envoi d'argent / إرسال الأموال */}
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
            {i18n.language === "ar" ? "إرسال الأموال" : "Envoi d'argent"}
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
                  {i18n.language === "ar"
                    ? "تريدون إرسال أموال إلى المغرب، من مدينة إلى أخرى، لكنكم لا تعرفون كيف تفعلون ذلك؟"
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
                {i18n.language === "ar"
                  ? "الأمر بسيط جداً، ما عليكم سوى التوجه إلى أقرب وكالة بريد كاش من منازلكم مع:"
                  : "C'est très simple, il vous suffit de vous rendre à l'agence Barid Cash la plus proche de chez vous avec :"}
                <br />
                {i18n.language === "ar"
                  ? "• بطاقة هوية سارية المفعول"
                  : "• Une carte d'identité en cours de validité"}
                <br />
                {i18n.language === "ar"
                  ? "• اسم ولقب المستفيد، كما هو مذكور في بطاقة هويته الوطنية"
                  : "• Le nom est le prénom du bénéficiaire, tels qu'ils sont indiqués sur sa carte d'identité nationale"}
                <br />
                {i18n.language === "ar"
                  ? "• مدينة وجهة التحويل"
                  : "• La ville de destination du transfert"}
                <br />
                {i18n.language === "ar"
                  ? "• المبلغ الذي تريدون إرساله"
                  : "• Le montrant que vous souhaitez envoyer"}
                <br />
                {i18n.language === "ar"
                  ? "أو يمكنكم إجراء تحويل أموالكم من تطبيق بريد باي."
                  : "Ou bien d'effectuer votre transfert d'argent depuis votre application Barid Pay."}
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
                  {i18n.language === "ar"
                    ? "تتساءلون كيف تعرفون إذا كان المستفيد قد استلم تحويله؟"
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
                {i18n.language === "ar"
                  ? "بريد كاش يتيح لكم:"
                  : "Barid Cash vous permet :"}
                <br />
                {i18n.language === "ar"
                  ? "• إعلام المستفيد برسالة نصية مجانية عن توفر الأموال والرمز المطلوب تقديمه للحصول على الدفع."
                  : "• D'informer le bénéficiaire par SMS de notification, gratuit, de la mise à sa disposition des fonds, et du code à présenter pour se faire payer."}
                <br />
                {i18n.language === "ar"
                  ? "• الإعلام برسالة نصية مجانية بمجرد دفع الأموال للمستفيد."
                  : "• D'être informé par SMS de notification, gratuit, dès que les fonds ont été payés au bénéficiaire."}
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
                    ? "تتساءلون ما هو الحد الأقصى للمبلغ الذي يمكنكم إرساله؟"
                    : "Vous vous demandez quelles est la somme maximale que vous pouvez envoyer ?"}
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
                  ? "وفقاً للوائح المعمول بها، الحد الأقصى للمبلغ الذي يمكنكم إرساله هو 80.000 درهم."
                  : "Selon la réglementation en vigueur, le montant maximum que vous pouvez envoyer est de 80.000 DHS."}
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
                  {i18n.language === "ar"
                    ? "تتساءلون إذا كان من الممكن إلغاء تحويل قيد التنفيذ؟"
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
                {i18n.language === "ar"
                  ? "نعم، هذا ممكن، ما عليكم سوى التوجه إلى أقرب وكالة لإلغاء تحويلكم. إذا تمت معالجة الإلغاء في نفس اليوم داخل الوكالة المرسلة، فستحصلون على استرداد كامل للمبلغ (بدون خصم الرسوم)."
                  : "Oui c'est possible, il suffit de vous présenter à l'agence la plus proche afin d'annuler votre transfert. Si l'annulation est traitée le même jour au sein de l'agence émettrice, vous serez remboursé sur la totalité du montant (sans déduction des frais)."}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Réception d'argent / استلام الأموال */}
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
            {i18n.language === "ar" ? "استلام الأموال" : "Réception d'argent"}
          </h2>

          <Accordion type="single" collapsible className="space-y-2">
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
                    ? "تتساءلون كيف تعرفون إذا كان تحويلكم متاحاً للاستلام؟"
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
                  ? "بمجرد إجراء تحويل الأموال، بناءً على طلب المرسل، يرسل لكم بريد كاش رسالة نصية لإعلامكم بتوفر أموالكم ورمز التحويل المطلوب تقديمه في الوكالة لاستلام أموالكم."
                  : "Une fois que le transfert d'argent a été effectué, à la demande de l'émetteur, Barid Cash vous adresse un SMS afin de vous informer de la disponibilité de votre argent ainsi que du code de transfert à présenter en agence pour récupérer vos fonds."}
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
                    ? "تتساءلون ما هي الوثائق التي يجب تقديمها عند استلام تحويلكم؟"
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
                {i18n.language === "ar"
                  ? "الأمر بسيط جداً، ما عليكم سوى التوجه إلى أقرب وكالة بريد كاش من منازلكم مع:"
                  : "C'est très simple, il vous suffit de vous rendre à l'agence Barid Cash la plus proche de chez vous muni :"}
                <br />
                {i18n.language === "ar"
                  ? "• بطاقة هويتكم السارية المفعول"
                  : "• De votre carte d'identité en cours de validité"}
                <br />
                {i18n.language === "ar"
                  ? "• رمز التحويل"
                  : "• Du code de transfert"}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-white pt-2 pb-2">
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
                    ? "تتساءلون ما هي المدة القصوى لاستلام أموالكم؟"
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
                  ? "يجب عليكم التوجه إلى إحدى وكالات بريد كاش خلال 60 يوماً."
                  : "Vous devez vous présenter dans l'une des agences Barid Cash dans un délai de 60 jours."}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQContent;
