import React, { useState } from 'react';

const FrontPanel = () => {
  // 状态管理
  const [knobValues, setKnobValues] = useState([0, 0, 0, 0]);
  const [switchStates, setSwitchStates] = useState([false, false, false, false]);

  // 处理旋钮旋转
  const handleKnobRotation = (index, event) => {
    const knob = event.currentTarget;
    const rect = knob.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(
      event.clientY - centerY,
      event.clientX - centerX
    ) * (180 / Math.PI);
    
    const newValues = [...knobValues];
    newValues[index] = angle;
    setKnobValues(newValues);
  };

  // 处理开关切换
  const handleSwitchToggle = (index) => {
    const newStates = [...switchStates];
    newStates[index] = !newStates[index];
    setSwitchStates(newStates);
  };

  return (
    <div className="w-full bg-primary-20/30 backdrop-blur-md p-8 rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
        {/* 左侧旋钮区域 */}
        <div className="grid grid-cols-2 gap-6">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={`knob-${index}`}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 shadow-lg cursor-pointer relative"
              style={{
                transform: `rotate(${knobValues[index]}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
              onMouseMove={(e) => handleKnobRotation(index, e)}
            >
              <div className="absolute top-2 left-1/2 w-1 h-4 bg-primary-90 rounded-full transform -translate-x-1/2"></div>
              <div className="absolute inset-0 rounded-full border-2 border-primary-90/20"></div>
            </div>
          ))}
        </div>

        {/* 中间文本区域 */}
        <div className="grid grid-cols-2 gap-4 flex-grow mx-8">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={`text-${index}`}
              className="bg-primary-40/20 p-4 rounded-lg border border-primary-90/20"
            >
              <p className="text-primary-90 text-center font-mono">TEXT {index}</p>
              <div className="mt-2 h-8 bg-primary-50/10 rounded animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* 右侧开关区域 */}
        <div className="grid grid-cols-1 gap-6">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={`switch-${index}`}
              className="relative w-12 h-24 cursor-pointer"
              onClick={() => handleSwitchToggle(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg shadow-md">
                <div
                  className={`absolute left-1/2 w-4 h-12 bg-primary-90 rounded-full transform -translate-x-1/2 transition-all duration-200 ${
                    switchStates[index] ? 'top-1' : 'top-11'
                  }`}
                >
                  <div className="absolute inset-x-0 top-1 bottom-1 bg-gradient-to-b from-primary-70 to-primary-90 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrontPanel;