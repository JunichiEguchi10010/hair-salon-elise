import type { CSSProperties } from "react";
import Image from "next/image";
import { getConceptImageSrc } from "@/lib/concept-image";

/** Figma export — original user-space coordinates (shape reference) */
const CONCEPT_IMAGE_CLIP_PATH =
  "M127.082 22.8594C158.46 5.42701 234.823 -11.0624 314.203 11.4033C393.533 33.855 430.419 80.7265 447.87 132.083C465.338 183.488 467.78 231.334 437.907 284.678C422.95 311.387 404.292 335.108 389.367 352.155C381.906 360.678 375.38 367.53 370.721 372.251C368.391 374.611 366.528 376.438 365.248 377.675C364.608 378.293 364.113 378.764 363.779 379.08C363.622 379.229 363.501 379.343 363.416 379.422H2.57812C2.55692 379.126 2.52575 378.69 2.4873 378.122C2.40902 376.965 2.29848 375.256 2.16895 373.052C1.90985 368.644 1.57483 362.255 1.27344 354.333C0.670626 338.489 0.200795 316.514 0.730469 291.995C1.79028 242.937 6.85283 183.766 22.8262 143.105C38.8127 102.412 57.0211 76.7241 75.1436 59.0303C93.2693 41.3333 111.328 31.6117 127.082 22.8594Z";

/**
 * objectBoundingBox 用 — x: 0〜468, y: -11〜379.422 を 0〜1 に正規化（形状のみ変換）
 */
const CONCEPT_IMAGE_CLIP_PATH_NORMALIZED =
  "M0.271543 0.086725 C0.33859 0.042075 0.501759 -0.00016 0.671374 0.057382 C0.840882 0.114889 0.919699 0.234942 0.956987 0.366483 C0.994312 0.498148 0.99953 0.620698 0.935699 0.757329 C0.903739 0.82574 0.863872 0.886497 0.831981 0.93016 C0.816038 0.95199 0.802094 0.969541 0.792139 0.981633 C0.78716 0.987677 0.783179 0.992357 0.780444 0.995525 C0.779077 0.997108 0.778019 0.998315 0.777306 0.999124 C0.77697 0.999506 0.776712 0.999798 0.77653 1 H0.005509 C0.005464 0.999242 0.005397 0.998125 0.005315 0.99667 C0.005147 0.993707 0.004911 0.989329 0.004635 0.983684 C0.004081 0.972394 0.003365 0.95603 0.002721 0.935739 C0.001433 0.895157 0.000429 0.838872 0.001561 0.776071 C0.003825 0.650417 0.014643 0.49886 0.048774 0.394714 C0.082933 0.290486 0.12184 0.22469 0.160563 0.179371 C0.199293 0.134043 0.23788 0.109143 0.271543 0.086725 Z";

/** clipPath 底辺 y（元 path の user-space 値 — コンテナ高さ整合用） */
const CONCEPT_CLIP_MAX_Y = 379.422;

export default function ConceptSection() {
  const imageSrc = getConceptImageSrc();

  const containerStyle = {
    "--concept-clip-max-y": `${CONCEPT_CLIP_MAX_Y}px`,
  } as CSSProperties;

  return (
    <section
      id="concept"
      aria-labelledby="concept-heading"
      className="bg-[var(--color-neutral)]"
    >
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-4 md:px-10 md:pb-28 md:pt-6 lg:px-14 lg:pb-32 lg:pt-8">
        <div className="flex flex-col items-center gap-16 md:flex-row md:items-center md:gap-14 lg:gap-16">
          {/* Image — SVG clipPath arch crop */}
          <div className="relative w-full shrink-0 px-3 py-4 md:-mt-10 md:w-[44%] md:px-6 md:py-8 lg:-mt-14 lg:w-[42%]">
            <div
              className="pointer-events-none absolute -left-4 top-8 hidden text-[var(--color-tertiary)] opacity-60 md:block lg:-left-8"
              aria-hidden="true"
            >
              <svg
                width="48"
                height="120"
                viewBox="0 0 48 120"
                fill="none"
                className="h-28 w-10 lg:h-32"
              >
                <path
                  d="M24 4C24 4 8 32 8 56C8 80 24 108 24 108M24 4C24 4 40 32 40 56C40 80 24 108 24 108"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <path
                  d="M24 56C18 48 10 44 4 48M24 56C30 48 38 44 44 48"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div
              className="concept-image-container relative mx-auto aspect-[1.2/1] w-full max-w-[340px] sm:max-w-[380px] md:mx-0 md:aspect-auto md:w-[480px] md:max-w-[480px] lg:w-[500px] lg:max-w-[500px]"
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
                  <div className="absolute left-1/2 top-1/2 h-[108%] w-[108%] -translate-x-1/2 -translate-y-1/2">
                    <Image
                      src={imageSrc}
                      alt="自然光と植物に包まれた、落ち着いたサロンの一角"
                      fill
                      sizes="(max-width: 768px) 90vw, 500px"
                      className="concept-image-photo object-cover object-[55%_center]"
                    />
                    <div
                      className="concept-image-warm-overlay"
                      aria-hidden="true"
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
                    stroke="var(--color-tertiary)"
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-[56%] md:pl-2 lg:w-[58%] lg:pl-6">
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
                ÉLISE
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
