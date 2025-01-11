import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary-10 px-6 py-4">
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

        {/* navigation links */}
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

        {/* RSVP button */}
        <button className="flex items-center space-x-2 bg-white rounded-full px-6 py-2 hover:bg-gray-100 transition-colors">
          <img
            src="/wm-logo.png" // need to add school logo
            alt="William & Mary Logo"
            className="w-5 h-5"
          />
          <span className="text-primary-10 font-medium">RSVP</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
