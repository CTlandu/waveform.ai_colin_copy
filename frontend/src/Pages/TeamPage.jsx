import FloatingBubbles from "../Components/FloatingBubbles";
import { useEffect, useState } from "react";

const TeamPage = () => {
  // Sample team data - replace with actual data later
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Benjamin Whiting",
      role: "Project Lead",
      image: "https://placehold.co/300x300",
    },
    // ... add other team members
  ];

  // Generate random positions for each member
  const generatePositions = () => {
    return teamMembers.map((member) => ({
      ...member,
      // Generate positions within a central area of the container
      left: 35 + Math.random() * 30, // between 35-65% of container width
      top: 25 + Math.random() * 50, // between 25-75% of container height
      // Add slight animation delay variation
      animationDelay: Math.random() * 2,
    }));
  };

  const [members, setMembers] = useState(generatePositions());

  // Optional: Regenerate positions periodically for more dynamic feel
  useEffect(() => {
    const interval = setInterval(() => {
      setMembers(generatePositions());
    }, 10000); // Regenerate every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary-10 to-primary-30 overflow-hidden">
      <FloatingBubbles />

      {/* Header Section */}
      <section className="relative py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Team
          </h1>
          <p className="text-xl text-primary-90/80 max-w-2xl mx-auto">
            Meet the brilliant minds behind Waveform.ai
          </p>
        </div>
      </section>

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
            <div className="group relative">
              {/* Image Container */}
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

              {/* Name Tag */}
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
    </div>
  );
};

export default TeamPage;
