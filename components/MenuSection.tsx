import MenuPriceList from "@/components/MenuPriceList";
import SectionHeader from "@/components/SectionHeader";
import { menuCategories } from "@/lib/menu-items";

export default function MenuSection() {
  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="relative z-0 bg-[var(--color-neutral)]"
    >
      <div className="section-shell">
        <SectionHeader
          label="Menu"
          titleId="menu-heading"
          title="人気のメニュー"
          description="髪質や気分に合わせて選べる、HAIR SALON ÉLISE の定番メニューです。"
        />

        <MenuPriceList categories={menuCategories} />
      </div>
    </section>
  );
}
