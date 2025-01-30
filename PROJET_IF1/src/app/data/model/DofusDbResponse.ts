export interface DofusDbItemResponse {
  id: number;
  name: { fr: string; [key: string]: string };
  level: number;
  img: string;
  superType?: { name: { fr: string; [key: string]: string } };
  realWeight: number;
  description?: { fr: string; [key: string]: string };
  effects: EffectResponse[];
  criteria?: string; // Conditions sous forme de string (ex: "CP<12|CM<6")
}

export interface EffectResponse {
  characteristic: number;
  from: number;
  to: number;
  isPercentage: boolean;
  category: 0|1|2;
  effectId: number;
}
