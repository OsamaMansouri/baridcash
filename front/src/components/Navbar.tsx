import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import SearchDialog from "./SearchDialog";
import NavbarLogo from "./navbar/NavbarLogo";
import NavbarDesktop from "./navbar/NavbarDesktop";
import NavbarMobile from "./navbar/NavbarMobile";
import LocaleSwitcher from "./LocaleSwitcher";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-barid-brown shadow-md" : "bg-barid-brown/95"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <NavbarLogo />

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu size={30} />
            </button>

            {/* Desktop Navigation */}
            <NavbarDesktop onSearchOpen={() => setIsSearchOpen(true)} />

            {/* Locale Switcher */}
            <div className="hidden">
              <LocaleSwitcher />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <NavbarMobile
          isOpen={isOpen}
          onSearchOpen={() => setIsSearchOpen(true)}
        />
      </nav>

      <SearchDialog
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};

export default Navbar;
