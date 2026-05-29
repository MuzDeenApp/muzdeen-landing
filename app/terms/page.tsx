import { Footer } from "@/components/sections/footer";

export default function TermsPage() {
  return (
    <main className="pt-20">
      <section className="section-shell min-h-[60vh] py-20">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--ui-accent)]">Placeholder legal</p>
        <h1 className="mt-3 text-4xl font-black text-[color:var(--ui-text)]">Mentions legales</h1>
        <p className="mt-5 max-w-2xl leading-8 text-[color:var(--ui-muted)]">
          Cette page est reservee aux mentions legales, conditions d&apos;utilisation et informations d&apos;edition a finaliser.
        </p>
      </section>
      <Footer />
    </main>
  );
}
