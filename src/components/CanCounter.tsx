import React from 'react';

interface CanCounterProps {
  energy: number;
  onClick: () => void;
}

export const CanCounter: React.FC<CanCounterProps> = ({ energy, onClick }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center justify-center">
        <div className="text-2xl font-bold text-white mb-4">{Math.floor(energy)} энергии</div>
      </div>
      
      <div 
        className="relative cursor-pointer transition-transform animate-can-click"
        onClick={onClick}
      >
        <img 
          src="https://cdn.poehali.dev/files/d94058c7-6432-4c29-b0c7-bc855d2facba.jpg" 
          alt="Red Bull Energy Drink" 
          className="h-72 select-none"
          draggable="false"
        />
        <div className="absolute -top-2 -right-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white opacity-0 transition-opacity animate-fade-in">
          +1
        </div>
      </div>
    </div>
  );
};

export default CanCounter;
