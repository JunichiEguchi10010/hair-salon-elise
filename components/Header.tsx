"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Menu", href: "#menu" },
  { label: "Staff", href: "#staff" },
  { label: "Access", href: "#access" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-glass absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <Link href="/" className="group" onClick={() => setIsOpen(false)}>
          <p className="font-serif text-[11px] tracking-[0.28em] text-[var(--color-subtext)] uppercase">
            hair salon
          </p>
          <p className="font-serif text-[22px] leading-tight tracking-[0.18em] text-[var(--color-primary)] md:text-[26px]">
            ÉLISE
          </p>
        </Link>

        <nav className="hidden items-center gap-7 md:flex lg:gap-9">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[13px] tracking-[0.08em] text-[var(--color-primary)] transition-colors duration-300 hover:text-[var(--color-accent)]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#reservation"
            className="btn-accent rounded-full px-6 py-2.5 text-[13px] tracking-[0.06em]"
          >
            Reservation
          </Link>
        </nav>

        <button
          type="button"
          className="relative z-10 flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isOpen}
        >
          <span className="sr-only">メニュー</span>
          <div className="flex w-6 flex-col items-end gap-[6px]">
            <span
              className={`block h-[1.5px] w-6 bg-[var(--color-primary)] transition-all duration-300 ${
                isOpen ? "translate-y-[7.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-[var(--color-primary)] transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-[var(--color-primary)] transition-all duration-300 ${
                isOpen ? "-translate-y-[7.5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {isOpen && (
        <nav className="header-glass border-t border-[var(--color-tertiary)] px-5 py-6 md:hidden">
          <ul className="flex flex-col gap-5">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block text-[15px] tracking-[0.08em] text-[var(--color-primary)]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="#reservation"
                className="btn-accent inline-block rounded-full px-8 py-3 text-[14px] tracking-[0.06em]"
                onClick={() => setIsOpen(false)}
              >
                Reservation
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
