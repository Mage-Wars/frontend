import { CardType } from '@models/card/card.type.interface';
import { CardSchool } from '@models/card/card.school.interface';
import { EquipmentSlot } from '@models/card/card.slot.interface';
import { CardArrackBar } from '@models/card/card.attack-bar.interface';
import { Trait } from '@/models/card/card.trait.interface'

export interface Card {
  id: string;
  name: string;
  description: string;
  actionType: 'quick' | 'full';
  manaCost: number;
  castRange: {
    min: number,
    max: number,
  };
  type: CardType;
  //TODO: fill subtypes later
  subtype: string[];
  targetType: string;
  level: number;
  school: CardSchool;
  equipmentSlot?: EquipmentSlot;
  attackBar?: CardArrackBar;
  armor?: number | 'no armore';
  health?: number;
  trails?: Trait[];
};
