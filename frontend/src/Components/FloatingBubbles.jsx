import { useState, useEffect } from "react";

const FloatingBubbles = () => {
  const [bubbles, setBubbles] = useState([]);

  const bubbleSizes = [
    { width: "30px", height: "30px" },
    { width: "40px", height: "40px" },
    { width: "50px", height: "50px" },
  ];

  // 创建单个泡泡
  const createBubble = () => {
    // 随机位置，避开边缘 (10% - 90%)
    const left = 10 + Math.random() * 80;
    // 随机起始高度 (20% - 80%)
    const top = 20 + Math.random() * 60;

    const size = bubbleSizes[Math.floor(Math.random() * bubbleSizes.length)];
    const gradientAngle = Math.floor(Math.random() * 360);
    const gradientStart = Math.floor(Math.random() * 10 + 15);
    const gradientEnd = Math.floor(Math.random() * 5 + 5);

    return {
      id: Date.now() + Math.random(), // 唯一ID
      ...size,
      left: `${left}%`,
      top: `${top}%`,
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
    };
  };

  useEffect(() => {
    // 每秒生成一个新泡泡
    const intervalId = setInterval(() => {
      setBubbles((prevBubbles) => {
        // 保持最多 8 个泡泡
        const newBubbles = [...prevBubbles, createBubble()].slice(-8);
        return newBubbles;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full animate-float-random"
          style={{
            width: bubble.width,
            height: bubble.height,
            left: bubble.left,
            top: bubble.top,
            ...bubble.gradientStyle,
          }}
        >
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
