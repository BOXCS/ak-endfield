import { ActionType } from "@/types/rotation";

interface ActionBadgeProps {
    action: ActionType;
}

const actionStyles = {
  basic: "bg-gray-500",
  skill: "bg-blue-500",
  combo: "bg-yellow-500 text-black",
  ultimate: "bg-purple-600",
  final: "bg-red-600",
};


export function ActionBadge({ action }: ActionBadgeProps) {
  return (
    <div
      className={`px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wide ${actionStyles[action]}`}
    >
      {action}
    </div>
  );
}
