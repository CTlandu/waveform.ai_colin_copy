import React, { useState } from 'react';

const FrontPanel = () => {
  // State management
  const [switchStates, setSwitchStates] = useState([false, false, false, false]);
  const [activeModal, setActiveModal] = useState(null);

  // Handle switch toggle
  const handleSwitchToggle = (index) => {
    const newStates = [...switchStates];
    newStates[index] = !newStates[index];
    setSwitchStates(newStates);
    
    // Open or close modal
    if (newStates[index]) {
      setActiveModal(index);
    } else if (activeModal === index) {
      setActiveModal(null);
    }
  };

  // Close modal
  const closeModal = () => {
    setActiveModal(null);
    // Also turn off the corresponding switch
    if (activeModal !== null) {
      const newStates = [...switchStates];
      newStates[activeModal] = false;
      setSwitchStates(newStates);
    }
  };

  // Content for each channel (精简版)
  const channelContent = [
    {
      title: "WATER & WAVES",
      content: "Water flows, seeking the lowest places while carving mighty canyons. It yields to obstacles yet overcomes all in its path. Waveform.ai explores this duality, uncovering new sonic possibilities at the intersection of human creativity and AI. Our visual performance incorporates water elements, with sounds that flow like water - sometimes violent, sometimes calming, always transformative."
    },
    {
      title: "SOUND & AI",
      content: "Experience a mesmerizing performance where humans interact with two AI implementations: an AI-enhanced synthesizer and an AI improviser. The synthesizer estimates parameters from audio input, recreating sounds by automatically adjusting settings. By listening to AI's unique expressions, we discover it's more than just a cold tool - it's a rich, creative partner with its own sonic personality."
    },
    {
      title: "TECHNOLOGY",
      content: "At our core is a synthesizer producing sound from pure waveforms. The AI directs these sonic streams like water flowing through channels. We blend analog warmth with digital precision - our AI generates digital signals that flow into analog components, creating natural distortions and warmth that purely digital systems lack. This hybrid approach creates a more organic, responsive interface for performers."
    },
    {
      title: "AUDIENCE IMPACT",
      content: "Waveform.AI creates a cohesive experience for everyone. Individuals create music differently than traditional production. Performers enhance their capabilities and explore new soundscapes. Audiences become part of the performance through interactive exhibits with AI-generated soundscapes. As people move through the space, sensors track their movement, changing lighting and sounds - transforming audience members into both performers and inspiration."
    }
  ];

  return (
    <div className="w-full bg-primary-20/30 backdrop-blur-md p-8 rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
        {/* Center text area with integrated LEDs */}
        <div className="grid grid-cols-2 gap-4 flex-grow mx-8 h-full">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={`text-${index}`}
              className="bg-primary-40/20 p-4 rounded-lg border border-primary-90/20 flex flex-col justify-between h-full relative cursor-pointer hover:bg-primary-40/30 transition-colors"
              onClick={() => {
                if (!switchStates[index]) {
                  handleSwitchToggle(index);
                } else {
                  setActiveModal(index);
                }
              }}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-primary-90 font-mono font-bold text-xl md:text-2xl mb-3">{channelContent[index].title}</h3>
                
                {/* Integrated LED - Red when off, Green when on */}
                <div className="relative">
                  {/* LED housing */}
                  <div className="w-8 h-8 rounded-full bg-gray-800 shadow-lg flex items-center justify-center p-1 border-2 border-gray-700">
                    {/* LED light */}
                    <div 
                      className={`w-5 h-5 rounded-full bg-gradient-to-br ${
                        switchStates[index] 
                          ? 'from-green-400 to-green-600' 
                          : 'from-red-400 to-red-600'
                      } shadow-inner`}
                    >
                      {/* LED highlight */}
                      <div className={`w-2 h-2 rounded-full bg-white/30 absolute top-2 left-2 opacity-80`}></div>
                    </div>
                  </div>
                  
                  {/* LED base */}
                  <div className="w-10 h-1 bg-gray-700 rounded-b-lg mx-auto -mt-1"></div>
                </div>
              </div>
              
              <div className="bg-black/30 p-3 rounded-md mt-auto">
                <p className="text-primary-90/80 text-sm font-mono">
                  {`>> STATUS: ${switchStates[index] ? 'ACTIVE' : 'STANDBY'}`}
                </p>
                <div className={`mt-2 h-4 bg-primary-50/10 rounded ${switchStates[index] ? 'bg-primary-90/30' : 'animate-pulse'}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Right side switch area */}
        <div className="flex flex-col gap-6">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={`switch-${index}`}
              className="relative cursor-pointer"
              onClick={() => handleSwitchToggle(index)}
            >
              {/* Switch base */}
              <div className="w-16 h-20 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-md flex flex-col items-center justify-center border border-gray-700">
                {/* Switch button */}
                <div
                  className={`w-10 h-10 rounded-lg relative transition-all duration-200 ${
                    switchStates[index] 
                      ? 'bg-gradient-to-b from-primary-70 to-primary-90 shadow-lg shadow-primary-90/30 translate-y-1' 
                      : 'bg-gradient-to-b from-gray-600 to-gray-700 translate-y-3'
                  }`}
                >
                  {/* Button highlight */}
                  <div className="absolute top-1 left-1 right-1 h-1/3 bg-white/20 rounded-t-sm"></div>
                </div>
                
                {/* Switch label */}
                <div className="mt-2 text-xs text-primary-90 font-mono">
                  {switchStates[index] ? 'ON' : 'OFF'}
                </div>
              </div>
              
              {/* Switch connection */}
              <div className="w-6 h-1 bg-gray-600 mx-auto mt-1"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeModal !== null && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div 
            className="bg-primary-30/95 backdrop-blur-lg rounded-xl p-6 max-w-3xl w-full max-h-[80vh] overflow-auto shadow-2xl border border-primary-90/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-primary-90 font-mono font-bold text-3xl">{channelContent[activeModal].title}</h2>
              
              <button 
                className="w-8 h-8 rounded-full bg-primary-90/20 hover:bg-primary-90/40 flex items-center justify-center transition-colors"
                onClick={closeModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-90" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="text-white text-lg leading-relaxed">
              <p className="mb-6">{channelContent[activeModal].content}</p>
              
              {activeModal === 0 && (
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-primary-40/30 p-4 rounded-lg">
                    <h4 className="text-primary-90 font-bold mb-2">Visual Elements</h4>
                    <p className="text-white/90">Water-inspired visuals projected onto surfaces, creating flowing, dynamic patterns that respond to the music.</p>
                  </div>
                  <div className="bg-primary-40/30 p-4 rounded-lg">
                    <h4 className="text-primary-90 font-bold mb-2">Sound Design</h4>
                    <p className="text-white/90">Water sounds interspersed with synthesized tones, creating a fluid sonic landscape that ebbs and flows.</p>
                  </div>
                </div>
              )}
              
              {activeModal === 1 && (
                <div className="bg-black/30 p-4 rounded-lg mt-4">
                  <h4 className="text-primary-90 font-bold mb-2">Featured Artist</h4>
                  <p className="text-white/90">Internationally renowned guest artist and researcher Melody Chua performs alongside her self-designed improvisation machine, creating vibrant musical discourse between human and machine.</p>
                </div>
              )}
              
              {activeModal === 2 && (
                <div className="flex items-center justify-center mt-6">
                  <div className="w-full max-w-md bg-primary-40/20 p-4 rounded-lg border border-primary-90/30">
                    <h4 className="text-primary-90 font-bold text-center mb-3">Synthesizer Components</h4>
                    <div className="flex justify-between">
                      <div className="text-center">
                        <div className="text-primary-90 font-mono">ANALOG</div>
                        <div className="text-white/80 text-sm">Warmth & Character</div>
                      </div>
                      <div className="text-center">
                        <div className="text-primary-90 font-mono">+</div>
                      </div>
                      <div className="text-center">
                        <div className="text-primary-90 font-mono">DIGITAL AI</div>
                        <div className="text-white/80 text-sm">Precision & Intelligence</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeModal === 3 && (
                <div className="mt-4">
                  <h4 className="text-primary-90 font-bold mb-2">Interactive Experience</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary-90 mr-2">•</span>
                      <span>Audience movement influences the soundscape</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-90 mr-2">•</span>
                      <span>Dynamic lighting responds to proximity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-90 mr-2">•</span>
                      <span>AI-generated sounds adapt to collective audience behavior</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            
            <div className="mt-6 pt-4 border-t border-primary-90/20 flex justify-end">
              <button 
                className="px-6 py-2 bg-primary-90/20 hover:bg-primary-90/40 text-primary-90 rounded-lg transition-colors"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FrontPanel;