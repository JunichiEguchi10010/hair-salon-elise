import type { MenuIconType, MenuItem } from "@/lib/menu-items";

type MenuCardProps = {
  item: MenuItem;
};

function MenuIcon({ icon }: { icon: MenuIconType }) {
  const className = "h-5 w-5 text-[var(--color-accent)]";

  switch (icon) {
    case "scissors":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="6" cy="18" r="2.5" />
          <path d="M8.5 7.5L20 19M8.5 16.5L20 5" />
        </svg>
      );
    case "brush":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 20c4-1 8-5 10-9 1-2 1-4 0-6-1-2-3-3-5-3-2 0-4 1-5 3-2 4-2 9 0 15z" />
          <path d="M14 11l6-6" />
        </svg>
      );
    case "drop":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3c3 5 7 8.5 7 12a7 7 0 1 1-14 0c0-3.5 4-7 7-12z" />
        </svg>
      );
    case "bottle":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 3h6v3l2 14H7L9 6V3z" />
          <path d="M9 3h6" />
          <path d="M10 10h4" />
        </svg>
      );
  }
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="menu-card flex h-full flex-col rounded-2xl border border-[var(--color-tertiary)] bg-[var(--color-card)] p-6 md:p-7">
      <div className="flex items-start gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-light)]/35"
          aria-hidden="true"
        >
          <MenuIcon icon={item.icon} />
        </div>
        <div className="min-w-0 pt-0.5">
          <p className="font-serif text-[11px] tracking-[0.18em] text-[var(--color-subtext)] uppercase">
            {item.name}
          </p>
          <h3 className="mt-1 font-serif text-[20px] leading-snug tracking-[0.02em] text-[var(--color-primary)] md:text-[21px]">
            {item.nameJa}
          </h3>
        </div>
      </div>

      <p className="mt-5 flex-1 text-[13px] leading-[1.85] text-[var(--color-subtext)] md:text-[14px]">
        {item.description}
      </p>

      <div className="mt-6 flex items-end justify-between gap-3 border-t border-[var(--color-tertiary)]/60 pt-5">
        <p className="text-[11px] tracking-[0.06em] text-[var(--color-subtext)]">
          {item.duration}
        </p>
        <p className="font-serif text-[18px] tracking-[0.02em] text-[var(--color-primary)] md:text-[19px]">
          {item.price}
        </p>
      </div>
    </article>
  );
}
