import React from 'react';
import { NavLink } from 'react-router-dom';

const Header2: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <NavLink to="/" className="text-orange-500 text-xl font-bold">Logo</NavLink>
        <nav>
          <ul className="flex space-x-4">
            <li><NavLink to="/" className="text-gray-600 hover:text-orange-500" end>Home</NavLink></li>
            <li><NavLink to="/about" className="text-gray-600 hover:text-orange-500">About</NavLink></li>
            <li><NavLink to="/teashop" className="text-gray-600 hover:text-orange-500">Teashop</NavLink></li>
            <li><NavLink to="/pricing" className="text-gray-600 hover:text-orange-500">Pricing</NavLink></li>
            <li><NavLink to="/contact" className="text-gray-600 hover:text-orange-500">Contact</NavLink></li>
          </ul>
        </nav>
        <div>
          <input type="search" placeholder="Search" className="border-2 border-gray-300 rounded-lg px-3 py-1"/>
        </div>
      </div>
    </header>
  );
};

export default Header2;
