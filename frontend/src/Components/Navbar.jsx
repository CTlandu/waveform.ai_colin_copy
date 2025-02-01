import { useState } from "react";
import { Link } from "react-router-dom";
import wmLogo from "../assets/wm-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary-10 px-6 py-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo part */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-white">
            Waveform.ai
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
            to="/vision"
            className="text-white hover:text-primary-50 transition-colors"
          >
            Vision
          </Link>
          <Link
            to="/technology"
            className="text-white hover:text-primary-50 transition-colors"
          >
            Our Technology
          </Link>
          <Link
            to="/team"
            className="text-white hover:text-primary-50 transition-colors"
          >
            Our Team
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

        {/* RSVP button */}
        <div className="relative">
          <button className="flex items-center bg-white rounded-full pl-12 pr-6 py-2 hover:bg-gray-100 transition-colors">
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <div className="w-10 h-10 rounded-full bg-primary-10 flex items-center justify-center">
                <img
                  src={wmLogo}
                  alt="William & Mary Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </div>
            <span className="text-primary-10 font-medium">RSVP</span>
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
            to="/vision"
            className="block text-white hover:text-primary-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Vision
          </Link>
          <Link
            to="/technology"
            className="block text-white hover:text-primary-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Technology
          </Link>
          <Link
            to="/team"
            className="block text-white hover:text-primary-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Team
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
