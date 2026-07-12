import fs from "fs";
import path from "path";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

/**
 * StaffSection の代わりに、オーナーの人柄・施術への向き合い方・
 * 初回来店前の安心感を伝えるセクション。
 * 予約導線の説明は ReservationFlow / FAQ に任せ、ここでは人柄と想いに集中する。
 * 設計意図の詳細は docs/persona.md を参照。
 */

const OWNER_IMAGE_PREFERRED = "/images/elise/owner-mika-sato.jpg";
const OWNER_IMAGE_FALLBACK = "/images/elise/hero-salon.png";

function getOwnerImageSrc(): string {
  const relative = OWNER_IMAGE_PREFERRED.replace(/^\//, "");
  const file = path.join(process.cwd(), "public", relative);
  return fs.existsSync(file) ? OWNER_IMAGE_PREFERRED : OWNER_IMAGE_FALLBACK;
}

export default function OwnerPhilosophySection() {
  const imageSrc = getOwnerImageSrc();

  return (
    <section
      id="owner-philosophy"
      aria-labelledby="owner-philosophy-heading"
      className="bg-[var(--color-secondary)]"
    >
      <div className="section-shell">
        <SectionHeader
          label="Owner Philosophy"
          titleId="owner-philosophy-heading"
          title="髪と心に、静かな余白を。"
          description=""
        />

        <div className="section-content mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:items-center md:justify-center md:gap-14 lg:gap-16">
          <div className="relative w-full max-w-[260px] shrink-0 overflow-hidden rounded-[8px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[320px]">
            <div className="relative aspect-[3/4] w-full bg-[var(--color-neutral)]">
              <Image
                src={imageSrc}
                alt="HAIR SALON ÉLISE オーナー 佐藤美香のポートレート"
                fill
                sizes="(max-width: 768px) 280px, 320px"
                className="elise-photo object-cover object-[50%_28%]"
              />
            </div>
          </div>

          <div className="w-full max-w-[560px] text-center md:text-left">
            <div className="space-y-4 text-[13px] leading-[1.8] text-[var(--color-subtext)] md:text-[14px] lg:text-[15px]">
              <p>
                毎日の忙しさの中で、ふと気持ちが整うような時間を。
                <br className="hidden sm:block" />
                HAIR SALON ÉLISE
                は、そんな想いから生まれた小さな美容室です。
              </p>
              <p>
                オーナーの佐藤美香は、美容師歴15年。
                <br className="hidden sm:block" />
                丁寧に話を聞きながら、その人の生活に自然と馴染むヘアをご提案しています。
                <br className="hidden sm:block" />
                派手なトレンドよりも、毎日が心地よく過ごせることを大切にしています。
              </p>
              <p>
                初めての方にも安心していただけるよう、
                <br className="hidden sm:block" />
                施術前にはゆっくりとカウンセリングの時間を設け、
                <br className="hidden sm:block" />
                髪のお悩みや理想を一緒に整理していきます。
              </p>
              <p>
                髪を整えることが、心の余白を整えることにつながるように。
                <br className="hidden sm:block" />
                そんなひとときを、静かにお届けします。
              </p>
            </div>

            <span
              className="mx-auto mt-8 block h-px w-12 bg-[var(--color-tertiary)] md:mx-0"
              aria-hidden="true"
            />

            <div className="mt-6">
              <p className="font-serif text-[13px] tracking-[0.28em] text-[var(--color-primary)] uppercase md:text-[14px]">
                Mika Sato
              </p>
              <p className="mt-2 text-[14px] tracking-[0.06em] text-[var(--color-subtext)]">
                佐藤 美香
              </p>
              <p className="mt-1.5 text-[12px] tracking-[0.1em] text-[var(--color-subtext)]">
                Owner / Stylist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
