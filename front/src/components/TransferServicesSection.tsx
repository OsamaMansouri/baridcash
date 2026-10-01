import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

// Define the service icon URLs outside the component
const serviceIconUrls = {
  transferNational: {
    default: "/lovable-uploads/8555c445-d757-448e-b132-026be7c071e1.png",
    hover: "/lovable-uploads/bfbfaf13-c4c2-4508-b2b6-41444bf476e4.png",
  },
  transferInternational: {
    default: "/lovable-uploads/b1ccf460-eb7a-435b-b8ea-4f61e013932c.png",
    hover: "/lovable-uploads/a1fb27f8-0682-4e8d-8264-11ab8f9fe385.png",
  },
  changeDevises: {
    default: "/lovable-uploads/01684b72-f9fa-4e3d-95ba-741d80d4de59.png",
    hover: "/lovable-uploads/523b7b3e-2318-48be-85b0-bac8e3cef013.png",
  },
  ouvertureCompte: {
    default: "/lovable-uploads/28dd4646-b329-48ae-9bf3-90e4d241803b.png",
    hover: "/lovable-uploads/43f6af08-7f92-4078-8d6f-86c33aa365b4.png",
  },
  baridPay: {
    default: "/lovable-uploads/2b6739a1-7663-4697-b653-e70afb0b2ba9.png",
    hover: "/lovable-uploads/cb90a703-4b58-4a01-ac0f-21c2410454e3.png",
  },
  carteMonetique: {
    default: "/lovable-uploads/d9d895f3-09ec-41d0-b01d-2f2274300b57.png",
    hover: "/lovable-uploads/523cd4af-d983-4c10-9723-b320bef3180d.png",
  },
  taxes: {
    default: "/lovable-uploads/33a6c089-dd1e-4ece-b521-824e98d255f0.png", // Updated with tva-tax.png
    hover: "/lovable-uploads/67ff63f5-1ced-4129-935c-9278cb71adb3.png",
  },
  eTimbre: {
    default: "/lovable-uploads/af5ef553-4765-4823-8fdd-692815b78e70.png", // Orange e-timbre image
    hover: "/lovable-uploads/3e1d0cf0-b527-45c4-be85-653aca5c6ed6.png", // New hover image (cream/white version)
  },
  rokhas: {
    default: "/lovable-uploads/e732e47d-b620-423f-8642-2c5c8cf8a015.png", // Updated with newly uploaded image
    hover: "/lovable-uploads/5dd1af7b-80db-4239-ab7d-f1d5b34df558.png", // Keep the current hover image
  },
  paiementFactures: {
    default: "/lovable-uploads/34080cc1-8a69-4316-9038-5ba33337effe.png", // Recently updated default image
    hover: "/lovable-uploads/5cfa652f-7d01-438f-aed4-427f343dc408.png", // New hover image uploaded by user
  },
  paiementPartenaires: {
    default: "/lovable-uploads/d4ad6e02-cd0c-4588-92cc-1b31aba03af7.png", // Updated with produit-assurance.png
    hover: "/lovable-uploads/d20924c5-4d76-4127-b141-0c96266367ae.png", // Updated with newly uploaded image
  },
  servicesNARSA: {
    default: "/lovable-uploads/098409fd-99e2-438c-b573-f7f7b77720f2.png", // Updated with new NARSA image
    hover: "/lovable-uploads/ea9282e8-d15f-4956-b2fe-56bd067078ef.png", // New NARSA hover image
  },
  amana: {
    default: "/lovable-uploads/cea39470-81fa-40bc-9aaf-db74e9440118.png", // Copy of E-timbre default image
    hover: "/lovable-uploads/5ec4e760-4c0f-41f0-ae46-5f0721410c9b.png", // Copy of E-timbre hover image
  },
  chronopost: {
    default: "/lovable-uploads/025e7083-7f6c-4443-bec9-47016bcad0ee.png", // Updated with paiementPartenaires default image
    hover: "/lovable-uploads/d6c967a9-d550-4dc6-adf3-7c43f8ad71f0.png", // Updated with produitsAssurance hover image
  },
  servicesCNSS: {
    default: "/lovable-uploads/30e35308-38d4-4ed5-ac2f-c188ded52413.png", // Updated with paiementFactures default image
    hover: "/lovable-uploads/0c7c1be7-817f-4237-88da-aebfc88622e1.png", // Updated with annoncesLegales hover image
  },
  produitsAssurance: {
    default: "/lovable-uploads/8bb1b264-79e5-4305-8646-91af826147a0.png", // Updated with ROKHAS image
    hover: "/lovable-uploads/2f8f7494-1e15-4f4a-81a3-691e2895ddf0.png", // Updated with newly uploaded shield image
  },
  annoncesLegales: {
    default: "/lovable-uploads/d74e2bea-f13f-405c-ac98-f5912a2ff355.png", // Keeping the current default image
    hover: "/lovable-uploads/911247e2-432b-4fa5-9563-54d9a0026cf6.png", // Updated with newly uploaded cream info icon
  },
};

