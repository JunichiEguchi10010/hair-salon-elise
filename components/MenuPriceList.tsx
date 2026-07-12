import type { MenuCategory } from "@/lib/menu-items";

type MenuPriceListProps = {
  categories: MenuCategory[];
};

export default function MenuPriceList({ categories }: MenuPriceListProps) {
  return (
    <div className="menu-section-content mx-auto max-w-[720px] md:max-w-[800px]">
      <div className="border-t border-[var(--color-tertiary)]/70">
        {categories.map((category) => (
          <section
            key={category.labelEn}
            aria-labelledby={`menu-category-${category.labelEn}`}
            className="border-b border-[var(--color-tertiary)]/70 px-0 py-6 md:py-8"
          >
            <header>
              <p
                id={`menu-category-${category.labelEn}`}
                className={`font-serif text-[13px] tracking-[0.32em] text-[var(--color-primary)] md:text-[14px]${category.labelUppercase === false ? "" : " uppercase"}`}
              >
                {category.labelEn}
              </p>
              <p className="mt-1 text-[12px] tracking-[0.06em] text-[var(--color-subtext)] md:text-[13px]">
                {category.labelJa}
              </p>
            </header>

            <ul className="mt-5 list-none space-y-0 p-0">
              {category.items.map((item, index) => (
                <li
                  key={`${category.labelEn}-${item.nameJa}`}
                  className={
                    index === 0
                      ? "pb-3 pt-0"
                      : "border-t border-[var(--color-tertiary)]/65 pb-3 pt-5"
                  }
                >
                  <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                    <div className="min-w-0 flex-1">
                      <p className="text-[14px] leading-[1.8] tracking-[0.01em] text-[var(--color-primary)]">
                        {item.nameJa}
                      </p>
                      <p className="text-[13px] leading-[1.8] text-[var(--color-subtext)]">
                        （{item.description}）
                      </p>
                      <p className="mt-0.5 text-[13px] leading-[1.8] text-[var(--color-primary)] sm:hidden">
                        {item.duration}
                      </p>
                    </div>

                    <div className="flex w-full shrink-0 items-center justify-between gap-4 sm:w-auto sm:justify-end sm:gap-6">
                      <span className="hidden text-[13px] leading-[1.8] text-[var(--color-primary)] sm:inline">
                        {item.duration}
                      </span>
                      <span className="font-serif text-[14px] leading-[1.8] tracking-[0.02em] text-[var(--color-primary)] md:text-[15px]">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-7 text-center text-[12px] tracking-[0.06em] text-[var(--color-subtext)] md:mt-8">
        ※すべて税込価格です。
      </p>
    </div>
  );
}
