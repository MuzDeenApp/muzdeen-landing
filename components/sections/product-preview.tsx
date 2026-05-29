import { MotionDiv, MotionSection } from "@/components/ui/motion";
import { SectionHeader } from "@/components/ui/section-header";
import { productScreens } from "@/lib/content";

export function ProductPreview() {
  return (
    <MotionSection className="py-20">
      <div id="produit" className="section-shell">
        <SectionHeader
          eyebrow="Apercu produit"
          title="Des mockups CSS pour presenter le parcours avant les screenshots finaux."
          text="Ces apercus stylises representent les ecrans cibles de l'application mobile : accueil, mosquees, fiche, don, confirmation et fonctions islamiques."
          align="center"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {productScreens.map((screen, index) => (
            <MotionDiv
              className="rounded-[1.7rem] border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] p-4 shadow-sm"
              delay={index * 0.05}
              key={screen.title}
            >
              <div className="rounded-[1.25rem] bg-[color:var(--ui-accent)] p-5 text-[color:var(--ui-on-primary)]">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--ui-mint)]">{screen.eyebrow}</p>
                    <h3 className="mt-2 text-2xl font-black">{screen.title}</h3>
                  </div>
                  <screen.icon className="h-7 w-7 text-[color:var(--ui-mint)]" />
                </div>
                <div className="mt-8 rounded-2xl bg-[color:var(--ui-primary-overlay)] p-4">
                  <p className="text-sm text-[color:var(--ui-muted-strong)]">Etat cible</p>
                  <p className="mt-1 text-lg font-black">{screen.stat}</p>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
