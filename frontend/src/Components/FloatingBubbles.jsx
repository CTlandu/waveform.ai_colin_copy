const FloatingBubbles = () => {
  // Define three different bubble sizes
  const bubbleSizes = [
    { width: "30px", height: "30px" }, // Small bubble
    { width: "40px", height: "40px" }, // Medium bubble
    { width: "50px", height: "50px" }, // Large bubble
  ];

  // Create more evenly distributed bubbles
  const createBubbles = () => {
    const bubbles = [];
    const numColumns = 5; // Divide screen into 5 columns
    const bubblesPerColumn = 3; // 3 bubbles per column

    for (let col = 0; col < numColumns; col++) {
      for (let row = 0; row < bubblesPerColumn; row++) {
        // Calculate left position with slight random offset for natural look
        const leftPosition = `${col * 20 + Math.random() * 10}%`;

        // Randomly select bubble size
        const size =
          bubbleSizes[Math.floor(Math.random() * bubbleSizes.length)];

        bubbles.push({
          ...size,
          left: leftPosition,
          animationDelay: `${(col + row) * 0.8}s`, // Systematic animation delay
          animationDuration: "20s", // Fixed animation duration
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
          className="absolute rounded-full bg-primary-50/10 animate-float"
          style={{
            width: bubble.width,
            height: bubble.height,
            left: bubble.left,
            animationDelay: bubble.animationDelay,
            animationDuration: bubble.animationDuration,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;
