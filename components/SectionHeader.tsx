type SectionHeaderProps = {
  label: string;
  title: string;
  titleId: string;
  description: string;
  divider?: boolean;
};

export default function SectionHeader({
  label,
  title,
  titleId,
  description,
  divider = true,
}: SectionHeaderProps) {
  return (
    <header className="mx-auto max-w-2xl text-center">
      <p className="section-label">{label}</p>
      {divider && (
        <span className="section-divider mx-auto" aria-hidden="true" />
      )}
      <h2 id={titleId} className="section-title">
        {title}
      </h2>
      <p className="section-description">{description}</p>
    </header>
  );
}
