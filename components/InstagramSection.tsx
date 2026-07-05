import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import {
  getInstagramImageSrc,
  instagramPosts,
} from "@/lib/instagram-posts";

export default function InstagramSection() {
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
          description="店内の雰囲気やヘアスタイル、季節のケア情報をInstagramで発信しています。"
        />

        <ul className="section-content mx-auto grid max-w-5xl list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 md:gap-8 lg:max-w-6xl lg:grid-cols-4 lg:gap-8">
          {instagramPosts.map((post) => {
            const imageSrc = getInstagramImageSrc(post.filename);

            return (
              <li key={post.id}>
                <figure className="instagram-photo group relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--color-tertiary)] bg-[var(--color-secondary)]">
                  <Image
                    src={imageSrc}
                    alt={post.caption}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 280px"
                    className="elise-photo object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ objectPosition: post.objectPosition }}
                  />
                  <figcaption className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-[var(--color-primary)]/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                    <span className="px-4 pb-4 text-[12px] tracking-[0.06em] text-[var(--color-card)] md:text-[13px]">
                      {post.caption}
                    </span>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>

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
