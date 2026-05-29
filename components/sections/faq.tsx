import { MotionDiv, MotionSection } from "@/components/ui/motion";
import { SectionHeader } from "@/components/ui/section-header";
import { faqs } from "@/lib/content";

export function FAQ() {
  return (
    <MotionSection className="py-20">
      <div id="faq" className="section-shell">
        <SectionHeader
          eyebrow="FAQ"
          title="Des reponses claires pour evaluer Muz'Deen serieusement."
          align="center"
        />
        <div className="mx-auto mt-10 grid max-w-4xl gap-4">
          {faqs.map((faq, index) => (
            <MotionDiv className="rounded-[1.5rem] border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] p-6 shadow-sm" delay={index * 0.04} key={faq.question}>
              <h3 className="text-lg font-black text-[color:var(--ui-text)]">{faq.question}</h3>
              <p className="mt-3 leading-7 text-[color:var(--ui-muted)]">{faq.answer}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
