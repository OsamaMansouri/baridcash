import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { animations } from "@/utils/animation";
import { useTranslation } from "react-i18next";

// News data for the carousel - using our 3 articles to fill 5 slots
const getNewsItems = (t: any, language: string) => [
  {
    id: 1,
    title: `${t("actualites.hero.title")} ${t("actualites.hero.titleOrange")}`,
    image: "/lovable-uploads/1ffb1114-7ca8-4040-9fae-356a84ad8fe5.png",
    pdfPath:
      language === "ar"
        ? "/pdfs/actualites/partenariat-atlantasanad-new-ar.pdf"
        : "/pdfs/actualites/partenariat-atlantasanad-new.pdf",
    downloadName:
      language === "ar"
        ? "BaridCash - ATLANTASANAD - AR.pdf"
        : "BaridCash - ATLANTASANAD.pdf",
  },
  {
    id: 2,
    title: `${t("actualites.second.title")} ${t(
      "actualites.second.titleBlack"
    )}`,
    image: "/lovable-uploads/cb8f1cf1-f3cd-4831-b9d8-68213788b995.png",
    pdfPath:
      language === "ar"
        ? "/pdfs/actualites/convention-axa-assurance-new-ar.pdf"
        : "/pdfs/actualites/convention-axa-assurance-new.pdf",
    downloadName:
      language === "ar"
        ? "BaridCash - AXA ASSURANCE - AR.pdf"
        : "BaridCash - AXA ASSURANCE.pdf",
  },
  {
    id: 3,
    title: `${t("actualites.third.title")} ${t(
      "actualites.third.titleOrange"
    )}`,
    image: "/lovable-uploads/84d8938f-c10c-4e0c-844c-a8da8cea80a5.png",
    pdfPath:
      language === "ar"
        ? "/pdfs/actualites/partenariat-fnacam-new-ar.pdf"
        : "/pdfs/actualites/partenariat-fnacam-new.pdf",
    downloadName:
      language === "ar"
        ? "BaridCash - FNACAM - AR.pdf"
        : "BaridCash - FNACAM.pdf",
  },
  {
    id: 4,
    title: `${t("actualites.hero.title")} ${t("actualites.hero.titleOrange")}`,
    // Duplicate of id: 1
    image: "/lovable-uploads/1ffb1114-7ca8-4040-9fae-356a84ad8fe5.png",
    pdfPath:
      language === "ar"
        ? "/pdfs/actualites/partenariat-atlantasanad-new-ar.pdf"
        : "/pdfs/actualites/partenariat-atlantasanad-new.pdf",
    downloadName:
      language === "ar"
        ? "BaridCash - ATLANTASANAD - AR.pdf"
        : "BaridCash - ATLANTASANAD.pdf",
  },
  {
    id: 5,
    title: `${t("actualites.second.title")} ${t(
      "actualites.second.titleBlack"
    )}`,
    // Duplicate of id: 2
    image: "/lovable-uploads/cb8f1cf1-f3cd-4831-b9d8-68213788b995.png",
    pdfPath:
      language === "ar"
        ? "/pdfs/actualites/convention-axa-assurance-new-ar.pdf"
        : "/pdfs/actualites/convention-axa-assurance-new.pdf",
    downloadName:
      language === "ar"
        ? "BaridCash - AXA ASSURANCE - AR.pdf"
        : "BaridCash - AXA ASSURANCE.pdf",
  },
];

