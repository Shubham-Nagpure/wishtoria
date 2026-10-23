import s from "./LegalPage.module.css";

export type LegalSection = {
  heading: string;
  placeholder: string;
};

export function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <main className={`container ${s.page}`}>
      <h1 className={s.title}>{title}</h1>
      <p className={s.updated}>Last updated: {updated}</p>
      {sections.map((section) => (
        <section key={section.heading} className={s.section}>
          <h2>{section.heading}</h2>
          <p className={s.placeholder}>{section.placeholder}</p>
        </section>
      ))}
    </main>
  );
}
