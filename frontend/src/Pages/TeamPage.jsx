import { useState } from "react";
import FloatingBubbles from "../Components/FloatingBubbles";
import { teamMembers } from "../data/teamMembers";

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  // Generate positions in a circular layout
  const generatePositions = () => {
    const centerX = 50; // Center of container
    const centerY = 50; // Center of container
    const radius = 25; // Radius of the circle

    return teamMembers.map((member, index) => {
      // Calculate angle for each member
      const angle = (index * 2 * Math.PI) / teamMembers.length;

      // Add some randomness to make it look more natural
      const randomRadius = radius + (Math.random() - 0.5) * 10;

      // Calculate position using trigonometry
      const left = centerX + randomRadius * Math.cos(angle);
      const top = centerY + randomRadius * Math.sin(angle);

      return {
        ...member,
        left,
        top,
        animationDelay: Math.random() * 2,
      };
    });
  };

  const [members, setMembers] = useState(generatePositions());

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary-10 to-primary-30 overflow-hidden">
      <FloatingBubbles />

      {/* Team Members Container */}
      <div className="relative w-full h-[600px] mx-auto max-w-6xl px-6">
        {members.map((member) => (
          <div
            key={member.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 
                     transition-all duration-[3000ms] ease-in-out hover:z-10"
            style={{
              left: `${member.left}%`,
              top: `${member.top}%`,
              animation: `float-member ${
                3 + member.animationDelay
              }s ease-in-out infinite`,
            }}
          >
            {/* Member Card */}
            <div
              className="group relative cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div
                className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden 
                            border-4 border-primary-50/30 hover:border-primary-50 
                            transition-all duration-300 bg-primary-20/50 backdrop-blur-sm"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
                            bg-primary-50/90 backdrop-blur-sm px-3 py-1 rounded-full 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300
                            whitespace-nowrap"
              >
                <p className="text-white text-sm font-medium">{member.name}</p>
                <p className="text-white/80 text-xs">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-primary-20/90 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start gap-6">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-40 h-40 rounded-full object-cover border-4 border-primary-50/30"
              />
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedMember.name}
                </h2>
                <h3 className="text-xl text-primary-90/80 mb-4">
                  {selectedMember.role}
                </h3>
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
