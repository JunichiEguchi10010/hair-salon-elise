import Link from "next/link";
import type { ReactNode } from "react";
import SectionHeader from "@/components/SectionHeader";

type AccessInfoRow = {
  id: string;
  label: string;
  value: ReactNode;
  icon: "pin" | "train" | "clock" | "calendar" | "phone";
};

function AccessIcon({ icon }: { icon: AccessInfoRow["icon"] }) {
  const className = "h-4 w-4 text-[var(--color-accent)]";

  switch (icon) {
    case "pin":
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
          <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "train":
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
          <rect x="4" y="5" width="16" height="12" rx="2" />
          <path d="M4 11h16M8 19l-2 2M16 19l2 2M8 9h.01M16 9h.01" />
        </svg>
      );
    case "clock":
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
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l2.5 2.5" />
        </svg>
      );
    case "calendar":
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
          <rect x="4" y="5" width="16" height="16" rx="2" />
          <path d="M8 3v4M16 3v4M4 10h16" />
        </svg>
      );
    case "phone":
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
          <path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5L17.5 13 21.5 14.5V18a2 2 0 0 1-2 2A14 14 0 0 1 4 6.5 2 2 0 0 1 6.5 4z" />
        </svg>
      );
  }
}

function AccessMapPlaceholder() {
  return (
    <div
      className="access-map-placeholder relative h-full min-h-[280px] w-full overflow-hidden rounded-2xl border border-[var(--color-tertiary)] bg-[var(--color-secondary)] md:min-h-[100%]"
      aria-hidden="true"
    >
      {/* Replace this block with Google Map iframe when ready */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 320"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <rect width="400" height="320" fill="var(--color-secondary)" />
        <path
          d="M0 80h400M0 160h400M0 240h400M80 0v320M160 0v320M240 0v320M320 0v320"
          stroke="var(--color-tertiary)"
          strokeWidth="0.75"
          opacity="0.45"
        />
        <path
          d="M40 120c60-20 120-10 180 0s120 20 180 0M0 200c80 15 160 5 240-10s120-25 160-10"
          stroke="var(--color-tertiary)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M120 0c20 80 20 160 0 320M280 0c-15 90-15 180 0 320"
          stroke="var(--color-tertiary)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>

      <div className="absolute left-1/2 top-[46%] flex -translate-x-1/2 -translate-y-full flex-col items-center">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent-light)]/50">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4 text-[var(--color-accent)]"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
        </div>
        <span className="mt-2 whitespace-nowrap rounded-full border border-[var(--color-tertiary)] bg-[var(--color-card)] px-3 py-1 font-serif text-[10px] tracking-[0.12em] text-[var(--color-primary)]">
          hair salon Élise
        </span>
      </div>
    </div>
  );
}

const accessRows: AccessInfoRow[] = [
  {
    id: "address",
    label: "住所",
    value: "東京都世田谷区○○ 1-2-3",
    icon: "pin",
  },
  {
    id: "station",
    label: "最寄り駅",
    value: "東急線 ○○駅 徒歩5分",
    icon: "train",
  },
  {
    id: "hours",
    label: "営業時間",
    value: (
      <>
        平日 10:00 - 20:00
        <br />
        土日祝 9:00 - 19:00
      </>
    ),
    icon: "clock",
  },
  {
    id: "closed",
    label: "定休日",
    value: "火曜日",
    icon: "calendar",
  },
  {
    id: "phone",
    label: "電話番号",
    value: (
      <a
        href="tel:0300000000"
        className="transition-colors duration-300 hover:text-[var(--color-accent)]"
      >
        03-0000-0000
      </a>
    ),
    icon: "phone",
  },
];

export default function AccessSection() {
  return (
    <section
      id="access"
      aria-labelledby="access-heading"
      className="bg-[var(--color-neutral)]"
    >
      <div className="section-shell">
        <SectionHeader
          label="Access"
          titleId="access-heading"
          title="アクセス"
          description="住宅街に佇む、小さなヘアサロンです。ご来店前に住所・営業時間をご確認ください。"
        />

        <div className="section-content grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
          {/* Store info */}
          <article className="access-card flex h-full flex-col rounded-2xl border border-[var(--color-tertiary)] bg-[var(--color-card)] p-6 md:p-8 lg:p-9">
            <p className="font-serif text-[11px] tracking-[0.2em] text-[var(--color-subtext)] uppercase">
              Salon Info
            </p>
            <h3 className="mt-2 font-serif text-[22px] tracking-[0.04em] text-[var(--color-primary)] md:text-[24px]">
              hair salon Élise
            </h3>

            <dl className="mt-8 space-y-6">
              {accessRows.map((row) => (
                <div key={row.id} className="flex gap-4">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-light)]/35"
                    aria-hidden="true"
                  >
                    <AccessIcon icon={row.icon} />
                  </div>
                  <div className="min-w-0">
                    <dt className="text-[11px] tracking-[0.1em] text-[var(--color-subtext)]">
                      {row.label}
                    </dt>
                    <dd className="mt-1 text-[14px] leading-[1.85] text-[var(--color-primary)] md:text-[15px]">
                      {row.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-10 pt-2">
              <Link
                href="#reservation"
                className="btn-accent inline-flex w-full items-center justify-center rounded-full px-8 py-3.5 text-[14px] tracking-[0.08em] sm:w-auto"
              >
                Web予約はこちら
              </Link>
            </div>
          </article>

          {/* Map placeholder — swap with iframe later */}
          <article className="access-card flex h-full min-h-[320px] flex-col overflow-hidden rounded-2xl border border-[var(--color-tertiary)] bg-[var(--color-card)] p-3 md:min-h-[360px] md:p-4">
            <AccessMapPlaceholder />
          </article>
        </div>
      </div>
    </section>
  );
}
