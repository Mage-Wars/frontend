import { EffectType } from '@/constants/effect-type.enum';

//TODO: rework effect interface
export interface Effect {
  id: string;
  type?: EffectType;
  removalCost: number;
  description: string;
};
