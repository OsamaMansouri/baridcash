import React, { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const FacturesEauElectricitePartnersImageSection: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const partners = [
    {
      id: 1,
      name: "RADEEF",
      logo: "/lovable-uploads/c3bd35f9-7e70-4a42-bbe9-bd702467194b.png",
    },
    {
      id: 2,
      name: "Redal",
      logo: "/lovable-uploads/69baee98-86ff-44e4-9685-8ac1e4ec2589.png",
    },
    {
      id: 3,
      name: "RADEES",
      logo: "/lovable-uploads/1beb4177-6195-4afa-bda0-5d381cb7d911.png",
    },
    {
      id: 4,
      name: "ONEP",
      logo: "/lovable-uploads/76dcd9eb-2907-4c39-bd30-930d91df78b9.png",
    },
    {
      id: 5,
      name: "RAMSA",
      logo: "/lovable-uploads/ecc6a5c6-02c6-4669-83d4-65b07dcd9dfb.png",
    },
    {
      id: 6,
      name: "RADEEL",
      logo: "/lovable-uploads/4ee0d1ee-8c4d-4ca9-b00e-bbb1e9c59ffb.png",
    },
    {
      id: 7,
      name: "Office National de l'Electricité",
      logo: "/lovable-uploads/15c9d361-8ee8-45fa-af3b-42abf7986660.png",
    },
    {
      id: 8,
      name: "Amendis",
      logo: "/lovable-uploads/a4913844-d523-485f-8ed4-da48bbcba43a.png",
    },
    {
      id: 9,
      name: "Régie Autonome de Distribution d'Eau et d'Electricité de Marrakech",
      logo: "/lovable-uploads/dcab4ec8-9a17-419d-9c4d-5fcf6b9989dc.png",
    },
    {
      id: 10,
      name: "RADEEO",
      logo: "/lovable-uploads/baa80fce-2957-4834-9fde-55751e4a95cf.png",
    },
    {
      id: 11,
      name: "RADEM",
      logo: "/lovable-uploads/4a096f3c-edc1-426d-a3ce-79ba87033937.png",
    },
    {
      id: 12,
      name: "RAK",
      logo: "/lovable-uploads/699d8205-8f71-4818-822a-8004847b5155.png",
    },
    {
      id: 13,
      name: "Société Régionale Multiservices Casablanca-Settat SA",
      logo: "/lovable-uploads/b9f8d01a-6a40-4fbc-97ec-8ff79099a891.png",
    },
    {
      id: 14,
      name: "Société Régionale Multiservices Souss-Massa SA",
      logo: "/lovable-uploads/98284c9a-3085-45b0-acde-367688632dc1.png",
    },
    {
      id: 15,
      name: "Inwi",
      logo: "/lovable-uploads/98579281-bdaa-46a2-9139-2170918b2e79.png",
    },
    {
      id: 16,
      name: "Maroc Telecom",
      logo: "/lovable-uploads/434c8bc1-ffb0-45f1-a9d0-a113056ca693.png",
    },
    {
      id: 17,
      name: "Orange",
      logo: "/lovable-uploads/b0c4f942-7f14-47a7-999b-8e3195a329de.png",
    },
  ];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef2 = useRef<HTMLDivElement>(null);
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
  useEffect(() => {
    const scrollContainer2 = scrollContainerRef2.current;
    if (!scrollContainer2) return;
    const scrollAmount = 1;
    let animationFrameId: number;
    const scroll = () => {
      if (!scrollContainer2) return;
      scrollContainer2.scrollLeft += scrollAmount;
      if (
        scrollContainer2.scrollLeft >=
        scrollContainer2.scrollWidth - scrollContainer2.clientWidth
      ) {
        scrollContainer2.scrollLeft = 0;
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

      {/* Partners Section */}
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
              {t("facturesEauElectricite.partners.title")}
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
              ref={scrollContainerRef2}
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
                    key={`${partner.id}-${partnerIndex}-2`}
                    className="flex-shrink-0"
                  >
                    <Card className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 h-52 overflow-hidden w-96">
                      <CardContent className="flex items-center justify-center py-12 px-8 h-full">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="h-40 w-auto max-w-full object-contain transition-opacity duration-300"
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
                ))}
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

export default FacturesEauElectricitePartnersImageSection;
