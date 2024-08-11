import { FaGithub, FaHeart, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ruth from '../assets/images/Ruth.jpg';
import { BsTwitterX } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-blue-900 py-8 relative">
      <div className="container mx-auto text-center">
        {/* Profile Image */}
        <div className="absolute inset-x-0 top-[-40px] flex justify-center">
          <img
            src={ruth}
            alt="Profile"
            className="rounded-full h-20 w-20 border-4 border-blue-700"
          />
        </div>

        {/* Name */}
        <h2 className="text-white text-2xl font-semibold mb-4 mt-12">
          "RUTH NYANKUM"
        </h2>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-6">
          <a
            href="https://github.com/RuthNyankum"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white text-2xl hover:text-blue-500 transition duration-300" />
          </a>
          <a
            href="https://x.com/ruth_nanarain"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX className="text-white text-2xl hover:text-blue-500 transition duration-300" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-white text-2xl hover:text-blue-500 transition duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/ruthnyankum/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white text-2xl hover:text-blue-500 transition duration-300" />
          </a>
        </div>

        <div className="text-center py-4">
          <p className="text-sm text-gray-400 flex items-center justify-center">
            Designed with <FaHeart className="text-red-500 mx-1" /> by Ruth
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
