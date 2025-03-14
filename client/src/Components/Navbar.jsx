import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between mx-auto container">
        <div className="font-bold text-white text-lg">My React App</div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Welcome</Link>
          <Link to="/hostel-selection" className="text-white hover:text-gray-300">Hostel Selection</Link>
          <Link to="/item-listings" className="text-white hover:text-gray-300">Item Listings</Link>
          <Link to="/buy-sell-rent" className="text-white hover:text-gray-300">Buy/Sell/Rent</Link>
          <Link to="/contact-us" className="text-white hover:text-gray-300">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
