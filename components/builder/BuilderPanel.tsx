"use client";

export const dynamic = "force-static";

import {
  Rotation,
  RotationStep,
  ActionType,
  Trigger,
  Transition,
  Character,
} from "@/types/rotation";
import { Plus, Trash, Download } from "lucide-react";
import { CharacterPicker } from "./CharacterPicker";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";

interface BuilderPanelProps {
  rotation: Rotation;
  characters: Character[];
  onChange: (rotation: Rotation) => void;
}

const ACTIONS: ActionType[] = ["basic", "skill", "ultimate", "combo"];
const TRIGGERS = ["tap", "hold", "multi_tap", "until_combo", "final_attack"] as const;
const TRANSITIONS = ["quick", "delay", "swap"] as const;

type TriggerType = (typeof TRIGGERS)[number];
type TransitionType = (typeof TRANSITIONS)[number];

/* =========================
   HELPERS
========================= */

function buildTrigger(type: TriggerType): Trigger {
  switch (type) {
    case "multi_tap":
      return { type: "multi_tap", count: 2 };
    case "tap":
      return { type: "tap" };
    case "hold":
      return { type: "hold" };
    case "until_combo":
      return { type: "until_combo" };
    case "final_attack":
      return { type: "final_attack" };
  }
}

function getTriggerType(trigger: Trigger): TriggerType {
  return trigger.type;
}

/* =========================
   DOWNLOAD ROTATION
========================= */
function downloadRotation() {
  const node = document.getElementById("rotation-preview");
  if (!node) return;

  htmlToImage
    .toPng(node, {
      backgroundColor: "#0f172a", // warna background jika perlu
      pixelRatio: 2, // resolusi lebih tinggi
    })
    .then((dataUrl) => {
      download(dataUrl, "rotation.png", "image/png");
    })
    .catch((err) => console.error("Failed to generate image:", err));
}

/* =========================
   COMPONENT
========================= */

export function BuilderPanel({
  rotation,
  characters,
  onChange,
}: BuilderPanelProps) {
  function updateStep(index: number, patch: Partial<RotationStep>) {
    const steps = [...rotation.steps];
    steps[index] = { ...steps[index], ...patch };
    onChange({ ...rotation, steps });
  }

  function addStep() {
    onChange({
      ...rotation,
      steps: [
        ...rotation.steps,
        {
          id: crypto.randomUUID(),
          character: characters[0] ?? {
            id: "unknown",
            name: "Unknown",
            image: "/characters/placeholder.png",
          },
          action: "basic",
          trigger: { type: "tap" },
        },
      ],
    });
  }

  function removeStep(index: number) {
    onChange({
      ...rotation,
      steps: rotation.steps.filter((_, i) => i !== index),
    });
  }

  return (
    <aside className="w-[360px] bg-slate-900 border border-white/10 rounded-xl p-4 flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Rotation Builder</h2>

      <div className="flex flex-col gap-3 overflow-y-auto max-h-[80vh] pr-1">
        {(rotation.steps || []).map((step, index) => (
          <div
            key={step.id}
            className="bg-slate-800 rounded-lg p-3 flex flex-col gap-2"
          >
            {/* Step Header */}
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Step {index + 1}</span>
              <button
                onClick={() => removeStep(index)}
                className="text-red-400 hover:text-red-300"
              >
                <Trash size={16} />
              </button>
            </div>

            {/* Character Picker */}
            <CharacterPicker
              characters={characters}
              value={step.character}
              onChange={(char) => updateStep(index, { character: char })}
            />

            {/* Action */}
            <select
              value={step.action}
              onChange={(e) =>
                updateStep(index, { action: e.target.value as ActionType })
              }
              className="bg-slate-900 border border-white/10 rounded px-2 py-1 text-sm"
            >
              {ACTIONS.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>

            {/* Trigger */}
            <select
              value={getTriggerType(step.trigger)}
              onChange={(e) =>
                updateStep(index, {
                  trigger: buildTrigger(e.target.value as TriggerType),
                })
              }
              className="bg-slate-900 border border-white/10 rounded px-2 py-1 text-sm"
            >
              {TRIGGERS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>

            {/* Multi-tap input */}
            {step.trigger.type === "multi_tap" && (
              <input
                type="number"
                min={1}
                value={step.trigger.count}
                onChange={(e) =>
                  updateStep(index, {
                    trigger: {
                      type: "multi_tap",
                      count: Number(e.target.value),
                    },
                  })
                }
                className="bg-slate-900 border border-white/10 rounded px-2 py-1 text-sm"
                placeholder="Tap count"
              />
            )}

            {/* Transition */}
            <select
              value={step.transition?.label ?? ""}
              onChange={(e) =>
                updateStep(index, {
                  transition: e.target.value
                    ? { label: e.target.value as TransitionType }
                    : undefined,
                })
              }
              className="bg-slate-900 border border-white/10 rounded px-2 py-1 text-sm"
            >
              <option value="">No Transition</option>
              {TRANSITIONS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Add Step Button */}
      <button
        onClick={addStep}
        className="mt-auto flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg py-2 text-sm font-medium"
      >
        <Plus size={16} /> Add Step
      </button>

      {/* Download Rotation Button */}
      <button
        onClick={downloadRotation}
        className="mt-2 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 rounded-lg py-2 text-sm font-medium"
      >
        <Download size={16} /> Download Rotation
      </button>
    </aside>
  );
}
