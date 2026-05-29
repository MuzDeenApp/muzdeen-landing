import { Footer } from "@/components/sections/footer";

export default function PrivacyPage() {
  return (
    <main className="pt-20">
      <section className="section-shell min-h-[60vh] py-20">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--ui-accent)]">Placeholder legal</p>
        <h1 className="mt-3 text-4xl font-black text-[color:var(--ui-text)]">Politique de confidentialite</h1>
        <p className="mt-5 max-w-2xl leading-8 text-[color:var(--ui-muted)]">
          Cette page est prevue pour accueillir la politique de confidentialite officielle de Muz&apos;Deen avant la mise en production.
        </p>
      </section>
      <Footer />
    </main>
  );
}
