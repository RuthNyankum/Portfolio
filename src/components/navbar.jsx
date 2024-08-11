import React from 'react';
import N from '../constant';
import { BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-cyan-900 to-cyan-950 text-cyan-300 px-6 py-4 flex justify-around items-center">
      {/* Logo */}
      <div className="text-4xl font-bold">
        RUTH<span className="text-purple-400">.</span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex space-x-8 text-lg">
        {N.NAVLINKS.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.path} //className="hover:text-white"
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      <Link
        to="/contact-me"
        className="bg-white text-black px-4 py-2 font-bold rounded hover:bg-primary flex items-center"
      >
        HIRE ME <BsPerson className="ml-2" />
      </Link>
    </nav>
  );
};

export default Navbar;
