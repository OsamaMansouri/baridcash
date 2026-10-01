import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Search } from "lucide-react";
import LocaleSwitcher from "../LocaleSwitcher";
import { entrepriseMenu } from "./navbarData";

interface NavbarEnterpriseMobileProps {
  isOpen: boolean;
  onSearchOpen: () => void;
}

const NavbarEnterpriseMobile: React.FC<NavbarEnterpriseMobileProps> = ({
  isOpen,
  onSearchOpen,
}) => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleSection = (sectionLabel: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionLabel]: !prev[sectionLabel],
    }));
  };

  return (
    <div
      className={`lg:hidden overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-screen" : "max-h-0"
      }`}
    >
      <div className="bg-barid-brown border-t border-barid-orange/20">
        <div className="container mx-auto px-4 py-4">
          {/* Search button and Language Switcher */}
          <div className="mb-4 flex items-center gap-3">
            <button
              className="flex-1 text-white p-3 border border-barid-orange/30 rounded-lg flex items-center justify-center hover:bg-barid-orange/10 transition-colors"
              onClick={onSearchOpen}
            >
              <Search size={20} className="mr-2" />
              Rechercher
            </button>
            <LocaleSwitcher />
          </div>

          {/* Menu sections */}
          <div className="space-y-2">
            {entrepriseMenu.map((section) => (
              <div
                key={section.label}
                className="border-b border-barid-orange/20 last:border-b-0"
              >
                {section.subItems ? (
                  <>
                    <button
                      className="w-full text-left text-white py-3 flex items-center justify-between hover:text-barid-orange transition-colors"
                      onClick={() => toggleSection(section.label)}
                    >
                      <span className="font-medium text-lg">
                        {section.label}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          openSections[section.label] ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openSections[section.label]
                          ? "max-h-96 pb-2"
                          : "max-h-0"
                      }`}
                    >
                      <div className="pl-4 space-y-2">
                        {section.subItems.map((item) => (
                          <div key={item.label}>
                            {item.path && item.path !== "#" ? (
                              <Link
                                to={item.path}
                                className="block text-white/80 py-2 hover:text-barid-orange transition-colors"
                              >
                                {item.label}
                              </Link>
                            ) : (
                              <span className="block text-white/60 py-2">
                                {item.label}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={section.path || "#"}
                    className="block w-full text-left text-white py-3 hover:text-barid-orange transition-colors"
                  >
                    <span className="font-medium text-lg">{section.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarEnterpriseMobile;
