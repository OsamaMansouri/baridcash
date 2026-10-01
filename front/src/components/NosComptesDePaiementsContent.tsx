import React, { useState } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Search } from "lucide-react";
import { useTranslation } from "react-i18next";

const NosComptesDePaiementsContent: React.FC = () => {
  const { t } = useTranslation("common");
  const [currentSlide, setCurrentSlide] = useState(1);
  const [service, setService] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const advantages = [
    {
      id: 1,
      title: "SIMPLE",
      icon: (
        <img
          src="/lovable-uploads/36792be3-f683-4028-9b97-9aee49f6647e.png"
          alt="Simple icon"
          className="w-20 h-20"
        />
      ),
      description:
        "Barid Cash vous permet de gérer vos comptes de paiements simplement et rapidement.",
    },
    {
      id: 2,
      title: "SÉCURISÉ",
      icon: (
        <img
          alt="Secure icon"
          src="/lovable-uploads/920d8ab5-4d67-483f-9e85-7c95e2e15194.png"
          className="w-20 h-20"
        />
      ),
      description:
        "Barid Cash vous garantit un service sécurisé pour tous vos comptes de paiements.",
    },
    {
      id: 3,
      title: "ACCESSIBLE",
      icon: (
        <img
          alt="Accessibility icon"
          src="/lovable-uploads/dd7cc0c0-16c5-47e3-9f57-ccbace338eb8.png"
          className="w-20 h-20"
        />
      ),
      description:
        "Barid Cash met à votre disposition un large réseau d'agences pour gérer vos comptes de paiements en toute facilité.",
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? advantages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === advantages.length - 1 ? 0 : prev + 1));
  };

  const accountFormulas = [
    {
      title: t("nosComptesDePaiements.content.formulas.maly.title"),
      description: t("nosComptesDePaiements.content.formulas.maly.description"),
    },
    {
      title: t("nosComptesDePaiements.content.formulas.malyUp.title"),
      description: t(
        "nosComptesDePaiements.content.formulas.malyUp.description"
      ),
    },
    {
      title: t("nosComptesDePaiements.content.formulas.malyPlus.title"),
      description: t(
        "nosComptesDePaiements.content.formulas.malyPlus.description"
      ),
    },
    {
      title: t("nosComptesDePaiements.content.formulas.malyPremium.title"),
      description: t(
        "nosComptesDePaiements.content.formulas.malyPremium.description"
      ),
    },
  ];

  return (
    <section className="py-16 bg-[#F27D30]">
      <div className="container mx-auto px-4 flex flex-col gap-8 items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          {t("nosComptesDePaiements.content.title")}
        </h2>

        {/* Account formulas section */}
        <div className="w-full max-w-4xl space-y-4">
          {accountFormulas.map((formula, index) => (
            <div
              key={index}
              className="bg-[#5A433D] rounded-2xl p-6 text-white"
            >
              <h3 className="text-xl font-bold text-center mb-4 border-b border-white/20 pb-2">
                {formula.title}
              </h3>
              <p className="text-center text-sm leading-relaxed">
                {formula.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NosComptesDePaiementsContent;
