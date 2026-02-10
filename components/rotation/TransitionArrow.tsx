import { ChevronRight } from "lucide-react";

interface TransitionArrowProps {
  label?: string;
}

export function TransitionArrow({ label }: TransitionArrowProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      {label && (
        <div className="text-xs text-white/60 uppercase tracking-wide">
          {label}
        </div>
      )}
      <ChevronRight size={40} />
    </div>
  );
}
