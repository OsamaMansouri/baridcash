import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from "react-i18next";

const GrilleTarifaireContent: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* First Row - Two Tables Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Contains Mandati Express, Western Union, MoneyGram, Paiement de Factures, and Compte de Paiement tables */}
          <div className="space-y-8">
            {/* First Table - TRANSFERT D'ARGENT NATIONAL MANDATI EXPRESS */}
            <div className="bg-white">
              {/* Section Title with Mandati Icon */}
              <div
                className={`flex items-center gap-3 mb-4 ${
                  i18n.language === "ar" ? "flex-row-reverse" : ""
                }`}
                style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
              >
                {i18n.language === "ar" ? (
                  <>
                    <img
                      src="/lovable-uploads/0e1c955e-9ab3-4ae1-b902-e02d02a39609.png"
                      alt="Mandati Express"
                      className="w-auto h-16 object-contain flex-shrink-0"
                    />
                    <h3
                      className="text-sm font-bold uppercase tracking-wide text-barid-brown flex-1 text-right"
                      style={{
                        direction: "rtl",
                        fontFamily: "Cairo, Arial, sans-serif",
                        textAlign: "right",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.title")}
                    </h3>
                  </>
                ) : (
                  <>
                    <h3
                      className="text-sm font-bold uppercase tracking-wide text-barid-brown"
                      style={{
                        direction: "ltr",
                        fontFamily: "Inter, Arial, sans-serif",
                        textAlign: "left",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.title")}
                    </h3>
                    <img
                      src="/lovable-uploads/0e1c955e-9ab3-4ae1-b902-e02d02a39609.png"
                      alt="Mandati Express"
                      className="w-auto h-16 object-contain flex-shrink-0"
                    />
                  </>
                )}
              </div>

              <Table className="w-full border-collapse">
                <TableHeader>
                  <TableRow className="border-b border-gray-200">
                    <TableHead
                      className="px-4 py-3 border-0"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      <span
                        className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {t(
                          "grilleTarifairePage.nationalTransfer.headers.amountRange"
                        )}
                      </span>
                    </TableHead>
                    <TableHead
                      className="px-4 py-3 border-0"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      <span
                        className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {t(
                          "grilleTarifairePage.nationalTransfer.headers.smsPrice"
                        )}
                      </span>
                    </TableHead>
                    <TableHead
                      className="px-4 py-3 border-0"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      <span
                        className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {t("grilleTarifairePage.nationalTransfer.headers.fees")}
                      </span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {i18n.language === "ar" ? "0 - 50 درهم" : "0 - 50 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {i18n.language === "ar" ? "5 درهم" : "5 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "51 - 100 درهم"
                        : "51 - 100 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {i18n.language === "ar" ? "10 درهم" : "10 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "101 - 200 درهم"
                        : "101 - 200 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {i18n.language === "ar" ? "24 درهم" : "24 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "201 - 500 درهم"
                        : "201 - 500 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {i18n.language === "ar" ? "33 درهم" : "33 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "501 - 1000 درهم"
                        : "501 - 1 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {i18n.language === "ar" ? "37 درهم" : "37 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "1001 - 2000 درهم"
                        : "1 001 - 2 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {i18n.language === "ar" ? "45 درهم" : "45 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "2001 - 3000 درهم"
                        : "2 001 - 3 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {i18n.language === "ar" ? "47 درهم" : "47 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "3001 - 4000 درهم"
                        : "3 001 - 4 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {i18n.language === "ar" ? "53 درهم" : "53 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "4001 - 5000 درهم"
                        : "4 001 - 5 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {i18n.language === "ar" ? "56 درهم" : "56 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "5001 - 10000 درهم"
                        : "5 001 - 10 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {i18n.language === "ar" ? "65 درهم" : "65 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "أكثر من 10000 درهم"
                        : "Sup à 10 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {i18n.language === "ar" ? "0,65 %" : "0,65 %"}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* Second Table - ENVOI D'ARGENT À L'INTERNATIONAL VIA WESTERN UNION */}
            <div className="bg-white">
              {/* Section Title with Western Union logo */}
              <div
                className={`flex items-center gap-3 mb-4 ${
                  i18n.language === "ar" ? "flex-row-reverse" : ""
                }`}
                style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
              >
                {i18n.language === "ar" ? (
                  <>
                    <img
                      alt="Western Union"
                      className="w-auto h-10 object-contain flex-shrink-0"
                      src="/lovable-uploads/3ec42392-8d81-4fde-8d8b-271c4a049f35.png"
                    />
                    <h3
                      className="text-sm font-bold uppercase tracking-wide text-barid-brown flex-1 text-right"
                      style={{
                        direction: "rtl",
                        fontFamily: "Cairo, Arial, sans-serif",
                        textAlign: "right",
                      }}
                    >
                      {t("grilleTarifairePage.internationalTransfer.title")}
                    </h3>
                  </>
                ) : (
                  <>
                    <h3
                      className="text-sm font-bold uppercase tracking-wide text-barid-brown"
                      style={{
                        direction: "ltr",
                        fontFamily: "Inter, Arial, sans-serif",
                        textAlign: "left",
                      }}
                    >
                      {t("grilleTarifairePage.internationalTransfer.title")}
                    </h3>
                    <img
                      alt="Western Union"
                      className="w-auto h-10 object-contain flex-shrink-0"
                      src="/lovable-uploads/3ec42392-8d81-4fde-8d8b-271c4a049f35.png"
                    />
                  </>
                )}
              </div>

              <Table className="w-full border-collapse">
                <TableHeader>
                  <TableRow className="border-b border-gray-200">
                    <TableHead
                      className="px-4 py-3 border-0"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      <span
                        className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {t(
                          "grilleTarifairePage.nationalTransfer.headers.amountRange"
                        )}
                      </span>
                    </TableHead>
                    <TableHead
                      className="px-4 py-3 border-0"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      <span
                        className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {i18n.language === "ar"
                          ? "الاستلام عبر الوكالة"
                          : "En agence"}
                      </span>
                    </TableHead>
                    <TableHead
                      className="px-4 py-3 border-0"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      <span
                        className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {i18n.language === "ar"
                          ? "نحو الحساب البنكي"
                          : "Sur un compte bancaire"}
                      </span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "0 - 1000 درهم"
                        : "0 à 1000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {i18n.language === "ar" ? "100 درهم" : "100 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {i18n.language === "ar" ? "50 درهم" : "50 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "1,001 - 3,000 درهم"
                        : "1 001 à 3 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {i18n.language === "ar" ? "210 درهم" : "210 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {i18n.language === "ar" ? "120 درهم" : "120 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "3,001 - 5,000 درهم"
                        : "3 001 à 5 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {i18n.language === "ar" ? "330 درهم" : "330 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {i18n.language === "ar" ? "120 درهم" : "120 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "5,001 - 10,000 درهم"
                        : "5 001 à 10 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {i18n.language === "ar" ? "440 درهم" : "440 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {i18n.language === "ar" ? "150 درهم" : "150 Dhs"}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* Third Table - ENVOI D'ARGENT À L'INTERNATIONAL VIA MONEY GRAM */}
            <div className="bg-white">
              {/* Section Title with MoneyGram logo */}
              <div
                className={`flex items-center gap-3 mb-4 ${
                  i18n.language === "ar" ? "flex-row-reverse" : ""
                }`}
                style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
              >
                {i18n.language === "ar" ? (
                  <>
                    <h3
                      className="text-sm font-bold uppercase tracking-wide text-barid-brown flex-1 text-right"
                      style={{
                        direction: "rtl",
                        fontFamily: "Cairo, Arial, sans-serif",
                        textAlign: "right",
                      }}
                    >
                      {t("grilleTarifairePage.moneyGramTransfer.title")}
                    </h3>
                  </>
                ) : (
                  <>
                    <h3
                      className="text-sm font-bold uppercase tracking-wide text-barid-brown"
                      style={{
                        direction: "ltr",
                        fontFamily: "Inter, Arial, sans-serif",
                        textAlign: "left",
                      }}
                    >
                      {t("grilleTarifairePage.moneyGramTransfer.title")}
                    </h3>
                  </>
                )}
              </div>

              <Table className="w-full border-collapse">
                <TableHeader>
                  <TableRow className="border-b border-gray-200">
                    <TableHead
                      className="px-4 py-3 border-0"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      <span
                        className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {t(
                          "grilleTarifairePage.nationalTransfer.headers.amountRange"
                        )}
                      </span>
                    </TableHead>
                    <TableHead
                      className="px-4 py-3 border-0"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      <span
                        className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {i18n.language === "ar"
                          ? "الاستلام عبر الوكالة"
                          : "En agence"}
                      </span>
                    </TableHead>
                    <TableHead
                      className="px-4 py-3 border-0"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      <span
                        className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {i18n.language === "ar"
                          ? "نحو الحساب البنكي"
                          : "Sur un compte bancaire"}
                      </span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "0 - 1,000 درهم"
                        : "0 à 1 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {i18n.language === "ar" ? "95 درهم" : "95 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {i18n.language === "ar" ? "40 درهم" : "40 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "1,001 - 3,000 درهم"
                        : "1 001 à 3 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {i18n.language === "ar" ? "190 درهم" : "190 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {i18n.language === "ar" ? "100 درهم" : "100 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "3,001 - 5,000 درهم"
                        : "3 001 à 5 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {i18n.language === "ar" ? "320 درهم" : "320 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {i18n.language === "ar" ? "100 درهم" : "100 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "5,001 - 10,000 درهم"
                        : "5 001 à 10 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {i18n.language === "ar" ? "430 درهم" : "430 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {i18n.language === "ar" ? "130 درهم" : "130 Dhs"}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* Fourth Table - PAIEMENT DE FACTURES */}
            <div className="bg-white">
              {/* Orange separator line at the top */}
              <Separator className="bg-barid-orange h-1 mb-4" />

              <h3
                className="text-sm font-bold uppercase tracking-wide text-barid-brown mb-4"
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                  textAlign: i18n.language === "ar" ? "right" : "left",
                }}
              >
                {t("grilleTarifairePage.billPaymentServices.title")}
              </h3>

              <Table className="w-full border-collapse">
                <TableHeader>
                  <TableRow className="border-b border-gray-200">
                    <TableHead
                      className="px-4 py-3 border-0"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      <span
                        className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {i18n.language === "ar" ? "الخدمة" : "Service"}
                      </span>
                    </TableHead>
                    <TableHead
                      className="px-4 py-3 border-0"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      <span
                        className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {t("grilleTarifairePage.nationalTransfer.headers.fees")}
                      </span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* Téléphonie et internet */}
                  <TableRow>
                    <TableCell
                      className="px-4 py-2 text-sm font-semibold text-barid-brown"
                      colSpan={2}
                    >
                      <div
                        className={`flex items-center justify-between ${
                          i18n.language === "ar" ? "flex-row-reverse" : ""
                        }`}
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                        }}
                      >
                        <span
                          className="bg-barid-orange text-white font-bold text-xs uppercase px-3 py-1 rounded-full"
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                          }}
                        >
                          {i18n.language === "ar"
                            ? "الهاتف والإنترنت"
                            : "Téléphonie et internet"}
                        </span>
                        <div className="flex gap-2">
                          <img
                            alt="Maroc Telecom"
                            className="w-auto h-16 object-contain"
                            src="/lovable-uploads/350c29f4-9808-4f8d-b193-5f808a1120f8.png"
                          />
                          <img
                            alt="Orange"
                            className="w-auto h-10 object-contain"
                            src="/lovable-uploads/17d8d84a-f545-47a9-9f1b-c1e85ba2534b.png"
                          />
                          <img
                            alt="Inwi"
                            className="w-auto h-10 object-contain"
                            src="/lovable-uploads/bb88fe65-363f-439f-8897-74c02bf50c7a.png"
                          />
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "فواتير اتصالات المغرب / IAM"
                        : "Facture IAM"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "فواتير ORANGE"
                        : "Facture Orange"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {i18n.language === "ar" ? "فواتير INWI" : "Facture Inwi"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>

                  {/* Eau et électricité */}
                  <TableRow>
                    <TableCell
                      className="px-4 py-2 text-sm font-semibold text-barid-brown"
                      colSpan={2}
                    >
                      <div
                        className={`flex items-center justify-between ${
                          i18n.language === "ar" ? "flex-row-reverse" : ""
                        }`}
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                        }}
                      >
                        <span
                          className="bg-barid-orange text-white font-bold text-xs uppercase px-3 py-1 rounded-full"
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                          }}
                        >
                          {i18n.language === "ar"
                            ? "الماء والكهرباء"
                            : "Eau et électricité"}
                        </span>
                        <img
                          alt="Redal"
                          className="w-auto h-16 object-contain"
                          src="/lovable-uploads/66de1c86-6563-4e3c-94c8-ac88241e0e51.png"
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "الشركة الجهوية للكهرباء - الدار البيضاء سطات"
                        : "SRM-Casablanca Settat"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {i18n.language === "ar" ? "أمنديس" : "Amendis"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t(
                        "grilleTarifairePage.billPaymentServices.categories.waterElectricity.services.onee"
                      )}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t(
                        "grilleTarifairePage.billPaymentServices.categories.waterElectricity.services.onep"
                      )}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t(
                        "grilleTarifairePage.billPaymentServices.categories.waterElectricity.services.redal"
                      )}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "الشركة الجهوية لتوزيع الماء والكهرباء"
                        : "RADEEL"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "الشركة الجهوية لتوزيع الماء والكهرباء"
                        : "RADEEF"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "الشركة الجهوية لتوزيع الماء والكهرباء"
                        : "RADEETA"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "الشركة الجهوية للكهرباء - مراكش آسفي"
                        : "SRM - Marrakech Safi"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "الشركة الجهوية للكهرباء - الرباط سلا القنيطرة"
                        : "SRM - Rabat Salé Kénitra"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "الشركة الجهوية للكهرباء - الشرق"
                        : "SRM - l'Oriental"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "الشركة الجهوية لتوزيع الماء والكهرباء"
                        : "RADEET"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "الشركة الجهوية للكهرباء - سوس ماسة"
                        : "SRM - Sous Massa"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "الشركة الجهوية لتوزيع الماء والكهرباء"
                        : "RADEM"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>

                  {/* Taxes et impôts */}
                  <TableRow>
                    <TableCell
                      className="px-4 py-2 text-sm font-semibold text-barid-brown"
                      colSpan={2}
                    >
                      <div
                        className={`flex items-center justify-between ${
                          i18n.language === "ar" ? "flex-row-reverse" : ""
                        }`}
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                        }}
                      >
                        <span
                          className="bg-barid-orange text-white font-bold text-xs uppercase px-3 py-1 rounded-full"
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                          }}
                        >
                          {i18n.language === "ar"
                            ? "الرسوم والضرائب"
                            : "Taxes et impôts"}
                        </span>
                        <div className="flex gap-2">
                          <img
                            alt="TGR"
                            className="w-auto h-16 object-contain"
                            src="/lovable-uploads/32631055-0f16-4b14-9006-e74442fc83a3.png"
                          />
                          <img
                            alt="DGI"
                            className="w-auto h-16 object-contain"
                            src="/lovable-uploads/674a50f2-a398-4f12-91d6-38149df5d72d.png"
                          />
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "الخزينة العامة للمملكة TGR"
                        : "TGR"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      15 {i18n.language === "ar" ? "درهم" : "Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "المديرية العامة للضرائب DGI"
                        : "DGI"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      30 {i18n.language === "ar" ? "درهم" : "Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "الضريبة على السيارة"
                        : "Vignette automobile"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      23 {i18n.language === "ar" ? "درهم" : "Dhs"}
                    </TableCell>
                  </TableRow>

                  {/* Autres produits */}
                  <TableRow>
                    <TableCell
                      className="px-4 py-2 text-sm font-semibold text-barid-brown"
                      colSpan={2}
                    >
                      <div
                        className={`flex items-center justify-between ${
                          i18n.language === "ar" ? "flex-row-reverse" : ""
                        }`}
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                        }}
                      >
                        <span
                          className="bg-barid-orange text-white font-bold text-xs uppercase px-3 py-1 rounded-full"
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                          }}
                        >
                          {i18n.language === "ar"
                            ? "خدمات أخرى"
                            : "Autres produits"}
                        </span>
                        <div className="flex gap-2"></div>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "خدمة PayExpress"
                        : "PayExpress"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {i18n.language === "ar" ? "خدمة Forever" : "Forever"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {i18n.language === "ar" ? "ONCF" : "ONCF"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "الطرق السيارة بالمغرب - تعبئة جواز"
                        : "Recharge Jawaz"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "أداء الإعلانات القانونية"
                        : "Annonces Légales"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {i18n.language === "ar" ? "خدمة Rokhas" : "Rokhas"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      7 {i18n.language === "ar" ? "درهم" : "Dhs"}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* Fifth Table - COMPTE DE PAIEMENT */}
            <div className="bg-white">
              <h3
                className="text-sm font-bold uppercase tracking-wide text-barid-brown mb-4"
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                  textAlign: i18n.language === "ar" ? "right" : "left",
                }}
              >
                {t("grilleTarifairePage.paymentAccountServices.title")}
              </h3>

              <Table className="w-full border-collapse mb-6">
                <TableHeader>
                  <TableRow className="border-b border-gray-200">
                    <TableHead
                      className="px-4 py-3 border-0"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      <span
                        className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {i18n.language === "ar" ? "الخدمة" : "Service"}
                      </span>
                    </TableHead>
                    <TableHead
                      className="px-4 py-3 border-0"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      <span
                        className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {t("grilleTarifairePage.nationalTransfer.headers.fees")}
                      </span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "فتح حساب الأداء"
                        : "Ouverture de compte et frais de tenue de compte"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  {i18n.language === "ar" && (
                    <TableRow className="border-b border-gray-100">
                      <TableCell
                        className="px-4 py-2 text-sm text-gray-700"
                        style={{
                          textAlign: "right",
                          direction: "rtl",
                          fontFamily: "Cairo, Arial, sans-serif",
                        }}
                      >
                        مصاريف مسك الحساب
                      </TableCell>
                      <TableCell
                        className="px-4 py-2 text-sm text-gray-700"
                        style={{
                          textAlign: "right",
                          direction: "rtl",
                          fontFamily: "Cairo, Arial, sans-serif",
                        }}
                      >
                        {t("grilleTarifairePage.nationalTransfer.free")}
                      </TableCell>
                    </TableRow>
                  )}
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "توطين الأجرة"
                        : "Domiciliation de salaire"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "الاطلاع على الرصيد أو على تاريخ العمليات"
                        : "Consultation de solde ou historique des opérations"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "طلب شهادة كشف الهوية البنكية RIB"
                        : "Demande de RIB et relevé"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  {i18n.language === "ar" && (
                    <TableRow className="border-b border-gray-100">
                      <TableCell
                        className="px-4 py-2 text-sm text-gray-700"
                        style={{
                          textAlign: "right",
                          direction: "rtl",
                          fontFamily: "Cairo, Arial, sans-serif",
                        }}
                      >
                        طلب كشف الحساب
                      </TableCell>
                      <TableCell
                        className="px-4 py-2 text-sm text-gray-700"
                        style={{
                          textAlign: "right",
                          direction: "rtl",
                          fontFamily: "Cairo, Arial, sans-serif",
                        }}
                      >
                        {t("grilleTarifairePage.nationalTransfer.free")}
                      </TableCell>
                    </TableRow>
                  )}
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "إعادة تعيين الرمز السري"
                        : "Réinitialisation du code confidentiel"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "تغيير رقم الهاتف"
                        : "Changement du numéro de téléphone mobile"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "غلق الحساب"
                        : "Fermeture de compte"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>

                  {/* ENCAISSEMENT MANDAT PAR CANAL MOBILE section inside the same table with orange background */}
                  <TableRow>
                    <TableCell
                      className="px-4 py-2 text-sm font-semibold text-barid-brown"
                      colSpan={2}
                    >
                      <div
                        className="bg-barid-orange text-white font-bold text-xs uppercase px-3 py-1 rounded-full w-fit"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {i18n.language === "ar"
                          ? "استقبال تحويل مالي عبر الهاتف"
                          : "ENCAISSEMENT MANDAT PAR CANAL MOBILE"}
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "استقبال تحويل وطني"
                        : "Encaissement Mandat National"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "استقبال تحويل دولي"
                        : "Encaissement Mandat International"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>

                  {/* TRANSFERT ET VIREMENT section inside the same table with orange background */}
                  <TableRow>
                    <TableCell
                      className="px-4 py-2 text-sm font-semibold text-barid-brown"
                      colSpan={2}
                    >
                      <div
                        className={`flex items-center justify-between ${
                          i18n.language === "ar" ? "flex-row-reverse" : ""
                        }`}
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                        }}
                      >
                        <span
                          className="bg-barid-orange text-white font-bold text-xs uppercase px-3 py-1 rounded-full"
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                          }}
                        >
                          {t(
                            "grilleTarifairePage.paymentAccountServices.transferAndRemittance"
                          )}
                        </span>
                        <img
                          alt="Transfert"
                          className="w-auto h-16 object-contain flex-shrink-0"
                          src="/lovable-uploads/14f16754-d3eb-4edf-a210-86a88060af54.png"
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "التحويل من تطبيق إلى تطبيق بريد باي"
                        : "Transfert mobile vers mobile Barid Pay"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      7 {i18n.language === "ar" ? "درهم" : "Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "تحويل من حساب إلى حساب البنك البريدي/بريد كاش"
                        : "Transfert Compte vers compte ABB/BC"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      7 {i18n.language === "ar" ? "درهم" : "Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "تحويل من حساب إلى حساب بنك آخر"
                        : "Transfert compteverscompteconfrère"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      10 {i18n.language === "ar" ? "درهم" : "Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "استقبال تحولي مالي"
                        : "Virement reçu"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      8 {i18n.language === "ar" ? "درهم" : "Dhs"}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              {/* DÉPÔT SUR COMPTE EN AGENCE Section */}
              <h4
                className="text-lg font-bold text-barid-orange uppercase mb-4"
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                  textAlign: i18n.language === "ar" ? "right" : "left",
                }}
              >
                {t(
                  "grilleTarifairePage.paymentAccountServices.sections.depositOnAccount.title"
                )}
              </h4>

              <Table className="w-full border-collapse">
                <TableHeader>
                  <TableRow className="border-b border-gray-200">
                    <TableHead className="px-4 py-3 text-left border-0">
                      <span
                        className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {i18n.language === "ar"
                          ? "الإيداع على الحساب في الوكالة"
                          : "Dépôt sur compte en agence"}
                      </span>
                    </TableHead>
                    <TableHead className="px-4 py-3 text-left border-0">
                      <span
                        className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {i18n.language === "ar"
                          ? "الإيداع على الحساب من قبل صاحب الحساب"
                          : "Dépôt sur compte par le titulaire"}
                      </span>
                    </TableHead>
                    <TableHead className="px-4 py-3 text-left border-0">
                      <span
                        className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {i18n.language === "ar"
                          ? "الإيداع على الحساب من قبل شخص ثالث"
                          : "Dépôt sur compte par personne tiers"}
                      </span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {i18n.language === "ar" ? "0 - 200 درهم" : "0 à 200 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700 text-right"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {i18n.language === "ar" ? "مجانا*" : "Gratuit*"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700 text-right"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {i18n.language === "ar" ? "15 درهم" : "15 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "201 - 500 درهم"
                        : "201 - 500 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700 text-right"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {i18n.language === "ar" ? "مجانا*" : "Gratuit*"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700 text-right"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {i18n.language === "ar" ? "25 درهم" : "25 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "501 - 1000 درهم"
                        : "501 à 1 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700 text-right"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {i18n.language === "ar" ? "مجانا*" : "Gratuit*"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700 text-right"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {i18n.language === "ar" ? "30 درهم" : "30 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "1001 - 2000 درهم"
                        : "1 001 à 2 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700 text-right"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {i18n.language === "ar" ? "مجانا*" : "Gratuit*"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700 text-right"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {i18n.language === "ar" ? "30 درهم" : "30 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "2001 - 3000 درهم"
                        : "2 001 à 3 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700 text-right"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {i18n.language === "ar" ? "مجانا*" : "Gratuit*"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700 text-right"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {i18n.language === "ar" ? "40 درهم" : "40 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "3001 - 4000 درهم"
                        : "3 001 à 4 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700 text-right"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {i18n.language === "ar" ? "مجانا*" : "Gratuit*"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700 text-right"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {i18n.language === "ar" ? "40 درهم" : "40 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "4001 - 5000 درهم"
                        : "4 001 à 5 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700 text-right"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {i18n.language === "ar" ? "مجانا*" : "Gratuit*"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700 text-right"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {i18n.language === "ar" ? "45 درهم" : "45 Dhs"}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <p
                className="text-xs text-gray-500 mt-2"
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
                  ? "*درهم واحد واجبات التنبر"
                  : "*Hors de frais de timbre"}
              </p>
            </div>

            {/* RETRAIT SUR COMPTE EN AGENCE Section */}
            <div className="bg-white">
              <Table className="w-full border-collapse">
                <TableHeader>
                  <TableRow className="border-b border-gray-200">
                    <TableHead className="px-4 py-3 text-left border-0">
                      <span
                        className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {i18n.language === "ar"
                          ? "السحب من الحساب في الوكالة"
                          : "Retrait sur compte en agence"}
                      </span>
                    </TableHead>
                    <TableHead className="px-4 py-3 text-right border-0">
                      <div className="flex items-center justify-end gap-2">
                        <img
                          alt="Retrait"
                          className="w-auto h-16 object-contain flex-shrink-0"
                          src="/lovable-uploads/379641fb-d82c-4d51-a01b-43ea87d0dc4c.png"
                        />
                        <span className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block">
                          Tarif
                        </span>
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {i18n.language === "ar" ? "0 - 200 درهم" : "0 à 200 Dhs"}
                    </TableCell>
                    <TableCell className="px-4 py-2 text-sm text-gray-700 text-right">
                      {i18n.language === "ar" ? "2 درهم" : "2 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "201 - 500 درهم"
                        : "201 - 500 Dhs"}
                    </TableCell>
                    <TableCell className="px-4 py-2 text-sm text-gray-700 text-right">
                      {i18n.language === "ar" ? "5 درهم" : "5 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "501 - 1000 درهم"
                        : "501 à 1 000 Dhs"}
                    </TableCell>
                    <TableCell className="px-4 py-2 text-sm text-gray-700 text-right">
                      {i18n.language === "ar" ? "10 درهم" : "10 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "1001 - 2000 درهم"
                        : "1 001 à 2 000 Dhs"}
                    </TableCell>
                    <TableCell className="px-4 py-2 text-sm text-gray-700 text-right">
                      {i18n.language === "ar" ? "16 درهم" : "16 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "2001 - 3000 درهم"
                        : "2 001 à 3 000 Dhs"}
                    </TableCell>
                    <TableCell className="px-4 py-2 text-sm text-gray-700 text-right">
                      {i18n.language === "ar" ? "20 درهم" : "20 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "3001 - 4000 درهم"
                        : "3 001 à 4 000 Dhs"}
                    </TableCell>
                    <TableCell className="px-4 py-2 text-sm text-gray-700 text-right">
                      {i18n.language === "ar" ? "30 درهم" : "30 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "4001 - 5000 درهم"
                        : "4 001 à 5 000 Dhs"}
                    </TableCell>
                    <TableCell className="px-4 py-2 text-sm text-gray-700 text-right">
                      {i18n.language === "ar" ? "40 درهم" : "40 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "5001 - 6000 درهم"
                        : "5 001 à 6 000 Dhs"}
                    </TableCell>
                    <TableCell className="px-4 py-2 text-sm text-gray-700 text-right">
                      {i18n.language === "ar" ? "50 درهم" : "50 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "6001 - 7000 درهم"
                        : "6 001 à 7 000 Dhs"}
                    </TableCell>
                    <TableCell className="px-4 py-2 text-sm text-gray-700 text-right">
                      {i18n.language === "ar" ? "60 درهم" : "60 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "7001 - 8000 درهم"
                        : "7 001 à 8 000 Dhs"}
                    </TableCell>
                    <TableCell className="px-4 py-2 text-sm text-gray-700 text-right">
                      {i18n.language === "ar" ? "65 درهم" : "65 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "8001 - 10000 درهم"
                        : "8 001 à 10 000 Dhs"}
                    </TableCell>
                    <TableCell className="px-4 py-2 text-sm text-gray-700 text-right">
                      {i18n.language === "ar" ? "75 درهم" : "75 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "10001 - 15000 درهم"
                        : "10 001 à 15 000 Dhs"}
                    </TableCell>
                    <TableCell className="px-4 py-2 text-sm text-gray-700 text-right">
                      {i18n.language === "ar" ? "85 درهم" : "85 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "15001 - 20000 درهم"
                        : "15 001 à 20 000 Dhs"}
                    </TableCell>
                    <TableCell className="px-4 py-2 text-sm text-gray-700 text-right">
                      {i18n.language === "ar" ? "90 درهم" : "90 Dhs"}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Right Column - Contains TARIFS DE L'ÉMISSION MOBILE, LES SERVICES LIÉS À LA CARTE DE PAIEMENT FISSA3, RECHARGE COMPTE PAR CARTE MONÉTIQUE, and AMANA */}
          <div className="space-y-8">
            {/* First Right Table - TARIFS DE L'ÉMISSION MOBILE VERS AGENCE OU VERS GAB « RETRAIT CARDLESS» */}
            <div className="bg-white">
              <h3
                className="text-sm font-bold text-orange-500 uppercase tracking-wide mb-4"
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                  textAlign: i18n.language === "ar" ? "right" : "left",
                }}
              >
                {t("grilleTarifairePage.mobileEmission.title")}
              </h3>

              <Table className="w-full border-collapse">
                <TableHeader>
                  <TableRow className="border-b border-gray-200">
                    <TableHead
                      className="px-4 py-3 border-0"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      <span
                        className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {t(
                          "grilleTarifairePage.mobileEmission.headers.amountRange"
                        )}
                      </span>
                    </TableHead>
                    <TableHead
                      className="px-4 py-3 border-0"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      <span
                        className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {t("grilleTarifairePage.mobileEmission.headers.fees")}
                      </span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {i18n.language === "ar" ? "0 - 50 درهم" : "0 à 50 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      3 {i18n.language === "ar" ? "درهم" : "Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "51 - 100 درهم"
                        : "51 à 100 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      5 {i18n.language === "ar" ? "درهم" : "Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "101 - 200 درهم"
                        : "101 à 200 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      15 {i18n.language === "ar" ? "درهم" : "Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "201 - 500 درهم"
                        : "201 - 500 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      24 {i18n.language === "ar" ? "درهم" : "Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "501 - 1,000 درهم"
                        : "501 à 1 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      27 {i18n.language === "ar" ? "درهم" : "Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "1,001 - 2,000 درهم"
                        : "1 001 à 2 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      32 {i18n.language === "ar" ? "درهم" : "Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "2,001 - 3,000 درهم"
                        : "2 001 à 3 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      32 {i18n.language === "ar" ? "درهم" : "Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "3,001 - 4,000 درهم"
                        : "3 001 à 4 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      38 {i18n.language === "ar" ? "درهم" : "Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "4,001 - 5,000 درهم"
                        : "4 001 à 5 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      38 {i18n.language === "ar" ? "درهم" : "Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "5,001 - 10,000 درهم"
                        : "5 001 à 10 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      45 {i18n.language === "ar" ? "درهم" : "Dhs"}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* Second Right Table - LES SERVICES LIÉS À LA CARTE DE PAIEMENT FISSA3 */}
            <div className="bg-white">
              <h3
                className="text-sm font-bold uppercase tracking-wide text-barid-brown mb-4"
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                  textAlign: i18n.language === "ar" ? "right" : "left",
                }}
              >
                {t("grilleTarifairePage.fissa3Card.title")}
              </h3>

              <Table className="w-full border-collapse">
                <TableHeader>
                  <TableRow className="border-b border-gray-200">
                    <TableHead
                      className="px-4 py-3 border-0"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      <span
                        className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {i18n.language === "ar" ? "الخدمة" : "Service"}
                      </span>
                    </TableHead>
                    <TableHead
                      className="px-4 py-3 border-0"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      <span
                        className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {t("grilleTarifairePage.nationalTransfer.headers.fees")}
                      </span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "اشتراك بطاقة فيسا 3"
                        : "Souscription carte Fissa3"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      60{" "}
                      {i18n.language === "ar" ? "درهم / سنتان" : "Dhs / 2 Ans"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "الاعتراض على البطاقة وإعادة تعيين الرقم السري"
                        : "opposition sur carte et réinitialisation du PIN"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "إعادة حساب الرقم السري"
                        : "Recalcul PIN"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* Third Right Table - RECHARGE COMPTE PAR CARTE MONÉTIQUE */}
            <div className="bg-white">
              <h3
                className="text-sm font-bold uppercase tracking-wide text-barid-brown mb-4"
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                  textAlign: i18n.language === "ar" ? "right" : "left",
                }}
              >
                {t("grilleTarifairePage.moneticCardRecharge.title")}
              </h3>

              <Table className="w-full border-collapse">
                <TableHeader>
                  <TableRow className="border-b border-gray-200">
                    <TableHead
                      className="px-4 py-3 border-0"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      <span
                        className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {t(
                          "grilleTarifairePage.nationalTransfer.headers.amountRange"
                        )}
                      </span>
                    </TableHead>
                    <TableHead
                      className="px-4 py-3 border-0"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      <span
                        className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {t("grilleTarifairePage.nationalTransfer.headers.fees")}
                      </span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {i18n.language === "ar" ? "0 - 500 درهم" : "0 à 500 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      5 {i18n.language === "ar" ? "درهم" : "Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "501 - 1,000 درهم"
                        : "501 à 1 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      6 {i18n.language === "ar" ? "درهم" : "Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "1,001 - 2,000 درهم"
                        : "1 001 à 2 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      12 {i18n.language === "ar" ? "درهم" : "Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "2,001 - 3,000 درهم"
                        : "2 001 à 3 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      18 {i18n.language === "ar" ? "درهم" : "Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "3,001 - 4,000 درهم"
                        : "3 001 à 4 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      22 {i18n.language === "ar" ? "درهم" : "Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
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
                        ? "4,001 - 5,000 درهم"
                        : "4 001 à 5 000 Dhs"}
                    </TableCell>
                    <TableCell
                      className="px-4 py-2 text-sm text-gray-700"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      28 {i18n.language === "ar" ? "درهم" : "Dhs"}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              {/* Orange separator line at the bottom */}
              <Separator className="bg-barid-orange h-1 mt-4" />
            </div>

            {/* SERVICE AMANA Section */}
            <div className="bg-white">
              <div
                className={`flex items-center justify-between mb-4 ${
                  i18n.language === "ar" ? "flex-row-reverse" : ""
                }`}
                style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
              >
                <h3
                  className="text-lg font-bold uppercase tracking-wide text-barid-brown"
                  style={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                    textAlign: i18n.language === "ar" ? "right" : "left",
                  }}
                >
                  {i18n.language === "ar" ? "خدمة أمانة" : "SERVICE AMANA"}
                </h3>
                <img
                  alt="Amana"
                  className="w-auto h-10 object-contain flex-shrink-0"
                  src="/lovable-uploads/a3f34b46-dc23-4991-8ef1-69b6655825b7.png"
                />
              </div>

              {/* AMANA E-COMMERCE Subsection */}
              <div className="mb-8">
                <h4
                  className="text-lg font-bold text-barid-orange uppercase mb-4"
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
                    ? "أمانة التجارة الإلكترونية"
                    : "AMANA E-COMMERCE"}
                </h4>

                <Table className="w-full border-collapse">
                  <TableHeader>
                    <TableRow className="border-b border-gray-200">
                      <TableHead
                        className="px-4 py-3 text-left border-0"
                        rowSpan={2}
                      >
                        <span className="text-sm font-semibold text-gray-600">
                          Tranche de poids
                        </span>
                      </TableHead>
                      <TableHead
                        className="px-4 py-3 text-center border-0"
                        colSpan={2}
                      >
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-600">
                            Intra-ville
                          </div>
                        </div>
                      </TableHead>
                      <TableHead
                        className="px-4 py-3 text-center border-0"
                        colSpan={2}
                      >
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-600">
                            Inter-ville
                          </div>
                        </div>
                      </TableHead>
                    </TableRow>
                    <TableRow className="border-b border-gray-200">
                      <TableHead className="px-4 py-3 text-center border-0">
                        <span
                          className="text-sm font-semibold text-gray-600"
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                          }}
                        >
                          {i18n.language === "ar"
                            ? "التوصيل إلى المنزل"
                            : "Livraison à domicile"}
                        </span>
                      </TableHead>
                      <TableHead className="px-4 py-3 text-center border-0">
                        <span
                          className="text-sm font-semibold text-gray-600"
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                          }}
                        >
                          {i18n.language === "ar"
                            ? "التوصيل إلى نقطة الاستلام"
                            : "Livraison point de relais"}
                        </span>
                      </TableHead>
                      <TableHead className="px-4 py-3 text-center border-0">
                        <span
                          className="text-sm font-semibold text-gray-600"
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                          }}
                        >
                          {i18n.language === "ar"
                            ? "التوصيل إلى المنزل"
                            : "Livraison à domicile"}
                        </span>
                      </TableHead>
                      <TableHead className="px-4 py-3 text-center border-0">
                        <span
                          className="text-sm font-semibold text-gray-600"
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                          }}
                        >
                          {i18n.language === "ar"
                            ? "التوصيل إلى نقطة الاستلام"
                            : "Livraison point de relais"}
                        </span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-b border-gray-100">
                      <TableCell
                        className="px-4 py-2 text-sm text-gray-700"
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
                          ? "0,01 - 2 كيلو"
                          : "0,01 - 2 Kg"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                        {i18n.language === "ar" ? "30 درهم" : "30 Dhs"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                        {i18n.language === "ar" ? "25 درهم" : "25 Dhs"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                        {i18n.language === "ar" ? "40 درهم" : "40 Dhs"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                        {i18n.language === "ar" ? "35 درهم" : "35 Dhs"}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-100">
                      <TableCell
                        className="px-4 py-2 text-sm text-gray-700"
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
                          ? "2,01 - 5 كيلو"
                          : "2,01 - 5 Kg"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                        {i18n.language === "ar" ? "35 درهم" : "35 Dhs"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                        {i18n.language === "ar" ? "30 درهم" : "30 Dhs"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                        {i18n.language === "ar" ? "45 درهم" : "45 Dhs"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                        {i18n.language === "ar" ? "40 درهم" : "40 Dhs"}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-100">
                      <TableCell
                        className="px-4 py-2 text-sm text-gray-700"
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
                          ? "5,01 - 10 كيلو"
                          : "5,01 - 10 Kg"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                        {i18n.language === "ar" ? "40 درهم" : "40 Dhs"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                        {i18n.language === "ar" ? "35 درهم" : "35 Dhs"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                        {i18n.language === "ar" ? "55 درهم" : "55 Dhs"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                        {i18n.language === "ar" ? "50 درهم" : "50 Dhs"}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-100">
                      <TableCell
                        className="px-4 py-2 text-sm text-gray-700"
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
                          ? "10,01 - 15 كيلو"
                          : "10,01 - 15 Kg"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                        {i18n.language === "ar" ? "55 درهم" : "55 Dhs"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                        {i18n.language === "ar" ? "50 درهم" : "50 Dhs"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                        {i18n.language === "ar" ? "75 درهم" : "75 Dhs"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                        {i18n.language === "ar" ? "70 درهم" : "70 Dhs"}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        className="px-4 py-2 text-sm text-gray-700"
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
                          ? "15,01 - 31 كيلو"
                          : "15,01 - 31 Kg"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                        {i18n.language === "ar" ? "75 درهم" : "75 Dhs"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                        {i18n.language === "ar" ? "70 درهم" : "70 Dhs"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                        {i18n.language === "ar" ? "95 درهم" : "95 Dhs"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                        {i18n.language === "ar" ? "90 درهم" : "90 Dhs"}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              {/* AMANA GRAND PUBLIC Subsection */}
              <div className="mb-8">
                <h4
                  className="text-lg font-bold text-barid-orange uppercase mb-4"
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
                    ? "أمانة الجمهور العام"
                    : "AMANA GRAND PUBLIC"}
                </h4>

                <Table className="w-full border-collapse">
                  <TableHeader>
                    <TableRow className="border-b border-gray-200">
                      <TableHead className="px-4 py-3 text-left border-0">
                        <span
                          className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                          }}
                        >
                          {i18n.language === "ar"
                            ? "شرائح الوزن"
                            : "Tranches de poids"}
                        </span>
                      </TableHead>
                      <TableHead className="px-4 py-3 text-right border-0">
                        <span className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block">
                          Tarif
                        </span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-b border-gray-100">
                      <TableCell
                        className="px-4 py-2 text-sm text-gray-700"
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
                          ? "0,01 - 1 كيلو"
                          : "0,01 - 1 Kg"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-right">
                        {i18n.language === "ar" ? "55 درهم" : "55 Dhs"}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-100">
                      <TableCell
                        className="px-4 py-2 text-sm text-gray-700"
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
                          ? "1,01 - 5 كيلو"
                          : "1,01 - 5 Kg"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-right">
                        {i18n.language === "ar" ? "58 درهم" : "58 Dhs"}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-100">
                      <TableCell
                        className="px-4 py-2 text-sm text-gray-700"
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
                          ? "5,01 - 10 كيلو"
                          : "5,01 - 10 Kg"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-right">
                        {i18n.language === "ar" ? "65 درهم" : "65 Dhs"}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-100">
                      <TableCell
                        className="px-4 py-2 text-sm text-gray-700"
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
                          ? "10,01 - 15 كيلو"
                          : "10,01 - 15 Kg"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-right">
                        {i18n.language === "ar" ? "85 درهم" : "85 Dhs"}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-100">
                      <TableCell
                        className="px-4 py-2 text-sm text-gray-700"
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
                          ? "15,01 - 25 كيلو"
                          : "15,01 - 25 Kg"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-right">
                        {i18n.language === "ar" ? "111 درهم" : "111 Dhs"}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        className="px-4 py-2 text-sm text-gray-700"
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
                          ? "25,01 - 31 كيلو"
                          : "25,01 - 31 Kg"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-right">
                        {i18n.language === "ar" ? "120 درهم" : "120 Dhs"}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              {/* AMANA 7DAK (SHOP TO SHOP) Subsection */}
              <div>
                <h4
                  className="text-lg font-bold text-barid-orange uppercase mb-4"
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
                    ? "أمانة 7 أيام (من متجر إلى متجر)"
                    : "AMANA 7DAK ( SHOP TO SHOP)"}
                </h4>

                <Table className="w-full border-collapse">
                  <TableHeader>
                    <TableRow className="border-b border-gray-200">
                      <TableHead className="px-4 py-3 text-left border-0">
                        <span
                          className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                          }}
                        >
                          {i18n.language === "ar"
                            ? "شريحة الوزن"
                            : "Tranche de poids"}
                        </span>
                      </TableHead>
                      <TableHead className="px-4 py-3 text-center border-0">
                        <span
                          className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                          }}
                        >
                          {i18n.language === "ar"
                            ? "داخل المدينة"
                            : "IntraVille"}
                        </span>
                      </TableHead>
                      <TableHead className="px-4 py-3 text-center border-0">
                        <span
                          className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                          }}
                        >
                          {i18n.language === "ar" ? "بين المدن" : "InterVille"}
                        </span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-b border-gray-100">
                      <TableCell
                        className="px-4 py-2 text-sm text-gray-700"
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
                          ? "0,01 - 2 كيلو"
                          : "0,01 à 2 Kg"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                        {i18n.language === "ar" ? "30 درهم" : "30 Dhs"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                        {i18n.language === "ar" ? "40 درهم" : "40 Dhs"}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-100">
                      <TableCell
                        className="px-4 py-2 text-sm text-gray-700"
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
                          ? "2,01 - 5 كيلو"
                          : "2,01 à 5 Kg"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                        {i18n.language === "ar" ? "35 درهم" : "35 Dhs"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                        {i18n.language === "ar" ? "45 درهم" : "45 Dhs"}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-100">
                      <TableCell
                        className="px-4 py-2 text-sm text-gray-700"
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
                          ? "5,01 - 10 كيلو"
                          : "5,01 à 10 Kg"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                        {i18n.language === "ar" ? "45 درهم" : "45 Dhs"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                        {i18n.language === "ar" ? "55 درهم" : "55 Dhs"}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        className="px-4 py-2 text-sm text-gray-700"
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
                          ? "10,01 - 15 كيلو"
                          : "10,01 à 15 Kg"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                        {i18n.language === "ar" ? "55 درهم" : "55 Dhs"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                        {i18n.language === "ar" ? "65 درهم" : "65 Dhs"}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Orange separator line */}
            <Separator className="bg-barid-orange h-1" />

            {/* PRODUITS ORGANISMES/PARTENAIRES Section */}
            <div className="bg-white">
              <div className="flex items-center justify-between mb-4">
                <h3
                  className="text-lg font-bold uppercase tracking-wide text-barid-brown"
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
                    ? "منتجات الهيئات/الشركاء"
                    : "PRODUITS ORGANISMES/PARTENAIRES"}
                </h3>
                <img
                  alt="NARSA"
                  className="w-auto h-16 object-contain flex-shrink-0"
                  src="/lovable-uploads/2d65c624-f15f-4bdb-8009-d452add4a8a4.png"
                />
              </div>

              {/* Produits Organismes Subsection */}
              <div className="mb-8">
                <Table className="w-full border-collapse">
                  <TableHeader>
                    <TableRow className="border-b border-gray-200">
                      <TableHead className="px-4 py-3 text-left border-0">
                        <span
                          className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                          }}
                        >
                          {i18n.language === "ar"
                            ? "منتجات الهيئات"
                            : "Produits Organismes"}
                        </span>
                      </TableHead>
                      <TableHead className="px-4 py-3 text-right border-0">
                        <span className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block">
                          Tarif
                        </span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-b border-gray-100">
                      <TableCell
                        className="px-4 py-2 text-sm text-gray-700"
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
                          ? "رخصة القيادة"
                          : "Permis de conduire"}
                      </TableCell>
                      <TableCell
                        className="px-4 py-2 text-sm text-gray-700 text-right"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                          textAlign: i18n.language === "ar" ? "right" : "left",
                        }}
                      >
                        {t("grilleTarifairePage.nationalTransfer.free")}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-100">
                      <TableCell
                        className="px-4 py-2 text-sm text-gray-700"
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
                          ? "بطاقة السيارة"
                          : "Carte grise"}
                      </TableCell>
                      <TableCell
                        className="px-4 py-2 text-sm text-gray-700 text-right"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                          textAlign: i18n.language === "ar" ? "right" : "left",
                        }}
                      >
                        {t("grilleTarifairePage.nationalTransfer.free")}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        className="px-4 py-2 text-sm text-gray-700"
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
                          ? "الشكوى من المخالفات"
                          : "Réclamation sur les infractions"}
                      </TableCell>
                      <TableCell
                        className="px-4 py-2 text-sm text-gray-700 text-right"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                          textAlign: i18n.language === "ar" ? "right" : "left",
                        }}
                      >
                        {t("grilleTarifairePage.nationalTransfer.free")}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              {/* Orange separator line */}
              <Separator className="bg-barid-orange h-1" />

              {/* ASSURANCE INCLUSIVE Section */}
              <div className="bg-white">
                <h3
                  className="text-lg font-bold uppercase tracking-wide text-barid-orange mb-4 mt-8"
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
                    ? "التأمين الشامل:"
                    : "ASSURANCE INCLUSIVE :"}
                </h3>

                {/* Hospitalisation Subsection */}
                <div className="mb-6">
                  <h4
                    className="text-sm font-bold text-gray-800 mb-4"
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
                      ? "الاستشفاء:"
                      : "Hospitalisation :"}
                  </h4>

                  <Table className="w-full border-collapse">
                    <TableHeader>
                      <TableRow className="border-b border-gray-200">
                        <TableHead className="px-4 py-3 text-center border-0">
                          <span
                            className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                            style={{
                              direction: i18n.language === "ar" ? "rtl" : "ltr",
                              fontFamily:
                                i18n.language === "ar"
                                  ? "Cairo, Arial, sans-serif"
                                  : "Inter, Arial, sans-serif",
                            }}
                          >
                            {i18n.language === "ar" ? "الصيغة" : "Formule"}
                          </span>
                        </TableHead>
                        <TableHead className="px-4 py-3 text-center border-0">
                          <span
                            className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                            style={{
                              direction: i18n.language === "ar" ? "rtl" : "ltr",
                              fontFamily:
                                i18n.language === "ar"
                                  ? "Cairo, Arial, sans-serif"
                                  : "Inter, Arial, sans-serif",
                            }}
                          >
                            {i18n.language === "ar"
                              ? "التعويض اليومي"
                              : "Indemnité journalière"}
                          </span>
                        </TableHead>
                        <TableHead className="px-4 py-3 text-center border-0">
                          <span className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block">
                            Tarif
                          </span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="border-b border-gray-100">
                        <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                          1
                        </TableCell>
                        <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                          {i18n.language === "ar" ? "100 درهم" : "100 Dhs"}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                          {i18n.language === "ar" ? "80 درهم" : "80 Dhs"}
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-b border-gray-100">
                        <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                          2
                        </TableCell>
                        <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                          {i18n.language === "ar" ? "200 درهم" : "200 Dhs"}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                          {i18n.language === "ar" ? "116 درهم" : "116 Dhs"}
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-b border-gray-100">
                        <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                          3
                        </TableCell>
                        <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                          {i18n.language === "ar" ? "250 درهم" : "250 Dhs"}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                          {i18n.language === "ar" ? "171.5 درهم" : "171.5 Dhs"}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                          4
                        </TableCell>
                        <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                          {i18n.language === "ar" ? "400 درهم" : "400 Dhs"}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                          {i18n.language === "ar" ? "273 درهم" : "273 Dhs"}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                {/* Obsèques Subsection */}
                <div className="mb-6">
                  <h4
                    className="text-sm font-bold text-gray-800 mb-4"
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                      textAlign: i18n.language === "ar" ? "right" : "left",
                    }}
                  >
                    {i18n.language === "ar" ? "الجنائز:" : "Obsèques :"}
                  </h4>

                  <Table className="w-full border-collapse">
                    <TableHeader>
                      <TableRow className="border-b border-gray-200">
                        <TableHead className="px-4 py-3 text-center border-0">
                          <span
                            className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                            style={{
                              direction: i18n.language === "ar" ? "rtl" : "ltr",
                              fontFamily:
                                i18n.language === "ar"
                                  ? "Cairo, Arial, sans-serif"
                                  : "Inter, Arial, sans-serif",
                            }}
                          >
                            {i18n.language === "ar" ? "الصيغة" : "Formule"}
                          </span>
                        </TableHead>
                        <TableHead className="px-4 py-3 text-center border-0">
                          <span
                            className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block"
                            style={{
                              direction: i18n.language === "ar" ? "rtl" : "ltr",
                              fontFamily:
                                i18n.language === "ar"
                                  ? "Cairo, Arial, sans-serif"
                                  : "Inter, Arial, sans-serif",
                            }}
                          >
                            {i18n.language === "ar" ? "التعويض" : "Indemnité"}
                          </span>
                        </TableHead>
                        <TableHead className="px-4 py-3 text-center border-0">
                          <span className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block">
                            Tarif
                          </span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="border-b border-gray-100">
                        <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                          1
                        </TableCell>
                        <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                          {i18n.language === "ar" ? "5000 درهم" : "5000 Dhs"}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                          {i18n.language === "ar" ? "45 درهم" : "45 Dhs"}
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-b border-gray-100">
                        <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                          2
                        </TableCell>
                        <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                          {i18n.language === "ar" ? "10000 درهم" : "10 000 Dhs"}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                          {i18n.language === "ar" ? "52 درهم" : "52 Dhs"}
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-b border-gray-100">
                        <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                          3
                        </TableCell>
                        <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                          {i18n.language === "ar" ? "15000 درهم" : "15 000 Dhs"}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                          {i18n.language === "ar" ? "88 درهم" : "88 Dhs"}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                          4
                        </TableCell>
                        <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                          {i18n.language === "ar" ? "20000 درهم" : "20 000 Dhs"}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                          {i18n.language === "ar" ? "112 درهم" : "112 Dhs"}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                {/* Epargne retraite Subsection */}
                <div>
                  <h4
                    className="text-sm font-bold text-gray-800 mb-2"
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
                      ? "التوفير للتقاعد:"
                      : "Epargne retraite :"}
                  </h4>
                  <p
                    className="text-sm text-gray-700"
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
                      ? "مساهمة شهرية 50 درهم."
                      : "Cotisation mensuelle de 50 dhs."}
                  </p>
                </div>
              </div>
            </div>

            {/* Orange separator line */}
            <Separator className="bg-barid-orange h-1" />

            {/* CNSS Section */}
            <div className="bg-white">
              <div className="flex items-center justify-between mb-4">
                <h3
                  className="text-lg font-bold uppercase tracking-wide text-barid-brown mt-8"
                  style={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                  }}
                >
                  {i18n.language === "ar"
                    ? "الصندوق الوطني للضمان الاجتماعي"
                    : "CNSS"}
                </h3>
                <img
                  alt="CNSS"
                  className="w-auto h-16 object-contain flex-shrink-0"
                  src="/lovable-uploads/b2480886-5398-4364-9c21-ba33317bfab6.png"
                />
              </div>

              {/* First CNSS Table */}
              <Table className="w-full border-collapse mb-6">
                <TableHeader>
                  <TableRow className="border-b border-gray-200">
                    <TableHead
                      className={`px-4 py-3 border-0 ${
                        i18n.language === "ar" ? "text-right" : "text-left"
                      }`}
                    >
                      <span className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block">
                        {i18n.language === "ar"
                          ? "منتجات الهيئات"
                          : "Produits Organismes"}
                      </span>
                    </TableHead>
                    <TableHead
                      className={`px-4 py-3 border-0 ${
                        i18n.language === "ar" ? "text-left" : "text-right"
                      }`}
                    >
                      <span className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block">
                        {t("grilleTarifairePage.nationalTransfer.headers.fees")}
                      </span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className={`px-4 py-2 text-sm text-gray-700 ${
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
                      {i18n.language === "ar"
                        ? "طلب التسجيل"
                        : "Demande d'immatriculation"}
                    </TableCell>
                    <TableCell
                      className={`px-4 py-2 text-sm text-gray-700 ${
                        i18n.language === "ar" ? "text-left" : "text-right"
                      }`}
                    >
                      {i18n.language === "ar" ? "12 درهم" : "12 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className={`px-4 py-2 text-sm text-gray-700 ${
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
                      <div>
                        {i18n.language === "ar"
                          ? "الصندوق الوطني للضمان الاجتماعي - التسجيل"
                          : "CNSS - Immatriculation"}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {i18n.language === "ar"
                          ? "إعلان الزوج : 7 درهم / عضو"
                          : "Déclaration conjoint : 7 Dhs / membre"}
                        <br />
                        {i18n.language === "ar"
                          ? "إعلان الطفل : 6 درهم / عضو"
                          : "Déclaration Enfant : 6 Dhs / membre"}
                      </div>
                    </TableCell>
                    <TableCell
                      className={`px-4 py-2 text-sm text-gray-700 ${
                        i18n.language === "ar" ? "text-left" : "text-right"
                      }`}
                    ></TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className={`px-4 py-2 text-sm text-gray-700 ${
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
                      {i18n.language === "ar"
                        ? "طباعة شهادة التسجيل"
                        : "Impression de certificat d'immatriculation"}
                    </TableCell>
                    <TableCell
                      className={`px-4 py-2 text-sm text-gray-700 ${
                        i18n.language === "ar" ? "text-left" : "text-right"
                      }`}
                    >
                      {i18n.language === "ar" ? "3 درهم" : "3 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className={`px-4 py-2 text-sm text-gray-700 ${
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
                      {i18n.language === "ar"
                        ? "الصندوق الوطني للضمان الاجتماعي - إيداع ملف المرض"
                        : "CNSS- dépôt de dossier maladie"}
                    </TableCell>
                    <TableCell
                      className={`px-4 py-2 text-sm text-gray-700 ${
                        i18n.language === "ar" ? "text-left" : "text-right"
                      }`}
                    >
                      {t("grilleTarifairePage.nationalTransfer.free")}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell
                      className={`px-4 py-2 text-sm text-gray-700 ${
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
                      {i18n.language === "ar"
                        ? "الصندوق الوطني للضمان الاجتماعي - مراقبة الحياة"
                        : "CNSS - Contrôle de vie"}
                    </TableCell>
                    <TableCell
                      className={`px-4 py-2 text-sm text-gray-700 ${
                        i18n.language === "ar" ? "text-left" : "text-right"
                      }`}
                    >
                      {i18n.language === "ar" ? "10 درهم" : "10 Dhs"}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              {/* Second CNSS Table - Paiement mandat CNSS */}
              <Table className="w-full border-collapse">
                <TableHeader>
                  <TableRow className="border-b border-gray-200">
                    <TableHead className="px-4 py-3 text-center border-0">
                      <span
                        className="text-sm font-semibold text-gray-700"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {i18n.language === "ar"
                          ? "دفع تحويل الصندوق الوطني للضمان الاجتماعي"
                          : "Paiement mandat CNSS"}
                      </span>
                    </TableHead>
                    <TableHead className="px-4 py-3 text-center border-0"></TableHead>
                  </TableRow>
                  <TableRow className="border-b border-gray-200">
                    <TableHead className="px-4 py-3 text-center border-0">
                      <span className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block">
                        {i18n.language === "ar"
                          ? "شرائح الإرسال"
                          : "Tranches montants"}
                      </span>
                    </TableHead>
                    <TableHead className="px-4 py-3 text-center border-0">
                      <span className="bg-barid-orange text-white font-bold text-xs uppercase px-4 py-2 rounded-full inline-block">
                        {t("grilleTarifairePage.nationalTransfer.headers.fees")}
                      </span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-gray-100">
                    <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                      {i18n.language === "ar"
                        ? "0 - 1000 درهم"
                        : "0 - 1 000 Dhs"}
                    </TableCell>
                    <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                      {i18n.language === "ar" ? "15 درهم" : "15 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                      {i18n.language === "ar"
                        ? "1001 - 3000 درهم"
                        : "1 001 - 3 000 Dhs"}
                    </TableCell>
                    <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                      {i18n.language === "ar" ? "25 درهم" : "25 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-100">
                    <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                      {i18n.language === "ar"
                        ? "3001 - 5000 درهم"
                        : "3 001 - 5 000 Dhs"}
                    </TableCell>
                    <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                      {i18n.language === "ar" ? "35 درهم" : "35 Dhs"}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                      {i18n.language === "ar"
                        ? "5001 - 10000 درهم"
                        : "5 001 - 10 000 Dhs"}
                    </TableCell>
                    <TableCell className="px-4 py-2 text-sm text-gray-700 text-center">
                      {i18n.language === "ar" ? "65 درهم" : "65 Dhs"}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p
            className="text-gray-600 mb-4"
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("grilleTarifairePage.footerText")}
          </p>
          <div className="flex justify-center items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/baridcashofficiel"
                className="w-6 h-6 bg-barid-orange rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors"
              >
                <i className="fab fa-instagram text-white text-sm"></i>
              </a>
              <span className="text-gray-600">baridcashofficiel</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/BaridCash"
                className="w-6 h-6 bg-barid-orange rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors"
              >
                <i className="fab fa-facebook text-white text-sm"></i>
              </a>
              <span className="text-gray-600">Barid Cash</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/barid-cash"
                className="w-6 h-6 bg-barid-orange rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors"
              >
                <i className="fab fa-linkedin text-white text-sm"></i>
              </a>
              <span className="text-gray-600">Barid Cash</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GrilleTarifaireContent;
