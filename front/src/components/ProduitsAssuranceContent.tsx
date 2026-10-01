import React, { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

const ProduitsAssuranceContent: React.FC = () => {
  console.log("ProduitsAssuranceContent component is rendering");
  const { t, i18n } = useTranslation("common");
  const [currentSlide, setCurrentSlide] = useState(0);

  const insuranceProducts = [
    {
      id: 1,
      title: t("produitsAssurance.content.ihtiyatAzaa.title"),
      subtitle: t("produitsAssurance.content.ihtiyatAzaa.subtitle"),
      description: t("produitsAssurance.content.ihtiyatAzaa.description"),
      featuresTitle: t("produitsAssurance.content.ihtiyatAzaa.featuresTitle"),
      features: t("produitsAssurance.content.ihtiyatAzaa.features", {
        returnObjects: true,
      }) as string[],
      icon: "🌿",
      image: "/lovable-uploads/832d5c4c-f520-4eb7-aaac-71b8689a798b.png",
      learnMore: t("produitsAssurance.content.ihtiyatAzaa.learnMore"),
    },
    {
      id: 2,
      title: t("produitsAssurance.content.ihtiyatIstishfaa.title"),
      subtitle: t("produitsAssurance.content.ihtiyatIstishfaa.subtitle"),
      description: t("produitsAssurance.content.ihtiyatIstishfaa.description"),
      featuresTitle: t(
        "produitsAssurance.content.ihtiyatIstishfaa.featuresTitle"
      ),
      features: t("produitsAssurance.content.ihtiyatIstishfaa.features", {
        returnObjects: true,
      }) as string[],
      icon: "🏥",
      image: "/lovable-uploads/57ed52c0-ea51-40a4-9f37-e3bc94f4863e.png",
    },
    {
      id: 3,
      title: t("produitsAssurance.content.ihtiyatDouayerZmane.title"),
      subtitle: t("produitsAssurance.content.ihtiyatDouayerZmane.subtitle"),
      description: t(
        "produitsAssurance.content.ihtiyatDouayerZmane.description"
      ),
      featuresTitle: t(
        "produitsAssurance.content.ihtiyatDouayerZmane.featuresTitle"
      ),
      features: t("produitsAssurance.content.ihtiyatDouayerZmane.features", {
        returnObjects: true,
      }) as string[],
      icon: "💰",
      image: "/lovable-uploads/ab7b7e39-21ca-4122-8dc3-d2bcd88f120c.png",
      learnMore: t("produitsAssurance.content.ihtiyatDouayerZmane.learnMore"),
    },
  ];

  const nextSlide = () => {
    if (i18n.language === "ar") {
      setCurrentSlide(
        (prev) =>
          (prev - 1 + insuranceProducts.length) % insuranceProducts.length
      );
    } else {
      setCurrentSlide((prev) => (prev + 1) % insuranceProducts.length);
    }
  };

  const prevSlide = () => {
    if (i18n.language === "ar") {
      setCurrentSlide((prev) => (prev + 1) % insuranceProducts.length);
    } else {
      setCurrentSlide(
        (prev) =>
          (prev - 1 + insuranceProducts.length) % insuranceProducts.length
      );
    }
  };

  return (
    <section className="py-16 bg-barid-orange relative overflow-hidden">
      {/* Diagonal white lines from corners */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-left diagonal lines */}
        <div className="absolute top-0 left-0 w-32 h-32">
          <div className="absolute top-4 left-0 w-24 h-0.5 bg-white opacity-30 transform rotate-45 origin-left"></div>
          <div className="absolute top-8 left-0 w-20 h-0.5 bg-white opacity-20 transform rotate-45 origin-left"></div>
        </div>

        {/* Top-right diagonal lines */}
        <div className="absolute top-0 right-0 w-32 h-32">
          <div className="absolute top-4 right-0 w-24 h-0.5 bg-white opacity-30 transform -rotate-45 origin-right"></div>
          <div className="absolute top-8 right-0 w-20 h-0.5 bg-white opacity-20 transform -rotate-45 origin-right"></div>
        </div>

        {/* Bottom-left diagonal lines */}
        <div className="absolute bottom-0 left-0 w-32 h-32">
          <div className="absolute bottom-4 left-0 w-24 h-0.5 bg-white opacity-30 transform -rotate-45 origin-left"></div>
          <div className="absolute bottom-8 left-0 w-20 h-0.5 bg-white opacity-20 transform -rotate-45 origin-left"></div>
        </div>

        {/* Bottom-right diagonal lines */}
        <div className="absolute bottom-0 right-0 w-32 h-32">
          <div className="absolute bottom-4 right-0 w-24 h-0.5 bg-white opacity-30 transform rotate-45 origin-right"></div>
          <div className="absolute bottom-8 right-0 w-20 h-0.5 bg-white opacity-20 transform rotate-45 origin-right"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 flex flex-col gap-8 items-center">
        {/* White headline */}
        <h2
          className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
          style={{
            direction: i18n.language === "ar" ? "rtl" : "ltr",
            fontFamily:
              i18n.language === "ar"
                ? "Cairo, Arial, sans-serif"
                : "Inter, Arial, sans-serif",
          }}
        >
          {t("produitsAssurance.content.title")}
        </h2>

        {/* Insurance Products Slider */}
        <div className="w-full max-w-4xl mx-auto relative pt-12">
          <div className="relative overflow-visible">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform:
                  i18n.language === "ar"
                    ? `translateX(${currentSlide * 100}%)`
                    : `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {insuranceProducts.map((product) => (
                <div key={product.id} className="w-full flex-shrink-0 px-4">
                  <div className="relative mx-auto max-w-3xl">
                    {/* Dark brown card with fixed height for uniform sizing */}
                    <div className="bg-barid-brown text-white p-6 md:p-12 rounded-2xl relative overflow-visible min-h-[720px] md:min-h-[680px] flex flex-col">
                      {/* White div with image at top corner - positioned to float above the brown card */}
                      <div
                        className={`absolute -top-8 w-16 h-16 md:w-32 md:h-32 md:-top-10 bg-white rounded-2xl flex items-center justify-center shadow-xl z-10 p-1 md:p-2 ${
                          i18n.language === "ar"
                            ? "-left-2 md:-left-8"
                            : "-right-2 md:-right-8"
                        }`}
                      >
                        <img
                          src={product.image}
                          alt="Insurance icon"
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div
                        className={`flex-1 flex flex-col ${
                          i18n.language === "ar"
                            ? "pl-0 md:pl-20"
                            : "pr-0 md:pr-20"
                        }`}
                      >
                        {/* Title - Bold & Uppercase */}
                        <h3
                          className={`text-2xl md:text-3xl font-bold mb-2 uppercase ${
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
                          {product.title} :
                        </h3>

                        {/* Subtitle - Bold */}
                        <h4
                          className={`text-xl md:text-2xl font-bold mb-6 text-orange-200 ${
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
                          {product.subtitle}
                        </h4>

                        {/* Body text - Normal font */}
                        <p
                          className={`text-base md:text-lg mb-6 leading-relaxed ${
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
                          {product.description}
                        </p>

                        {/* Bullet points */}
                        <div className="flex-1">
                          <p
                            className={`font-semibold mb-3 text-lg ${
                              i18n.language === "ar"
                                ? "text-right"
                                : "text-left"
                            }`}
                            style={{
                              direction: i18n.language === "ar" ? "rtl" : "ltr",
                              fontFamily:
                                i18n.language === "ar"
                                  ? "Cairo, Arial, sans-serif"
                                  : "Inter, Arial, sans-serif",
                            }}
                          >
                            {product.featuresTitle ||
                              `${product.title} ${
                                i18n.language === "ar" ? "هو:" : "c'est :"
                              }`}
                          </p>
                          <ul
                            className={`space-y-2 mb-6 ${
                              i18n.language === "ar"
                                ? "text-right"
                                : "text-left"
                            }`}
                          >
                            {product.features.map((feature, index) => (
                              <li
                                key={index}
                                className={`flex items-start text-sm md:text-base ${
                                  i18n.language === "ar"
                                    ? "justify-end"
                                    : "justify-start"
                                }`}
                              >
                                {i18n.language === "ar" ? (
                                  <>
                                    <span className="w-2 h-2 bg-white rounded-full flex-shrink-0 mt-2 ml-3"></span>
                                    <span
                                      className="text-right w-full"
                                      style={{
                                        direction: "rtl",
                                        fontFamily: "Cairo, Arial, sans-serif",
                                        textAlign: "right",
                                      }}
                                    >
                                      {feature}
                                    </span>
                                  </>
                                ) : (
                                  <>
                                    <span className="w-2 h-2 bg-white rounded-full flex-shrink-0 mt-2 mr-3"></span>
                                    <span
                                      className="text-left"
                                      style={{
                                        direction: "ltr",
                                        fontFamily: "Inter, Arial, sans-serif",
                                      }}
                                    >
                                      {feature}
                                    </span>
                                  </>
                                )}
                              </li>
                            ))}
                          </ul>
                          {product.id === 1 && (
                            <a
                              href="https://www.facebook.com/baridcashofficiel/videos/3799805350235431/?rdid=eGKf2J2tq2FqTkpQ&_rdc=1&_rdr#"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <button
                                className="bg-barid-orange text-white px-4 py-2 rounded-lg text-sm hover:bg-opacity-90 transition-colors font-medium"
                                style={{
                                  direction:
                                    i18n.language === "ar" ? "rtl" : "ltr",
                                  fontFamily:
                                    i18n.language === "ar"
                                      ? "Cairo, Arial, sans-serif"
                                      : "Inter, Arial, sans-serif",
                                }}
                              >
                                {product.learnMore}
                              </button>
                            </a>
                          )}
                          {product.id === 3 && (
                            <a
                              href="https://www.facebook.com/baridcashofficiel/videos/1280170220003305/?rdid=6vbtimQpGuRyfJci&_rdc=1&_rdr#"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <button
                                className="bg-barid-orange text-white px-4 py-2 rounded-lg text-sm hover:bg-opacity-90 transition-colors font-medium"
                                style={{
                                  direction:
                                    i18n.language === "ar" ? "rtl" : "ltr",
                                  fontFamily:
                                    i18n.language === "ar"
                                      ? "Cairo, Arial, sans-serif"
                                      : "Inter, Arial, sans-serif",
                                }}
                              >
                                {product.learnMore}
                              </button>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Arrow button positioned outside the brown card on the orange background - bottom-right corner */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className={`absolute top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 z-10 ${
              i18n.language === "ar" ? "right-2" : "left-2"
            }`}
          >
            {i18n.language === "ar" ? (
              <ArrowRight className="w-6 h-6" />
            ) : (
              <ArrowLeft className="w-6 h-6" />
            )}
          </button>

          <button
            onClick={nextSlide}
            className={`absolute top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 z-10 ${
              i18n.language === "ar" ? "left-2" : "right-2"
            }`}
          >
            {i18n.language === "ar" ? (
              <ArrowLeft className="w-6 h-6" />
            ) : (
              <ArrowRight className="w-6 h-6" />
            )}
          </button>

          {/* Slide indicators */}
          <div
            className={`flex justify-center mt-6 ${
              i18n.language === "ar" ? "space-x-reverse space-x-2" : "space-x-2"
            }`}
          >
            {insuranceProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProduitsAssuranceContent;
