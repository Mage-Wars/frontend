import { CardType } from '@constants/card/card.type.enum';
import { CardSchool } from '@constants/card/card.school.enum';
import { EquipmentSlot } from '@constants/card/card.slot.enum';
import { ActionType } from '@/constants/action-type.enum';

import { CardArrackBar } from '@models/card/card.attack-bar.interface';

export interface Card {
  id: string;
  name: string;
  description: string;
  actionType: ActionType;
  manaCost: number;
  castRange: {
    min: number,
    max: number,
  };
  type: CardType;
  //TODO: fill subtypes later
  subtype: string[];
  //TODO: fill targets later
  targetType: string;
  level: number;
  school: CardSchool;
  equipmentSlot?: EquipmentSlot;
  attackBar?: CardArrackBar;
  armor?: number | 'no armore';
  health?: number;
};
