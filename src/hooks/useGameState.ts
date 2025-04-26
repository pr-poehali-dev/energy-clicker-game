import { useState, useEffect, useCallback } from 'react';
import { GameState, INITIAL_STATE, UPGRADES, calculateUpgradePrice } from '@/types/game';

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>(() => {
    const savedState = localStorage.getItem('energyClickerState');
    if (savedState) {
      try {
        return JSON.parse(savedState);
      } catch (e) {
        console.error('Ошибка при загрузке сохранения:', e);
      }
    }
    return INITIAL_STATE;
  });
  
  // Сохранение состояния игры
  useEffect(() => {
    const saveInterval = setInterval(() => {
      localStorage.setItem('energyClickerState', JSON.stringify({
        ...gameState,
        lastSaved: Date.now()
      }));
    }, 5000);
    
    return () => clearInterval(saveInterval);
  }, [gameState]);
  
  // Расчет энергии между сессиями
  useEffect(() => {
    const now = Date.now();
    const timeDiff = (now - gameState.lastSaved) / 1000;
    
    if (timeDiff > 0 && gameState.energyPerSecond > 0) {
      const offlineEnergy = Math.floor(gameState.energyPerSecond * timeDiff);
      
      if (offlineEnergy > 0) {
        setGameState(prev => ({
          ...prev,
          energy: prev.energy + offlineEnergy,
          lastSaved: now
        }));
      }
    }
  }, []);
  
  // Автоматическое добавление энергии
  useEffect(() => {
    if (gameState.energyPerSecond <= 0) return;
    
    const autoClickInterval = setInterval(() => {
      setGameState(prev => ({
        ...prev,
        energy: prev.energy + prev.energyPerSecond
      }));
    }, 1000);
    
    return () => clearInterval(autoClickInterval);
  }, [gameState.energyPerSecond]);
  
  const addEnergy = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      energy: prev.energy + prev.energyPerClick
    }));
  }, []);
  
  const buyUpgrade = useCallback((upgradeId: string) => {
    const upgrade = UPGRADES.find(u => u.id === upgradeId);
    if (!upgrade) return;
    
    const currentLevel = gameState.upgrades[upgradeId] || 0;
    const price = calculateUpgradePrice(upgrade, currentLevel);
    
    if (gameState.energy >= price) {
      setGameState(prev => {
        const newLevel = (prev.upgrades[upgradeId] || 0) + 1;
        const newState = { ...prev };
        
        newState.energy -= price;
        newState.upgrades[upgradeId] = newLevel;
        
        if (upgrade.effectType === 'perClick') {
          newState.energyPerClick += upgrade.baseEffect;
        } else if (upgrade.effectType === 'perSecond') {
          newState.energyPerSecond += upgrade.baseEffect;
        }
        
        return newState;
      });
    }
  }, [gameState]);
  
  const resetGame = useCallback(() => {
    if (window.confirm('Вы уверены, что хотите сбросить весь прогресс?')) {
      localStorage.removeItem('energyClickerState');
      setGameState(INITIAL_STATE);
    }
  }, []);
  
  return {
    gameState,
    addEnergy,
    buyUpgrade,
    resetGame
  };
};
