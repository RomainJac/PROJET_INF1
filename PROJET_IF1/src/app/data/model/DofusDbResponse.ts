export interface DofusDbItemResponse {
  effects:EffectResponse[]
}

export interface EffectResponse {
  characteristic: number;
  from: number;
  to: number;
  isPercentage: boolean;
  category: 0|1|2;
  effectId: number;
}
