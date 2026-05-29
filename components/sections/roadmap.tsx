import { MotionDiv, MotionSection } from "@/components/ui/motion";
import { SectionHeader } from "@/components/ui/section-header";
import { roadmap } from "@/lib/content";

export function Roadmap() {
  return (
    <MotionSection className="py-20">
      <div id="roadmap" className="section-shell">
        <SectionHeader
          eyebrow="Roadmap"
          title="Une progression claire, du MVP au reseau de mosquees."
          text="La feuille de route distingue ce qui existe, ce qui est prevu, et ce qui appartient a la vision long terme."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {roadmap.map((item, index) => (
            <MotionDiv className="rounded-[1.5rem] border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] p-6 shadow-sm" delay={index * 0.06} key={item.phase}>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[color:var(--ui-accent)]">{item.phase}</p>
              <h3 className="mt-5 text-xl font-black text-[color:var(--ui-text)]">{item.title}</h3>
              <p className="mt-3 leading-7 text-[color:var(--ui-muted)]">{item.text}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
