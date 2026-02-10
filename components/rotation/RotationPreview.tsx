import { Rotation, RotationStep } from "@/types/rotation";
import { StepCard } from "./StepCard";
import { TransitionArrow } from "./TransitionArrow";
import { FooterNote } from "./FooterNote";

interface RotationPreviewProps {
  rotation: Rotation;
}

export function RotationPreview({ rotation }: RotationPreviewProps) {
  const MAX_HORIZONTAL = 4;

  // Split steps ke rows
  const rows: RotationStep[][] = [];
  for (let i = 0; i < rotation.steps.length; i += MAX_HORIZONTAL) {
    rows.push(rotation.steps.slice(i, i + MAX_HORIZONTAL));
  }

  return (
    <div
      id="rotation-preview"
      className="
        w-full
        min-h-[600px]
        bg-gradient-to-br
        from-slate-900
        to-slate-800
        text-white
        p-16
        flex
        flex-col
        justify-between
        rounded-2xl
      "
    >
      {/* Title */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-wide">{rotation.title}</h1>
      </div>

      {/* Steps Section */}
      <div className="flex-1 flex flex-col items-center justify-center gap-12">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex items-center gap-12 flex-wrap">
            {row.map((step, index) => (
              <div key={step.id} className="flex items-center gap-12">
                {/* Step Card */}
                <StepCard step={step} />

                {/* Arrow (tidak dirender pada step terakhir baris) */}
                {index < row.length - 1 && (
                  <TransitionArrow label={step.transition?.label} />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Footer */}
      <FooterNote text={rotation.footerNote} />
    </div>
  );
}
