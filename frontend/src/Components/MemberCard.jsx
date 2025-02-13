const MemberCard = ({ member, windowWidth, onClick }) => {
  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 
                 transition-all duration-[3000ms] ease-in-out hover:z-10"
      style={{
        left: `${member.left}%`,
        top: `${member.top}%`,
        animation:
          windowWidth >= 768
            ? `float-member ${3 + member.animationDelay}s ease-in-out infinite`
            : "none",
      }}
    >
      <div className="group relative cursor-pointer" onClick={onClick}>
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

        <div
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 
                      text-center whitespace-nowrap"
        >
          <p className="text-sm font-medium mb-1 text-white">{member.name}</p>
          <p className="text-xs text-primary-90/70">{member.role}</p>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
