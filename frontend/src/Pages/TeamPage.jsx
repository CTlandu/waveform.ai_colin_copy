import { useState, useEffect } from "react";
import FloatingBubbles from "../Components/FloatingBubbles";
import { teamMembers } from "../data/teamMembers";
import CoreMembers from "../Components/CoreMembers";
import WebsiteDevelopers from "../Components/WebsiteDevelopers";
import SpecialThanks from "../Components/SpecialThanks";
import { FaEnvelope, FaGlobe, FaLinkedin } from "react-icons/fa";

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Split team members into different sections
  const coreTeamMembers = teamMembers.slice(0, -3);
  const webDevs = teamMembers.slice(-3, -1);
  const specialThanks = teamMembers.slice(-1);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary-10 to-primary-30 overflow-hidden">
      <FloatingBubbles />

      {/* Core Team Section */}
      <CoreMembers
        members={coreTeamMembers}
        windowWidth={windowWidth}
        onMemberClick={setSelectedMember}
      />

      {/* Web Developers Section */}
      <WebsiteDevelopers
        members={webDevs}
        windowWidth={windowWidth}
        onMemberClick={setSelectedMember}
      />
      {/* Special Thanks Section */}
      <SpecialThanks
        members={specialThanks}
        windowWidth={windowWidth}
        onMemberClick={setSelectedMember}
      />

      {/* Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center 
                    justify-center z-50 p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-primary-20/90 backdrop-blur-md rounded-2xl p-4 md:p-8 
                      max-w-2xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover 
                       border-4 border-primary-50/30"
              />
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {selectedMember.name}
                </h2>
                <h3 className="text-lg md:text-xl text-primary-90/80 mb-4">
                  {selectedMember.role}
                </h3>

                {/* Social Links */}
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  {selectedMember.email && (
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="text-primary-90/70 hover:text-primary-90 
                               transition-colors flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaEnvelope className="w-5 h-5" />
                      <span className="text-sm">Email</span>
                    </a>
                  )}

                  {selectedMember.website && (
                    <a
                      href={selectedMember.website}
                      className="text-primary-90/70 hover:text-primary-90 
                               transition-colors flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGlobe className="w-5 h-5" />
                      <span className="text-sm">Website</span>
                    </a>
                  )}

                  {selectedMember.linkedin && (
                    <a
                      href={selectedMember.linkedin}
                      className="text-primary-90/70 hover:text-primary-90 
                               transition-colors flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="w-5 h-5" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  )}
                </div>

                <p className="text-white/80 leading-relaxed">
                  {selectedMember.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamPage;
