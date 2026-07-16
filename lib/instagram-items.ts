import fs from "fs";
import path from "path";

export type InstagramItem = {
  id: string;
  src: string;
  fallbackSrc: string;
  gridClassName: string;
  objectPosition: string;
};

/**
 * 4枚構成（テキストなし）。
 * PC 上段: 左3 : 右2（①は aspect-square 維持、②③は高さ揃え）。
 */
export const instagramItems: InstagramItem[] = [
  {
    id: "salon-interior",
    src: "/images/elise/instagram-01.jpg",
    fallbackSrc: "/images/elise/hero-salon.png",
    gridClassName: "aspect-square md:col-span-3",
    objectPosition: "40% center",
  },
  {
    id: "hair-care",
    src: "/images/elise/instagram-02.jpg",
    fallbackSrc: "/images/elise/hero-salon.png",
    gridClassName: "aspect-square md:col-span-2 md:aspect-auto",
    objectPosition: "45% center",
  },
  {
    id: "hair-style",
    src: "/images/elise/instagram-03.jpg",
    fallbackSrc: "/images/elise/hero-salon.png",
    gridClassName: "aspect-square md:col-span-2 md:aspect-auto",
    objectPosition: "60% center",
  },
  {
    id: "salon-moment",
    src: "/images/elise/instagram-04.jpg",
    fallbackSrc: "/images/elise/hero-salon.png",
    gridClassName: "aspect-[4/1] sm:col-span-2 md:col-span-5",
    objectPosition: "50% center",
  },
];

function publicFileExists(publicPath: string): boolean {
  const relative = publicPath.replace(/^\//, "");
  return fs.existsSync(path.join(process.cwd(), "public", relative));
}

export function resolveInstagramItemSrc(item: InstagramItem): {
  src: string;
  objectPosition: string;
} {
  if (publicFileExists(item.src)) {
    return { src: item.src, objectPosition: item.objectPosition };
  }
  return {
    src: item.fallbackSrc,
    objectPosition: item.objectPosition,
  };
}
