"use client";

export const dynamic = "force-static";

import { BuilderPanel } from "@/components/builder/BuilderPanel";
import { RotationPreview } from "@/components/rotation/RotationPreview";
import { initialRotation } from "@/data/initialRotation";
import type { Rotation, Character } from "@/types/rotation";
import { downloadRotationAsImage } from "@/utils/downloadRotation";
import { BASE_PATH } from "@/utils/basepath";
import { useState } from "react";

// daftar karakter dan nama file gambarnya
const CHAR_DATA = [
  { id: "Akekuri", name: "Akekuri", file: "akekuri.png" },
  { id: "Alesh", name: "Alesh", file: "alesh.png" },
  { id: "Antal", name: "Antal", file: "antal.png" },
  { id: "Arclight", name: "Arclight", file: "arclight.png" },
  { id: "Ardelia", name: "Ardelia", file: "ardelia.png" },
  { id: "Avywenna", name: "Avywenna", file: "avywenna.png" },
  { id: "Catcher", name: "Catcher", file: "catcher.png" },
  { id: "Chen", name: "Chen", file: "chen-qianyu.png" },
  { id: "Da Pan", name: "Da Pan", file: "da-pan.png" },
  { id: "Ember", name: "Ember", file: "ember.png" },
  { id: "Endmin", name: "Endmin", file: "endministrator.png" },
  { id: "Estella", name: "Estella", file: "estella.png" },
  { id: "Fluorite", name: "Fluorite", file: "fluorite.png" },
  { id: "Gilberta", name: "Gilberta", file: "gilberta.png" },
  { id: "Laevatain", name: "Laev", file: "laevatain.png" },
  { id: "Last Rite", name: "Last", file: "last-rite.png" },
  { id: "Lifeng", name: "Lifeng", file: "lifeng.png" },
  { id: "Perlica", name: "Perlica", file: "perlica.png" },
  { id: "Pog", name: "Pog", file: "pogranichnik.png" },
  { id: "SnowS", name: "SnowS", file: "snowshine.png" },
  { id: "Wulfgard", name: "Wulfgard", file: "wulfgard.png" },
];

// buat array CHARACTERS lengkap dengan BASE_PATH
export const CHARACTERS: Character[] = CHAR_DATA.map(({ id, name, file }) => ({
  id,
  name,
  image: `${BASE_PATH}/characters/${file}`,
}));

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
