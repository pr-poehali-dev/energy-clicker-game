import React, { useState } from 'react';
import { useGameState } from '@/hooks/useGameState';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { ArrowLeft, Settings, ShoppingBag } from 'lucide-react';
import ShopItem from '@/components/ShopItem';
import { Button } from '@/components/ui/button';
import { UPGRADES } from '@/types/game';
import { BadgeGreen } from '@/components/ui/badge-green';

const MenuPage: React.FC = () => {
  const { gameState, buyUpgrade, resetGame } = useGameState();
  const [activeTab, setActiveTab] = useState('shop');
  
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border py-4 px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Меню</h1>
          <div className="rounded-full bg-primary/10 px-3 py-1 text-sm">
            <span>{Math.floor(gameState.energy)}</span>
          </div>
        </div>
      </header>
      
      <div className="flex-1 p-4 flex flex-col gap-4">
        <div className="flex items-center mt-2 mb-4">
          <div className="flex items-center gap-2">
            <img 
              src="https://cdn.poehali.dev/files/d94058c7-6432-4c29-b0c7-bc855d2facba.jpg" 
              alt="Logo" 
              className="h-10 w-10 object-cover" 
            />
            <div>
              <div className="text-lg font-bold text-white">Red Bull Кликер</div>
              <div className="text-xs text-muted-foreground">
                Собери энергию
              </div>
            </div>
          </div>
          <BadgeGreen className="ml-auto">
            tg: @origcrime
          </BadgeGreen>
        </div>
        
        <Tabs defaultValue="shop" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="shop" className="flex items-center gap-2">
              <ShoppingBag size={16} />
              <span>Магазин</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings size={16} />
              <span>Настройки</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="shop" className="space-y-4 mt-2">
            {UPGRADES.map(upgrade => (
              <ShopItem 
                key={upgrade.id}
                upgradeId={upgrade.id}
                level={gameState.upgrades[upgrade.id] || 0}
                energy={gameState.energy}
                onBuy={buyUpgrade}
              />
            ))}
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-4 mt-2">
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="mb-4 text-lg font-medium">Игровые настройки</h3>
              <div className="space-y-4">
                <Button 
                  variant="destructive" 
                  className="w-full"
                  onClick={resetGame}
                >
                  Сбросить прогресс
                </Button>
                <div className="text-xs text-muted-foreground mt-2">
                  Версия игры: 1.0.0
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-auto">
          <Link to="/">
            <Button className="w-full flex items-center gap-2" variant="outline">
              <ArrowLeft size={16} />
              Вернуться в игру
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
