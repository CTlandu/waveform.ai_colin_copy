import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FloatingBubbles from "../Components/FloatingBubbles";
import FeaturedGrid from "../Components/FeaturedGrid";
import FrontPanel from "../Components/FrontPanel";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary-10 to-primary-30 overflow-hidden">
      <FloatingBubbles />

      {/* Hero Section */}
      <section className="relative py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Main Title and Description */}
            <h1 className="text-5xl md:text-5xl font-bold text-white mb-6">
              Waveform.ai – Where Sound Meets Motion
            </h1>
            <p className="text-2xl text-primary-90/80 max-w-2xl mx-auto">
              Your presence shapes the music, AI echoes the unseen.
            </p>
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
