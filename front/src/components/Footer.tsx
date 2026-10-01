import React from "react";
import { Separator } from "./ui/separator";
import { useTranslation } from "react-i18next";
const Footer: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <footer className="bg-barid-brown text-white py-10">
      <div
        className={`container mx-auto px-4 ${
          i18n.language === "ar" ? "pb-8" : "pb-6"
        }`}
      >
        <div
          className={`grid grid-cols-1 md:grid-cols-4 gap-8 ${
            i18n.language === "ar" ? "pb-8" : "pb-4"
          }`}
        >
          {/* ISO Section */}
          <div className="relative">
            <img
              src="/lovable-uploads/7928ea57-78a5-40eb-812f-f1223316deff.png"
              alt="ISO 9001 Certification"
              className="h-10 mb-4"
            />
            <p
              className={`text-sm ${i18n.language === "ar" ? "pr-4" : ""}`}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("footer.iso")}
            </p>
            {/* Add vertical separator on desktop */}
            <div className="hidden md:block absolute right-0 top-0 h-full">
              <Separator orientation="vertical" className="bg-white h-full" />
            </div>
          </div>

          {/* ENTREPRISE Section with right border */}
          <div className="relative">
            <h4
              className={`text-lg font-semibold mb-3 ${
                i18n.language === "ar" ? "pr-4" : ""
              }`}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("footer.particulier")}
            </h4>
            <ul
              className={`space-y-2 ${i18n.language === "ar" ? "pr-4" : ""}`}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              <li>
                <a
                  href={i18n.language === "ar" ? "/ar/#services" : "/#services"}
                  className="hover:text-barid-orange transition-colors"
                >
                  {t("footer.services")}
                </a>
              </li>
              <li>
                <a
                  href={
                    i18n.language === "ar"
                      ? "/ar/devenez-mandataire"
                      : "/devenez-mandataire"
                  }
                  className="hover:text-barid-orange transition-colors"
                >
                  {t("footer.devenezMandataire")}
                </a>
              </li>
              <li>
                <a
                  href={
                    i18n.language === "ar"
                      ? "/ar/nous-connaitre"
                      : "/nous-connaitre"
                  }
                  className="hover:text-barid-orange transition-colors"
                >
                  {t("footer.nousConnaitre")}
                </a>
              </li>
              <li>
                <a
                  href={
                    i18n.language === "ar"
                      ? "/ar/assistance-client"
                      : "/assistance-client"
                  }
                  className="hover:text-barid-orange transition-colors"
                >
                  {t("footer.serviceClient")}
                </a>
              </li>
            </ul>
            {/* Vertical separator on desktop - changed to white */}
            <div className="hidden md:block absolute right-0 top-0 h-full">
              <Separator orientation="vertical" className="bg-white h-full" />
            </div>
          </div>

          {/* CONTACTEZ-NOUS Section with right border */}
          <div className="relative">
            <h4
              className={`text-lg font-semibold mb-3 ${
                i18n.language === "ar" ? "pr-4" : ""
              }`}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("footer.contactezNous")}
            </h4>
            <ul
              className={`space-y-2 ${i18n.language === "ar" ? "pr-4" : ""}`}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              <li className="flex items-center">
                <i
                  className={`fas fa-envelope ${
                    i18n.language === "ar" ? "ml-2" : "mr-2"
                  }`}
                ></i>
                <span className={i18n.language === "ar" ? "mr-2" : ""}>
                  {t("footer.email")}
                </span>
              </li>
              <li className="flex items-center">
                <i
                  className={`fas fa-phone ${
                    i18n.language === "ar" ? "ml-2" : "mr-2"
                  }`}
                ></i>
                <span
                  className={`phone-number ${
                    i18n.language === "ar" ? "mr-2" : ""
                  }`}
                >
                  {t("footer.phone")}
                </span>
              </li>
              <li className="flex items-start">
                <i
                  className={`fas fa-map-marker-alt ${
                    i18n.language === "ar" ? "ml-2" : "mr-2"
                  } mt-1`}
                ></i>
                <span className={i18n.language === "ar" ? "mr-2" : ""}>
                  {t("footer.address")}
                </span>
              </li>
            </ul>
            {/* Vertical separator on desktop - changed to white */}
            <div className="hidden md:block absolute right-0 top-0 h-full">
              <Separator orientation="vertical" className="bg-white h-full" />
            </div>
          </div>

          {/* SUIVEZ-NOUS Section (new grid column) */}
          <div className="flex flex-col">
            <h4
              className={`text-lg font-semibold mb-5 ${
                i18n.language === "ar" ? "pr-4" : ""
              }`}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("footer.suivezNous")}
            </h4>
            <div className="flex flex-wrap gap-3 max-w-full">
              <a
                href="https://ma.linkedin.com/company/baridcashofficiel"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-barid-orange p-2 rounded-sm hover:bg-opacity-80 transition-colors flex-shrink-0"
              >
                <i className="fab fa-linkedin text-white text-xl"></i>
              </a>
              <a
                href="https://www.instagram.com/baridcashofficiel/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-barid-orange p-2 rounded-sm hover:bg-opacity-80 transition-colors flex-shrink-0"
              >
                <i className="fab fa-instagram text-white text-xl"></i>
              </a>
              <a
                href="https://web.facebook.com/baridcashofficiel/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-barid-orange p-2 rounded-sm hover:bg-opacity-80 transition-colors flex-shrink-0"
              >
                <i className="fab fa-facebook text-white text-xl"></i>
              </a>
              <a
                href="https://www.youtube.com/@baridcashofficiel"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-barid-orange p-2 rounded-sm hover:bg-opacity-80 transition-colors flex-shrink-0"
              >
                <i className="fab fa-youtube text-white text-xl"></i>
              </a>
              <a
                href="https://www.tiktok.com/@baridcashofficiel"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-barid-orange p-2 rounded-sm hover:bg-opacity-80 transition-colors flex-shrink-0"
              >
                <i className="fab fa-tiktok text-white text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div
          className={`border-t border-gray-700 mt-8 text-center text-sm ${
            i18n.language === "ar" ? "pt-8" : "pt-6"
          }`}
        >
          <p
            className={`${i18n.language === "ar" ? "pr-6" : "pl-4"}`}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("footer.copyright")}{" "}
            <a href="#" className="hover:text-barid-orange transition-colors">
              {t("footer.conditions")}
            </a>{" "}
            et{" "}
            <a href="#" className="hover:text-barid-orange transition-colors">
              {t("footer.privacy")}
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
