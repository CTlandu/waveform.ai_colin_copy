import { useNavigate } from "react-router-dom";
import FloatingBubbles from "../Components/FloatingBubbles";
import waveformai_event from "../assets/waveformai_event.png";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary-10 to-primary-30 overflow-hidden">
      <FloatingBubbles />

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Welcome to Waveform.ai
            </h1>
            <p className="text-xl text-primary-90/80 mb-12 max-w-2xl mx-auto">
              Revolutionizing audio processing with artificial intelligence
            </p>
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
                  Premiere is coming soon!
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
