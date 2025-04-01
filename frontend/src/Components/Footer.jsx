import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import wmLogo from "../assets/wm-logo.png";
import logoText from "../assets/origami_logo.svg";

const Footer = () => {
  return (
    <footer className="bg-primary-30 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Logo, Title and Email Section */}
        <div className="mb-8 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-2 group">
            <a
              href="mailto:waveformai@wm.edu"
              className="text-white transition-colors"
              aria-label="Email us"
            >
              <img
                src={logoText}
                alt="Waveform.ai"
                className="h-16 w-auto group-hover:opacity-80 transition-opacity"
              />
            </a>
            <a
              href="mailto:waveformai@wm.edu"
              className="text-white group-hover:text-primary-50 transition-colors"
              aria-label="Email us"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
          <a
            href="https://www.wm.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white text-2xl hover:text-primary-50 transition-colors mt-4"
          >
            <img
              src={wmLogo}
              alt="William & Mary Logo"
              className="w-8 h-8 object-contain"
            />
            <span>William & Mary</span>
          </a>
        </div>

        {/* Departments Section */}
        <div className="mb-6">
          <div className="flex items-center justify-center gap-2 text-white/80 text-lg">
            <a
              href="https://www.wm.edu/as/physics/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Department of Physics
            </a>
            <span>×</span>
            <a
              href="https://www.wm.edu/as/music/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Department of Music
            </a>
          </div>
        </div>

        {/* Project Information */}
        <div className="space-y-2 text-white/70">
          <div>
            An inaugural project for{" "}
            <a
              href="https://www.wm.edu/offices/facultyaffairs/careers/awards-opportunities/art-science-exchange/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              Art and Science Exchange (ASE)
            </a>
          </div>
          <div className="text-white/70">
            For the{" "}
            <a
              href="https://www.wm.edu/as/arts/year-of-the-arts/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              Year of the Arts
            </a>{" "}
            at William & Mary, sponsored by{" "}
            <a
              href="https://www.wm.edu/about/administration/provost/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              Office of the Provost
            </a>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="relative mt-8 w-full max-w-3xl">
          {/* Background line */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-primary-50/30" />

          {/* Dots */}
          <div className="relative flex justify-between">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-primary-50/50"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
