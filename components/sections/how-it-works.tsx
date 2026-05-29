import { MotionDiv, MotionSection } from "@/components/ui/motion";
import { SectionHeader } from "@/components/ui/section-header";
import { howItWorks } from "@/lib/content";

export function HowItWorks() {
  return (
    <MotionSection className="py-20">
      <div id="fonctionnement" className="section-shell">
        <SectionHeader
          eyebrow="Comment ca marche"
          title="Quatre gestes simples, du support physique au don confirme."
          text="Le parcours est concu pour rester comprehensible par tous, y compris les fideles qui ne veulent pas installer d'application tout de suite."
          align="center"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {howItWorks.map((step, index) => (
            <MotionDiv
              className="relative min-h-52 rounded-[1.5rem] border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] p-6 shadow-sm"
              delay={index * 0.06}
              key={step}
            >
              <span className="text-5xl font-black text-[color:var(--ui-accent)]">0{index + 1}</span>
              <p className="mt-8 text-lg font-black leading-7 text-[color:var(--ui-text)]">{step}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
