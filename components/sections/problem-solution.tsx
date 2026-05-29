import { CheckCircle2 } from "lucide-react";
import { MotionDiv, MotionSection } from "@/components/ui/motion";
import { SectionHeader } from "@/components/ui/section-header";
import { problemPoints, solutionSteps } from "@/lib/content";

export function ProblemSolution() {
  return (
    <>
      <MotionSection className="py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Le probleme"
            title="Le don physique ne suit plus les usages mobiles."
            text="Les mosquees vivent encore beaucoup de la generosite spontanee. Mais quand le cash disparait des poches, une partie de cette generosite ne se transforme jamais en don."
          />
          <div className="grid gap-4">
            {problemPoints.map((point, index) => (
              <MotionDiv
                className="rounded-3xl border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] p-5 shadow-sm backdrop-blur"
                delay={index * 0.06}
                key={point}
              >
                <div className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[color:var(--ui-surface-soft)] text-sm font-black text-[color:var(--ui-accent)]">
                    {index + 1}
                  </span>
                  <p className="leading-7 text-[color:var(--ui-muted-strong)]">{point}</p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="night-panel py-20" delay={0.05}>
        <div id="solution" className="section-shell">
          <SectionHeader
            eyebrow="La solution"
            title="Un parcours de don clair, rapide et accessible depuis le lieu de priere."
            text="Muz'Deen transforme chaque support physique en point d'entree digital : porte de mosquee, affiche, badge NFC, campagne ou fiche mosquee."
            tone="dark"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {solutionSteps.map((step, index) => (
              <MotionDiv
                className="rounded-[1.5rem] border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] p-5 backdrop-blur transition hover:bg-[color:var(--ui-surface-soft)]"
                delay={index * 0.06}
                key={step.title}
              >
                <step.icon className="h-8 w-8 text-[color:var(--ui-mint)]" />
                <h3 className="mt-5 text-xl font-black text-[color:var(--ui-text)]">{step.title}</h3>
                <p className="mt-3 leading-7 text-[color:var(--ui-muted-strong)]">{step.text}</p>
                <CheckCircle2 className="mt-5 h-5 w-5 text-[color:var(--ui-mint)]" />
              </MotionDiv>
            ))}
          </div>
        </div>
      </MotionSection>
    </>
  );
}
