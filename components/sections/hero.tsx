import { AppMockup } from "@/components/app-mockup";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-4 md:pb-28 md:pt-5">
      <div className="section-shell">
        <SiteHeader />

        <div className="grid items-center gap-10 pt-12 md:gap-14 md:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--ui-mint)] bg-[color:var(--ui-surface-raised)] px-4 py-2 text-sm font-bold text-[color:var(--ui-accent)] shadow-sm md:mb-6">
              <span className="h-2 w-2 rounded-full bg-[color:var(--ui-mint)]" />
              For Here and Beyond
            </div>
            <h1 className="text-balance text-[3.15rem] font-black leading-[0.92] text-[color:var(--ui-text)] sm:text-6xl md:text-7xl">
              Modernisez les dons de votre mosquee.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[color:var(--ui-muted)] md:mt-7 md:text-xl md:leading-8">
              Muz&apos;Deen permet aux fideles de soutenir leur mosquee en quelques secondes via QR code, NFC ou application mobile, sans compte obligatoire.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-9">
              <Button href="#demo">Demander une demo</Button>
              <Button href="#fonctionnement" variant="secondary">
                Decouvrir le fonctionnement
              </Button>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-[color:var(--ui-line)] pt-6">
              {[
                ["Sans friction", "Don mobile rapide"],
                ["QR + NFC", "Pret pour le terrain"],
                ["Pilote", "En developpement"],
              ].map(([title, text]) => (
                <div key={title}>
                  <p className="text-sm font-black text-[color:var(--ui-accent)]">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-[color:var(--ui-muted)]">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <AppMockup />
        </div>
      </div>
    </section>
  );
}
