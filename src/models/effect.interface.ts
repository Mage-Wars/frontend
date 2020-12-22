import { EffectType } from '@/constants/effect-type.enum';

export interface Effect {
  id: string;
  name?: EffectType;
  removalCost: number;
  description: string;
};
