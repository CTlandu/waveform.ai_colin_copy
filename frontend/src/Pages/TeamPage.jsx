import { useState, useEffect } from "react";
import FloatingBubbles from "../Components/FloatingBubbles";
import { teamMembers } from "../data/teamMembers";

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setMembers(generatePositions(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generatePositions = (screenWidth) => {
    const isSmallScreen = screenWidth < 768;
    const isMediumScreen = screenWidth >= 768 && screenWidth < 1024;

    if (isSmallScreen) {
      // Grid layout for mobile (2 columns, last item centered)
      return teamMembers.map((member, index) => {
        const isLastItem = index === teamMembers.length - 1;
        const row = Math.floor(index / 2);
        const col = index % 2;

        if (isLastItem) {
          // Center the last item with adjusted vertical position
          return {
            ...member,
            left: 50, // Centered
            top: 70, // Position after the fourth row, with consistent spacing
            animationDelay: Math.random() * 2,
          };
        }

        return {
          ...member,
          left: 30 + col * 40, // 30%, 70% for more space between columns
          top: 10 + row * 15, // Keep the same row spacing
          animationDelay: Math.random() * 2,
        };
      });
    } else {
      // Original W shape for larger screens
      const wPoints = isMediumScreen
        ? [
            { x: 15, y: 20 },
            { x: 35, y: 45 },
            { x: 50, y: 30 },
            { x: 65, y: 65 },
            { x: 85, y: 40 },
          ]
        : [
            { x: 15, y: 25 },
            { x: 30, y: 75 },
            { x: 50, y: 25 },
            { x: 70, y: 75 },
            { x: 85, y: 25 },
          ];

      return teamMembers.map((member, index) => {
        const pointIndex = Math.floor(
          (index * (wPoints.length - 1)) / (teamMembers.length - 1)
        );
        const nextPointIndex = Math.min(pointIndex + 1, wPoints.length - 1);

        const progress =
          ((index * (wPoints.length - 1)) % (teamMembers.length - 1)) /
          (teamMembers.length - 1);

        const left =
          wPoints[pointIndex].x +
          (wPoints[nextPointIndex].x - wPoints[pointIndex].x) * progress;
        const top =
          wPoints[pointIndex].y +
          (wPoints[nextPointIndex].y - wPoints[pointIndex].y) * progress;

        return {
          ...member,
          left: left + (Math.random() - 0.5) * 3,
          top: top + (Math.random() - 0.5) * 3,
          animationDelay: Math.random() * 2,
        };
      });
    }
  };

  const [members, setMembers] = useState(generatePositions(window.innerWidth));

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary-10 to-primary-30 overflow-hidden">
      <FloatingBubbles />

      {/* Further increased container height and adjusted padding */}
      <div className="relative w-full h-[1600px] md:h-[800px] lg:h-[800px] mx-auto max-w-6xl px-4 md:px-6">
        {members.map((member) => (
          <div
            key={member.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 
                     transition-all duration-[3000ms] ease-in-out hover:z-10"
            style={{
              left: `${member.left}%`,
              top: `${member.top}%`,
              animation:
                windowWidth >= 768
                  ? `float-member ${
                      3 + member.animationDelay
                    }s ease-in-out infinite`
                  : "none",
            }}
          >
            {/* Member Card */}
            <div
              className="group relative cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              {/* Image Container */}
              <div
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-28 md:h-28 lg:w-32 lg:h-32 
                            rounded-full overflow-hidden border-4 border-primary-50/30 
                            hover:border-primary-50 transition-all duration-300 
                            bg-primary-20/50 backdrop-blur-sm"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Always visible name tag */}
              <div
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 
                            text-center whitespace-nowrap"
              >
                <p className="text-sm font-medium mb-1 text-white">
                  {member.name}
                </p>
                <p className="text-xs text-primary-90/70">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

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
