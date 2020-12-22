import { Effect } from '@models/effect.interface';
import { ActionType } from '@constants/action-type.enum';
import { AttackType } from '@/constants/attack/attack.type.enum';
import { AttackModifire } from '@constants/attack/attack.modifire.enum';

interface Attack {
  name?: string;
  actionType?: ActionType;
  attackType: AttackType;
  attackRange?: {
    min: number;
    max: number;
  };
  modifire?: AttackModifire;
  diceDamage: number;
  additionalEffects?: {
    min: number;
    max: number;
    effects: Effect[];
  }[]
};

export interface CardArrackBar {
  attacks: Attack[];
};
