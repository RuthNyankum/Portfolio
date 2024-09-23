import React, { useState } from 'react';
import N from '../constant';
import { BsPerson } from 'react-icons/bs';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close the menu after clicking
  };

  return (
    <nav className="bg-gradient-to-r from-cyan-900 to-cyan-950 text-cyan-300 px-6 py-4 fixed top-0 left-0 w-full z-50 flex justify-between items-center">
      <div className="text-4xl font-bold">
        RUTH<span className="text-purple-400">.</span>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row md:space-x-8 text-lg md:items-center absolute md:static top-16 left-0 right-0 bg-gradient-to-r from-cyan-900 to-cyan-950 md:bg-transparent px-6 md:px-0 py-4 md:py-0`}
      >
        {N.NAVLINKS.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.name.toLowerCase())}
            className={`py-2 md:py-0 hover:text-white ${
              activeSection === item.name.toLowerCase() ? 'underline' : ''
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      <a
        href="mailto:nana.nyankum99@gmail.com"
        className="bg-white text-black px-4 py-2 font-bold rounded hover:bg-primary hidden md:flex items-center"
      >
        HIRE ME <BsPerson className="ml-2" />
      </a>

      <div className="md:hidden flex items-center">
        <Link
          to="/contact-me"
          className="bg-white text-black px-4 py-2 font-bold rounded hover:bg-primary flex items-center"
          onClick={() => setIsOpen(false)} // Close the menu on link click
        >
          HIRE ME <BsPerson className="ml-2" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
