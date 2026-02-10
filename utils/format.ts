import { Trigger } from "@/types/rotation";

export function formatTrigger(trigger: Trigger): string {
  switch (trigger.type) {
    case "tap":
      return "Tap";

    case "hold":
      return "Hold";

    case "multi_tap":
      return `Tap x${trigger.count}`;

    case "until_combo":
      return "Until Combo";

    default:
      return "";
  }
}
