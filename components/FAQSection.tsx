"use client";

import FAQItem from "@/components/FAQItem";
import SectionHeader from "@/components/SectionHeader";
import { faqItems } from "@/lib/faq-items";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-[var(--color-secondary)]"
    >
      <div className="section-shell">
        <SectionHeader
          label="FAQ"
          titleId="faq-heading"
          title="よくあるご質問"
          description="初めての方にも安心してご来店いただけるよう、よくあるご質問をまとめました。予約前に気になる点を、短く分かりやすくお答えしています。"
        />

        <div className="section-content mx-auto max-w-[960px]">
          <ul className="flex list-none flex-col gap-4 p-0 md:gap-5">
            {faqItems.map((item, index) => (
              <li key={item.id}>
                <FAQItem
                  id={item.id}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
