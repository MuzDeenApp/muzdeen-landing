import { Apple, CheckCircle2, Play, QrCode, Smartphone } from "lucide-react";
import Image from "next/image";
import { MotionDiv, MotionSection } from "@/components/ui/motion";
import { SectionHeader } from "@/components/ui/section-header";

const qrCells = new Set([
  "0-0", "0-1", "0-2", "0-4", "0-7", "0-8", "0-9", "1-0", "1-2", "1-5", "1-7", "1-9",
  "2-0", "2-1", "2-2", "2-6", "2-7", "2-8", "2-9", "3-3", "3-5", "3-8", "4-0", "4-2",
  "4-4", "4-5", "4-7", "5-1", "5-3", "5-6", "5-8", "5-9", "6-0", "6-4", "6-5", "6-7",
  "7-0", "7-1", "7-2", "7-5", "7-9", "8-0", "8-2", "8-4", "8-6", "8-8", "9-0", "9-1",
  "9-2", "9-4", "9-7", "9-8", "9-9",
]);

function StoreBadge({
  icon,
  eyebrow,
  label,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  label: string;
}) {
  return (
    <button
      className="flex min-h-14 items-center gap-3 rounded-2xl border border-[color:var(--ui-line)] bg-[color:var(--ui-surface)] px-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:bg-[color:var(--ui-surface-soft)]"
      type="button"
    >
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-[color:var(--ui-accent)] text-[color:var(--ui-on-primary)]">
        {icon}
      </span>
      <span>
        <span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-[color:var(--ui-muted)]">
          {eyebrow}
        </span>
        <span className="block text-sm font-black text-[color:var(--ui-text)]">{label}</span>
      </span>
    </button>
  );
}

export function DownloadApp() {
  return (
    <MotionSection className="py-20">
      <div className="section-shell grid items-center gap-10 rounded-[2rem] border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] p-6 shadow-[0_24px_80px_color-mix(in_srgb,var(--ui-shadow)_10%,transparent)] md:p-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeader
            eyebrow="Application mobile"
            title="Scannez, installez, donnez quand l'app sera ouverte au public."
            text="Le QR code est un placeholder pour la landing. Il prepare l'emplacement final vers l'App Store, Google Play ou une page de telechargement Muz'Deen."
          />
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <StoreBadge icon={<Apple className="h-5 w-5" />} eyebrow="Bientot sur" label="App Store" />
            <StoreBadge icon={<Play className="h-5 w-5 fill-current" />} eyebrow="Bientot sur" label="Google Play" />
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold text-[color:var(--ui-muted-strong)]">
            <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ui-surface-soft)] px-3 py-2">
              <CheckCircle2 className="h-4 w-4 text-[color:var(--ui-accent)]" />
              Liens definitifs prevus
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ui-surface-soft)] px-3 py-2">
              <Smartphone className="h-4 w-4 text-[color:var(--ui-accent)]" />
              Experience mobile first
            </span>
          </div>
        </div>

        <MotionDiv className="mx-auto w-full max-w-sm rounded-[2rem] border border-[color:var(--ui-line)] bg-[color:var(--ui-bg)] p-5 shadow-xl">
          <div className="mb-5 flex items-center gap-3">
            <Image
              alt="Logo Muz'Deen"
              className="h-12 w-12 rounded-2xl border border-[color:var(--ui-line)] object-cover"
              height={96}
              src="/brand/muzdeen.png"
              width={96}
            />
            <div>
              <p className="text-lg font-black text-[color:var(--ui-text)]">Muz&apos;Deen</p>
              <p className="text-sm text-[color:var(--ui-muted)]">For Here and Beyond</p>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] p-4">
            <div className="grid aspect-square grid-cols-10 gap-1 rounded-2xl bg-[color:var(--ui-bg)] p-3" aria-label="QR code fictif Muz'Deen">
              {Array.from({ length: 100 }).map((_, index) => {
                const row = Math.floor(index / 10);
                const col = index % 10;
                const active = qrCells.has(`${row}-${col}`);
                return (
                  <span
                    className={active ? "rounded-sm bg-[color:var(--ui-accent)]" : "rounded-sm bg-transparent"}
                    key={`${row}-${col}`}
                  />
                );
              })}
            </div>
            <div className="mt-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-black text-[color:var(--ui-text)]">QR code demo</p>
                <p className="text-xs leading-5 text-[color:var(--ui-muted)]">Lien final a brancher avant publication.</p>
              </div>
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[color:var(--ui-surface-soft)] text-[color:var(--ui-accent)]">
                <QrCode className="h-5 w-5" />
              </span>
            </div>
          </div>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
