import { RotationStep } from "@/types/rotation";
import { ActionBadge } from "./ActionBadge";
import { CharacterIcon } from "./CharacterIcon";
import { TriggerLabel } from "./TriggerLabel";

interface StepCardProps {
  step: RotationStep;
}

export function StepCard({ step }: StepCardProps) {
  return (
    <div className="flex flex-col items-center gap-3 w-[140px]">
      <ActionBadge action={step.action} />

      <CharacterIcon chara={step.character} />

      <TriggerLabel trigger={step.trigger} />
    </div>
  );
}
