import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface LuckyWheelProps {
  onSpinComplete: (number: number) => void;
}

const LuckyWheel: React.FC<LuckyWheelProps> = ({ onSpinComplete }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    const randomRotation = Math.random() * 3600 + 360; // 至少转一圈
    setRotation(prev => prev + randomRotation);

    // 计算最终停止的数字
    const finalRotation = rotation + randomRotation;
    const finalNumber = numbers[Math.floor((finalRotation % 360) / 36)];
    
    setTimeout(() => {
      setIsSpinning(false);
      onSpinComplete(finalNumber);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-64 h-64">
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-gray-200"
          animate={{ rotate: rotation }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          {numbers.map((number, index) => (
            <div
              key={number}
              className="absolute w-full h-full"
              style={{
                transform: `rotate(${index * 36}deg)`,
              }}
            >
              <div
                className="absolute w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full"
                style={{
                  transform: `translate(-50%, -50%) rotate(${-index * 36}deg)`,
                  left: '50%',
                  top: '50%',
                }}
              >
                {number}
              </div>
            </div>
          ))}
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-red-500 rounded-full" />
        </div>
      </div>
      <button
        onClick={spinWheel}
        disabled={isSpinning}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSpinning ? '转动中...' : '开始转动'}
      </button>
    </div>
  );
};

export default LuckyWheel; 