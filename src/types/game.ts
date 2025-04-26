export interface GameUpgrade {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  priceMultiplier: number;
  baseEffect: number;
  effectType: 'perClick' | 'perSecond';
  icon: string;
}

export interface GameState {
  energy: number;
  energyPerClick: number;
  energyPerSecond: number;
  upgrades: Record<string, number>;
  lastSaved: number;
}

export const INITIAL_STATE: GameState = {
  energy: 0,
  energyPerClick: 1,
  energyPerSecond: 0,
  upgrades: {},
  lastSaved: Date.now()
};

export const UPGRADES: GameUpgrade[] = [
  {
    id: 'clickPower',
    name: 'Сила клика',
    description: 'Увеличивает количество энергии за один клик',
    basePrice: 10,
    priceMultiplier: 1.5,
    baseEffect: 1,
    effectType: 'perClick',
    icon: '👆'
  },
  {
    id: 'autoClick',
    name: 'Автоклик',
    description: 'Автоматически добавляет энергию каждую секунду',
    basePrice: 25,
    priceMultiplier: 1.8,
    baseEffect: 1,
    effectType: 'perSecond',
    icon: '⏱️'
  },
  {
    id: 'megaClick',
    name: 'Мегаклик',
    description: 'Значительно увеличивает количество энергии за клик',
    basePrice: 100,
    priceMultiplier: 2,
    baseEffect: 5,
    effectType: 'perClick',
    icon: '💥'
  },
  {
    id: 'turboBoost',
    name: 'Турбо буст',
    description: 'Мощный автоматический генератор энергии',
    basePrice: 250,
    priceMultiplier: 2.2,
    baseEffect: 5,
    effectType: 'perSecond',
    icon: '🚀'
  },
  {
    id: 'doubleTap',
    name: 'Двойной тап',
    description: 'Удваивает эффективность каждого клика',
    basePrice: 500,
    priceMultiplier: 2.5,
    baseEffect: 10,
    effectType: 'perClick',
    icon: '✌️'
  },
  {
    id: 'energyFactory',
    name: 'Энергофабрика',
    description: 'Создает постоянный поток энергии без остановки',
    basePrice: 1000,
    priceMultiplier: 3,
    baseEffect: 15,
    effectType: 'perSecond',
    icon: '🏭'
  },
  {
    id: 'powerStrike',
    name: 'Силовой удар',
    description: 'Мощнейший бонус к энергии за клик',
    basePrice: 2500,
    priceMultiplier: 3.5,
    baseEffect: 50,
    effectType: 'perClick',
    icon: '⚡'
  }
];

export function calculateUpgradePrice(upgrade: GameUpgrade, level: number): number {
  return Math.floor(upgrade.basePrice * Math.pow(upgrade.priceMultiplier, level));
}
