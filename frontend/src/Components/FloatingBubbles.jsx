const FloatingBubbles = () => {
  // Define three different bubble sizes
  const bubbleSizes = [
    { width: "30px", height: "30px" }, // Small bubble
    { width: "40px", height: "40px" }, // Medium bubble
    { width: "50px", height: "50px" }, // Large bubble
  ];

  // Create bubbles with random effects
  const createBubbles = () => {
    const bubbles = [];
    const numColumns = 5; // Divide screen into 5 columns
    const bubblesPerColumn = 3; // 3 bubbles per column

    for (let col = 0; col < numColumns; col++) {
      for (let row = 0; row < bubblesPerColumn; row++) {
        // Calculate left position with slight random offset for natural look
        const leftPosition = `${col * 20 + Math.random() * 10}%`;
        const size =
          bubbleSizes[Math.floor(Math.random() * bubbleSizes.length)];

        // Generate random gradient angle and positions for each bubble
        const gradientAngle = Math.floor(Math.random() * 360);
        const gradientStart = Math.floor(Math.random() * 10 + 15); // 15-25%
        const gradientEnd = Math.floor(Math.random() * 5 + 5); // 5-10%

        bubbles.push({
          ...size,
          left: leftPosition,
          animationDelay: `${(col + row) * 0.8}s`,
          animationDuration: "20s",
          gradientStyle: {
            background: `linear-gradient(${gradientAngle}deg, 
                        rgba(0, 235, 236, ${gradientStart}%) ${gradientEnd}%, 
                        rgba(0, 155, 156, 0.05) 100%)`,
            boxShadow: `
              inset -1px -1px 2px rgba(0, 0, 0, 0.03),
              inset 1px 1px 2px rgba(0, 235, 236, 0.05),
              0 0 8px rgba(0, 235, 236, 0.03)
            `,
            backdropFilter: "blur(1px)",
          },
        });
      }
    }
    return bubbles;
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {createBubbles().map((bubble, index) => (
        <div
          key={index}
          className="absolute rounded-full animate-float"
          style={{
            width: bubble.width,
            height: bubble.height,
            left: bubble.left,
            animationDelay: bubble.animationDelay,
            animationDuration: bubble.animationDuration,
            ...bubble.gradientStyle,
          }}
        >
          {/* Add a highlight spot */}
          <div
            className="absolute w-[40%] h-[40%] rounded-full"
            style={{
              top: "15%",
              left: "15%",
              background:
                "radial-gradient(circle at center, rgba(0, 235, 236, 0.08) 0%, transparent 100%)",
              transform: "rotate(-45deg)",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingBubbles;
