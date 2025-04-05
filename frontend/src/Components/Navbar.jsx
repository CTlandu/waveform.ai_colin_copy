import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/white_logo.png";
import suqarelogo from "../assets/waveform.ai square icon.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary-20 px-6 py-2 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo part */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Waveform.ai Logo"
              className="h-16 w-auto -my-2"
            />
          </Link>
        </div>

        {/* wave icon - using simple div as placeholder */}
        <div className="hidden md:flex items-center mx-4">
          <div className="w-32 h-8 bg-primary-50/30 rounded flex items-center justify-center">
            <div className="flex space-x-1">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-primary-50"
                  style={{
                    height: `${Math.random() * 24 + 8}px`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop navigation links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/premiere"
            className="text-white hover:text-primary-50 transition-colors"
          >
            Premiere
          </Link>
          <Link
            to="/workshops"
            className="text-white hover:text-primary-50 transition-colors"
          >
            Workshops
          </Link>
          <Link
            to="/gear"
            className="text-white hover:text-primary-50 transition-colors"
          >
            Gear
          </Link>
          <Link
            to="/tour"
            className="text-white hover:text-primary-50 transition-colors"
          >
            Tour
          </Link>
          <Link
            to="/team"
            className="text-white hover:text-primary-50 transition-colors"
          >
            Our Team
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-primary-50 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 
                   bg-primary-10/95 backdrop-blur-sm 
                   transition-all duration-300 ease-in-out z-50 
                   ${
                     isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                   }`}
      >
        <div className="px-6 py-4 space-y-4 border-t border-primary-50/10">
          <Link
            to="/premiere"
            className="block text-white hover:text-primary-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Premiere
          </Link>
          <Link
            to="/workshops"
            className="block text-white hover:text-primary-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Workshops
          </Link>
          <Link
            to="/tour"
            className="block text-white hover:text-primary-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Tour
          </Link>
          <Link
            to="/team"
            className="block text-white hover:text-primary-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Team
          </Link>
          <Link
            to="/contact"
            className="block text-white hover:text-primary-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
