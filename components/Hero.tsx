import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-[var(--color-neutral)] md:min-h-[760px] lg:min-h-[820px]">
      {/* Background image — right side shows salon stations */}
      <div className="absolute inset-0">
        <Image
          src="/images/elise/hero-salon.png"
          alt="自然光が差し込む、落ち着いた雰囲気の美容室の店内"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center] sm:object-[65%_center] md:object-[72%_center] lg:object-[78%_center]"
        />
      </div>

      {/* Left gradient: white → warm cream for text readability */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--color-neutral)] from-0% via-[var(--color-neutral)]/95 via-[28%] via-[var(--color-secondary)]/80 via-[42%] to-transparent to-[62%] md:via-[32%] md:to-[55%] lg:to-[52%]"
        aria-hidden="true"
      />

      {/* Mobile: soft fade at bottom */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-neutral)]/50 via-transparent to-[var(--color-neutral)]/20 md:hidden"
        aria-hidden="true"
      />

      {/* Text overlay — left side */}
      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-5 pb-28 pt-24 md:min-h-[760px] md:px-10 md:pb-32 md:pt-28 lg:min-h-[820px] lg:px-14">
        <div className="max-w-[340px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[480px]">
          <h1 className="font-serif text-[30px] leading-[1.38] tracking-[0.02em] text-[var(--color-primary)] sm:text-[34px] md:text-[42px] lg:text-[48px]">
            A calm place
            <br />
            to care for your hair.
          </h1>

          <p className="mt-5 text-[15px] leading-relaxed tracking-[0.08em] text-[var(--color-primary)] md:mt-6 md:text-[16px]">
            髪をいたわり、心がほどけるひととき。
          </p>

          <p className="mt-4 text-[13px] leading-[1.95] text-[var(--color-subtext)] md:mt-5 md:text-[14px]">
            日常にやさしさを添える、あなただけのサロン時間。
            <br className="hidden sm:block" />
            Webからいつでも簡単にご予約いただけます。
          </p>

          <Link
            href="#reservation"
            className="btn-accent mt-8 inline-flex items-center justify-center rounded-full px-8 py-3.5 text-[14px] tracking-[0.08em] md:mt-10"
          >
            Web 予約はこちら
          </Link>
        </div>
      </div>

      {/* Bottom SVG curve — deep organic flow into ConceptSection */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-20 w-full leading-none">
        <svg
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          className="block h-[72px] w-full sm:h-[88px] md:h-[128px] lg:h-[148px]"
          aria-hidden="true"
        >
          <path
            d="M0,130 C400,174 960,40 1440,95 L1440,220 L0,220 Z"
            fill="var(--color-neutral)"
          />
        </svg>
      </div>
    </section>
  );
}
