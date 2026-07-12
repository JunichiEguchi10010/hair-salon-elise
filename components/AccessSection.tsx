import type { ReactNode } from "react";
import AccessMap from "@/components/AccessMap";
import SectionHeader from "@/components/SectionHeader";

const SALON_ADDRESS = "東京都世田谷区深沢 3-13-12";

type AccessInfoRow = {
  id: string;
  label: string;
  value: ReactNode;
  icon: "pin" | "clock" | "calendar" | "phone";
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
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.5" />
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
          strokeWidth="1.25"
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
          strokeWidth="1.25"
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
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5L17.5 13 21.5 14.5V18a2 2 0 0 1-2 2A14 14 0 0 1 4 6.5 2 2 0 0 1 6.5 4z" />
        </svg>
      );
  }
}

const accessRows: AccessInfoRow[] = [
  {
    id: "address",
    label: "住所",
    value: (
      <>
        {SALON_ADDRESS}
        <br />
        <span className="text-[13px] text-[var(--color-subtext)] md:text-[14px]">
          （東急田園都市線 桜新町駅 徒歩8分）
        </span>
      </>
    ),
    icon: "pin",
  },
  {
    id: "hours",
    label: "営業時間",
    value: (
      <>
        平日 10:00 – 20:00
        <br />
        土日祝 9:00 – 19:00
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
          description="住宅街に佇む、小さなヘアサロンです。深沢公園のそばにあり、落ち着いた環境でゆっくりとお過ごしいただけます。"
        />

        <div className="section-content grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-14 xl:gap-16">
          <div>
            <p className="font-serif text-[11px] tracking-[0.2em] text-[var(--color-subtext)] uppercase">
              Salon Info
            </p>
            <h3 className="mt-2 font-serif text-[22px] tracking-[0.04em] text-[var(--color-primary)] md:text-[24px]">
              HAIR SALON ÉLISE
            </h3>

            <dl className="mt-8 space-y-7 md:mt-10 md:space-y-8">
              {accessRows.map((row) => (
                <div key={row.id} className="flex gap-4">
                  <div
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center"
                    aria-hidden="true"
                  >
                    <AccessIcon icon={row.icon} />
                  </div>
                  <div className="min-w-0">
                    <dt className="text-[11px] tracking-[0.1em] text-[var(--color-subtext)]">
                      {row.label}
                    </dt>
                    <dd className="mt-1.5 text-[14px] leading-[1.85] text-[var(--color-primary)] md:text-[15px]">
                      {row.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <AccessMap />
          </div>
        </div>
      </div>
    </section>
  );
}
