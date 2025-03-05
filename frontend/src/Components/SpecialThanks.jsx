import { useState, useEffect } from "react";
import MemberCard from "./MemberCard";

const SpecialThanks = ({ members, windowWidth, onMemberClick }) => {
  const generatePositions = (screenWidth) => {
    return members.map((member) => ({
      ...member,
      left: 50, // Center horizontally
      top: 35,
      animationDelay: Math.random() * 2,
    }));
  };

  const [positions, setPositions] = useState(generatePositions(windowWidth));

  useEffect(() => {
    setPositions(generatePositions(windowWidth));
  }, [windowWidth, members]);

  return (
    <div className="relative w-full h-[250px] mx-auto max-w-6xl px-4 md:px-6 mt-12 sm:mt-10 md:mt-10">
      <h3 className="text-center text-white text-xl font-semibold mb-6 sm:mb-1 md:mb-6">
        Special Thanks
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

export default SpecialThanks;
