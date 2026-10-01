import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import NavbarDropdown from "./NavbarDropdown";
import LocaleSwitcher from "../LocaleSwitcher";
import {
  nousConnaitreMenu,
  nosServicesMenu,
  serviceClientMenu,
} from "./navbarData";
import { useTranslation } from "react-i18next";
interface NavbarDesktopProps {
  onSearchOpen: () => void;
}

const NavbarDesktop: React.FC<NavbarDesktopProps> = ({ onSearchOpen }) => {
  const { t, i18n } = useTranslation("common");

  return (
    <div className="hidden lg:flex items-center justify-end flex-grow">
      <ul className="flex items-center">
        {/* Nous connaître dropdown */}
        <li className="relative group">
          <NavbarDropdown
            title={t("nav.nousConnaitre")}
            items={nousConnaitreMenu}
          />
        </li>

        {/* Nos Services dropdown */}
        <li className="relative group">
          <NavbarDropdown
            title={t("nav.nosServices")}
            items={nosServicesMenu}
            isWide={true}
          />
        </li>

        <li>
          <Link
            to="/devenez-mandataire"
            className="text-white mx-3 hover:text-barid-orange transition-colors text-lg"
          >
            {t("nav.devenezMandataire")}
          </Link>
        </li>

        {/* Service Client dropdown */}
        <li className="relative group">
          <NavbarDropdown
            title={t("nav.serviceClient")}
            items={serviceClientMenu}
          />
        </li>

        <li>
          <Link
            to="/nos-points-de-vente"
            className="text-white mx-3 hover:text-barid-orange transition-colors text-lg"
          >
            {t("nav.nosPointsDeVente")}
          </Link>
        </li>
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

export default NavbarDesktop;
