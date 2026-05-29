import { MotionDiv, MotionSection } from "@/components/ui/motion";
import { SectionHeader } from "@/components/ui/section-header";
import { trustItems } from "@/lib/content";

export function Trust() {
  return (
    <MotionSection className="night-panel py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeader
          eyebrow="Securite & confiance"
          title="Une approche serieuse, sans promesse prematuree."
          text="Muz'Deen est construit avec l'ambition d'une plateforme fiable pour les mosquees. Les paiements Stripe sont prepares comme trajectoire, avec une mise en production seulement apres validation."
          tone="dark"
        />
        <div className="grid gap-4">
          {trustItems.map((item, index) => (
            <MotionDiv
              className="rounded-[1.5rem] border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] p-6"
              delay={index * 0.06}
              key={item.title}
            >
              <item.icon className="h-8 w-8 text-[color:var(--ui-mint)]" />
              <h3 className="mt-4 text-xl font-black text-[color:var(--ui-text)]">{item.title}</h3>
              <p className="mt-3 leading-7 text-[color:var(--ui-muted-strong)]">{item.text}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
