import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FloatingBubbles from "../Components/FloatingBubbles";
import waveformai_event from "../assets/waveformai_event.png";
import ase_event_schedule from "../assets/ase_event_schedule.png";

const LandingPage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary-10 to-primary-30 overflow-hidden">
      <FloatingBubbles />

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Main Title and Description */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Welcome to Waveform.ai
            </h1>
            <p className="text-3xl text-primary-90/80 mb-12 max-w-2xl mx-auto">
              🎵Music, Sound, with AI💻
            </p>

            {/* Navigation Buttons */}
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
            </div>

            {/* Premiere Preview Section */}
            <div className="mt-16 flex items-center justify-center gap-8 max-w-6xl mx-auto">
              <div className="flex-1 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Premiere on March 25, 2025!
                </h2>
                <button
                  onClick={() => navigate("/premiere")}
                  className="text-xl text-primary-90/80 hover:text-primary-90 transition-colors"
                >
                  See details
                </button>
              </div>
              <div className="flex-1">
                <img
                  src={waveformai_event}
                  alt="event_info"
                  className="rounded-lg w-full"
                />
              </div>
            </div>

            {/* Event Schedule Section */}
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold text-white mb-8">
                Checkout all Art & Science Exchange 2025{" "}
                <a
                  href="https://wm.universitytickets.com/w/default.aspx?cid=180"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-primary-90/80 transition-colors"
                >
                  Event Schedule
                </a>
                :
              </h2>
              <div
                className="cursor-pointer inline-block"
                onClick={() => setShowModal(true)}
              >
                {/* Schedule Thumbnail */}
                <div className="w-64 h-40 bg-primary-40/30 rounded-lg backdrop-blur-sm border border-primary-50/20 hover:border-primary-50 transition-colors">
                  <img src={ase_event_schedule} alt="ASE Event Schedule" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Preview Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-8"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[80vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 text-white/80 hover:text-white"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
            <div className="w-full bg-primary-40/30 rounded-lg backdrop-blur-sm border border-primary-50/20">
              <img
                src={ase_event_schedule}
                alt="ASE_EVENT_SCHEDULE_FULL"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
