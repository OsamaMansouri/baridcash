import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslation } from "react-i18next";

const EstimateFeesSection: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const [amount, setAmount] = useState<string>("");
  const [fees, setFees] = useState<string>("");
  const [currentTab, setCurrentTab] = useState<string>("national");
  const [transferService, setTransferService] = useState<string>("western");
  const isMobile = useIsMobile();

  const calculateNationalFees = (amount: number): number => {
    if (amount >= 0 && amount <= 50) return 5;
    if (amount >= 51 && amount <= 100) return 10;
    if (amount >= 101 && amount <= 200) return 24;
    if (amount >= 201 && amount <= 500) return 33;
    if (amount >= 501 && amount <= 1000) return 37;
    if (amount >= 1001 && amount <= 2000) return 45;
    if (amount >= 2001 && amount <= 3000) return 47;
    if (amount >= 3001 && amount <= 4000) return 53;
    if (amount >= 4001 && amount <= 5000) return 56;
    if (amount >= 5001 && amount <= 10000) return 65;
    if (amount > 10000) return Math.round(amount * 0.0065); // 0.65%
    return 0;
  };

  const calculateWesternUnionFees = (amount: number): number => {
    // Using "En agence" tariffs as default
    if (amount >= 0 && amount <= 1000) return 100;
    if (amount >= 1001 && amount <= 3000) return 210;
    if (amount >= 3001 && amount <= 5000) return 330;
    if (amount >= 5001 && amount <= 10000) return 440;
    return 440; // Cap at highest tier
  };

  const calculateMoneyGramFees = (amount: number): number => {
    // Using "En agence" tariffs as default
    if (amount >= 0 && amount <= 1000) return 95;
    if (amount >= 1001 && amount <= 3000) return 190;
    if (amount >= 3001 && amount <= 5000) return 320;
    if (amount >= 5001 && amount <= 10000) return 430;
    return 430; // Cap at highest tier
  };

  const calculateFees = () => {
    const amountValue = parseFloat(amount);
    if (!isNaN(amountValue) && amountValue > 0) {
      let calculatedFee;

      if (currentTab === "national") {
        calculatedFee = calculateNationalFees(amountValue).toFixed(2);
      } else {
        // Different fees based on transfer service for international
        calculatedFee =
          transferService === "western"
            ? calculateWesternUnionFees(amountValue).toFixed(2)
            : calculateMoneyGramFees(amountValue).toFixed(2);
      }

      setFees(calculatedFee);
    } else {
      setFees("");
    }
  };

  return (
    <section className="bg-barid-background py-16">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-barid-brown uppercase mb-4"
          lang={i18n.language === "ar" ? "ar" : "fr"}
          style={{
            fontSize: "2.25rem",
            direction: i18n.language === "ar" ? "rtl" : "ltr",
            textAlign: i18n.language === "ar" ? "right" : "left",
            fontFamily:
              i18n.language === "ar"
                ? "Cairo, Arial, sans-serif"
                : "Inter, Arial, sans-serif",
          }}
        >
          {t("estimateFees.title")}
        </h2>
        <h2
          className="text-4xl font-bold text-barid-brown uppercase mb-8"
          lang={i18n.language === "ar" ? "ar" : "fr"}
          style={{
            fontSize: "2.25rem",
            direction: i18n.language === "ar" ? "rtl" : "ltr",
            textAlign: i18n.language === "ar" ? "right" : "left",
            fontFamily:
              i18n.language === "ar"
                ? "Cairo, Arial, sans-serif"
                : "Inter, Arial, sans-serif",
          }}
        >
          {t("estimateFees.titleLine2")}
        </h2>
        <div className="w-32 h-1.5 bg-barid-brown mb-16"></div>

        <div className="max-w-2xl mx-auto">
          <Tabs
            defaultValue="national"
            className="w-full"
            onValueChange={(value) => {
              setCurrentTab(value);
              setFees("");
              if (value === "international") {
                setTransferService("western");
              }
            }}
          >
            <div className="relative overflow-hidden">
              <TabsList className="bg-transparent p-0 h-auto flex flex-row w-full">
                <TabsTrigger
                  value="national"
                  className="text-lg font-medium px-6 sm:px-12 py-3 w-1/2 data-[state=active]:bg-barid-brown data-[state=active]:text-white data-[state=inactive]:bg-barid-brown/80 data-[state=inactive]:text-white/80 rounded-none"
                  lang={i18n.language === "ar" ? "ar" : "fr"}
                  style={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                    borderRadius: "0",
                  }}
                >
                  {t("estimateFees.national")}
                </TabsTrigger>
                <TabsTrigger
                  value="international"
                  className="text-lg font-medium px-6 sm:px-12 py-3 w-1/2 data-[state=active]:bg-barid-orange data-[state=active]:text-white data-[state=inactive]:bg-barid-orange/80 data-[state=inactive]:text-white/80 rounded-none"
                  lang={i18n.language === "ar" ? "ar" : "fr"}
                  style={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                    borderRadius: "0",
                  }}
                >
                  {t("estimateFees.international")}
                </TabsTrigger>
              </TabsList>

              <TabsContent
                value="national"
                className="mt-0 bg-barid-brown p-6 space-y-6"
              >
                <div className="space-y-4">
                  <Input
                    type="number"
                    placeholder={t("estimateFees.amountPlaceholder")}
                    className="w-full bg-transparent text-gray-300 border border-gray-600 rounded-xl h-14 text-center placeholder:text-gray-400"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  />

                  <Button
                    className="w-full rounded-xl py-6 bg-barid-orange hover:bg-barid-orange/90 text-white font-bold text-lg"
                    onClick={calculateFees}
                    lang={i18n.language === "ar" ? "ar" : "fr"}
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  >
                    {t("estimateFees.calculateButton")}
                  </Button>

                  <Input
                    type="text"
                    placeholder={t("estimateFees.feesPlaceholder")}
                    className="w-full bg-transparent text-gray-300 border border-gray-600 rounded-xl h-14 text-center placeholder:text-gray-400"
                    value={fees}
                    readOnly
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  />
                </div>
              </TabsContent>

              <TabsContent
                value="international"
                className="mt-0 bg-barid-orange p-6 space-y-6"
              >
                <div className="space-y-4">
                  <Input
                    type="number"
                    placeholder={t("estimateFees.amountPlaceholder")}
                    className="w-full bg-transparent text-white border border-white/30 rounded-xl h-14 text-center placeholder:text-white/80"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  />

                  <div className="flex flex-col md:flex-row gap-4">
                    <Button
                      className={`flex-1 rounded-full py-5 ${
                        transferService === "western"
                          ? "bg-white text-barid-orange"
                          : "bg-barid-orange text-white border border-white/30"
                      } font-bold`}
                      onClick={() => setTransferService("western")}
                      lang={i18n.language === "ar" ? "ar" : "fr"}
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("estimateFees.viaWesternUnion")}
                    </Button>
                    <Button
                      className={`flex-1 rounded-full py-5 ${
                        transferService === "moneygram"
                          ? "bg-white text-barid-orange"
                          : "bg-barid-orange text-white border border-white/30"
                      } font-bold`}
                      onClick={() => setTransferService("moneygram")}
                      lang={i18n.language === "ar" ? "ar" : "fr"}
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("estimateFees.viaMoneyGram")}
                    </Button>
                  </div>

                  <Button
                    className="w-full rounded-xl py-6 bg-white hover:bg-gray-100 text-barid-orange font-bold text-lg"
                    onClick={calculateFees}
                    lang={i18n.language === "ar" ? "ar" : "fr"}
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  >
                    {t("estimateFees.calculateButton")}
                  </Button>

                  <Input
                    type="text"
                    placeholder={t("estimateFees.feesPlaceholder")}
                    className="w-full bg-transparent text-white border border-white/30 rounded-xl h-14 text-center placeholder:text-white/80"
                    value={fees}
                    readOnly
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  />
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default EstimateFeesSection;
