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
        image: "ak-endfield/characters/akekuri.png",
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
        image: "ak-endfield/characters/chen-qianyu.png",
      },
      action: "ultimate",
      trigger: { type: "hold" },
    },
  ],
  footerNote: "Arknights Endfield Rotation Preview",
};
