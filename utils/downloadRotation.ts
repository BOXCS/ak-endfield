// src/utils/downloadRotation.ts
import * as htmlToImage from "html-to-image";
import download from "downloadjs";

export function downloadRotationAsImage(elementId: string, fileName = "rotation.png") {
  const node = document.getElementById(elementId);
  if (!node) return;

  htmlToImage
    .toPng(node, { backgroundColor: "#0f172a" }) // sesuaikan background dengan preview
    .then((dataUrl) => {
      download(dataUrl, fileName, "image/png");
    })
    .catch((err) => console.error("Failed to generate image", err));
}
