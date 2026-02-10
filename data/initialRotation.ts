// src/data/initialRotation.ts
import { Rotation } from "@/types/rotation";

export const initialRotation: Rotation = {
  id: "basic-rotation",
  title: "Basic Rotation",
  steps: [
    {
      id: "step-1",
      character: {
        id: "amiya",
        name: "Amiya",
        image: "/characters/akekuri.png",
      },
      action: "skill",
      trigger: { type: "tap" },
      transition: { label: "Quick" },
    },
    {
      id: "step-2",
      character: {
        id: "chen",
        name: "Ch'en",
        image: "/characters/chen.png",
      },
      action: "ultimate",
      trigger: { type: "hold" },
    },
  ],
  footerNote: "Arknights Endfield Rotation Preview",
};
