import React, { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { animations } from "@/utils/animation";
import { useTranslation } from "react-i18next";

const TransferPartnersSection: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [amount, setAmount] = useState<string>("");
  const [fees, setFees] = useState<string>("");

  const calculateFees = () => {
    const amountValue = parseFloat(amount);
    if (!isNaN(amountValue)) {
      let calculatedFee = 0;
      if (amountValue >= 0 && amountValue <= 50) calculatedFee = 5;
      else if (amountValue >= 51 && amountValue <= 100) calculatedFee = 10;
      else if (amountValue >= 101 && amountValue <= 200) calculatedFee = 24;
      else if (amountValue >= 201 && amountValue <= 500) calculatedFee = 33;
      else if (amountValue >= 501 && amountValue <= 1000) calculatedFee = 37;
      else if (amountValue >= 1001 && amountValue <= 2000) calculatedFee = 45;
      else if (amountValue >= 2001 && amountValue <= 3000) calculatedFee = 47;
      else if (amountValue >= 3001 && amountValue <= 4000) calculatedFee = 53;
      else if (amountValue >= 4001 && amountValue <= 5000) calculatedFee = 56;
      else if (amountValue >= 5001 && amountValue <= 10000) calculatedFee = 65;
      else if (amountValue > 10000)
        calculatedFee = Math.round(amountValue * 0.0065); // 0.65%

      setFees(calculatedFee.toFixed(2));
    } else {
      setFees("");
    }
  };

  const partners = [
    {
      id: 1,
      name: "Eurogiro",
      logo: "/lovable-uploads/e9ecbb7d-cd17-4fe6-9be6-19946708f8da.png",
    },
    {
      id: 2,
      name: "MoneyGram",
      logo: "/lovable-uploads/36eedd85-f5de-4deb-ab51-11084885d43f.png",
    },
    {
      id: 3,
      name: "Western Union",
      logo: "/lovable-uploads/8bef166b-2ae1-443b-bc7e-3f3ba4548440.png",
    },
  ];

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    const scrollAmount = 1; // Pixels to scroll per frame
    let animationFrameId: number;
    const scroll = () => {
      if (!scrollContainer) return;
      scrollContainer.scrollTop += scrollAmount;

      // If we've scrolled to the bottom, loop back to the top
      if (
        scrollContainer.scrollTop >=
        scrollContainer.scrollHeight - scrollContainer.clientHeight
      ) {
        scrollContainer.scrollTop = 0;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Start the animation
    animationFrameId = requestAnimationFrame(scroll);

    // Clean up the animation when component unmounts
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-barid-orange py-16 overflow-hidden"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Main Title */}
          <h2
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("partners.simulationTitle")}
          </h2>

          {/* Fee Calculator */}
          <div className="bg-[#5A433D] rounded-lg p-8 mb-8">
            <div className="space-y-6">
              <Input
                type="number"
                placeholder={t("partners.amountPlaceholder")}
                className="w-full bg-[#5A433D] border border-white/30 text-white placeholder:text-white/70 h-14 text-center"
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
                className="w-full rounded-lg py-6 bg-barid-orange hover:bg-barid-orange/90 text-white font-bold text-lg"
                onClick={calculateFees}
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              >
                {t("partners.calculateButton")}
              </Button>

              <Input
                type="text"
                placeholder={t("partners.feesPlaceholder")}
                className="w-full bg-[#5A433D] border border-white/30 text-white placeholder:text-white/70 h-14 text-center"
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
          </div>

          {/* Quality Service Information */}
          <div className="bg-[#5A433D] rounded-lg p-6 mb-8">
            <h3
              className="text-white font-semibold mb-4"
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("partners.qualityTitle")}
            </h3>
            <ul className="text-white text-sm space-y-2">
              {(
                t("partners.qualityList", { returnObjects: true }) as string[]
              ).map((item: string, index: number) => (
                <li
                  key={index}
                  lang={i18n.language === "ar" ? "ar" : "fr"}
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
          </div>

          {/* Optional Services */}
          <div className="bg-[#5A433D] rounded-lg p-6">
            <h3
              className="text-white font-semibold mb-4"
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("partners.optionalTitle")}
            </h3>
            <Table className="w-full">
              <TableHeader>
                <TableRow className="border-white/20 hover:bg-transparent">
                  <TableHead
                    className={`text-white font-medium ${
                      i18n.language === "ar" ? "text-right" : "text-left"
                    }`}
                    lang={i18n.language === "ar" ? "ar" : "fr"}
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  >
                    {t("partners.serviceType")}
                  </TableHead>
                  <TableHead
                    className={`text-white font-medium ${
                      i18n.language === "ar" ? "text-right" : "text-right"
                    }`}
                    lang={i18n.language === "ar" ? "ar" : "fr"}
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  >
                    {t("partners.unitPrice")}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-white/20 hover:bg-white/5">
                  <TableCell
                    className={`text-white text-sm ${
                      i18n.language === "ar" ? "text-right" : "text-left"
                    }`}
                    lang={i18n.language === "ar" ? "ar" : "fr"}
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  >
                    {t("partners.attestation")}
                  </TableCell>
                  <TableCell
                    className={`text-white text-sm ${
                      i18n.language === "ar" ? "text-right" : "text-right"
                    }`}
                    lang={i18n.language === "ar" ? "ar" : "fr"}
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  >
                    15
                  </TableCell>
                </TableRow>
                <TableRow className="border-white/20 hover:bg-white/5">
                  <TableCell
                    className={`text-white text-sm ${
                      i18n.language === "ar" ? "text-right" : "text-left"
                    }`}
                    lang={i18n.language === "ar" ? "ar" : "fr"}
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  >
                    {t("partners.reactivation")}
                  </TableCell>
                  <TableCell
                    className={`text-white text-sm ${
                      i18n.language === "ar" ? "text-right" : "text-right"
                    }`}
                    lang={i18n.language === "ar" ? "ar" : "fr"}
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  >
                    5
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransferPartnersSection;
