import { Effect } from '@models/effect.interface';

interface Attack {
  name?: string;
  actionType?: 'quick'
  | 'full';
  attackType: 'melee'
  | 'range';
  attackRange?: {
    min: number;
    max: number;
  };
  modifire?: 'fire'
  | 'wind'
  | 'holy'
  | 'lightning';
  diceDamage: number;
  additionalEffects?: {
    min: number;
    max: number;
    effects: Effect[];
  }[]
  traits: string[];
}

export interface CardArrackBar {
  attacks: Attack[];
}
