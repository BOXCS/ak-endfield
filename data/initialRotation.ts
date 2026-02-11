// src/data/initialRotation.ts
import { Character, Rotation } from "@/types/rotation";
import { BASE_PATH } from "@/utils/basepath";

export const initialRotation: Rotation = {
  id: "basic-rotation",
  title: "Basic Rotation",
  steps: [
    {
      id: "step-1",
      character: {
        id: "amiya",
        name: "Amiya",
        image: `${BASE_PATH}/characters/akekuri.png`,
      },
      action: "skill",
      trigger: { type: "tap" },
    },
    {
      id: "step-2",
      character: {
        id: "chen",
        name: "Ch'en",
        image: `${BASE_PATH}/characters/wulfgard.png`,
      },
      action: "ultimate",
      trigger: { type: "hold" },
    },
  ],
  footerNote: "Arknights Endfield Rotation Preview",
};
