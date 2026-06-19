import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/sections/footer";
import { Logo } from "@/components/ui/logo";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export function LegalLayout({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <main>
      <header className="section-shell pt-6">
        <div className="flex items-center justify-between rounded-full border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] px-3 py-3 shadow-sm backdrop-blur md:px-4">
          <Logo />
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--ui-line)] px-4 py-2 text-sm font-semibold text-[color:var(--ui-accent)] transition hover:bg-[color:var(--ui-surface-soft)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l&apos;accueil
          </Link>
        </div>
      </header>

      <section className="section-shell py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--ui-accent)]">Informations légales</p>
          <h1 className="mt-3 text-balance text-4xl font-black leading-tight text-[color:var(--ui-text)] md:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-[color:var(--ui-muted)]">{updated}</p>
          <p className="mt-6 rounded-2xl border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-soft)] p-5 text-sm leading-7 text-[color:var(--ui-muted-strong)]">
            {intro}
          </p>

          <div className="mt-12 grid gap-10">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-xl font-black text-[color:var(--ui-text)] md:text-2xl">{s.heading}</h2>
                {s.paragraphs?.map((p, i) => (
                  <p key={i} className="mt-3 leading-7 text-[color:var(--ui-muted)]">
                    {p}
                  </p>
                ))}
                {s.list ? (
                  <ul className="mt-4 grid gap-2">
                    {s.list.map((item) => (
                      <li key={item} className="flex gap-3 leading-7 text-[color:var(--ui-muted)]">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--ui-accent)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
