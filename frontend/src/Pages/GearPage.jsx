import { useState, useEffect } from "react";
import FloatingBubbles from "../Components/FloatingBubbles";

const GearPage = () => {
  const [postcards, setPostcards] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // 模拟数据，之后替换为真实数据
  useEffect(() => {
    // 这里之后会替换为真实的图片数据
    const dummyData = Array(35)
      .fill(null)
      .map((_, index) => ({
        id: index + 1,
        name: `Postcard ${index + 1}`,
        isPinned: index < 3, // 前三张为置顶卡片
        image: `placeholder-${index + 1}.png`,
      }));

    // 对数据进行排序：置顶的按字母顺序排，其他的随机排序
    const pinnedCards = dummyData
      .filter((card) => card.isPinned)
      .sort((a, b) => a.name.localeCompare(b.name));

    const unpinnedCards = dummyData
      .filter((card) => !card.isPinned)
      .sort(() => Math.random() - 0.5);

    setPostcards([...pinnedCards, ...unpinnedCards]);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary-10 to-primary-30 overflow-hidden">
      <FloatingBubbles />

      {/* Main Content */}
      <div className="relative py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            Waveform.ai Merchandise
          </h1>

          {/* Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {postcards.map((item, index) => (
              <div
                key={item.id}
                className="aspect-square relative group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div
                  className={`
                  relative w-full h-full rounded-lg overflow-hidden
                  ${!item.isPinned ? "backdrop-blur-sm" : ""}
                  bg-primary-20/30 transition-all duration-300
                `}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`
                      w-full h-full object-cover
                      ${!item.isPinned ? "blur-sm group-hover:blur-[6px]" : ""}
                      transition-all duration-300
                    `}
                  />
                  {!item.isPinned && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
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

export default GearPage;
