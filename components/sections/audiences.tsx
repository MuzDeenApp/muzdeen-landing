import { Check } from "lucide-react";
import { MotionDiv, MotionSection } from "@/components/ui/motion";
import { SectionHeader } from "@/components/ui/section-header";
import { donorBenefits, mosqueBenefits } from "@/lib/content";

function BenefitList({ items }: { items: string[] }) {
  return (
    <ul className="mt-7 grid gap-3">
      {items.map((item) => (
        <li className="flex items-start gap-3 text-[color:var(--ui-muted-strong)]" key={item}>
          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[color:var(--ui-accent)] text-[color:var(--ui-mint)]">
            <Check className="h-3.5 w-3.5" />
          </span>
          <span className="leading-7">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Audiences() {
  return (
    <MotionSection className="py-20">
      <div id="mosquees" className="section-shell">
        <div className="grid gap-5 lg:grid-cols-2">
          <MotionDiv className="rounded-[2rem] border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] p-7 shadow-sm md:p-9">
            <SectionHeader
              eyebrow="Pour les mosquees"
              title="Plus de dons, moins de friction, plus de visibilite."
              text="Muz'Deen aide les equipes a capter les dons spontanes et a preparer un suivi clair des collectes."
            />
            <BenefitList items={mosqueBenefits} />
          </MotionDiv>
          <MotionDiv className="rounded-[2rem] border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-soft)] p-7 shadow-sm md:p-9" delay={0.08}>
            <SectionHeader
              eyebrow="Pour les donateurs"
              title="Donner selon ses besoins, en toute discretion."
              text="Muz'Deen permet a chaque fidele de choisir son montant sur son propre telephone, sans afficher son don aux personnes autour de lui."
            />
            <BenefitList items={donorBenefits} />
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
}
