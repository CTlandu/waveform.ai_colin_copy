import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FloatingBubbles from "../Components/FloatingBubbles";
import FeaturedGrid from "../Components/FeaturedGrid";
import FrontPanel from "../Components/FrontPanel";
import programpdf from "../assets/Waveform.ai_ProgramFINAL.pdf";
import logoText from "../assets/origami_logo.svg";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary-10 to-primary-30 overflow-hidden">
      <FloatingBubbles />

      {/* Announcement Banner */}
      <div className="bg-primary-60 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm md:text-base">
            Waveform.ai performances and workshops in March 2025 have been
            successfully completed. Thank you to all our supporters and
            participants! - The Waveform.ai Team
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Main Title and Description */}
            <h1 className="text-5xl md:text-5xl font-bold text-white mb-6 flex flex-col md:flex-row items-center justify-center">
              <img
                src={logoText}
                alt="Waveform.ai"
                className="h-24 md:h-20 w-auto"
              />
              <span className="md:mt-0">- Where Sound Meets Motion</span>
            </h1>
            <p className="text-2xl text-primary-90/80 max-w-2xl mx-auto">
              Your presence shapes the music, AI echoes the unseen.
            </p>
          </div>
          <div className="text-center mt-8">
            <a
              href={programpdf}
              className="text-primary-60 hover:text-primary-90 transition-colors text-sm italic"
              target="_blank"
              rel="noopener noreferrer"
            >
              * Download Full Program here
            </a>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <FeaturedGrid />
        </div>
      </section>

      {/* Front Panel Design */}
      <section className="py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <FrontPanel></FrontPanel>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
