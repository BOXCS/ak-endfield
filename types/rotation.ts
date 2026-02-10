/* =========================
   ACTION TYPES
========================= */

export type ActionType =
  | "basic"
  | "skill"
  | "combo"
  | "ultimate"
  | "final";


/* =========================
   TRIGGER TYPES (SCALABLE)
========================= */

export type Trigger =
  | { type: "tap" }
  | { type: "hold" }
  | { type: "multi_tap"; count: number }
  | { type: "final_attack" }
  | { type: "until_combo" };

export type TriggerType =
  | "tap"
  | "hold"
  | "multi_tap"
  | "final_attack"
  | "until_combo";


/* =========================
   CHARACTER
========================= */

export interface Character {
  id: string;
  name: string;
  image: string; // URL atau local asset path
}


/* =========================
   TRANSITION
========================= */

export interface Transition {
  label?: string;   // contoh: "Combo Reversal"
}

export type TransitionType = "quick" | "delay" | "swap";


/* =========================
   ROTATION STEP
========================= */

export interface RotationStep {
  id: string;
  character: Character;
  action: ActionType;
  trigger: Trigger;
  transition?: Transition; 
}


/* =========================
   ROTATION ROOT
========================= */

export interface Rotation {
  id: string;
  title: string;
  steps: RotationStep[];
  footerNote?: string;
}
