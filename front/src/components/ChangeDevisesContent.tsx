import React, { useRef, useEffect, useState, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const ChangeDevisesContent: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const { t, i18n } = useTranslation("common");

  // Correct order: Competitive, Instant, Accessible
  const advantages = [
    {
      id: 1,
      title: t("changeDevises.content.competitive.title"),
      icon: "/lovable-uploads/920d8ab5-4d67-483f-9e85-7c95e2e15194.png",
      description: t("changeDevises.content.competitive.description"),
    },
    {
      id: 2,
      title: t("changeDevises.content.instant.title"),
      icon: "/lovable-uploads/36792be3-f683-4028-9b97-9aee49f6647e.png",
      description: t("changeDevises.content.instant.description"),
    },
    {
      id: 3,
      title: t("changeDevises.content.accessible.title"),
      icon: "/lovable-uploads/dd7cc0c0-16c5-47e3-9f57-ccbace338eb8.png",
      description: t("changeDevises.content.accessible.description"),
    },
  ];

  // Quintuple the advantages array for true infinite scrolling (left-to-right only)
  const quintupleAdvantages = [
    ...advantages,
    ...advantages,
    ...advantages,
    ...advantages,
    ...advantages,
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

  // Initialize scroll position to first section
  useEffect(() => {
    if (!scrollContainerRef.current || !isVisible) return;

    const container = scrollContainerRef.current;
    const isMobile = window.innerWidth < 768;
    const itemsVisible = isMobile ? 1 : 3;
    const itemWidth = container.clientWidth / itemsVisible;
    const firstSectionStart = 0;

    // Set initial position to first section without animation
    container.scrollLeft = firstSectionStart;
  }, [isVisible, advantages.length]);

  const calculateActiveIndex = useCallback(() => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const isMobile = window.innerWidth < 768;
    const itemsVisible = isMobile ? 1 : 3;
    const itemWidth = container.clientWidth / itemsVisible;
    const scrollLeft = container.scrollLeft;
    const totalItems = 3; // Original number of items

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

    const interval = setInterval(autoScroll, 3000);
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

  return (
    <section ref={sectionRef} className="py-16 bg-[#F27D30]">
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl font-bold text-center text-white mb-12 transition-all duration-700 ease-out ${
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
          {t("changeDevises.content.title")}
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
                  className={`h-14 w-14 bg-white text-[#F27D30] border-none shadow-md rounded-full hover:scale-110 transition-transform duration-300 ${
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
                  direction: "ltr", // Force LTR for carousel scrolling
                }}
              >
                {quintupleAdvantages.map((advantage, globalIndex) => {
                  const index = globalIndex % advantages.length;
                  const isActive = activeIndex === index;

                  return (
                    <div
                      key={`${advantage.id}-${globalIndex}`}
                      className={`pl-4 flex-none w-full sm:w-full md:w-1/3 py-8 transition-all duration-700 ease-out ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-20"
                      }`}
                      style={{ transitionDelay: `${600 + index * 100}ms` }}
                    >
                      <div
                        className={`bg-[#5A433D] text-white rounded-2xl p-8 shadow-lg h-full flex flex-col items-center justify-center transition-all duration-300
                          ${
                            isActive
                              ? "transform scale-110 z-10 border border-white/30"
                              : "scale-90 opacity-80"
                          }`}
                        style={{
                          height: isActive ? "360px" : "320px",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <div className="mb-8">
                          <img
                            alt={`${advantage.title} Icon`}
                            className={`object-contain transition-all duration-300 ${
                              isActive ? "w-28 h-28" : "w-24 h-24"
                            }`}
                            src={advantage.icon}
                          />
                        </div>
                        <div
                          className={`h-[2px] bg-white mb-4 mx-auto transition-all duration-300 ${
                            isActive ? "w-24" : "w-20"
                          }`}
                        ></div>
                        <h3
                          className={`font-bold text-center uppercase mb-4 transition-all duration-300 ${
                            isActive ? "text-xl" : "text-lg"
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
                        <p
                          className="text-center text-sm px-2"
                          lang={i18n.language === "ar" ? "ar" : "fr"}
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                          }}
                        >
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="absolute right-0 z-20">
                <Button
                  onClick={handleNext}
                  className={`h-14 w-14 bg-white text-[#F27D30] border-none shadow-md rounded-full hover:scale-110 transition-transform duration-300 ${
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

export default ChangeDevisesContent;
