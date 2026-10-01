import React, { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const TransferInternationalDownloadSection: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const partners = [
    {
      id: 1,
      logo: "/lovable-uploads/81c9b0bb-6612-484a-90ed-f910beba36f5.png",
      alt: "Ria Money Transfer",
      url: "https://www.riamoneytransfer.com/fr-fr/",
    },
    {
      id: 2,
      logo: "/lovable-uploads/d48d39b9-65bc-4aee-86a0-ba08d210acaa.png",
      alt: "UPT Money Transfer",
      url: "https://www.upt.com.tr/tr/index.html",
    },
    {
      id: 3,
      logo: "/lovable-uploads/44d76244-2b1c-4e07-8cd2-573c67e648d2.png",
      alt: "WorldRemit",
      url: "https://www.worldremit.com/en",
    },
    {
      id: 4,
      logo: "/lovable-uploads/01e84185-c47e-491f-935a-51546e0f81aa.png",
      alt: "Placid",
      url: "https://www.placid.net/",
    },
    {
      id: 5,
      logo: "/lovable-uploads/7564a176-3c94-4054-9982-b78204d262d0.png",
      alt: "PostTransfer",
      url: "https://www.upu.int/fr/Accueil",
    },
    {
      id: 6,
      logo: "/lovable-uploads/4217e5a8-6245-42c0-9f79-41f58c59f0db.png",
      alt: "MoneyGram",
      url: "https://moneygram.ma/",
    },
    {
      id: 7,
      logo: "/lovable-uploads/2ac72621-e88c-4ab9-9398-6ea7f88e7370.png",
      alt: "Instant Cash",
      url: "https://www.instantcashworldwide.com/",
    },
    {
      id: 8,
      logo: "/lovable-uploads/53f3fbeb-8618-4334-a336-c691c3eb1dd8.png",
      alt: "Western Union",
      url: "https://www.westernunion.com/ma/ar/home.html",
    },
    {
      id: 9,
      logo: "/lovable-uploads/b6f221bf-b2d6-4b92-933b-bb9380e6ea61.png",
      alt: "Dirham Express",
      url: "#",
    },
    {
      id: 10,
      logo: "/lovable-uploads/d69bb50b-c30e-4d12-bacc-0eb889a2ad57.png",
      alt: "Juba Express",
      url: "https://www.jubaexpress.com/",
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollAmount = 1;
    let animationFrameId: number;

    const scroll = () => {
      if (!scrollContainer) return;
      scrollContainer.scrollLeft += scrollAmount;

      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollContainer.scrollLeft = 0;
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
    <section className="py-16 bg-barid-background">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center text-barid-brown mb-12"
          lang={i18n.language === "ar" ? "ar" : "fr"}
          style={{
            direction: i18n.language === "ar" ? "rtl" : "ltr",
            fontFamily:
              i18n.language === "ar"
                ? "Cairo, Arial, sans-serif"
                : "Inter, Arial, sans-serif",
            textAlign: "center",
          }}
        >
          {t("transferInternational.partners.title")}
        </h2>

        {/* Partners Slider */}
        <div className="relative">
          {/* Left shadow effect */}
          <div
            className="absolute left-0 top-0 h-full w-20 z-10"
            style={{
              background:
                "linear-gradient(to right, rgba(254, 246, 228, 1) 0%, rgba(254, 246, 228, 0.7) 50%, rgba(254, 246, 228, 0) 100%)",
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
              {/* Duplicate the partners array to create seamless looping */}
              {[...partners, ...partners].map((partner, partnerIndex) => (
                <div
                  key={`${partner.id}-${partnerIndex}`}
                  className="flex-shrink-0"
                >
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 h-40 overflow-hidden w-80">
                      <CardContent className="flex items-center justify-center py-8 px-6 h-full">
                        <img
                          src={partner.logo}
                          alt={partner.alt}
                          className="h-auto w-full max-w-full max-h-full object-contain transition-opacity duration-300"
                        />
                      </CardContent>
                    </Card>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right shadow effect */}
          <div
            className="absolute right-0 top-0 h-full w-20 z-20"
            style={{
              background:
                "linear-gradient(to left, rgba(254, 246, 228, 1) 0%, rgba(254, 246, 228, 0.7) 50%, rgba(254, 246, 228, 0) 100%)",
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
  );
};

export default TransferInternationalDownloadSection;