const TransferNewsSection: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const [api, setApi] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const newsItems = getNewsItems(t, i18n.language);

  useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });

    // Initialize with the correct active index
    setActiveIndex(api.selectedScrollSnap());
  }, [api]);

  // Animation on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
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

  return (
    <>
      {/* Added background image at the top with no padding or margin */}
      <div className="w-full">
        <img
          src="/lovable-uploads/df1604bf-d132-4e5c-954d-da98d6eed6ed.png"
          alt="Decorative background"
          className="w-full"
        />
      </div>

      <section
        className="bg-barid-orange py-16 overflow-hidden relative"
        ref={sectionRef}
      >
        <div className="container mx-auto px-4 relative z-10">
          <h2
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
            className={`text-4xl font-bold text-white uppercase mb-4 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {t("actualites.newsSection.title")}
          </h2>
          <div
            className={`w-32 h-1.5 bg-white mb-16 transition-all duration-700 ease-out delay-300 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{ transformOrigin: "left" }}
          ></div>

          <div
            className={`transition-all duration-700 ease-out delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
                containScroll: false,
                startIndex: 1,
                skipSnaps: false,
                dragFree: false,
              }}
              className="py-12"
              style={{
                direction: "ltr", // Force LTR for carousel scrolling
              }}
            >
              <div className="flex items-center justify-center relative">
                {/* Left arrow positioned absolutely */}
                <div className="absolute left-0 z-20">
                  <CarouselPrevious
                    className={`h-14 w-14 bg-white text-gray-600 border-none shadow-md rounded-full hover:scale-110 transition-transform duration-300 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-10"
                    }`}
                  >
                    <ArrowLeft className="h-6 w-6" />
                  </CarouselPrevious>
                </div>

                <CarouselContent className="-ml-4">
                  {newsItems.map((news, index) => (
                    <CarouselItem
                      key={news.id}
                      className={`pl-4 basis-full md:basis-1/3 py-8 transition-all duration-700 ease-out ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-20"
                      }`}
                      style={{ transitionDelay: `${600 + index * 100}ms` }}
                    >
                      <div
                        className={`bg-white overflow-hidden flex flex-col h-full transition-all duration-300
                          ${
                            activeIndex === index
                              ? "transform scale-110 z-10 rounded-xl shadow-lg border border-white/30"
                              : "scale-90 opacity-80 rounded-xl shadow-sm"
                          }`}
                      >
                        <div
                          className="w-full overflow-hidden"
                          style={{
                            height: activeIndex === index ? "200px" : "180px",
                            transition: "height 0.3s ease",
                          }}
                        >
                          <img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <h3
                            lang={i18n.language === "ar" ? "ar" : "fr"}
                            style={{
                              direction: i18n.language === "ar" ? "rtl" : "ltr",
                              fontFamily:
                                i18n.language === "ar"
                                  ? "Cairo, Arial, sans-serif"
                                  : "Inter, Arial, sans-serif",
                            }}
                            className={`font-bold text-barid-brown uppercase mb-auto
                            ${activeIndex === index ? "text-xl" : "text-base"}`}
                          >
                            {news.title}
                          </h3>
                          <div className="mt-6 text-center">
                            <a
                              href={news.pdfPath}
                              target="_blank"
                              rel="noopener noreferrer"
                              lang={i18n.language === "ar" ? "ar" : "fr"}
                              style={{
                                direction:
                                  i18n.language === "ar" ? "rtl" : "ltr",
                                fontFamily:
                                  i18n.language === "ar"
                                    ? "Cairo, Arial, sans-serif"
                                    : "Inter, Arial, sans-serif",
                              }}
                              className={`inline-block rounded-full px-8 py-1 uppercase transition-all duration-300 hover:scale-105 ${
                                activeIndex === index
                                  ? "bg-barid-brown text-white hover:bg-barid-brown/90"
                                  : "border border-barid-brown text-barid-brown hover:bg-barid-brown hover:text-white"
                              }`}
                            >
                              {t("actualites.newsSection.cta")}
                            </a>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Right arrow positioned absolutely */}
                <div className="absolute right-0 z-20">
                  <CarouselNext
                    className={`h-14 w-14 bg-white text-gray-600 border-none shadow-md rounded-full hover:scale-110 transition-transform duration-300 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-10"
                    }`}
                  >
                    <ArrowRight className="h-6 w-6" />
                  </CarouselNext>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Added background image at the bottom with no padding or margin and 50px bottom margin */}
      <div className="w-full mb-[50px]">
        <img
          src="/lovable-uploads/df1604bf-d132-4e5c-954d-da98d6eed6ed.png"
          alt="Decorative background"
          className="w-full"
        />
      </div>
    </>
  );
};

export default TransferNewsSection;
