import { useState } from "react";
import FloatingBubbles from "../Components/FloatingBubbles";
import Benjamin from "../assets/folks/Benjamin.png";
import Ran from "../assets/folks/Ran.jpeg";

const ContactPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary-10 to-primary-30 overflow-hidden flex flex-col justify-center">
      <FloatingBubbles />

      {/* Hero Section */}
      <section className="relative py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-primary-90/80 mb-12 max-w-2xl mx-auto">
              Have any questions or interested in collaboration? Feel free to
              reach out to our team members
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Yang Ran Card */}
          <div className="bg-primary-20/30 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-50/30">
                <img
                  src={Ran}
                  alt="Yang Ran"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Ran Yang</h3>
                <p className="text-primary-90/80 mb-4">
                  Exec Producer/Lead Tech
                </p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a
                    href="mailto:rxyan2@wm.edu"
                    className="hover:text-primary-90 transition-colors"
                  >
                    rxyan2@wm.edu
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Dr. Benjamin Whiting Card */}
          <div className="bg-primary-20/30 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-50/30">
                <img
                  src={Benjamin}
                  alt="Dr. Benjamin Whiting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Benjamin D. Whiting
                </h3>
                <p className="text-primary-90/80 mb-4">Artistic Desginer</p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a
                    href="mailto:bdwhiting@wm.edu"
                    className="hover:text-primary-90 transition-colors"
                  >
                    bdwhiting@wm.edu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto bg-primary-50/20 backdrop-blur-md rounded-xl p-6 shadow-lg text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Join Our Project
          </h3>
          <p className="text-white/80 text-xl">
            Waveform.AI is an innovative project combining music, sound, and
            artificial intelligence. We look forward to collaborating and
            connecting with you!
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
