import React, { useState } from 'react';

interface CanCounterProps {
  energy: number;
  onClick: () => void;
}

export const CanCounter: React.FC<CanCounterProps> = ({ energy, onClick }) => {
  const [animations, setAnimations] = useState<{id: number, x: number, y: number}[]>([]);
  
  const handleClick = (e: React.MouseEvent) => {
    // Получаем координаты клика относительно элемента
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - 20; // Центрирование
    const y = e.clientY - rect.top - 20;  // Центрирование
    
    // Создаем новую анимацию
    const newAnimation = {
      id: Date.now(),
      x,
      y
    };
    
    setAnimations(prev => [...prev, newAnimation]);
    
    // Убираем анимацию через 1 секунду
    setTimeout(() => {
      setAnimations(prev => prev.filter(anim => anim.id !== newAnimation.id));
    }, 1000);
    
    onClick();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center justify-center">
        <div className="text-2xl font-bold text-white mb-4">{Math.floor(energy)} энергии</div>
      </div>
      
      <div 
        className="relative cursor-pointer transition-transform hover:scale-105 active:scale-95"
        onClick={handleClick}
      >
        {/* Анимации +1 */}
        {animations.map(anim => (
          <div 
            key={anim.id}
            className="absolute flex items-center justify-center text-lg font-bold text-white animate-fly-up"
            style={{ 
              left: `${anim.x}px`, 
              top: `${anim.y}px`
            }}
          >
            +1
          </div>
        ))}
        
        <img 
          src="https://cdn.poehali.dev/files/d94058c7-6432-4c29-b0c7-bc855d2facba.jpg" 
          alt="Red Bull Energy Drink" 
          className="h-72 select-none"
          draggable="false"
        />
      </div>
    </div>
  );
};

export default CanCounter;
