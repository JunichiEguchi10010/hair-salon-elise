"use client";

type FAQItemProps = {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

function ToggleIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--color-tertiary)] text-[var(--color-accent)]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-3.5 w-3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        {!isOpen && <path d="M12 5v14M5 12h14" />}
        {isOpen && <path d="M5 12h14" />}
      </svg>
    </span>
  );
}

export default function FAQItem({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}: FAQItemProps) {
  const panelId = `faq-panel-${id}`;
  const buttonId = `faq-button-${id}`;

  return (
    <article className="faq-item overflow-hidden rounded-2xl border border-[var(--color-tertiary)] bg-[var(--color-card)]">
      <h3>
        <button
          id={buttonId}
          type="button"
          className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left md:px-6 md:py-6"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="text-[14px] leading-[1.75] text-[var(--color-primary)] md:text-[15px]">
            {question}
          </span>
          <ToggleIcon isOpen={isOpen} />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className="border-t border-[var(--color-tertiary)]/60 px-5 pb-5 pt-4 md:px-6 md:pb-6 md:pt-5"
      >
        <p className="text-[13px] leading-[1.95] text-[var(--color-subtext)] md:text-[14px]">
          {answer}
        </p>
      </div>
    </article>
  );
}
