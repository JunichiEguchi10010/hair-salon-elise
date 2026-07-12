import Link from "next/link";

const footerNavItems = [
  { label: "Menu", href: "#menu" },
  { label: "Philosophy", href: "#owner-philosophy" },
  { label: "Reservation Flow", href: "#reservation-flow" },
  { label: "FAQ", href: "#faq" },
  { label: "Access", href: "#access" },
  { label: "Instagram", href: "#instagram" },
];

const salonInfoItems = [
  { label: "住所", value: "東京都世田谷区深沢 3-13-12" },
  { label: "最寄り駅", value: "東急線 ○○駅 徒歩5分" },
  { label: "営業時間", value: "平日 10:00 - 20:00 / 土日祝 9:00 - 19:00" },
  { label: "定休日", value: "火曜日" },
  { label: "電話番号", value: "03-0000-0000", href: "tel:0300000000" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-secondary)]">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24">
        <div className="grid grid-cols-1 gap-12 md:gap-14 lg:grid-cols-3 lg:gap-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <p className="font-serif text-[11px] tracking-[0.28em] text-[var(--color-subtext)] uppercase">
                HAIR SALON
              </p>
              <p className="font-serif text-[24px] leading-tight tracking-[0.18em] text-[var(--color-primary)] md:text-[26px]">
                ÉLISE
              </p>
            </Link>
            <p className="mt-6 max-w-sm text-[13px] leading-[2] text-[var(--color-subtext)] md:text-[14px]">
              静けさと余白を大切にした、住宅街の小さなヘアサロン。
              <br className="hidden sm:block" />
              自然光の入る落ち着いた空間で、一人ひとりの髪に丁寧に向き合います。
            </p>
          </div>

          {/* Salon info */}
          {/* Footer カラム見出し — セクション見出し（.section-label）とは別体系（tracking-[0.2em]） */}
          <div>
            <h2 className="font-serif text-[13px] tracking-[0.2em] text-[var(--color-primary)] uppercase">
              Salon Info
            </h2>
            <dl className="mt-6 space-y-4">
              {salonInfoItems.map((item) => (
                <div key={item.label}>
                  <dt className="text-[11px] tracking-[0.1em] text-[var(--color-subtext)]">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-[13px] leading-[1.75] text-[var(--color-primary)] md:text-[14px]">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="transition-colors duration-300 hover:text-[var(--color-accent)]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Navigation */}
          {/* Footer カラム見出し — セクション見出し（.section-label）とは別体系（tracking-[0.2em]） */}
          <div>
            <h2 className="font-serif text-[13px] tracking-[0.2em] text-[var(--color-primary)] uppercase">
              Navigation
            </h2>
            <nav aria-label="フッターナビゲーション">
              <ul className="mt-6 space-y-3">
                {footerNavItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[13px] tracking-[0.08em] text-[var(--color-primary)] transition-colors duration-300 hover:text-[var(--color-accent)] md:text-[14px]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-8">
              <Link
                href="#reservation"
                className="btn-accent inline-flex items-center justify-center rounded-full px-8 py-3.5 text-[14px] tracking-[0.08em]"
              >
                Web予約はこちら
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-[var(--color-tertiary)] pt-8 md:mt-20">
          <p className="text-center text-[11px] tracking-[0.08em] text-[var(--color-subtext)]">
            © 2026 HAIR SALON ÉLISE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
