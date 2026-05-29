import { DemoForm } from "@/components/demo-form";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/ui/motion";
import { SectionHeader } from "@/components/ui/section-header";

export function FinalCta() {
  return (
    <MotionSection className="py-20">
      <div id="demo" className="section-shell grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader
            eyebrow="Demander une demo"
            title="Pret a moderniser les dons de votre mosquee ?"
            text="Presentez votre contexte, votre ville et vos besoins. L'objectif est de qualifier les mosquees pilotes et les partenaires interesses."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#demo">Demander une demo</Button>
            <Button href="mailto:contact@muzdeen.com" variant="secondary">
              Contacter l&apos;equipe
            </Button>
          </div>
        </div>
        <DemoForm />
      </div>
    </MotionSection>
  );
}
