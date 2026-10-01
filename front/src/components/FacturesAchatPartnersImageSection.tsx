import React, { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const FacturesAchatPartnersImageSection: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const partners = [
    {
      id: 1,
      name: "BeIN Sports",
      logo: "/lovable-uploads/aaa3ec60-7081-4ccf-888f-fa017a26e949.png",
    },
    {
      id: 2,
      name: "PayExpress",
      logo: "/lovable-uploads/9be4dec0-4615-40c8-933e-84b8553ef11e.png",
    },
    {
      id: 3,
      name: "Forever",
      logo: "/lovable-uploads/fc6e1a42-889a-4285-9641-82937ff7558f.png",
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollAmount = 1;
    let animationFrameId: number;

    const scroll = () => {
      if (!scrollContainer) return;

      scrollContainer.scrollLeft += scrollAmount;

      // Calculate the width of one complete set of partners
      const cardWidth = 320 + 32; // w-80 (320px) + gap (32px)
      const oneSetWidth = partners.length * cardWidth;

      // Reset when we've scrolled through 6 complete sets (invisible reset point)
      if (scrollContainer.scrollLeft >= oneSetWidth * 6) {
        scrollContainer.scrollLeft = oneSetWidth * 3; // Jump back to middle
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    const timer = setTimeout(() => {
      animationFrameId = requestAnimationFrame(scroll);
    }, 1000);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Decorative image at the top with no padding/margin */}
      <div className="w-full">
        <img
          src="/lovable-uploads/4ebab3ba-fcd7-4c86-9dc4-20d5790aff8c.png"
          alt="BaridCash Decorative Wave"
          className="w-full h-auto"
        />
      </div>

      <section className="relative bg-barid-orange py-16 overflow-hidden">
        <div className="container mx-auto px-4 py-8">
          <div
            className={`mb-16 ${
              i18n.language === "ar" ? "text-right" : "text-center"
            }`}
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-white uppercase mb-8"
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("facturesAchat.partners.title")}
            </h2>
          </div>

          {/* Partners Slider */}
          <div className="relative">
            {/* Left shadow effect */}
            <div
              className="absolute left-0 top-0 h-full w-20 z-10"
              style={{
                background:
                  "linear-gradient(to right, rgba(244, 124, 44, 1) 0%, rgba(244, 124, 44, 0.7) 50%, rgba(244, 124, 44, 0) 100%)",
                pointerEvents: "none",
              }}
            ></div>

            {/* Scrollable area with partners - horizontal */}
            <div
              className="overflow-x-auto hide-scrollbar"
              ref={scrollContainerRef}
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                position: "relative",
                zIndex: 5,
                direction: "ltr", // Force LTR for carousel scrolling
              }}
            >
              <div
                className="flex pb-4 px-4 space-x-8"
                style={{
                  scrollbarWidth: "none",
                }}
              >
                {/* Create many duplicates for truly seamless infinite scrolling */}
                {Array.from({ length: 10 }, (_, i) =>
                  partners.map((partner, j) => (
                    <div
                      key={`${partner.id}-${i}-${j}`}
                      className="flex-shrink-0"
                    >
                      <Card className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 h-40 overflow-hidden w-80">
                        <CardContent className="flex items-center justify-center py-8 px-6 h-full">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="h-auto w-full max-w-full max-h-full object-contain transition-opacity duration-300"
                            onLoad={() =>
                              console.log(
                                `${partner.name} logo loaded successfully`
                              )
                            }
                            onError={() =>
                              console.log(`${partner.name} logo failed to load`)
                            }
                          />
                        </CardContent>
                      </Card>
                    </div>
                  ))
                ).flat()}
              </div>
            </div>

            {/* Right shadow effect */}
            <div
              className="absolute right-0 top-0 h-full w-20 z-20"
              style={{
                background:
                  "linear-gradient(to left, rgba(244, 124, 44, 1) 0%, rgba(244, 124, 44, 0.7) 50%, rgba(244, 124, 44, 0) 100%)",
                pointerEvents: "none",
              }}
            ></div>
          </div>

          {/* Add CSS using style tag properly */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `,
            }}
          />
        </div>
      </section>

      {/* Decorative image at the end with no padding/margin */}
      <div className="w-full">
        <img
          src="/lovable-uploads/39d0c48f-0bb6-4f92-9c23-d9ee6f04ffd8.png"
          alt="BaridCash Decorative Wave End"
          className="w-full h-auto"
        />
      </div>
    </>
  );
};

export default FacturesAchatPartnersImageSection;
