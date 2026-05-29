import { MotionDiv, MotionSection } from "@/components/ui/motion";
import { SectionHeader } from "@/components/ui/section-header";
import { features } from "@/lib/content";

export function Features() {
  return (
    <MotionSection className="py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Fonctionnalites"
          title="Une plateforme pensee pour le terrain, la confiance et la croissance."
          text="Certaines briques sont deja structurees dans la vision produit, d'autres sont prevues dans les prochaines phases. La page reste volontairement honnete sur l'etat d'avancement."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature, index) => (
            <MotionDiv
              className="group rounded-[1.5rem] border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-[color:var(--ui-surface-raised)] hover:shadow-xl"
              delay={index * 0.03}
              key={feature.title}
            >
              <feature.icon className="h-7 w-7 text-[color:var(--ui-accent)] transition group-hover:text-[color:var(--ui-accent)]" />
              <h3 className="mt-5 text-base font-black text-[color:var(--ui-text)]">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--ui-muted)]">{feature.text}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
