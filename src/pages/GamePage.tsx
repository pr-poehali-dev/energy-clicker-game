import React from 'react';
import { useGameState } from '@/hooks/useGameState';
import CanCounter from '@/components/CanCounter';
import StatsCard from '@/components/StatsCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const GamePage: React.FC = () => {
  const { gameState, addEnergy } = useGameState();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border py-4 px-4">
        <h1 className="text-xl font-bold">Главная</h1>
      </header>
      
      <div className="flex-1 p-4 flex flex-col gap-6">
        <div className="flex items-center justify-center">
          <div className="rounded-full bg-primary/10 px-4 py-2 text-sm">
            <span className="mr-2 font-semibold">Энергия:</span>
            <span>{Math.floor(gameState.energy)}</span>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center gap-6 py-6">
          <CanCounter 
            energy={gameState.energy} 
            energyPerClick={gameState.energyPerClick}
            onClick={addEnergy} 
          />
        </div>
        
        <StatsCard gameState={gameState} />
        
        <div className="mt-auto">
          <Link to="/menu">
            <Button className="w-full bg-primary text-primary-foreground">
              Открыть магазин
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
