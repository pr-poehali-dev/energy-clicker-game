import { GameState } from '@/types/game';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface StatsCardProps {
  gameState: GameState;
}

export const StatsCard = ({ gameState }: StatsCardProps) => {
  return (
    <Card className="mx-auto w-full max-w-md bg-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Статистика</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <span className="text-muted-foreground text-sm">За клик</span>
          <span className="text-lg font-medium">+{gameState.energyPerClick}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-muted-foreground text-sm">В секунду</span>
          <span className="text-lg font-medium">+{gameState.energyPerSecond}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
