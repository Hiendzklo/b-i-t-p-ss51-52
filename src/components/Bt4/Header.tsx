import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl">
          <NavLink to="/" className="text-red-500 hover:text-red-700">HAIRCUT</NavLink>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li><NavLink to="/" className="hover:text-red-500" end>Home</NavLink></li>
            <li><NavLink to="/about" className="hover:text-red-500">About</NavLink></li>
            <li><NavLink to="/services" className="hover:text-red-500">Services</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-red-500">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
