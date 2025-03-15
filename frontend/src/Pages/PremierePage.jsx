import { useState, useEffect } from "react";
import FloatingBubbles from "../Components/FloatingBubbles";
// Removed image imports
// import flyer from "../assets/ASE_Day 2_WaveformAI.png";
// import event_info from "../assets/Fill Allignment.png";

const PremierePage = () => {
  // Removed carousel-related states and functions

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary-10 to-primary-30 overflow-hidden">
      <FloatingBubbles />

      {/* Hero Section */}
      <section className="relative py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-6">
              Waveform.ai Grand Premiere!
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              A demonstration of how music and physics work together to
              celebrate the transhumanist potential of welcoming AI onto the
              stage as a partner instead of merely as a tool.
            </p>
            <a
              href="https://wm.universitytickets.com/w/event.aspx?id=1689"
              className="inline-block px-8 py-3 bg-primary-50 hover:bg-primary-60 text-white font-semibold rounded-full transition-colors text-lg mt-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              RSVP tickets for free!
            </a>
          </div>
          <div className="mt-6 text-center">
            <div className="inline-block bg-primary-90/20 px-6 py-3 rounded-lg border border-primary-90/50 animate-pulse">
              <span className="text-2xl font-bold text-white">
                Free gifts for all attendees!
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section - Horizontal layout */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Event Details */}
          <div className="bg-primary-20/50 backdrop-blur-md rounded-xl p-8 shadow-lg mb-10">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Premiere Showtime
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="bg-primary-90 text-white p-6 rounded-lg text-center min-w-[180px]">
                <div className="text-4xl font-bold">25</div>
                <div className="text-2xl font-bold">MAR</div>
                <div className="text-xl">2025</div>
                <div className="text-2xl mt-2">5:30 PM</div>
              </div>

              <div className="max-w-xl">
                <div className="text-2xl text-white mb-2">
                  <span className="text-primary-90 font-bold">Time:</span> 5:30
                  PM - 7:00 PM
                </div>
                <div className="text-2xl text-white mb-4">
                  <span className="text-primary-90 font-bold">Location:</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=PBK+Studio+Theatre+William+and+Mary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary-90 transition-colors ml-2 flex items-center inline-flex"
                  >
                    PBK Studio Theatre
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </a>
                </div>

                <div className="text-white/90 text-xl">
                  <span className="text-primary-90 font-bold">
                    Presented by:
                  </span>{" "}
                  Dr. Ran Yang and Dr. Benjamin Whiting with contributions from
                  renowned international transdisciplinary artist (MELO) Melody
                  Chua, and a team of six students who developed a novel
                  approach to sound design.
                </div>
              </div>
            </div>
          </div>

          {/* About the Event */}
          <div className="bg-primary-20/50 backdrop-blur-md rounded-xl p-8 shadow-lg mb-10">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              About the Event
            </h2>

            <div className="max-w-4xl mx-auto">
              <p className="text-white/90 text-xl mb-6 leading-relaxed">
                The Art & Science Exchange presents{" "}
                <span className="text-primary-90 font-bold text-2xl">
                  Waveform.ai
                </span>
                , a collaboration between human musicians and artificial
                intelligence. Join us for a demonstration of how the Departments
                of Music and Physics are working together to celebrate the
                transhumanist potential of welcoming AI onto the stage as a
                partner instead of merely as a tool.
              </p>

              <div className="bg-primary-40/40 p-6 rounded-lg border-l-4 border-primary-90 mb-6">
                <p className="text-white text-xl italic">
                  "This premiere showcases a novel approach to sound design,
                  exploring the intersection of human creativity and artificial
                  intelligence in musical expression."
                </p>
              </div>

              <p className="text-white/90 text-xl leading-relaxed">
                Don't miss this unique experience at the intersection of art,
                science, and technology! The performance will feature innovative
                AI-human collaborative compositions that push the boundaries of
                traditional music creation.
              </p>
            </div>
          </div>

          {/* What to Expect */}
          <div className="bg-primary-20/50 backdrop-blur-md rounded-xl p-8 shadow-lg mb-10">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              What to Expect
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-primary-40/30 rounded-lg p-6 transform hover:scale-105 transition-transform">
                <h3 className="text-2xl font-bold text-primary-90 mb-3">
                  Innovative AI Performance
                </h3>
                <p className="text-white/90 text-lg">
                  Experience cutting-edge AI technology collaborating with human
                  musicians in real-time to create unique soundscapes.
                </p>
              </div>

              <div className="bg-primary-40/30 rounded-lg p-6 transform hover:scale-105 transition-transform">
                <h3 className="text-2xl font-bold text-primary-90 mb-3">
                  Interdisciplinary Collaboration
                </h3>
                <p className="text-white/90 text-lg">
                  See how the Departments of Music and Physics combine their
                  expertise to create a revolutionary performance experience.
                </p>
              </div>

              <div className="bg-primary-40/30 rounded-lg p-6 transform hover:scale-105 transition-transform">
                <h3 className="text-2xl font-bold text-primary-90 mb-3">
                  Interactive Demonstrations
                </h3>
                <p className="text-white/90 text-lg">
                  Get up close with the technology and see how AI and human
                  creativity merge to form new artistic expressions.
                </p>
              </div>

              <div className="bg-primary-40/30 rounded-lg p-6 transform hover:scale-105 transition-transform">
                <h3 className="text-2xl font-bold text-primary-90 mb-3">
                  Exclusive Experience
                </h3>
                <p className="text-white/90 text-lg">
                  Be among the first to witness this groundbreaking approach to
                  music performance and AI integration.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mb-10">
            <div className="inline-block bg-primary-40/30 px-8 py-6 rounded-xl">
              <p className="text-white text-2xl mb-4">
                Don't miss this unique experience at the intersection of art,
                science, and technology!
              </p>
              <a
                href="https://wm.universitytickets.com/w/event.aspx?id=1689"
                className="inline-block px-10 py-4 bg-primary-50 hover:bg-primary-60 text-white font-semibold rounded-full transition-colors text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Your Free Tickets Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremierePage;
