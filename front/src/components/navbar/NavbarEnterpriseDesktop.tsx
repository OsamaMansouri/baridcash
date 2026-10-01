import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import NavbarDropdown from "./NavbarDropdown";
import LocaleSwitcher from "../LocaleSwitcher";
import { entrepriseMenu } from "./navbarData";

interface NavbarEnterpriseDesktopProps {
  onSearchOpen: () => void;
}

const NavbarEnterpriseDesktop: React.FC<NavbarEnterpriseDesktopProps> = ({
  onSearchOpen,
}) => {
  return (
    <div className="hidden lg:flex items-center justify-end flex-grow">
      <ul className="flex items-center">
        {entrepriseMenu.map((menuSection, index) => (
          <li key={menuSection.label} className="relative group">
            {menuSection.subItems ? (
              <NavbarDropdown
                title={menuSection.label}
                items={menuSection.subItems}
                isWide={menuSection.label === "NOS SERVICES"}
              />
            ) : (
              <Link
                to={menuSection.path || "#"}
                className="text-white mx-3 flex items-center hover:text-barid-orange transition-colors text-lg"
              >
                {menuSection.label}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Search and Language Switcher */}
      <div className="flex items-center">
        <button
          className="text-white p-2 hover:text-barid-orange transition-colors"
          onClick={onSearchOpen}
        >
          <Search size={24} />
        </button>
        <div className="ml-2">
          <LocaleSwitcher />
        </div>
      </div>
    </div>
  );
};

export default NavbarEnterpriseDesktop;
