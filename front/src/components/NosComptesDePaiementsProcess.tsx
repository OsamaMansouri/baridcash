import React from "react";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const NosComptesDePaiementsProcess: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <section className="py-16 bg-barid-background">
      <div className="container mx-auto px-4 flex flex-col gap-8 items-center">
        {/* Subsidies and Partners section - separate brown div */}
        <div className="rounded-[1.5rem] bg-[#5A433D] p-8 w-[90%] md:w-[80%] lg:w-[70%] min-w-[300px] text-white">
          {/* Subsidies section */}
          <div className="mb-8">
            <h4 className="text-lg font-bold mb-4">
              {t("nosComptesDePaiements.process.subsidies.title")}
            </h4>
            <p className="text-sm">
              {t("nosComptesDePaiements.process.subsidies.description")}
            </p>
          </div>

          {/* Partner logos section */}
          <div>
            <h4 className="font-bold mb-4">
              {t("nosComptesDePaiements.process.partners.title")}
            </h4>
            <div className="bg-white p-4 rounded-lg">
              <img
                src="/lovable-uploads/9051cdfe-4ad3-46dd-8ac8-8b959da63961.png"
                alt="Nos partenaires - CNOPS, CNSS, Caisse Marocaine des Retraites, CDG"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <h2 className="text-[#5A433D] text-3xl font-bold text-center mb-8">
          {t("nosComptesDePaiements.process.faq.title")}
        </h2>

        {/* Main FAQ content container */}
        <div className="rounded-[1.5rem] bg-[#5A433D] p-8 w-[90%] md:w-[80%] lg:w-[70%] min-w-[300px] text-white">
          {/* FAQ Accordion */}
          <div className="space-y-2">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-0" className="border-white/20">
                <AccordionTrigger className="text-left hover:no-underline group">
                  <span className="text-white font-medium">
                    {t(
                      "nosComptesDePaiements.process.faq.whoCanHaveAccount.question"
                    )}
                  </span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-white transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="text-white/90 text-sm">
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium mb-2">
                        {t(
                          "nosComptesDePaiements.process.faq.whoCanHaveAccount.malyAndMalyUp.title"
                        )}
                      </p>
                      <p>
                        {t(
                          "nosComptesDePaiements.process.faq.whoCanHaveAccount.malyAndMalyUp.description"
                        )}
                      </p>
                    </div>

                    <div>
                      <p className="font-medium mb-2">
                        {t(
                          "nosComptesDePaiements.process.faq.whoCanHaveAccount.malyPlus.title"
                        )}
                      </p>
                      <ul
                        className={`list-disc space-y-1 ${
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
                      <p className="font-medium mt-3 mb-1">
                        {t(
                          "nosComptesDePaiements.process.faq.whoCanHaveAccount.malyPlus.documentsTitle"
                        )}
                      </p>
                      <p>
                        {t(
                          "nosComptesDePaiements.process.faq.whoCanHaveAccount.malyPlus.description"
                        )}
                      </p>
                    </div>

                    <div>
                      <p className="font-medium mb-2">
                        {t(
                          "nosComptesDePaiements.process.faq.whoCanHaveAccount.malyPremium.title"
                        )}
                      </p>
                      <ul
                        className={`list-disc space-y-1 ${
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
                      <p className="font-medium mt-3 mb-1">
                        {t(
                          "nosComptesDePaiements.process.faq.whoCanHaveAccount.malyPremium.documentsTitle"
                        )}
                      </p>
                      <p className="font-medium mb-1">
                        {i18n.language === "ar"
                          ? "للمغاربة:"
                          : "Pour les marocains :"}
                      </p>
                      <p className="mb-3">
                        {t(
                          "nosComptesDePaiements.process.faq.whoCanHaveAccount.malyPremium.moroccans"
                        )}
                      </p>
                      <p className="font-medium mb-1">
                        {i18n.language === "ar"
                          ? "للأجانب:"
                          : "Pour les étrangers :"}
                      </p>
                      <p>
                        {t(
                          "nosComptesDePaiements.process.faq.whoCanHaveAccount.malyPremium.foreigners"
                        )}
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-1" className="border-white/20">
                <AccordionTrigger className="text-left hover:no-underline group">
                  <span className="text-white font-medium">
                    {t(
                      "nosComptesDePaiements.process.faq.howToOpenAccount.question"
                    )}
                  </span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-white transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="text-white/90 text-sm">
                  <div className="whitespace-pre-line">
                    {t(
                      "nosComptesDePaiements.process.faq.howToOpenAccount.answer"
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-white/20">
                <AccordionTrigger className="text-left hover:no-underline group">
                  <span className="text-white font-medium">
                    {t(
                      "nosComptesDePaiements.process.faq.minimumAmount.question"
                    )}
                  </span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-white transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="text-white/90 text-sm">
                  {t("nosComptesDePaiements.process.faq.minimumAmount.answer")}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-white/20">
                <AccordionTrigger className="text-left hover:no-underline group">
                  <span className="text-white font-medium">
                    {t(
                      "nosComptesDePaiements.process.faq.accountFees.question"
                    )}
                  </span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-white transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="text-white/90 text-sm">
                  {t("nosComptesDePaiements.process.faq.accountFees.answer")}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-white/20">
                <AccordionTrigger className="text-left hover:no-underline group">
                  <span className="text-white font-medium">
                    {t(
                      "nosComptesDePaiements.process.faq.emissionOperations.question"
                    )}
                  </span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-white transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="text-white/90 text-sm">
                  <div>
                    <p className="mb-2">
                      {t(
                        "nosComptesDePaiements.process.faq.emissionOperations.description"
                      )}
                    </p>
                    <ul
                      className={`${
                        i18n.language === "ar" ? "list-disc pr-5" : "pl-5"
                      } space-y-1`}
                    >
                      {t(
                        "nosComptesDePaiements.process.faq.emissionOperations.options",
                        { returnObjects: true }
                      ).map((option: string, index: number) => (
                        <li key={index}>{option}</li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-white/20">
                <AccordionTrigger className="text-left hover:no-underline group">
                  <span className="text-white font-medium">
                    {t(
                      "nosComptesDePaiements.process.faq.whatAccountAllows.question"
                    )}
                  </span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-white transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="text-white/90 text-sm">
                  <div>
                    <p className="mb-2">
                      {t(
                        "nosComptesDePaiements.process.faq.whatAccountAllows.description"
                      )}
                    </p>
                    <ul
                      className={`${
                        i18n.language === "ar" ? "list-disc pr-5" : "pl-5"
                      } space-y-1`}
                    >
                      {t(
                        "nosComptesDePaiements.process.faq.whatAccountAllows.options",
                        { returnObjects: true }
                      ).map((option: string, index: number) => (
                        <li key={index}>{option}</li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-white/20">
                <AccordionTrigger className="text-left hover:no-underline group">
                  <span className="text-white font-medium">
                    {t(
                      "nosComptesDePaiements.process.faq.howToFundAccount.question"
                    )}
                  </span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-white transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="text-white/90 text-sm">
                  <div>
                    <p className="mb-2">
                      {t(
                        "nosComptesDePaiements.process.faq.howToFundAccount.description"
                      )}
                    </p>
                    <ul
                      className={`${
                        i18n.language === "ar" ? "list-disc pr-5" : "pl-5"
                      } space-y-1`}
                    >
                      {t(
                        "nosComptesDePaiements.process.faq.howToFundAccount.options",
                        { returnObjects: true }
                      ).map((option: string, index: number) => (
                        <li key={index}>{option}</li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-white/20">
                <AccordionTrigger className="text-left hover:no-underline group">
                  <span className="text-white font-medium">
                    {t(
                      "nosComptesDePaiements.process.faq.howToWithdraw.question"
                    )}
                  </span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-white transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="text-white/90 text-sm">
                  <div>
                    <p className="mb-2">
                      {t(
                        "nosComptesDePaiements.process.faq.howToWithdraw.description"
                      )}
                    </p>
                    <ul
                      className={`${
                        i18n.language === "ar" ? "list-disc pr-5" : "pl-5"
                      } space-y-1`}
                    >
                      {t(
                        "nosComptesDePaiements.process.faq.howToWithdraw.options",
                        { returnObjects: true }
                      ).map((option: string, index: number) => (
                        <li key={index}>{option}</li>
                      ))}
                    </ul>
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

export default NosComptesDePaiementsProcess;
