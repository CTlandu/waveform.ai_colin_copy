import FloatingBubbles from "../Components/FloatingBubbles";

const PremierePage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary-10 to-primary-30 overflow-hidden">
      <FloatingBubbles />

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Premiere Features
            </h1>
            <p className="text-xl text-primary-90/80 mb-12 max-w-2xl mx-auto">
              Discover our cutting-edge audio processing capabilities
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 bg-primary-20/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="bg-primary-30/30 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Advanced Audio Processing
                </h3>
                <p className="text-primary-90/70">
                  Experience state-of-the-art audio processing algorithms
                  powered by AI
                </p>
              </div>
              <div className="bg-primary-30/30 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Real-time Analysis
                </h3>
                <p className="text-primary-90/70">
                  Get instant insights with our real-time audio analysis tools
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-primary-30/30 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Custom Solutions
                </h3>
                <p className="text-primary-90/70">
                  Tailored audio processing solutions for your specific needs
                </p>
              </div>
              <div className="bg-primary-30/30 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Easy Integration
                </h3>
                <p className="text-primary-90/70">
                  Seamlessly integrate our tools into your existing workflow
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremierePage;
