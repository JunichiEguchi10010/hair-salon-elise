import type { ReservationStep, ReservationStepIcon } from "@/lib/reservation-steps";

type ReservationStepCardProps = {
  item: ReservationStep;
};

function StepIcon({ icon }: { icon: ReservationStepIcon }) {
  const className = "h-5 w-5 text-[var(--color-accent)]";

  switch (icon) {
    case "menu":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M5 7h14M5 12h14M5 17h10" />
        </svg>
      );
    case "user":
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
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6" />
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
    case "form":
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
          <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      );
    case "check":
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
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12.5l2.5 2.5L16 9.5" />
        </svg>
      );
  }
}

export default function ReservationStepCard({ item }: ReservationStepCardProps) {
  return (
    <article className="reservation-step-card flex h-full flex-col items-center rounded-2xl border border-[var(--color-tertiary)] bg-[var(--color-card)] p-6 text-center md:p-7">
      <p className="font-serif text-[11px] tracking-[0.2em] text-[var(--color-accent)]">
        Step {item.step}
      </p>

      <div
        className="mt-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent-light)]/35"
        aria-hidden="true"
      >
        <StepIcon icon={item.icon} />
      </div>

      <h3 className="mt-5 font-serif text-[16px] leading-snug tracking-[0.02em] text-[var(--color-primary)] md:text-[17px]">
        {item.title}
      </h3>
      <p className="mt-3 text-[12px] leading-[1.85] text-[var(--color-subtext)] md:text-[13px]">
        {item.description}
      </p>
    </article>
  );
}

export function StepConnector({ direction }: { direction: "horizontal" | "vertical" }) {
  const className = "h-4 w-4 text-[var(--color-tertiary)]";

  if (direction === "vertical") {
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
        <path d="M12 5v14M7 14l5 5 5-5" />
      </svg>
    );
  }

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
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  );
}
