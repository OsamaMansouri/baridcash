import React, { useRef, useEffect, useState, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const NosComptesDePaiementsAdvantages: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const [isScrolling, setIsScrolling] = useState(false);

  // Function to render structured descriptions with bullet points and line breaks
  const renderStructuredDescription = (description: string) => {
    const parts = description.split("\n");
    return (
      <div>
        {parts.map((part, index) => {
          if (part.startsWith("•")) {
            // Render bullet points
            return (
              <ul
                key={index}
                className={`mt-1 mb-1 ${
                  i18n.language === "ar"
                    ? "list-disc list-inside"
                    : "list-disc list-inside"
                }`}
                style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
              >
                <li className="text-xs">{part.substring(1).trim()}</li>
              </ul>
            );
          } else if (part.trim()) {
            // Render regular text
            return (
              <p key={index} className="text-xs mb-1">
                {part}
              </p>
            );
          }
          return null;
        })}
      </div>
    );
  };

  const advantages = [
    {
      title:
        i18n.language === "ar"
          ? t("nosComptesDePaiements.advantages.accessibility.title")
          : "Accessibilité :",
      description:
        i18n.language === "ar"
          ? t("nosComptesDePaiements.advantages.accessibility.description")
          : "• Quel que soit l'opérateur téléphonique\n• Quelle que soit la génération du téléphone portable\n• Couverture nationale, aussi bien urbaine que rurale",
      icon: "/lovable-uploads/feb819c2-f71b-46f4-86f9-0a12da6b2be3.png",
    },
    {
      title:
        i18n.language === "ar"
          ? t("nosComptesDePaiements.advantages.simplicity.title")
          : "Simplicité :",
      description:
        i18n.language === "ar"
          ? t("nosComptesDePaiements.advantages.simplicity.description")
          : "• Facile à utiliser\n• Tarification à l'acte simple et lisible\n• Ergonomie simple et adaptée",
      icon: "/lovable-uploads/c29fee47-c583-4b91-914a-6623c16e4d56.png",
    },
    {
      title:
        i18n.language === "ar"
          ? t("nosComptesDePaiements.advantages.convenience.title")
          : "Commodité :",
      description:
        i18n.language === "ar"
          ? t("nosComptesDePaiements.advantages.convenience.description")
          : "• Services disponibles 7j/7 & 24h/24",
      icon: "/lovable-uploads/443d5930-1882-40f5-bfa4-831211b01fba.png",
    },
    {
      title:
        i18n.language === "ar"
          ? t("nosComptesDePaiements.advantages.security.title")
          : "Sécurité :",
      description:
        i18n.language === "ar"
          ? t("nosComptesDePaiements.advantages.security.description")
          : "• Système sécurisé via code d'authentification",
      icon: "/lovable-uploads/443d5930-1882-40f5-bfa4-831211b01fba.png",
    },
    {
      title:
        i18n.language === "ar"
          ? t("nosComptesDePaiements.advantages.pricing.title")
          : "Tarification :",
      description:
        i18n.language === "ar"
          ? t("nosComptesDePaiements.advantages.pricing.description")
          : "• Souscription gratuite\n• Sans frais de tenue de compte\n• Tarification à l'acte",
      icon: "/lovable-uploads/c29fee47-c583-4b91-914a-6623c16e4d56.png",
    },
  ];

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

  // Initialize scroll position to second section for forward-only scrolling
  useEffect(() => {
    if (!scrollContainerRef.current || !isVisible) return;

    const container = scrollContainerRef.current;
    const isMobile = window.innerWidth < 768;
    const itemsVisible = isMobile ? 1 : 3;
    const itemWidth = container.clientWidth / itemsVisible;
    const secondSectionStart = advantages.length * itemWidth;

    // Set initial position to second section without animation
    container.scrollLeft = secondSectionStart;
  }, [isVisible]);

  const calculateActiveIndex = useCallback(() => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const isMobile = window.innerWidth < 768;
    const itemsVisible = isMobile ? 1 : 3;
    const itemWidth = container.clientWidth / itemsVisible;
    const scrollLeft = container.scrollLeft;
    const totalItems = 5; // Original number of items

    // Calculate the middle visible item
    const middlePosition = scrollLeft + itemWidth;
    let index = Math.round(middlePosition / itemWidth) % totalItems;
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  }, [activeIndex]);

  // Seamless repositioning for infinite effect - only forward repositioning
  const handleSeamlessRepositioning = useCallback(() => {
    if (!scrollContainerRef.current || isScrolling) return;

    const container = scrollContainerRef.current;
    const isMobile = window.innerWidth < 768;
    const itemsVisible = isMobile ? 1 : 3;
    const itemWidth = container.clientWidth / itemsVisible;
    const currentScroll = container.scrollLeft;
    const sectionWidth = advantages.length * itemWidth;

    // Only reposition when we're at the very beginning (first section)
    // Jump forward to continue the left-to-right infinite scroll
    const buffer = itemWidth * 0.1;

    if (currentScroll <= buffer) {
      // Jump from first section to second section to continue forward scrolling
      container.scrollLeft = currentScroll + sectionWidth;
    }
  }, [isScrolling]);

  const smoothScrollTo = useCallback((targetScroll: number) => {
    if (!scrollContainerRef.current) return;

    setIsScrolling(true);
    const container = scrollContainerRef.current;
    const startScroll = container.scrollLeft;
    const distance = targetScroll - startScroll;
    const duration = 300;
    let startTime: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Easing function for smooth animation
      const easeInOut =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      container.scrollLeft = startScroll + distance * easeInOut;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsScrolling(false);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  const handlePrevious = useCallback(() => {
    if (!scrollContainerRef.current || isScrolling) return;

    const container = scrollContainerRef.current;
    const isMobile = window.innerWidth < 768;
    const itemsVisible = isMobile ? 1 : 3;
    const itemWidth = container.clientWidth / itemsVisible;
    const currentIndex = Math.round(container.scrollLeft / itemWidth);
    const targetIndex = currentIndex - 1;

    smoothScrollTo(targetIndex * itemWidth);
  }, [isScrolling, smoothScrollTo]);

  const handleNext = useCallback(() => {
    if (!scrollContainerRef.current || isScrolling) return;

    const container = scrollContainerRef.current;
    const isMobile = window.innerWidth < 768;
    const itemsVisible = isMobile ? 1 : 3;
    const itemWidth = container.clientWidth / itemsVisible;
    const currentIndex = Math.round(container.scrollLeft / itemWidth);
    const targetIndex = currentIndex + 1;

    smoothScrollTo(targetIndex * itemWidth);
  }, [isScrolling, smoothScrollTo]);

  // Auto-scroll effect
  useEffect(() => {
    if (!scrollContainerRef.current || !isVisible) return;

    const autoScroll = () => {
      if (isScrolling) return;

      const container = scrollContainerRef.current;
      if (!container) return;

      const isMobile = window.innerWidth < 768;
      const itemsVisible = isMobile ? 1 : 3;
      const itemWidth = container.clientWidth / itemsVisible;
      const currentScroll = container.scrollLeft;
      const nextScroll = currentScroll + itemWidth;

      smoothScrollTo(nextScroll);
    };

    const interval = setInterval(autoScroll, 8000); // Increased interval to reduce conflicts
    return () => clearInterval(interval);
  }, [isVisible, isScrolling, smoothScrollTo]);

  // Handle scroll events to update active index and seamless repositioning
  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    let timeoutId: number;

    const handleScroll = () => {
      calculateActiveIndex();

      // Only handle repositioning after scrolling has completely stopped
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        if (!isScrolling) {
          handleSeamlessRepositioning();
        }
      }, 150); // Longer delay to ensure scrolling has stopped
    };

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [calculateActiveIndex, handleSeamlessRepositioning, isScrolling]);

  // Quintuple the advantages array for true infinite scrolling
  const quintupleAdvantages = [
    ...advantages,
    ...advantages,
    ...advantages,
    ...advantages,
    ...advantages,
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-[#fef6e4]">
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl font-bold text-center text-[#5A433D] mb-12 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {i18n.language === "ar"
            ? t("nosComptesDePaiements.advantages.title")
            : "Avantages de nos comptes de paiement"}
        </h2>

        <div
          className={`relative max-w-6xl mx-auto transition-all duration-1000 delay-500 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="py-12">
            <div className="flex items-center justify-center relative">
              <div className="absolute left-0 z-20">
                <Button
                  onClick={handlePrevious}
                  className={`h-14 w-14 bg-[#F27D30] text-white border-none shadow-md rounded-full hover:scale-110 transition-transform duration-300 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  } p-0`}
                >
                  <ArrowLeft className="h-6 w-6" />
                </Button>
              </div>

              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto scroll-smooth -ml-4 hide-scrollbar partners-slider"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  direction: "ltr", // Force LTR for carousel
                }}
              >
                {quintupleAdvantages.map((advantage, globalIndex) => {
                  const index = globalIndex % advantages.length;
                  const isActive = activeIndex === index;

                  return (
                    <div
                      key={`${advantage.title}-${globalIndex}`}
                      className={`pl-4 flex-none w-full sm:w-full md:w-1/3 py-8 transition-all duration-700 ease-out ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-20"
                      }`}
                      style={{ transitionDelay: `${600 + index * 100}ms` }}
                    >
                      <div
                        className={`bg-[#5A433D] text-white rounded-2xl p-6 shadow-lg h-full flex flex-col items-center justify-start transition-all duration-300 overflow-hidden
                          ${
                            isActive
                              ? "transform scale-110 z-10 border border-[#F27D30]/30"
                              : "scale-90 opacity-80"
                          }`}
                        style={{
                          height: isActive ? "380px" : "360px",
                          width: "100%",
                          minHeight: "360px",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <div className="mb-6 flex-shrink-0">
                          <img
                            alt={`${advantage.title} Icon`}
                            className={`object-contain transition-all duration-300 ${
                              isActive ? "w-24 h-24" : "w-20 h-20"
                            }`}
                            src={advantage.icon}
                          />
                        </div>
                        <div
                          className={`h-[2px] bg-white mb-4 mx-auto transition-all duration-300 flex-shrink-0 ${
                            isActive ? "w-20" : "w-16"
                          }`}
                        ></div>
                        <h3
                          className={`font-bold text-center uppercase mb-4 transition-all duration-300 flex-shrink-0 ${
                            isActive ? "text-lg" : "text-base"
                          }`}
                        >
                          {advantage.title}
                        </h3>
                        <div className="flex items-center justify-center w-full px-2 mt-2">
                          <div
                            className={`text-xs leading-relaxed w-full overflow-hidden ${
                              i18n.language === "ar"
                                ? "text-right"
                                : "text-left"
                            }`}
                          >
                            {renderStructuredDescription(advantage.description)}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="absolute right-0 z-20">
                <Button
                  onClick={handleNext}
                  className={`h-14 w-14 bg-[#F27D30] text-white border-none shadow-md rounded-full hover:scale-110 transition-transform duration-300 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  } p-0`}
                >
                  <ArrowRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosComptesDePaiementsAdvantages;
