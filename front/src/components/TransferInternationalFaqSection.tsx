import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useTranslation } from "react-i18next";

const TransferInternationalFaqSection: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [transferMethod, setTransferMethod] = useState("western-union");
  const [amount, setAmount] = useState("");
  const [fees, setFees] = useState("");

  // Detect when section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const calculateFees = () => {
    const amountValue = parseFloat(amount);
    if (!isNaN(amountValue)) {
      let calculatedFee = 0;
      if (transferMethod === "western-union") {
        // Western Union pricing
        if (amountValue >= 0 && amountValue <= 1000) calculatedFee = 100;
        else if (amountValue >= 1001 && amountValue <= 3000)
          calculatedFee = 210;
        else if (amountValue >= 3001 && amountValue <= 5000)
          calculatedFee = 330;
        else if (amountValue >= 5001 && amountValue <= 10000)
          calculatedFee = 440;
        else calculatedFee = 440; // For amounts above 10000
      } else {
        // MoneyGram pricing
        if (amountValue >= 0 && amountValue <= 1000) calculatedFee = 95;
        else if (amountValue >= 1001 && amountValue <= 3000)
          calculatedFee = 190;
        else if (amountValue >= 3001 && amountValue <= 5000)
          calculatedFee = 320;
        else if (amountValue >= 5001 && amountValue <= 10000)
          calculatedFee = 430;
        else calculatedFee = 430; // For amounts above 10000
      }
      setFees(calculatedFee.toFixed(2));
    } else {
      setFees("");
    }
  };

  return (
    <section
      id="faq"
      className="bg-barid-background py-20 overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div
          className={`max-w-2xl mx-auto transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className="text-4xl font-bold text-center text-[#5A433D] mb-12"
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
              textAlign: "center",
            }}
          >
            {t("transferInternational.faq.title")}
          </h2>

          {/* Orange container for the form */}
          <div className="bg-[#f47c2c] rounded-3xl p-8 space-y-6">
            {/* Amount input */}
            <div>
              <input
                type="text"
                placeholder={t("transferInternational.faq.amountPlaceholder")}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-4 rounded-lg border-2 border-[#e36b1b] bg-[#f47c2c] text-white placeholder-white/80 text-center font-medium focus:outline-none focus:border-white"
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              />
            </div>

            {/* Transfer method selection */}
            <div className="space-y-3">
              <RadioGroup
                value={transferMethod}
                onValueChange={setTransferMethod}
                className={`grid grid-cols-2 gap-3 ${
                  i18n.language === "ar" ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`flex items-center ${
                    i18n.language === "ar"
                      ? "space-x-reverse space-x-2"
                      : "space-x-2"
                  }`}
                >
                  <label className="flex-1 cursor-pointer">
                    <div
                      className={`p-3 rounded-lg text-center font-medium transition-colors ${
                        transferMethod === "western-union"
                          ? "bg-[#e36b1b] text-white"
                          : "bg-white text-[#5A433D]"
                      }`}
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      <RadioGroupItem
                        value="western-union"
                        className="sr-only"
                      />
                      {t("transferInternational.faq.viaWesternUnion")}
                    </div>
                  </label>
                </div>
                <div
                  className={`flex items-center ${
                    i18n.language === "ar"
                      ? "space-x-reverse space-x-2"
                      : "space-x-2"
                  }`}
                >
                  <label className="flex-1 cursor-pointer">
                    <div
                      className={`p-3 rounded-lg text-center font-medium transition-colors ${
                        transferMethod === "moneygram"
                          ? "bg-[#e36b1b] text-white"
                          : "bg-white text-[#5A433D]"
                      }`}
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      <RadioGroupItem value="moneygram" className="sr-only" />
                      {t("transferInternational.faq.viaMoneyGram")}
                    </div>
                  </label>
                </div>
              </RadioGroup>
            </div>

            {/* Calculate fees button */}
            <Button
              className="w-full bg-white text-[#5A433D] hover:bg-gray-100 font-bold py-4 rounded-lg text-lg"
              onClick={calculateFees}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("transferInternational.faq.calculateButton")}
            </Button>

            {/* Fees to pay */}
            <div>
              <input
                type="text"
                placeholder={t("transferInternational.faq.feesPlaceholder")}
                value={fees}
                readOnly
                className="w-full p-4 rounded-lg border-2 border-[#e36b1b] bg-[#f47c2c] text-white placeholder-white/80 text-center font-medium focus:outline-none"
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransferInternationalFaqSection;
