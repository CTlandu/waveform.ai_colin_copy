import { useState, useEffect } from "react";
import FloatingBubbles from "../Components/FloatingBubbles";
import PostcardGrid from "../Components/PostcardGrid";
import TshirtDisplay from "../Components/TshirtDisplay";

const GearPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary-10 to-primary-30 overflow-hidden">
      <FloatingBubbles />

      {/* Main Content */}
      <div className="relative py-10 px-6">
        <TshirtDisplay />
        <PostcardGrid />
      </div>
    </div>
  );
};

export default GearPage;
