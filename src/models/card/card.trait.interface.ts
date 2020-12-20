//TODO: fill traits names later
type TraitName = 'trail name'
| 'another trail name'

export interface Trait {
  id: string;
  name: TraitName;
  value?: {
    amount: number;
    state: 'positive'
    | 'negative'
    | 'constant';
  };
};
