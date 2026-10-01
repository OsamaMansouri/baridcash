import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { animations } from "@/utils/animation";
import { useTranslation } from "react-i18next";
const FaqSection: React.FC = () => {
  const { t } = useTranslation("common");

  // Advantages items based on the image
  const advantageItems = [
    {
      title: t("advantages.security.title"),
      content: t("advantages.security.content"),
    },
    {
      title: t("advantages.instant.title"),
      content: t("advantages.instant.content"),
    },
    {
      title: t("advantages.fees.title"),
      content: t("advantages.fees.content"),
    },
    {
      title: t("advantages.proximity.title"),
      content: t("advantages.proximity.content"),
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Detect when section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
    <section
      id="faq"
      className="bg-barid-background py-20 overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Advantage Column */}
          <div
            className={`lg:w-1/2 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 ref={titleRef} className="text-4xl font-bold text-barid-brown">
              {t("advantages.title")}
            </h2>
            <div
              className={`w-56 h-2 bg-barid-brown my-6 mb-12 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
              style={{ transformOrigin: "left" }}
            ></div>

            <div className="space-y-2">
              <Accordion type="single" defaultValue="item-0" collapsible>
                {advantageItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className={`border-barid-orange pt-6 pb-2 transition-all duration-700 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${400 + index * 150}ms` }}
                  >
                    <AccordionTrigger className="flex justify-between items-center group p-0 py-2 no-underline hover:no-underline">
                      <h3 className="text-2xl font-semibold text-barid-brown text-left">
                        {item.title}
                      </h3>
                      <ChevronDown className="h-8 w-8 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-barid-brown" />
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-4">
                      <p className="text-gray-700">{item.content}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Image Column */}
          <div
            className={`lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <img
              ref={imageRef}
              src="/lovable-uploads/28c393e5-edac-4c32-928f-caec3b4f4054.png"
              alt="Barid Cash Mobile Services"
              className="max-w-[90%] h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
