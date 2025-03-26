import { useState, useEffect } from "react";
import { postcardData } from "../data/gearData";

const PostcardGrid = () => {
  const [postcards, setPostcards] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const pinnedCards = postcardData
      .filter((card) => card.isPinned)
      .sort((a, b) => a.name.localeCompare(b.name));

    const unpinnedCards = postcardData
      .filter((card) => !card.isPinned)
      .sort(() => Math.random() - 0.5);

    setPostcards([...pinnedCards, ...unpinnedCards]);
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        Waveform.ai Postcards
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-3 gap-2 md:gap-6">
        {postcards.map((item) => (
          <div
            key={item.id}
            className="aspect-square relative group cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden bg-primary-20/30 transition-all duration-300">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal for selected item */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-primary-20/90 backdrop-blur-md rounded-2xl p-4 md:p-8 max-w-2xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PostcardGrid;
