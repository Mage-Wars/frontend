export type Effect = {
  id: string;
  name?: 'burn'
  | 'cripple'
  | 'daze'
  | 'rot'
  | 'sleep'
  | 'stun'
  | 'weak';
  removalCost: number;
  description: string;
}