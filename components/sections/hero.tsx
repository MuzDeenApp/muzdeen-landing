import { Menu } from "lucide-react";
import { AppMockup } from "@/components/app-mockup";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { navItems } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-5 md:pb-28">
      <div className="section-shell">
        <header className="flex items-center justify-between rounded-full border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] px-4 py-3 shadow-sm backdrop-blur">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm font-semibold text-[color:var(--ui-muted-strong)] lg:flex" aria-label="Navigation principale">
            {navItems.map((item) => (
              <a className="transition hover:text-[color:var(--ui-accent)]" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Button href="#demo">Demander une demo</Button>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--ui-line)] text-[color:var(--ui-accent)]" type="button" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </header>

        <div className="grid items-center gap-14 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--ui-mint)] bg-[color:var(--ui-surface-raised)] px-4 py-2 text-sm font-bold text-[color:var(--ui-accent)] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[color:var(--ui-mint)]" />
              For Here and Beyond
            </div>
            <h1 className="text-balance text-5xl font-black leading-[0.96] text-[color:var(--ui-text)] md:text-7xl">
              Modernisez les dons de votre mosquee.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[color:var(--ui-muted)] md:text-xl">
              Muz&apos;Deen permet aux fideles de soutenir leur mosquee en quelques secondes via QR code, NFC ou application mobile, sans compte obligatoire.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
