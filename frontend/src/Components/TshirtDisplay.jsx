import { useState } from "react";
import tshirt1 from "../assets/tshirt/shirt1.jpg";
import tshirt2 from "../assets/tshirt/shirt2.jpg";
import tshirt3 from "../assets/tshirt/shirt3.jpg";
import tshirt4 from "../assets/tshirt/shirt4.jpg";

const TshirtDisplay = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const tshirts = [
    { id: 1, image: tshirt1 },
    { id: 2, image: tshirt2 },
    { id: 3, image: tshirt3 },
    { id: 4, image: tshirt4 },
  ];

  return (
    <div className="max-w-7xl mx-auto mb-16">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        Waveform.ai T-shirts
      </h1>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {tshirts.map((tshirt) => (
            <div
              key={tshirt.id}
              className="aspect-square relative group"
              onClick={() => setSelectedImage(tshirt)}
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-primary-20/30 transition-all duration-300">
                <img
                  src={tshirt.image}
                  alt={`T-shirt ${tshirt.id}`}
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for selected image
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-primary-20/90 backdrop-blur-md rounded-2xl p-4 md:p-8 max-w-4xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={`T-shirt ${selectedImage.id}`}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )} */}
    </div>
  );
};

export default TshirtDisplay;
