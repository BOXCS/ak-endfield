import { Trigger } from "@/types/rotation";
import { formatTrigger } from "@/utils/format";

interface TriggerLabelProps {
  trigger: Trigger;
}

export function TriggerLabel({ trigger }: TriggerLabelProps) {
  return (
    <div className="text-sm text-white/80 font-medium">
      + {formatTrigger(trigger)}
    </div>
  );
}
