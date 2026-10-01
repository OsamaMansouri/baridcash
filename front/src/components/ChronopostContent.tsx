import React from "react";
import {
  Package,
  Clock,
  Globe,
  FileText,
  ArrowRight,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const ChronopostContent: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <section className="py-16 bg-[#F27D30]">
      <div className="container mx-auto px-4 flex flex-col gap-8 items-center">
        {/* Content from the image - replacing the form */}
        <div className="rounded-[1.5rem] bg-[#5A433D] p-8 w-[90%] md:w-[80%] lg:w-[70%] min-w-[300px] text-white">
          <h2
            className="text-2xl font-bold mb-4"
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("chronopost.content.title")}
          </h2>
          <p
            className="text-sm mb-4"
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("chronopost.content.description")}
          </p>

          <h3
            className="text-xl font-semibold mb-2"
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("chronopost.content.subtitle")}
          </h3>
          <ul
            className={`space-y-1 mb-4 list-disc ${
              i18n.language === "ar" ? "mr-4" : "ml-4"
            }`}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              listStyleType: "disc",
              listStylePosition: "outside",
            }}
          >
            {(
              t("chronopost.content.features", {
                returnObjects: true,
              }) as string[]
            ).map((feature: string, index: number) => {
              // Remove bullet symbols from text and handle sub-bullets
              const cleanFeature = feature.replace(/^[•\-\s]+/, "");
              const isSubBullet = feature.startsWith("  -");

              return (
                <li
                  key={index}
                  lang={i18n.language === "ar" ? "ar" : "fr"}
                  style={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                    listStyleType: isSubBullet ? "circle" : "disc",
                    marginLeft: isSubBullet
                      ? i18n.language === "ar"
                        ? "0"
                        : "20px"
                      : "0",
                    marginRight: isSubBullet
                      ? i18n.language === "ar"
                        ? "20px"
                        : "0"
                      : "0",
                  }}
                  dangerouslySetInnerHTML={{ __html: cleanFeature }}
                />
              );
            })}
          </ul>

          <Separator className="bg-white/30 my-4" />

          <h2
            className="text-2xl font-bold mb-4"
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("chronopost.content.expressTitle")}
          </h2>
          <p
            className="text-lg font-semibold mb-4"
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("chronopost.content.expressDescription")}
          </p>

          <h3
            className="text-xl font-semibold mt-4 mb-2"
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("chronopost.content.studentOffer")}
          </h3>
          <p
            className="mb-2"
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("chronopost.content.studentDescription")}
          </p>

          <ul
            className={`space-y-1 mb-4 list-disc ${
              i18n.language === "ar" ? "mr-4" : "ml-4"
            }`}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              listStyleType: "disc",
              listStylePosition: "outside",
            }}
          >
            {(
              t("chronopost.content.studentConditions", {
                returnObjects: true,
              }) as string[]
            ).map((condition: string, index: number) => {
              // Remove bullet symbols from text
              const cleanCondition = condition.replace(/^[•\-\s]+/, "");

              return (
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
                  dangerouslySetInnerHTML={{ __html: cleanCondition }}
                />
              );
            })}
          </ul>

          <h3
            className="text-xl font-semibold mt-4 mb-2"
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("chronopost.content.tailorOffer")}
          </h3>
          <p
            className="mb-4"
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("chronopost.content.tailorDescription")}
          </p>

          <Separator className="bg-white/30 my-4" />

          <h2
            className="text-2xl font-bold mb-4"
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("chronopost.content.expressMailTitle")}
          </h2>
          <p
            className="mb-4"
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("chronopost.content.expressMailDescription")}
          </p>

          <h3
            className="text-xl font-semibold mt-4 mb-2"
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("chronopost.content.expressMailTitle")}{" "}
            {i18n.language === "ar" ? "تقدم:" : "c'est :"}
          </h3>
          <ul
            className={`space-y-1 mb-4 list-disc ${
              i18n.language === "ar" ? "mr-4" : "ml-4"
            }`}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              listStyleType: "disc",
              listStylePosition: "outside",
            }}
          >
            {(
              t("chronopost.content.expressMailFeatures", {
                returnObjects: true,
              }) as string[]
            ).map((feature: string, index: number) => {
              // Remove bullet symbols from text
              const cleanFeature = feature.replace(/^[•\-\s]+/, "");

              return (
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
                  dangerouslySetInnerHTML={{ __html: cleanFeature }}
                />
              );
            })}
          </ul>

          <Link to="/nos-points-de-vente">
            <Button className="mt-4 bg-[#F27D30] hover:bg-[#E76D20] text-white font-bold py-4 px-6 rounded-[1.5rem] inline-flex items-center gap-2">
              <span
                lang={i18n.language === "ar" ? "ar" : "fr"}
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              >
                {t("chronopost.content.discoverButton")}
              </span>
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ChronopostContent;