// Define the type for the service keys
type ServiceIconKey = keyof typeof serviceIconUrls;

// Service icons component with normal (orange) and hover (white) variants
const ServiceIcon = ({
  serviceName,
  hovering,
}: {
  serviceName: ServiceIconKey;
  hovering: boolean;
}) => {
  // Use the hover version if hovering, otherwise use default
  const iconUrls = serviceIconUrls[serviceName];
  const iconUrl = hovering ? iconUrls.hover : iconUrls.default;

  // Convert the serviceName to a readable format
  const altText = String(serviceName)
    .replace(/([A-Z])/g, " $1")
    .trim();

  return (
    <img
      src={iconUrl}
      alt={altText}
      className={cn("w-24 h-24 object-contain transition-opacity duration-300")}
    />
  );
};

// Define the services with their specific background colors and links where available
const services = [
  {
    iconKey: "transferNational" as ServiceIconKey,
    title: "Transfert d'argent national",
    description:
      "Découvrez les avantages de notre service de transfert d'argent national Mandati Express.",
    bgColor: "bg-[#FFF7E5]",
    link: undefined, // No dedicated page yet
  },
  {
    iconKey: "transferInternational" as ServiceIconKey,
    title: "Transfert d'argent international",
    description:
      "Recevez votre argent de l'étranger avec facilité, efficacité et fiabilité.",
    bgColor: "bg-[#EEE6D3]",
    link: undefined, // No dedicated page yet
  },
  {
    iconKey: "changeDevises" as ServiceIconKey,
    title: "Change de devises",
    description: "Bénéficiez d'un taux de change compétitif.",
    bgColor: "bg-[#FFF7E5]",
    link: "/change-devises", // Link to Change Devises page
  },
  {
    iconKey: "ouvertureCompte" as ServiceIconKey,
    title: "Ouverture de compte",
    description: "Découvrez le compte de paiement qui vous convient.",
    bgColor: "bg-[#EEE6D3]",
    link: undefined, // No dedicated page yet
  },
  {
    iconKey: "baridPay" as ServiceIconKey,
    title: "BARID PAY",
    description:
      "Découvrez notre application mobile sécurisée et facile d'utilisation.",
    bgColor: "bg-[#FFF7E5]",
    link: undefined, // No dedicated page yet
  },
  {
    iconKey: "carteMonetique" as ServiceIconKey,
    title: "Carte monétique",
    description:
      "Découvrez les avantages de la carte monétique ralliée à votre compte Barid Cash.",
    bgColor: "bg-[#EEE6D3]",
    link: "/cartes-monetiques", // Link to Cartes Monetiques page
  },
  {
    iconKey: "taxes" as ServiceIconKey,
    title: "TVA, IS, IR, vignette auto",
    description: "Payez vos impôts et taxes en agence Barid Cash.",
    bgColor: "bg-[#EEE6D3]",
    link: undefined, // No dedicated page yet
  },
  {
    iconKey: "eTimbre" as ServiceIconKey,
    title: "E-timbre",
    description:
      "Payez votre e-timbre avec Barid Cash pour votre passeport, permis de port d'arme et permis de chasse.",
    bgColor: "bg-[#FFF7E5]",
    link: "/e-timbre", // Link to E-Timbre page
  },
  {
    iconKey: "rokhas" as ServiceIconKey,
    title: "ROKHAS",
    description: "Payez vos indemnités Rokhas chez Barid Cash.",
    bgColor: "bg-[#EEE6D3]",
    link: undefined, // No dedicated page yet
  },
  {
    iconKey: "paiementFactures" as ServiceIconKey,
    title: "Paiement de factures",
    description:
      "Payez vos factures d'eau, d'électricité et télécom avec Barid Cash.",
    bgColor: "bg-[#FFF7E5]",
    link: undefined, // No dedicated page yet
  },
  {
    iconKey: "paiementPartenaires" as ServiceIconKey,
    title: "Paiement partenaires",
    description: "Payez vos achats en ligne avec Barid Cash.",
    bgColor: "bg-[#EEE6D3]",
    link: undefined, // No dedicated page yet
  },
  {
    iconKey: "servicesNARSA" as ServiceIconKey,
    title: "Services NARSA",
    description:
      "Découvrez les produits de la NARSA disponibles en exclusivité chez Barid Cash.",
    bgColor: "bg-[#FFF7E5]",
    link: undefined, // No dedicated page yet
  },
  {
    iconKey: "amana" as ServiceIconKey,
    title: "Amana",
    description: "Découvrez les services Amana pour l'envoi de vos colis.",
    bgColor: "bg-[#FFF7E5]",
    link: "/amana", // Link to Amana page
  },
  {
    iconKey: "chronopost" as ServiceIconKey,
    title: "Chronopost",
    description: "Découvrez le service de livraison Chronopost.",
    bgColor: "bg-[#EEE6D3]",
    link: "/chronopost", // Link to Chronopost page
  },
  {
    iconKey: "servicesCNSS" as ServiceIconKey,
    title: "Services CNSS",
    description:
      "Découvrez les services CNSS disponibles dans nos agences Barid Cash.",
    bgColor: "bg-[#FFF7E5]",
    link: undefined, // No dedicated page yet
  },
  {
    iconKey: "produitsAssurance" as ServiceIconKey,
    title: "Produits d'assurance",
    description: "Découvrez notre offre de produits d'assurance.",
    bgColor: "bg-[#EEE6D3]",
    link: undefined, // No dedicated page yet
  },
  {
    iconKey: "annoncesLegales" as ServiceIconKey,
    title: "Annonces légales",
    description:
      "Payez vos annonces légales en toute facilité avec Barid Cash.",
    bgColor: "bg-[#FFF7E5]",
    link: "/annonces-legales", // Link to Annonces Legales page
  },
];

