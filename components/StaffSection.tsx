import SectionHeader from "@/components/SectionHeader";
import StaffCard from "@/components/StaffCard";
import { staffItems } from "@/lib/staff-items";

export default function StaffSection() {
  return (
    <section
      id="staff"
      aria-labelledby="staff-heading"
      className="bg-[var(--color-secondary)]"
    >
      <div className="section-shell">
        <SectionHeader
          label="Staff"
          titleId="staff-heading"
          title="スタッフ紹介"
          description="丁寧なカウンセリングと、心地よいおもてなしを大切にしています。"
        />

        <ul className="section-content grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-8">
          {staffItems.map((item) => (
            <li key={item.name} className="h-full">
              <StaffCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
