import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { UPGRADES, calculateUpgradePrice } from '@/types/game';

interface ShopItemProps {
  upgradeId: string;
  level: number;
  energy: number;
  onBuy: (upgradeId: string) => void;
}

export const ShopItem: React.FC<ShopItemProps> = ({ upgradeId, level, energy, onBuy }) => {
  const upgrade = UPGRADES.find(u => u.id === upgradeId);
  if (!upgrade) return null;
  
  const price = calculateUpgradePrice(upgrade, level);
  const canAfford = energy >= price;
  
  return (
    <Card className="bg-card">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{upgrade.icon}</span>
          <div>
            <CardTitle className="text-md">{upgrade.name}</CardTitle>
            <div className="flex items-center gap-1">
              <span className="text-xs text-muted-foreground">Уровень: {level}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <CardDescription>{upgrade.description}</CardDescription>
        <div className="mt-2 text-sm">
          <span>
            {upgrade.effectType === 'perClick' 
              ? `+${upgrade.baseEffect} энергии за клик` 
              : `+${upgrade.baseEffect} энергии в секунду`}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={() => onBuy(upgradeId)} 
          className="w-full" 
          disabled={!canAfford}
          variant={canAfford ? "default" : "outline"}
        >
          Купить за {price} энергии
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ShopItem;
