import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const AmanaAdvantages: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const [isScrolling, setIsScrolling] = useState(false);

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

  const advantages = [
    {
      title: t("amana.advantages.proximity.title"),
      description: t("amana.advantages.proximity.description"),
      icon: "/lovable-uploads/feb819c2-f71b-46f4-86f9-0a12da6b2be3.png",
    },
    {
      title: t("amana.advantages.expertise.title"),
      description: t("amana.advantages.expertise.description"),
      icon: "/lovable-uploads/eb1b0a28-e367-4a1f-86c5-404f37ec3f3c.png",
    },
    {
      title: t("amana.advantages.security.title"),
      description: t("amana.advantages.security.description"),
      icon: "/lovable-uploads/3e10a0e3-a0b2-42ea-8535-14e94fe17208.png",
    },
    {
      title: t("amana.advantages.speed.title"),
      description: t("amana.advantages.speed.description"),
      icon: "/lovable-uploads/f0abc23b-51fe-44aa-b108-66a08b930f47.png",
    },
  ];

  // Quintuple the advantages array for true infinite scrolling
  const quintupleAdvantages = [
    ...advantages,
    ...advantages,
    ...advantages,
    ...advantages,
    ...advantages,
  ];

  // Initialize scroll position to second section
  useEffect(() => {
    if (!scrollContainerRef.current || !isVisible) return;

    const container = scrollContainerRef.current;
    const isMobile = window.innerWidth < 768;
    const itemsVisible = isMobile ? 1 : 3;
    const itemWidth = container.clientWidth / itemsVisible;
    const secondSectionStart = advantages.length * itemWidth;

    // Set initial position to second section without animation
    setTimeout(() => {
      if (container) {
        container.scrollLeft = secondSectionStart + itemWidth; // Start with second card centered
      }
    }, 100);
  }, [isVisible, advantages.length]);

  const calculateActiveIndex = useCallback(() => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const isMobile = window.innerWidth < 768;
    const itemsVisible = isMobile ? 1 : 3;
    const itemWidth = container.clientWidth / itemsVisible;
    const scrollLeft = container.scrollLeft;
    const totalItems = 4;

    // Calculate the middle visible item
    const middlePosition = scrollLeft + itemWidth;
    let index = Math.round(middlePosition / itemWidth) % totalItems;
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  }, [activeIndex]);

  // Seamless repositioning for infinite effect
  const handleSeamlessRepositioning = useCallback(() => {
    if (!scrollContainerRef.current || isScrolling) return;

    const container = scrollContainerRef.current;
    const isMobile = window.innerWidth < 768;
    const itemsVisible = isMobile ? 1 : 3;
    const itemWidth = container.clientWidth / itemsVisible;
    const currentScroll = container.scrollLeft;
    const sectionWidth = advantages.length * itemWidth;

    const buffer = itemWidth * 0.1;

    if (currentScroll <= buffer) {
      // Jump from first section to second section
      container.scrollLeft = currentScroll + sectionWidth;
    }
  }, [isScrolling, advantages.length]);

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

  // Handle scroll events
  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    let timeoutId: number;

    const handleScroll = () => {
      calculateActiveIndex();

      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        if (!isScrolling) {
          handleSeamlessRepositioning();
        }
      }, 150);
    };

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [calculateActiveIndex, handleSeamlessRepositioning, isScrolling]);

  return (
    <section ref={sectionRef} className="py-16 bg-[#fef6e4]">
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl font-bold text-center text-[#5A433D] mb-12 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
          {t("amana.advantages.title")}
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
                          lang={i18n.language === "ar" ? "ar" : "fr"}
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                          }}
                        >
                          {advantage.title}
                        </h3>
                        <div className="flex items-center justify-center w-full px-2 mt-2">
                          <div
                            className="text-center text-xs leading-relaxed w-full overflow-hidden"
                            lang={i18n.language === "ar" ? "ar" : "fr"}
                            style={{
                              direction: i18n.language === "ar" ? "rtl" : "ltr",
                              fontFamily:
                                i18n.language === "ar"
                                  ? "Cairo, Arial, sans-serif"
                                  : "Inter, Arial, sans-serif",
                            }}
                          >
                            {advantage.description
                              .split("\n")
                              .map((line, index) => (
                                <p key={index} className="mb-1">
                                  {line}
                                </p>
                              ))}
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

        <style>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
};

export default AmanaAdvantages;