// Service card component with hover state handling
const ServiceCard = ({
  iconKey,
  title,
  description,
  bgClass,
  link,
}: {
  iconKey: ServiceIconKey;
  title: string;
  description: string;
  bgClass: string;
  link?: string;
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const CardContent = () => (
    <>
      <div className="mb-4 flex justify-center w-full">
        <ServiceIcon serviceName={iconKey} hovering={isHovered} />
      </div>
      <h3
        className={cn(
          "font-bold text-lg mb-2 text-barid-brown transition-colors duration-300",
          isHovered && "text-white"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "text-sm text-gray-600 transition-colors duration-300",
          isHovered && "text-white"
        )}
      >
        {description}
      </p>
    </>
  );

  // Wrapper component with proper event handlers
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (link) {
      return (
        <Link
          to={link}
          className={cn(
            "h-64 p-6 flex flex-col items-start cursor-pointer",
            bgClass,
            "transition-colors duration-300 hover:bg-[#5A433D]" // Brown background on hover
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {children}
        </Link>
      );
    }

    return (
      <div
        className={cn(
          "h-64 p-6 flex flex-col items-start",
          bgClass,
          "transition-colors duration-300 hover:bg-[#5A433D]" // Brown background on hover
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </div>
    );
  };

  return (
    <CardWrapper>
      <CardContent />
    </CardWrapper>
  );
};

const TransferServicesSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    const container = carouselRef.current;
    if (container) {
      // Scroll by the width of 3 cards (one full view)
      container.scrollBy({ left: 900, behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="bg-barid-orange py-16 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col lg:flex-row">
          {/* Left column */}
          <div className="lg:w-1/3 mb-10 lg:mb-0 lg:pr-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              NOS SERVICES
            </h2>
            <div className="w-32 h-1.5 bg-white my-6"></div>
            <div className="text-white space-y-2 mt-[100px] py-10 px-6 w-full">
              <p className="text-3xl font-bold">Rapide</p>
              <p className="text-3xl font-bold">Facile</p>
              <p className="text-3xl font-bold">Flexible</p>
            </div>
          </div>

          {/* Right column - Services with 2x3 grid layout */}
          <div className="lg:w-2/3 relative">
            <div className="relative overflow-hidden rounded-lg">
              {/* Right fade overlay */}
              <div
                className="absolute right-0 top-0 bottom-0 w-16 z-20 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to left, #f47c2c 20%, transparent 100%)",
                }}
              ></div>

              {/* Horizontal scrollable container with 2x3 grid */}
              <div
                ref={carouselRef}
                className="flex overflow-x-auto hide-scrollbar scroll-smooth"
                style={{
                  scrollSnapType: "x mandatory",
                  WebkitOverflowScrolling: "touch",
                  direction: "ltr", // Force LTR for carousel scrolling
                }}
              >
                {/* Group services into sets of 6 (3 columns x 2 rows) */}
                {Array.from({ length: Math.ceil(services.length / 6) }).map(
                  (_, groupIndex) => (
                    <div
                      key={groupIndex}
                      className="flex-shrink-0 w-[900px] grid grid-cols-3"
                      style={{ scrollSnapAlign: "start" }}
                    >
                      {/* Create 3 columns, each with 2 stacked cards */}
                      {[0, 1, 2].map((colIndex) => {
                        // Get the services for this column (2 cards per column)
                        const startIndex = groupIndex * 6 + colIndex;
                        const topCard = services[startIndex];
                        const bottomCard = services[startIndex + 3];

                        // Only render the column if at least the top card exists
                        if (!topCard) return null;

                        // Determine the border radius for outer corners
                        const isFirstColumn = colIndex === 0;
                        const isLastColumn = colIndex === 2;

                        return (
                          <div
                            key={colIndex}
                            className={cn(
                              "flex flex-col overflow-hidden",
                              isFirstColumn ? "rounded-tl-lg" : "",
                              isLastColumn ? "rounded-br-lg" : ""
                            )}
                          >
                            {/* Top Card */}
                            <ServiceCard
                              iconKey={topCard.iconKey}
                              title={topCard.title}
                              description={topCard.description}
                              bgClass={cn(
                                topCard.bgColor,
                                isFirstColumn ? "rounded-tl-lg" : ""
                              )}
                              link={topCard.link}
                            />

                            {/* Bottom Card - only render if exists */}
                            {bottomCard && (
                              <ServiceCard
                                iconKey={bottomCard.iconKey}
                                title={bottomCard.title}
                                description={bottomCard.description}
                                bgClass={cn(
                                  bottomCard.bgColor,
                                  isLastColumn ? "rounded-br-lg" : ""
                                )}
                                link={bottomCard.link}
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Navigation arrow on the right */}
            <div className="mt-6 flex justify-end relative z-30 mr-4">
              <button
                className="hover:opacity-80 h-14 w-14 rounded-full flex items-center justify-center focus:outline-none transition-opacity"
                onClick={handleNext}
                aria-label="Next services"
              >
                {/* Custom arrow icon that matches the provided image - now with white stroke */}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 14H23"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16 7L23 14L16 21"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransferServicesSection;
