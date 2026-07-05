import Image from "next/image";
import type { StaffItem } from "@/lib/staff-items";

type StaffCardProps = {
  item: StaffItem;
};

export default function StaffCard({ item }: StaffCardProps) {
  return (
    <article className="staff-card flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-tertiary)] bg-[var(--color-card)]">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[var(--color-secondary)]">
        <Image
          src={item.imageSrc}
          alt={`${item.nameJa}（${item.role}）のプロフィール写真`}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 320px"
          className="elise-photo object-cover object-top"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="font-serif text-[11px] tracking-[0.18em] text-[var(--color-subtext)] uppercase">
          {item.name}
        </p>
        <h3 className="mt-1 font-serif text-[22px] leading-snug tracking-[0.02em] text-[var(--color-primary)] md:text-[23px]">
          {item.nameJa}
        </h3>
        <p className="mt-2 text-[12px] tracking-[0.08em] text-[var(--color-accent)]">
          {item.role}
        </p>
        <p className="mt-4 flex-1 text-[13px] leading-[1.9] text-[var(--color-subtext)] md:text-[14px]">
          {item.description}
        </p>
      </div>
    </article>
  );
}
