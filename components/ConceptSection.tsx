import type { CSSProperties } from "react";
import Image from "next/image";
import { LeafDecorationImage } from "@/components/decorations/LeafDecorationImage";
import { conceptSectionLeafDecorations } from "@/lib/decorations";
import { getConceptImageSrc } from "@/lib/concept-image";

/** Figma export — original user-space coordinates (shape reference) */
const CONCEPT_IMAGE_CLIP_PATH =
  "M127.082 22.8594C158.46 5.42701 234.823 -11.0624 314.203 11.4033C393.533 33.855 430.419 80.7265 447.87 132.083C465.338 183.488 467.78 231.334 437.907 284.678C422.95 311.387 404.292 335.108 389.367 352.155C381.906 360.678 375.38 367.53 370.721 372.251C368.391 374.611 366.528 376.438 365.248 377.675C364.608 378.293 364.113 378.764 363.779 379.08C363.622 379.229 363.501 379.343 363.416 379.422H2.57812C2.55692 379.126 2.52575 378.69 2.4873 378.122C2.40902 376.965 2.29848 375.256 2.16895 373.052C1.90985 368.644 1.57483 362.255 1.27344 354.333C0.670626 338.489 0.200795 316.514 0.730469 291.995C1.79028 242.937 6.85283 183.766 22.8262 143.105C38.8127 102.412 57.0211 76.7241 75.1436 59.0303C93.2693 41.3333 111.328 31.6117 127.082 22.8594Z";

/**
 * objectBoundingBox 用 — concept-clip-shape.svg と同じ形状（0〜1 正規化）
 */
const CONCEPT_IMAGE_CLIP_PATH_NORMALIZED =
  "M0.89,0.25 C0.95,0.37,0.99,0.60,0.94,0.75 C0.88,0.88,0.68,0.94,0.52,0.95 C0.36,0.96,0.18,0.88,0.10,0.74 C0.04,0.60,0.06,0.42,0.14,0.30 C0.22,0.18,0.34,0.12,0.50,0.13 C0.66,0.14,0.84,0.15,0.89,0.25 Z";

/** コンテナ高さ — blob パス（縦占有率 y≈0.16〜0.87）に合わせて調整 */
const CONCEPT_CLIP_MAX_Y = 415;

export default function ConceptSection() {
  const imageSrc = getConceptImageSrc();

  const containerStyle = {
    "--concept-clip-max-y": `${CONCEPT_CLIP_MAX_Y}px`,
  } as CSSProperties;

  return (
    <section
      id="concept"
      aria-labelledby="concept-heading"
      className="relative z-[1] overflow-visible bg-[var(--color-neutral)]"
    >
      {conceptSectionLeafDecorations.map((decoration) => (
        <LeafDecorationImage key={decoration.id} decoration={decoration} />
      ))}

      <div className="section-shell-tight relative z-10">
        <div className="flex flex-col items-center gap-16 md:flex-row md:items-center md:gap-12 lg:gap-14">
          {/* Image — SVG clipPath arch crop */}
          <div className="relative w-full shrink-0 px-3 py-4 md:-mt-10 md:w-[44%] md:px-6 md:py-8 lg:-mt-14 lg:w-[42%]">
            <div
              className="concept-image-container relative mx-auto aspect-[1.2/1] w-full max-w-[340px] sm:max-w-[380px] md:mx-0 md:aspect-auto md:w-[464px] md:max-w-[464px] lg:w-[484px] lg:max-w-[484px]"
              style={containerStyle}
            >
              {/* Inline SVG — clipPath must exist in DOM for CSS url(#id) */}
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute h-0 w-0"
                width="0"
                height="0"
              >
                <defs>
                  <clipPath
                    id="concept-image-clip"
                    clipPathUnits="objectBoundingBox"
                  >
                    <path d={CONCEPT_IMAGE_CLIP_PATH_NORMALIZED} />
                  </clipPath>
                </defs>
              </svg>

              <div className="concept-image-frame absolute inset-0">
                <div
                  className="concept-image-shape absolute inset-0 overflow-hidden"
                  style={{
                    clipPath: "url(#concept-image-clip)",
                    WebkitClipPath: "url(#concept-image-clip)",
                  }}
                >
                  <div className="absolute left-1/2 top-1/2 h-[112%] w-[112%] -translate-x-1/2 -translate-y-1/2">
                    <Image
                      src={imageSrc}
                      alt="自然光と植物に包まれた、落ち着いたサロンの一角"
                      fill
                      sizes="(max-width: 768px) 90vw, 500px"
                      className="elise-photo object-cover object-[50%_50%]"
                    />
                  </div>
                </div>

                <svg
                  aria-hidden="true"
                  className="concept-image-border pointer-events-none absolute inset-0 h-full w-full"
                  viewBox="0 0 1 1"
                  preserveAspectRatio="none"
                >
                  <path
                    d={CONCEPT_IMAGE_CLIP_PATH_NORMALIZED}
                    fill="none"
                    stroke="#D7D9DD"
                    strokeWidth="0.8"
                    strokeOpacity="0.55"
                    vectorEffect="non-scaling-stroke"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-[56%] md:pl-2 lg:w-[58%] lg:pl-4">
            <p className="font-serif text-[11px] tracking-[0.32em] text-[var(--color-subtext)] uppercase">
              Concept
            </p>
            <span
              className="mt-4 block h-px w-12 bg-[var(--color-tertiary)]"
              aria-hidden="true"
            />

            <h2
              id="concept-heading"
              className="mt-6 font-serif text-[26px] leading-[1.55] tracking-[0.04em] text-[var(--color-primary)] sm:text-[28px] md:mt-8 md:text-[32px] lg:text-[36px]"
            >
              やさしい時間が流れる、
              <br className="hidden sm:block" />
              わたしの行きつけサロン。
            </h2>

            <div className="mt-8 space-y-5 text-[14px] leading-[2.1] text-[var(--color-subtext)] md:mt-10 md:text-[15px]">
              <p>
                HAIR SALON ÉLISE
                は、日常の中でふっと緩める特別な時間でありたいと考えています。
              </p>
              <p>
                丁寧なカウンセリングと繊細な技術で、一人ひとりの魅力を引き立てるヘアをご提案。
              </p>
              <p>
                落ち着いた空間で、髪も心もリフレッシュできる時間をお届けします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
