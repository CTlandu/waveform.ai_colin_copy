import { useState, useEffect } from "react";
import MemberCard from "./MemberCard";

const WebsiteDevelopers = ({ members, windowWidth, onMemberClick }) => {
  const generatePositions = (screenWidth) => {
    const isSmallScreen = screenWidth < 768;

    return members.map((member, index) => ({
      ...member,
      left: isSmallScreen ? 30 + index * 40 : 35 + index * 30,
      top: 35,
      animationDelay: Math.random() * 2,
    }));
  };

  const [positions, setPositions] = useState(generatePositions(windowWidth));

  useEffect(() => {
    setPositions(generatePositions(windowWidth));
  }, [windowWidth, members]);

  return (
    <div className="relative w-full h-[400px] mx-auto max-w-6xl px-4 md:px-6 mt-12">
      <h3 className="text-center text-white text-xl font-semibold mb-24">
        Website Developers
      </h3>
      <div className="relative h-full">
        {positions.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            windowWidth={windowWidth}
            onClick={() => onMemberClick(member)}
          />
        ))}
      </div>
    </div>
  );
};

export default WebsiteDevelopers;
