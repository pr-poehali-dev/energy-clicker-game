export interface GameState {
  energy: number;
  energyPerClick: number;
  energyPerSecond: number;
  lastSaved: number;
  upgrades: Record<string, number>;
}

export interface Upgrade {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  baseEffect: number;
  effectType: 'perClick' | 'perSecond';
  icon: string;
}

export const UPGRADES: Upgrade[] = [
  {
    id: 'click-power',
    name: 'Мощный клик',
    description: 'Увеличивает энергию за клик',
    basePrice: 10,
    baseEffect: 1,
    effectType: 'perClick',
    icon: '👆'
  },
  {
    id: 'auto-clicker',
    name: 'Авто-кликер',
    description: 'Автоматически добавляет энергию',
    basePrice: 50,
    baseEffect: 1,
    effectType: 'perSecond',
    icon: '⚡'
  },
  {
    id: 'energy-boost',
    name: 'Энергетический буст',
    description: 'Значительно увеличивает энергию за клик',
    basePrice: 200,
    baseEffect: 5,
    effectType: 'perClick',
    icon: '🔋'
  }
];

export const calculateUpgradePrice = (upgrade: Upgrade, level: number): number => {
  return Math.floor(upgrade.basePrice * Math.pow(1.15, level));
};

export const INITIAL_STATE: GameState = {
  energy: 0,
  energyPerClick: 1,
  energyPerSecond: 0,
  lastSaved: Date.now(),
  upgrades: {
    'click-power': 0,
    'auto-clicker': 0,
    'energy-boost': 0
  }
};
