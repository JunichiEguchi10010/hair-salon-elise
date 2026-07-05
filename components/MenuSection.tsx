import MenuCard from "@/components/MenuCard";
import SectionHeader from "@/components/SectionHeader";
import { menuItems } from "@/lib/menu-items";

export default function MenuSection() {
  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="bg-[var(--color-neutral)]"
    >
      <div className="section-shell">
        <SectionHeader
          label="Menu"
          titleId="menu-heading"
          title="人気のメニュー"
          description="髪質や気分に合わせて選べる、ÉLISE の定番メニューです。"
        />

        <ul className="section-content grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-8">
          {menuItems.map((item) => (
            <li key={item.name} className="h-full">
              <MenuCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
