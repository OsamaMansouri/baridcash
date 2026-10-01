import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLogo: React.FC = () => {
  return (
    <Link to="/" className="text-white">
      <img 
        src="/lovable-uploads/56d8d169-db11-4f8f-85b4-526348e4f206.png" 
        alt="BARIDCASH" 
        className="w-auto h-15" 
      />
    </Link>
  );
};

export default NavbarLogo;