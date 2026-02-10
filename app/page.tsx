"use client";

import { BuilderPanel } from "@/components/builder/BuilderPanel";
import { RotationPreview } from "@/components/rotation/RotationPreview";
import { initialRotation } from "@/data/initialRotation";
import type { Rotation, Character } from "@/types/rotation";
import { downloadRotationAsImage } from "@/utils/downloadRotation";
import { useState } from "react";

const CHARACTERS: Character[] = [
  { id: "Akekuri", name: "Akekuri", image: "/characters/akekuri.png" },
  { id: "Alesh", name: "Alesh", image: "/characters/alesh.png" },
  { id: "Antal", name: "Antal", image: "/characters/antal.png" },
  { id: "Arclight", name: "Arclight", image: "/characters/arclight.png" },
  { id: "Ardelia", name: "Ardelia", image: "/characters/ardelia.png" },
  { id: "Avywenna", name: "Avywenna", image: "/characters/avywenna.png" },
  { id: "Catcher", name: "Catcher", image: "/characters/catcher.png" },
  { id: "Chen", name: "Chen", image: "/characters/chen-qianyu.png" },
  { id: "Da Pan", name: "Da Pan", image: "/characters/da-pan.png" },
  { id: "Ember", name: "Ember", image: "/characters/ember.png" },
  { id: "Endmin", name: "Endmin", image: "/characters/endministrator.png" },
  { id: "Estella", name: "Estella", image: "/characters/estella.png" },
  { id: "Fluorite", name: "Fluorite", image: "/characters/fluorite.png" },
  { id: "Gilberta", name: "Gilberta", image: "/characters/gilberta.png" },
  { id: "Laevatain", name: "Laev", image: "/characters/laevatain.png" },
  { id: "Last Rite", name: "Last", image: "/characters/last-rite.png" },
  { id: "Lifeng", name: "Lifeng", image: "/characters/lifeng.png" },
  { id: "Perlica", name: "Perlica", image: "/characters/perlica.png" },
  { id: "Pog", name: "Pog", image: "/characters/pogranichnik.png" },
  { id: "SnowS", name: "SnowS", image: "/characters/snowshine.png" },
  { id: "Wulfgard", name: "Wulfgard", image: "/characters/wulfgard.png" },
];

export default function Page() {
  const [rotation, setRotation] = useState<Rotation>({
    ...initialRotation,
    steps: initialRotation.steps || [],
  });

  return (
    <main className="min-h-screen bg-slate-950 flex gap-6 p-6">
      <BuilderPanel
        rotation={rotation}
        onChange={setRotation}
        characters={CHARACTERS}
      />
      <RotationPreview rotation={rotation} />
    </main>
  );
}
