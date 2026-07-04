import fs from "fs";
import path from "path";

export const CONCEPT_IMAGE_PATH = "/images/elise/concept-salon.jpg";
export const CONCEPT_IMAGE_FALLBACK = "/images/elise/hero-salon.png";

export function getConceptImageSrc(): string {
  const conceptFile = path.join(
    process.cwd(),
    "public",
    "images",
    "elise",
    "concept-salon.jpg",
  );
  return fs.existsSync(conceptFile) ? CONCEPT_IMAGE_PATH : CONCEPT_IMAGE_FALLBACK;
}
