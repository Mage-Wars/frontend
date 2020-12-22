import { Card } from '@models/card/card.interface';
import { CardType } from '@constants/card/card.type.enum';
import { CardSchool } from '@constants/card/card.school.enum';
import { EquipmentSlot } from '@constants/card/card.slot.enum';
import { ActionType } from '@/constants/action-type.enum';
import { AttackType } from '@/constants/attack/attack.type.enum';
import { AttackModifire } from '@constants/attack/attack.modifire.enum';
import { EffectType } from '@/constants/effect-type.enum';


const fireBallCard: Card = {
  id: '1',
  name: 'Fireball',
  description: 'This is fireball',
  actionType: ActionType.QUICK,
  manaCost: 8,
  castRange: {
    min: 0,
    max: 2,
  },
  type: CardType.ATTACK,
  subtype: ['flame'],
  targetType: ['creature', 'conjuration'],
  level: 2,
  school: CardSchool.FIRE,
  health: 11,
  armor: 4,
  attackBar: {
    attacks: [
      {
        attackType: AttackType.RANGE,
        modifire: AttackModifire.FIRE,
        diceDamage: 6,
        additionalEffects: [
          {
            min: 4,
            max: 8,
            effects: [
              {
                id: '1',
                type: EffectType.BURN,
                removalCost: 2,
                description: 'this is burn effect'
              },
            ],
          },
          {
            min: 9,
            max: 12,
            effects: [
              {
                id: '1',
                type: EffectType.BURN,
                removalCost: 2,
                description: 'this is burn effect'
              },
              {
                id: '1',
                type: EffectType.BURN,
                removalCost: 2,
                description: 'this is burn effect'
              },
            ],
          },
        ],
      }
    ],
  }
};

const broganBloodstoneCard: Card = {
  id: '2',
  name: 'Brogan Bloodstone',
  description: 'This is Brogan Bloodstone',
  actionType: ActionType.FULL,
  manaCost: 15,
  castRange: {
    min: 0,
    max: 0,
  },
  type: CardType.CREATURE,
  subtype: ['human'],
  targetType: ['zone'],
  level: 4,
  school: CardSchool.HOLY,
  attackBar: {
    attacks: [
      {
        name: 'mortal strike',
        actionType:ActionType.QUICK,
        attackType: AttackType.MELEE,
        diceDamage: 4,
      }
    ],
  },
};

const healCard: Card = {
  id: '3',
  name: 'Heal',
  description: 'This is heal spell',
  actionType: ActionType.QUICK,
  manaCost: 9,
  castRange: {
    min: 0,
    max: 2,
  },
  type: CardType.INCANTATION,
  subtype: ['healing'],
  targetType: ['living creature'],
  level: 2,
  school: CardSchool.HOLY,
};

const lairCard: Card = {
  id: '4',
  name: 'Lair',
  description: 'This is lair',
  actionType: ActionType.QUICK,
  manaCost: 15,
  castRange: {
    min: 0,
    max: 1,
  },
  type: CardType.CONJURATION,
  subtype: ['portal'],
  targetType: ['zone'],
  level: 4,
  school: CardSchool.NATURE,
  health: 13,
  armor: 3,
};

const staffOfBeastsCard: Card = {
  id: '5',
  name: 'Staff of Beasts',
  description: 'This is staff of beasts',
  actionType: ActionType.QUICK,
  manaCost: 7,
  castRange: {
    min: 0,
    max: 1,
  },
  type: CardType.EQUIPMENT,
  targetType: ['mages'],
  level: 2,
  school: CardSchool.NATURE,
  equipmentSlot: EquipmentSlot.WEAPON,
  attackBar: {
    attacks: [
      {
        name: 'Nature strike',
        actionType: ActionType.QUICK,
        attackType: AttackType.MELEE,
        diceDamage: 4
      },
    ],
  },
};
