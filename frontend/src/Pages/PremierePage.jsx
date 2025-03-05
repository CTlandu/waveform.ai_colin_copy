import { useState, useEffect } from "react";
import FloatingBubbles from "../Components/FloatingBubbles";
import flyer from "../assets/ASE_Day 2_WaveformAI.png";
import event_info from "../assets/Fill Allignment.png";

const PremierePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const images = [flyer, event_info];

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevClick = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary-10 to-primary-30 overflow-hidden">
      <FloatingBubbles />

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-6">
              Premiere on March 25, 2025!
            </h1>
            <a
              href="https://wm.universitytickets.com/w/event.aspx?id=1689"
              className="inline-block px-8 py-3 bg-primary-50 hover:bg-primary-60 text-white font-semibold rounded-full transition-colors text-lg mt-5"
              target="_blank"
            >
              RSVP tickets for free!
            </a>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-5 px-6">
        <div className="max-w-5xl mx-auto relative">
          <div
            className="relative aspect-[16/9] overflow-hidden rounded-xl cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className={`absolute w-full h-full object-contain transition-opacity duration-500 ${
                  currentImageIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-black/10 hover:bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <span className="text-white bg-black/50 px-4 py-2 rounded-lg">
                Click to Zoom in
              </span>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevClick}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors text-xl"
          >
            ←
          </button>
          <button
            onClick={handleNextClick}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors text-xl"
          >
            →
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-4 h-4 rounded-full transition-colors ${
                  currentImageIndex === index
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal for enlarged image */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full">
            <img
              src={images[currentImageIndex]}
              alt="Enlarged view"
              className="w-full h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(false);
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PremierePage;
