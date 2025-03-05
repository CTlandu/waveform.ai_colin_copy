import { useState, useEffect } from "react";
import MemberCard from "./MemberCard";

const CoreMembers = ({ members, windowWidth, onMemberClick }) => {
  const generatePositions = (screenWidth) => {
    const isSmallScreen = screenWidth < 768;
    const isMediumScreen = screenWidth >= 768 && screenWidth < 1024;

    if (isSmallScreen) {
      return members.map((member, index) => {
        const isLastItem = index === members.length - 1;
        const row = Math.floor(index / 2);
        const col = index % 2;

        if (isLastItem && members.length % 2 === 1) {
          return {
            ...member,
            left: 50,
            top: 10 + row * 20,
            animationDelay: Math.random() * 2,
          };
        }

        return {
          ...member,
          left: 30 + col * 40,
          top: 10 + row * 20,
          animationDelay: Math.random() * 2,
        };
      });
    } else {
      // W-shape layout for larger screens
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

      return members.map((member, index) => {
        const pointIndex = Math.floor(
          (index * (wPoints.length - 1)) / (members.length - 1)
        );
        const nextPointIndex = Math.min(pointIndex + 1, wPoints.length - 1);

        const progress =
          ((index * (wPoints.length - 1)) % (members.length - 1)) /
          (members.length - 1);

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

  const [positions, setPositions] = useState(generatePositions(windowWidth));

  useEffect(() => {
    setPositions(generatePositions(windowWidth));
  }, [windowWidth, members]);

  return (
    <div className="relative w-full h-[800px] mx-auto max-w-6xl px-4 md:px-6">
      <h3
        className="text-center text-white text-xl font-semibold 
                    mt-12"
      >
        Core Team
      </h3>

      {positions.map((member) => (
        <MemberCard
          key={member.id}
          member={member}
          windowWidth={windowWidth}
          onClick={() => onMemberClick(member)}
        />
      ))}
    </div>
  );
};

export default CoreMembers;
