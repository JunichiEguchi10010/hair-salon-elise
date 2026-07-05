import fs from "fs";
import path from "path";

export const INSTAGRAM_IMAGE_FALLBACK = "/images/elise/hero-salon.png";

export type InstagramPost = {
  id: string;
  filename: string;
  caption: string;
  objectPosition: string;
};

export const instagramPosts: InstagramPost[] = [
  {
    id: "01",
    filename: "instagram-01.jpg",
    caption: "自然光の入る店内",
    objectPosition: "55% center",
  },
  {
    id: "02",
    filename: "instagram-02.jpg",
    caption: "やわらかなカラー",
    objectPosition: "65% center",
  },
  {
    id: "03",
    filename: "instagram-03.jpg",
    caption: "髪にうるおいを",
    objectPosition: "50% 40%",
  },
  {
    id: "04",
    filename: "instagram-04.jpg",
    caption: "静かなサロン時間",
    objectPosition: "40% center",
  },
];

export function getInstagramImageSrc(filename: string): string {
  const file = path.join(
    process.cwd(),
    "public",
    "images",
    "elise",
    filename,
  );
  return fs.existsSync(file)
    ? `/images/elise/${filename}`
    : INSTAGRAM_IMAGE_FALLBACK;
}
