import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { animations } from "@/utils/animation";

const PartnersSection: React.FC = () => {
  const { t } = useTranslation("common");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const partners = [
    {
      id: 1,
      name: "MoneyGram",
      logo: "/lovable-uploads/36eedd85-f5de-4deb-ab51-11084885d43f.png",
    },
    {
      id: 2,
      name: "Western Union",
      logo: "/lovable-uploads/8bef166b-2ae1-443b-bc7e-3f3ba4548440.png",
    },
    {
      id: 3,
      name: "RADEEF",
      logo: "/lovable-uploads/c3bd35f9-7e70-4a42-bbe9-bd702467194b.png",
    },
    {
      id: 4,
      name: "Redal",
      logo: "/lovable-uploads/69baee98-86ff-44e4-9685-8ac1e4ec2589.png",
    },
    {
      id: 5,
      name: "RADEES",
      logo: "/lovable-uploads/1beb4177-6195-4afa-bda0-5d381cb7d911.png",
    },
    {
      id: 6,
      name: "ONEP",
      logo: "/lovable-uploads/76dcd9eb-2907-4c39-bd30-930d91df78b9.png",
    },
    {
      id: 7,
      name: "RAMSA",
      logo: "/lovable-uploads/ecc6a5c6-02c6-4669-83d4-65b07dcd9dfb.png",
    },
    {
      id: 8,
      name: "RADEEL",
      logo: "/lovable-uploads/4ee0d1ee-8c4d-4ca9-b00e-bbb1e9c59ffb.png",
    },
    {
      id: 9,
      name: "Office National de l'Electricité",
      logo: "/lovable-uploads/15c9d361-8ee8-45fa-af3b-42abf7986660.png",
    },
    {
      id: 10,
      name: "Amendis",
      logo: "/lovable-uploads/a4913844-d523-485f-8ed4-da48bbcba43a.png",
    },
    {
      id: 11,
      name: "RADEEMA",
      logo: "/lovable-uploads/dcab4ec8-9a17-419d-9c4d-5fcf6b9989dc.png",
    },
    {
      id: 12,
      name: "RADEEO",
      logo: "/lovable-uploads/baa80fce-2957-4834-9fde-55751e4a95cf.png",
    },
    {
      id: 13,
      name: "RADEM",
      logo: "/lovable-uploads/4a096f3c-edc1-426d-a3ce-79ba87033937.png",
    },
    {
      id: 14,
      name: "RAK",
      logo: "/lovable-uploads/699d8205-8f71-4818-822a-8004847b5155.png",
    },
    {
      id: 15,
      name: "SRM Casablanca-Settat",
      logo: "/lovable-uploads/b9f8d01a-6a40-4fbc-97ec-8ff79099a891.png",
    },
    {
      id: 16,
      name: "SRM Souss-Massa",
      logo: "/lovable-uploads/98284c9a-3085-45b0-acde-367688632dc1.png",
    },
    {
      id: 17,
      name: "Inwi",
      logo: "/lovable-uploads/98579281-bdaa-46a2-9139-2170918b2e79.png",
    },
    {
      id: 18,
      name: "Maroc Telecom",
      logo: "/lovable-uploads/434c8bc1-ffb0-45f1-a9d0-a113056ca693.png",
    },
    {
      id: 19,
      name: "Orange",
      logo: "/lovable-uploads/b0c4f942-7f14-47a7-999b-8e3195a329de.png",
    },
    {
      id: 20,
      name: "Direction Générale des Impôts",
      logo: "/lovable-uploads/098e251e-2dad-4d80-a940-ca4ea41b536d.png",
    },
    {
      id: 21,
      name: "Trésorerie Générale du Royaume",
      logo: "/lovable-uploads/e2865d20-5579-4ca8-bc1b-81ea062ea46c.png",
    },
    {
      id: 22,
      name: "BeIN Sports",
      logo: "/lovable-uploads/9872d222-fff6-482a-b56c-7f218368328d.png",
    },
    {
      id: 23,
      name: "Forever",
      logo: "/lovable-uploads/fc6e1a42-889a-4285-9641-82937ff7558f.png",
    },
  ];

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollAmount = 1; // Pixels to scroll per frame
    let animationFrameId: number;

    const scroll = () => {
      if (!scrollContainer) return;

      scrollContainer.scrollTop += scrollAmount;

      // If we've scrolled to the bottom, loop back to the top
      if (
        scrollContainer.scrollTop >=
        scrollContainer.scrollHeight - scrollContainer.clientHeight
      ) {
        scrollContainer.scrollTop = 0;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    // Start the animation
    animationFrameId = requestAnimationFrame(scroll);

    // Clean up the animation when component unmounts
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-barid-orange py-16 overflow-hidden"
    >
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase mb-8 animate-on-scroll opacity-0 transition-all duration-700 ease-out translate-y-4">
          {t("partners.title")}
        </h2>
        <div className="w-32 h-1.5 bg-white mb-16 animate-on-scroll opacity-0 transition-all duration-700 delay-300 ease-out"></div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Left side: Text and button */}
          <div className="flex-1 animate-on-scroll opacity-0 transition-opacity duration-700 delay-500">
            <h3 className="text-2xl md:text-3xl font-bold text-barid-brown mb-8 max-w-lg">
              {t("partners.multitudeTitle")}
            </h3>

            <Link to="/nos-partenaires">
              <Button
                className="bg-barid-cream text-barid-brown hover:bg-barid-light rounded-full py-6 px-6 flex items-center gap-2 transition-transform hover:scale-105 duration-300"
                variant="default"
              >
                {t("partners.discoverButton")}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Right side: Vertical scrollable partner logos */}
          <div className="flex-1 w-full md:w-auto relative animate-on-scroll opacity-0 transition-all duration-700 delay-700 translate-x-4">
            <div className="relative">
              {/* Top shadow effect */}
              <div
                className="absolute top-0 left-0 w-full h-20 z-10"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(244, 124, 44, 1) 0%, rgba(244, 124, 44, 0.7) 50%, rgba(244, 124, 44, 0) 100%)",
                  pointerEvents: "none",
                }}
              ></div>

              {/* Scrollable area with logos - increased height for desktop */}
              <div
                className="overflow-auto hide-scrollbar partners-slider"
                ref={scrollContainerRef}
                style={{
                  maxHeight: "400px",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  position: "relative",
                  zIndex: 5,
                  direction: "ltr", // Force LTR for carousel scrolling
                }}
              >
                <div
                  className="flex flex-col space-y-4 pb-4 px-4 hide-scrollbar"
                  style={{ scrollbarWidth: "none" }}
                >
                  {/* Duplicate the partners array to create seamless looping */}
                  {[...partners, ...partners, ...partners].map(
                    (partner, index) => (
                      <Card
                        key={`${partner.id}-${index}`}
                        className="flex-shrink-0 w-2/3 mx-auto bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                      >
                        <CardContent className="flex items-center justify-center p-6 aspect-square">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="h-auto w-full max-w-full object-contain transition-opacity duration-300"
                          />
                        </CardContent>
                      </Card>
                    )
                  )}
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

              {/* Bottom shadow effect */}
              <div
                className="absolute bottom-0 left-0 w-full h-20 z-20"
                style={{
                  background:
                    "linear-gradient(to top, rgba(244, 124, 44, 1) 0%, rgba(244, 124, 44, 0.7) 50%, rgba(244, 124, 44, 0) 100%)",
                  pointerEvents: "none",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
