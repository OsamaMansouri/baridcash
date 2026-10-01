import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const NosPartenairesPartnersSection: React.FC = () => {
  const { t } = useTranslation("common");
  const sectionRef = useRef<HTMLElement>(null);

  const partnerCategories = [
    {
      title: t("partners.categories.transferArgent"),
      partners: [
        {
          id: 1,
          name: "RIA",
          logo: "/lovable-uploads/ffcd6bce-7259-4ff6-9fd4-6a08406940bb.png",
        },
        {
          id: 2,
          name: "MoneyGram",
          logo: "/lovable-uploads/abc8c827-b5f2-4858-95f0-8593ed1d0d6b.png",
        },
        {
          id: 3,
          name: "Dirham Express",
          logo: "/lovable-uploads/2f60dbc1-f4c7-4046-9dbe-80b92ed84373.png",
        },
        {
          id: 4,
          name: "Instant Cash",
          logo: "/lovable-uploads/739435be-930b-4528-bd01-18518cbde064.png",
        },
        {
          id: 5,
          name: "UPT Money Transfer",
          logo: "/lovable-uploads/32175377-9729-41d4-bed9-b4995009f2b4.png",
        },
        {
          id: 6,
          name: "Western Union",
          logo: "/lovable-uploads/16dc62a2-5d37-4aae-a236-d3250312768c.png",
        },
        {
          id: 7,
          name: "WorldRemit",
          logo: "/lovable-uploads/1627353a-2a35-496f-9a0a-e7b9da3ab368.png",
        },
        {
          id: 8,
          name: "Placid",
          logo: "/lovable-uploads/ca129854-f154-4484-bd23-4eb60885e423.png",
        },
        {
          id: 9,
          name: "JUBA EXPRESS",
          logo: "/lovable-uploads/1418aac3-0558-4585-a8fc-179818ed4fae.png",
          url: "https://www.jubaexpress.com/",
        },
      ],
    },
    {
      title: t("partners.categories.paiementFacturesEau"),
      partners: [
        {
          id: 1,
          name: "RADEET",
          logo: "/lovable-uploads/fee5418b-a2ce-461d-8b32-bdc152043dc5.png",
        },
        {
          id: 2,
          name: "Régie Autonome",
          logo: "/lovable-uploads/33677a53-df77-49a2-9612-c2c6d46b2f1f.png",
        },
        {
          id: 3,
          name: "Redal",
          logo: "/lovable-uploads/7ce4d3bd-4b4d-4c98-abcb-edb9f52911b2.png",
        },
        {
          id: 4,
          name: "Société Régionale Multiservices",
          logo: "/lovable-uploads/b56d8b68-fdcf-407f-9959-69e781558f33.png",
        },
        {
          id: 5,
          name: "ONEP",
          logo: "/lovable-uploads/da700e74-eb3c-47ec-8193-7354e47ea0ca.png",
        },
        {
          id: 6,
          name: "RADEEL",
          logo: "/lovable-uploads/ad720364-9d19-4c40-978f-2dd014382215.png",
        },
        {
          id: 7,
          name: "Office National de l'Electricité",
          logo: "/lovable-uploads/b110ff54-15e6-4816-a251-824acecbadda.png",
        },
        {
          id: 8,
          name: "Amendis",
          logo: "/lovable-uploads/5cdb84ce-d4a0-48d1-bdad-34c965bc541b.png",
        },
        {
          id: 9,
          name: "RADEM",
          logo: "/lovable-uploads/cadcd7c9-e9e8-4258-80d3-9b2f85d4ca47.png",
        },
        {
          id: 10,
          name: "Société Régionale Multiservices Casablanca-Settat SA",
          logo: "/lovable-uploads/4cd20c11-1013-49a6-b5af-d64034740b21.png",
        },
        {
          id: 11,
          name: "Société Régionale Multiservices Souss-Massa SA",
          logo: "/lovable-uploads/adeb125f-710c-437d-893c-ba6f50537db1.png",
        },
        {
          id: 12,
          name: "SRM",
          logo: "/lovable-uploads/fd23f5dd-c2c1-425a-98bc-3acd8dc52bda.png",
        },
        {
          id: 13,
          name: "RADEEC",
          logo: "/lovable-uploads/ed12e7aa-d95e-4d6f-94b5-874ee0fb0e11.png",
        },
        {
          id: 14,
          name: "RADEEF",
          logo: "/lovable-uploads/1d80ef7b-f940-491c-af51-70b078d173de.png",
        },
      ],
    },
    {
      title: t("partners.categories.paiementFacturesTelecoms"),
      partners: [
        {
          id: 17,
          name: "Maroc Telecom",
          logo: "/lovable-uploads/7ca3a045-e09a-463a-965d-a00b69e94698.png",
        },
        {
          id: 18,
          name: "Orange",
          logo: "/lovable-uploads/b69cab95-6ced-4e70-8d7b-55289f929a37.png",
        },
        {
          id: 19,
          name: "Inwi",
          logo: "/lovable-uploads/126a72d1-06ed-4950-9e2b-9458686a83a7.png",
        },
      ],
    },
    {
      title: t("partners.categories.partenairesGouvernementaux"),
      partners: [
        {
          id: 7,
          name: "CNSS",
          logo: "/lovable-uploads/2da85e4a-c2c1-4ae3-a237-3f5fe805056c.png",
        },
        {
          id: 8,
          name: "NARSA",
          logo: "/lovable-uploads/1d3e3583-d83a-4764-b3f2-3fc64bb8b979.png",
        },
        {
          id: 9,
          name: "Direction Générale des Impôts",
          logo: "/lovable-uploads/cb2f7652-df88-42fb-b572-46ed6d1671d7.png",
        },
        {
          id: 10,
          name: "Administration des Douanes",
          logo: "/lovable-uploads/b8bec90e-6ffa-4017-b222-fa3495a6a51f.png",
        },
        {
          id: 11,
          name: "Caisse Marocaine des Retraites",
          logo: "/lovable-uploads/589c715a-38fa-4402-be70-69f5f168b649.png",
        },
        {
          id: 12,
          name: "CNOPS",
          logo: "/lovable-uploads/d717e165-cd36-4ebc-95c0-5230749f382e.png",
        },
        {
          id: 13,
          name: "CDG",
          logo: "/lovable-uploads/6ac3c142-4e9c-4b76-be7b-e4f25e34cc42.png",
        },
        {
          id: 14,
          name: "Trésorerie Générale du Royaume",
          logo: "/lovable-uploads/d4929b59-b7e5-4836-b0ee-6042f4875e41.png",
        },
        {
          id: 15,
          name: "Annonces légales",
          logo: "/lovable-uploads/5b33d27c-acf2-452d-80fd-bffd0b8d7d8c.png",
        },
        {
          id: 16,
          name: "ROKHAS",
          logo: "/lovable-uploads/cef125fa-e727-473a-b4a6-ad71ac5294e6.png",
        },
      ],
    },
    {
      title: t("partners.categories.servicesPostaux"),
      partners: [
        {
          id: 10,
          name: "Poste Maroc",
          logo: "/lovable-uploads/1cd933ea-4f01-4c75-bb1a-461936746e67.png",
        },
        {
          id: 11,
          name: "Amana",
          logo: "/lovable-uploads/09e94588-add3-4235-a187-c5d57c77994c.png",
        },
        {
          id: 12,
          name: "Chronopost",
          logo: "/lovable-uploads/596efed8-4164-48b4-a245-1b4a34018e45.png",
        },
      ],
    },
    {
      title: t("partners.categories.etBienPlus"),
      partners: [
        {
          id: 14,
          name: "Forever",
          logo: "/lovable-uploads/af068f09-8e81-42d5-8310-a0af45f145d0.png",
        },
        {
          id: 15,
          name: "BeIN Sports",
          logo: "/lovable-uploads/9872d222-fff6-482a-b56c-7f218368328d.png",
        },
        {
          id: 16,
          name: "PayExpress",
          logo: "/lovable-uploads/9547e05c-5987-41fc-9ae1-1c9f9c9740c5.png",
        },
        {
          id: 17,
          name: "Autoroutes du Maroc",
          logo: "/lovable-uploads/fee72ae8-9557-44a4-8888-2d7a93dfba01.png",
        },
      ],
    },
  ];

  // Optimized animation on scroll with better performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Use requestAnimationFrame for smoother animations
            requestAnimationFrame(() => {
              entry.target.classList.add("animate-in");
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px 0px",
      }
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const CategorySlider = ({
    category,
    index,
  }: {
    category: any;
    index: number;
  }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);
    const autoScrollRef = useRef<number>();

    useEffect(() => {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;

      // Reduced scroll speed for smoother animation
      const scrollAmount = 0.5;
      let animationFrameId: number;

      const scroll = () => {
        if (!scrollContainer || isDraggingRef.current) return;
        scrollContainer.scrollLeft += scrollAmount;

        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
        animationFrameId = requestAnimationFrame(scroll);
      };

      // Start scrolling immediately
      animationFrameId = requestAnimationFrame(scroll);
      autoScrollRef.current = animationFrameId;

      return () => {
        if (autoScrollRef.current) {
          cancelAnimationFrame(autoScrollRef.current);
        }
        cancelAnimationFrame(animationFrameId);
      };
    }, [index]);

    const handleMouseDown = (e: React.MouseEvent) => {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;

      isDraggingRef.current = true;
      startXRef.current = e.pageX - scrollContainer.offsetLeft;
      scrollLeftRef.current = scrollContainer.scrollLeft;
      scrollContainer.style.cursor = "grabbing";

      // Stop auto-scroll when dragging starts
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();

      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;

      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startXRef.current) * 2; // Multiply by 2 for faster scrolling

      scrollContainer.scrollLeft = scrollLeftRef.current - walk;
    };

    const handleMouseUp = () => {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;

      isDraggingRef.current = false;
      scrollContainer.style.cursor = "grab";

      // Resume auto-scroll after a delay
      setTimeout(() => {
        if (!isDraggingRef.current) {
          const scroll = () => {
            if (!scrollContainer || isDraggingRef.current) return;

            scrollContainer.scrollLeft += 0.5;
            if (
              scrollContainer.scrollLeft >=
              scrollContainer.scrollWidth - scrollContainer.clientWidth
            ) {
              scrollContainer.scrollLeft = 0;
            }
            autoScrollRef.current = requestAnimationFrame(scroll);
          };
          autoScrollRef.current = requestAnimationFrame(scroll);
        }
      }, 2000);
    };

    const handleMouseLeave = () => {
      handleMouseUp();
    };

    return (
      <div className="mb-16 animate-on-scroll opacity-0 transition-all duration-500 ease-out translate-y-2">
        {/* Category Title with improved animation */}
        <h3 className="text-white text-2xl font-bold mb-8 text-center transition-all duration-300 ease-in-out">
          {category.title}
        </h3>

        {/* Partners Slider with optimized scrolling */}
        <div className="relative">
          {/* Improved shadow effects with better gradients */}
          <div
            className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(244, 124, 44, 1) 0%, rgba(244, 124, 44, 0.8) 40%, rgba(244, 124, 44, 0.3) 70%, rgba(244, 124, 44, 0) 100%)",
            }}
          ></div>

          {/* Scrollable area with smoother scrolling */}
          <div
            className="overflow-x-auto hide-scrollbar scroll-smooth cursor-grab select-none partners-slider"
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              position: "relative",
              zIndex: 5,
              scrollBehavior: "smooth",
              direction: "ltr", // Force LTR for carousel scrolling
            }}
          >
            <div
              className={`flex pb-4 px-4 ${
                category.title === t("partners.categories.servicesPostaux")
                  ? "space-x-12"
                  : "space-x-8"
              }`}
            >
              {/* Multiple duplicates for seamless infinite loop, especially for categories with few partners */}
              {(() => {
                const multiplier = category.partners.length < 5 ? 6 : 2; // More duplicates for small partner lists
                const duplicatedPartners = [];
                for (let i = 0; i < multiplier; i++) {
                  duplicatedPartners.push(...category.partners);
                }
                return duplicatedPartners.map((partner, partnerIndex) => (
                  <div
                    key={`${partner.id}-${partnerIndex}`}
                    className="flex-shrink-0"
                  >
                    {partner.url ? (
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Card
                          className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 overflow-hidden cursor-pointer 
                         w-72 h-40 sm:w-80 sm:h-40 md:w-96 md:h-40
                         ${
                           category.title ===
                           t("partners.categories.servicesPostaux")
                             ? "lg:w-96 lg:h-40"
                             : category.title ===
                               t("partners.categories.paiementFacturesEau")
                             ? "lg:w-96 lg:h-48"
                             : "lg:w-80 lg:h-40"
                         }`}
                        >
                          <CardContent className="flex items-center justify-center py-8 px-6 h-full">
                            <img
                              src={partner.logo}
                              alt={partner.name}
                              className="h-auto w-full max-w-full max-h-full object-contain transition-all duration-300 ease-in-out hover:scale-110"
                              loading="lazy"
                            />
                          </CardContent>
                        </Card>
                      </a>
                    ) : (
                      <Card
                        className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 overflow-hidden cursor-pointer 
                       w-72 h-40 sm:w-80 sm:h-40 md:w-96 md:h-40
                       ${
                         category.title ===
                         t("partners.categories.servicesPostaux")
                           ? "lg:w-96 lg:h-40"
                           : category.title ===
                             t("partners.categories.paiementFacturesEau")
                           ? "lg:w-96 lg:h-48"
                           : "lg:w-80 lg:h-40"
                       }`}
                      >
                        <CardContent className="flex items-center justify-center py-8 px-6 h-full">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="h-auto w-full max-w-full max-h-full object-contain transition-all duration-300 ease-in-out hover:scale-110"
                            loading="lazy"
                          />
                        </CardContent>
                      </Card>
                    )}
                  </div>
                ));
              })()}
            </div>
          </div>

          {/* Improved right shadow effect */}
          <div
            className="absolute right-0 top-0 h-full w-24 z-20 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, rgba(244, 124, 44, 1) 0%, rgba(244, 124, 44, 0.8) 40%, rgba(244, 124, 44, 0.3) 70%, rgba(244, 124, 44, 0) 100%)",
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-barid-orange py-16 overflow-hidden"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase mb-8 animate-on-scroll opacity-0 transition-all duration-500 ease-out translate-y-2">
            {t("partners.title")}
          </h2>
        </div>

        {/* Display each category with improved animations */}
        {partnerCategories.map((category, index) => (
          <CategorySlider
            key={category.title}
            category={category}
            index={index}
          />
        ))}

        {/* Enhanced CSS with better performance */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .animate-in {
              opacity: 1 !important;
              transform: translateY(0) !important;
            }
            @media (prefers-reduced-motion: reduce) {
              .animate-on-scroll,
              .transition-all {
                animation: none !important;
                transition: none !important;
              }
            }
          `,
          }}
        />
      </div>
    </section>
  );
};

export default NosPartenairesPartnersSection;
