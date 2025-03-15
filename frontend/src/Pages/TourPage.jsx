import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../Components/FloatingBubbles";

const TourPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary-10 to-primary-30 overflow-hidden flex flex-col justify-center">
      <FloatingBubbles />

      {/* Content Section */}
      <section className="py-16 px-6 flex-grow flex flex-col justify-center">
        <div className="max-w-4xl mx-auto bg-primary-20/30 backdrop-blur-md rounded-xl p-8 shadow-lg">
          <p className="text-2xl md:text-3xl text-white text-center leading-relaxed">
            We will be showcasing the Waveform.ai project in Virginia and
            beyond.
            <br />
            <br />
            <span className="text-primary-90 font-bold italic">
              Stay tuned for more plans!
            </span>
          </p>
        </div>

        {/* Contact Card */}
        <div className="max-w-md mx-auto mt-8 bg-primary-50/40 backdrop-blur-md rounded-lg p-4 shadow-lg text-center transform hover:scale-105 transition-transform">
          <p className="text-xl text-white font-medium">
            Interested?{" "}
            <Link
              to="/contact"
              className="text-primary-90 font-bold hover:underline"
            >
              Contact us!
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default TourPage;
