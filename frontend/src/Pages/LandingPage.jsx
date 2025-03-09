import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FloatingBubbles from "../Components/FloatingBubbles";
import FeaturedGrid from "../Components/FeaturedGrid";

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
            <h1 className="text-4xl md:text-4xl font-bold text-white mb-6">
              Waveform.ai – Where Sound Meets Motion
            </h1>
            <p className="text-2xl text-primary-90/80 mb-12 max-w-2xl mx-auto">
              Your presence shapes the music, AI echoes the unseen.
            </p>

            {/* Navigation Buttons
            <div className="flex justify-center gap-4">
              <button
                onClick={() => navigate("/premiere")}
                className="bg-primary-50 hover:bg-primary-60 text-white px-8 py-3 rounded-full transition-colors"
              >
                Learn More
              </button>
              <button
                onClick={() => navigate("/team")}
                className="bg-primary-30 hover:bg-primary-40 text-white px-8 py-3 rounded-full transition-colors border-2 border-primary-50"
              >
                Meet the Team
              </button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <FeaturedGrid />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
