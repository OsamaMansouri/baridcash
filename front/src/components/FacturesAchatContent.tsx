import React, { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

const FacturesAchatContent: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  console.log("FacturesAchatContent component is rendering");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const billingServices = [
    {
      id: 1,
      title: t("facturesAchat.content.services.payexpress.title"),
      subtitle: "",
      description: t("facturesAchat.content.services.payexpress.description"),
      features: t("facturesAchat.content.services.payexpress.features", {
        returnObjects: true,
      }) as string[],
      icon: "💳",
    },
    {
      id: 2,
      title: t("facturesAchat.content.services.forever.title"),
      subtitle: "",
      description: t("facturesAchat.content.services.forever.description"),
      features: [],
      icon: "🛍️",
    },
    {
      id: 3,
      title: t("facturesAchat.content.services.bein.title"),
      subtitle: "",
      description: t("facturesAchat.content.services.bein.description"),
      features: [],
      icon: "📺",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (i18n.language === "ar") {
        setCurrentSlide(
          (prev) => (prev - 1 + billingServices.length) % billingServices.length
        );
      } else {
        setCurrentSlide((prev) => (prev + 1) % billingServices.length);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [i18n.language]);

  const nextSlide = () => {
    if (i18n.language === "ar") {
      setCurrentSlide(
        (prev) => (prev - 1 + billingServices.length) % billingServices.length
      );
    } else {
      setCurrentSlide((prev) => (prev + 1) % billingServices.length);
    }
  };

  const prevSlide = () => {
    if (i18n.language === "ar") {
      setCurrentSlide((prev) => (prev + 1) % billingServices.length);
    } else {
      setCurrentSlide(
        (prev) => (prev - 1 + billingServices.length) % billingServices.length
      );
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (i18n.language === "ar") {
      // In Arabic (RTL), left swipe goes to previous slide, right swipe goes to next
      if (isLeftSwipe && currentSlide > 0) {
        prevSlide();
      }
      if (isRightSwipe && currentSlide < billingServices.length - 1) {
        nextSlide();
      }
    } else {
      // In French (LTR), left swipe goes to next slide, right swipe goes to previous
      if (isLeftSwipe && currentSlide < billingServices.length - 1) {
        nextSlide();
      }
      if (isRightSwipe && currentSlide > 0) {
        prevSlide();
      }
    }
  };

  const canGoNext = currentSlide < billingServices.length - 1;
  const canGoPrev = currentSlide > 0;

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
        {/* Billing Services Slider */}
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
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {billingServices.map((service) => (
                <div key={service.id} className="w-full flex-shrink-0 px-4">
                  <div className="relative mx-auto max-w-3xl">
                    {/* Dark brown card with responsive height */}
                    <div className="text-white p-8 md:p-12 rounded-2xl relative overflow-visible bg-barid-background min-h-[480px] md:min-h-[384px] flex flex-col">
                      <div
                        className={`pr-0 md:pr-20 flex-1 flex flex-col ${
                          i18n.language === "ar" ? "text-right" : "text-left"
                        }`}
                      >
                        {/* Title - Bold & Uppercase */}
                        <h3
                          className="text-2xl md:text-3xl font-bold mb-2 uppercase text-barid-brown"
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                          }}
                        >
                          {service.title}
                        </h3>

                        {/* Subtitle - Bold (only if exists) */}
                        {service.subtitle && (
                          <h4
                            className="text-xl md:text-2xl font-bold mb-6 text-barid-brown"
                            style={{
                              direction: i18n.language === "ar" ? "rtl" : "ltr",
                              fontFamily:
                                i18n.language === "ar"
                                  ? "Cairo, Arial, sans-serif"
                                  : "Inter, Arial, sans-serif",
                            }}
                          >
                            {service.subtitle}
                          </h4>
                        )}

                        {/* Body text - Normal font with flex-1 to take available space */}
                        <div className="flex-1 flex flex-col">
                          <p
                            className="text-base md:text-lg mb-6 leading-relaxed font-normal text-barid-brown"
                            style={{
                              direction: i18n.language === "ar" ? "rtl" : "ltr",
                              fontFamily:
                                i18n.language === "ar"
                                  ? "Cairo, Arial, sans-serif"
                                  : "Inter, Arial, sans-serif",
                            }}
                          >
                            {service.description}
                          </p>

                          {/* Features/Steps (only if they exist) */}
                          {service.features.length > 0 && (
                            <div className="mb-6">
                              <ul
                                className={`space-y-2 bg-inherit ${
                                  i18n.language === "ar"
                                    ? "text-right list-inside"
                                    : "text-left list-inside"
                                }`}
                                style={{
                                  direction:
                                    i18n.language === "ar" ? "rtl" : "ltr",
                                  listStyleType: "none",
                                  listStylePosition: "inside",
                                }}
                              >
                                {service.features.map((feature, index) => (
                                  <li
                                    key={index}
                                    className={`text-sm md:text-base bg-inherit text-barid-brown ${
                                      i18n.language === "ar"
                                        ? "text-right"
                                        : "text-left"
                                    }`}
                                    style={{
                                      direction:
                                        i18n.language === "ar" ? "rtl" : "ltr",
                                      fontFamily:
                                        i18n.language === "ar"
                                          ? "Cairo, Arial, sans-serif"
                                          : "Inter, Arial, sans-serif",
                                    }}
                                  >
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide indicators */}
          <div
            className={`flex justify-center mt-6 ${
              i18n.language === "ar" ? "space-x-reverse space-x-2" : "space-x-2"
            }`}
          >
            {billingServices.map((_, index) => (
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

export default FacturesAchatContent;
