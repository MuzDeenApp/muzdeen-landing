import { Logo } from "@/components/ui/logo";
import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--ui-line)] bg-[color:var(--ui-bg)] py-10">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm leading-7 text-[color:var(--ui-muted)]">
            For Here and Beyond. Une plateforme moderne pour digitaliser les dons aux mosquees.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-black text-[color:var(--ui-text)]">Navigation</p>
            <div className="mt-3 grid gap-2 text-sm text-[color:var(--ui-muted)]">
              {navItems.map((item) => (
                <a className="hover:text-[color:var(--ui-accent)]" href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-black text-[color:var(--ui-text)]">Contact</p>
            <div className="mt-3 grid gap-2 text-sm text-[color:var(--ui-muted)]">
              <a className="hover:text-[color:var(--ui-accent)]" href="mailto:contact@muzdeen.com">contact@muzdeen.com</a>
              <a className="hover:text-[color:var(--ui-accent)]" href="https://github.com" rel="noreferrer" target="_blank">GitHub</a>
            </div>
          </div>
          <div>
            <p className="font-black text-[color:var(--ui-text)]">Legal</p>
            <div className="mt-3 grid gap-2 text-sm text-[color:var(--ui-muted)]">
              <a className="hover:text-[color:var(--ui-accent)]" href="/privacy">Confidentialite</a>
              <a className="hover:text-[color:var(--ui-accent)]" href="/terms">Mentions legales</a>
            </div>
          </div>
        </div>
      </div>
      <div className="section-shell mt-8 border-t border-[color:var(--ui-line)] pt-6 text-sm text-[color:var(--ui-muted)]">
        Copyright 2026 Muz&apos;Deen. Tous droits reserves.
      </div>
    </footer>
  );
}
