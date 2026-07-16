import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import {
  instagramItems,
  resolveInstagramItemSrc,
} from "@/lib/instagram-items";

function InstagramCard({
  item,
  className = "",
}: {
  item: (typeof instagramItems)[number];
  className?: string;
}) {
  const { src, objectPosition } = resolveInstagramItemSrc(item);

  return (
    <figure
      className={`instagram-mosaic-card relative overflow-hidden rounded-none border-none bg-[var(--color-secondary)] shadow-none ${className}`}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 760px"
        className="elise-photo h-full w-full rounded-none object-cover"
        style={{ objectPosition }}
      />
    </figure>
  );
}

export default function InstagramSection() {
  const main = instagramItems.find((i) => i.id === "salon-interior");
  const sides = instagramItems.filter(
    (i) => i.id === "hair-care" || i.id === "hair-style",
  );
  const wide = instagramItems.find((i) => i.id === "salon-moment");

  return (
    <section
      id="instagram"
      aria-labelledby="instagram-heading"
      className="bg-[var(--color-neutral)]"
    >
      <div className="section-shell">
        <SectionHeader
          label="Instagram"
          titleId="instagram-heading"
          title="日々のサロン風景"
          description=""
        />

        {/*
          max-w-[760px]。
          PC: md:grid-cols-5（左3 : 右2）。
          左①は aspect-square、右②③は同じ行高さを flex-col で2分割。
        */}
        <div className="instagram-mosaic section-content mx-auto w-full max-w-[760px] px-4 md:px-0">
          {/* スマホ: 1〜2列のシンプルグリッド */}
          <ul
            aria-label="Instagram ギャラリー"
            className="grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 sm:gap-5 md:hidden"
          >
            {instagramItems.map((item) => (
              <li key={item.id} className={`min-h-0 ${item.gridClassName}`}>
                <InstagramCard item={item} className="h-full w-full" />
              </li>
            ))}
          </ul>

          {/* PC: 5カラム / 上段 3:2 */}
          <div
            className="hidden gap-5 md:grid md:grid-cols-5 md:gap-6"
            aria-label="Instagram ギャラリー"
          >
            {main ? (
              <div className={`relative min-h-0 ${main.gridClassName}`}>
                <InstagramCard
                  item={main}
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            ) : null}

            <div className="flex min-h-0 flex-col gap-5 self-stretch md:col-span-2 md:gap-6">
              {sides.map((item) => (
                <div key={item.id} className="relative min-h-0 flex-1">
                  <InstagramCard
                    item={item}
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              ))}
            </div>

            {wide ? (
              <div className={`relative min-h-0 ${wide.gridClassName}`}>
                <InstagramCard
                  item={wide}
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-12 flex justify-center md:mt-14 lg:mt-16">
          <Link
            href="#"
            className="btn-accent inline-flex items-center justify-center rounded-full px-8 py-3.5 text-[14px] tracking-[0.08em]"
          >
            Instagram を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
