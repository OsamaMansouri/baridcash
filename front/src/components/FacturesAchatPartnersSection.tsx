
import React from 'react';

const FacturesAchatPartnersSection: React.FC = () => {
  const partners = [
    {
      id: 1,
      name: "Payexpress",
      logo: "/lovable-uploads/34080cc1-8a69-4316-9038-5ba33337effe.png",
      bgColor: "bg-orange-100"
    },
    {
      id: 2,
      name: "Oriflame",
      logo: "/lovable-uploads/cb90a703-4b58-4a01-ac0f-21c2410454e3.png",
      bgColor: "bg-white"
    },
    {
      id: 3,
      name: "BeIN Sports",
      logo: "/lovable-uploads/9872d222-fff6-482a-b56c-7f218368328d.png",
      bgColor: "bg-yellow-100"
    }
  ];

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
      
      <section className="py-16 bg-barid-orange">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase">
              Nos partenaires
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <div key={partner.id} className={`${partner.bgColor} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-16 md:h-20 w-auto object-contain"
                  onLoad={() => console.log(`${partner.name} logo loaded successfully`)}
                  onError={() => console.log(`${partner.name} logo failed to load`)}
                />
              </div>
            ))}
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

export default FacturesAchatPartnersSection;
