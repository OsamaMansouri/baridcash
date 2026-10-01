import React, { useState } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import LocationSection from "./LocationSection";
import { useTranslation } from "react-i18next";

const NarsaPermisDeConduireContent: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const [currentSlide, setCurrentSlide] = useState(1);

  const advantages = [
    {
      id: 1,
      title: t("narsaPermisDeConduire.content.simple.title"),
      icon: (
        <img
          src="/lovable-uploads/36792be3-f683-4028-9b97-9aee49f6647e.png"
          alt="Simple icon"
          className="w-20 h-20"
        />
      ),
      description: t("narsaPermisDeConduire.content.simple.description"),
    },
    {
      id: 2,
      title: t("narsaPermisDeConduire.content.secure.title"),
      icon: (
        <img
          alt="Secure icon"
          src="/lovable-uploads/920d8ab5-4d67-483f-9e85-7c95e2e15194.png"
          className="w-20 h-20"
        />
      ),
      description: t("narsaPermisDeConduire.content.secure.description"),
    },
    {
      id: 3,
      title: t("narsaPermisDeConduire.content.accessible.title"),
      icon: (
        <img
          alt="Accessibility icon"
          src="/lovable-uploads/dd7cc0c0-16c5-47e3-9f57-ccbace338eb8.png"
          className="w-20 h-20"
        />
      ),
      description: t("narsaPermisDeConduire.content.accessible.description"),
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? advantages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === advantages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <LocationSection />

      <section className="py-16 bg-[#F27D30]">
        <div className="container mx-auto px-4 flex flex-col gap-8 items-center">
          {/* Custom advantages carousel */}
          <div className="relative w-full max-w-4xl mt-8">
            <div className="flex justify-center items-center">
              {/* Advantages cards */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NarsaPermisDeConduireContent;
