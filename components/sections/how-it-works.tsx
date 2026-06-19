"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { EASE } from "@/components/ui/motion";
import { journeySteps } from "@/lib/content";

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="fonctionnement" className="night-panel py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Comment ça marche"
          title="De la demande d'inscription au don reçu, tout est fluide."
          text="Un parcours de bout en bout, pensé pour les organisations comme pour les donateurs."
          align="center"
          tone="dark"
        />

        <div ref={ref} className="relative mt-14">
          {/* Rail vertical (mobile) / horizontal (desktop) */}
          <div className="absolute left-[27px] top-0 h-full w-0.5 bg-[color:var(--ui-line)] md:left-0 md:top-[27px] md:h-0.5 md:w-full">
            <motion.div
              className="h-full w-full origin-top bg-[color:var(--ui-accent)] md:origin-left"
              style={{ scaleY: fill, scaleX: 1 }}
            />
          </div>
          {/* Sur desktop on remplit horizontalement */}
          <motion.div
            className="absolute left-0 top-[27px] hidden h-0.5 origin-left bg-[color:var(--ui-accent)] md:block md:w-full"
            style={{ width: fill }}
          />

          <ol className="grid gap-8 md:grid-cols-3 lg:grid-cols-6">
            {journeySteps.map((step, index) => (
              <motion.li
                key={step.title}
                className="relative pl-16 md:pl-0 md:pt-16"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: EASE, delay: index * 0.08 }}
              >
                <span className="absolute left-0 top-0 grid h-14 w-14 place-items-center rounded-2xl border border-[color:var(--ui-mint)] bg-[color:var(--ui-surface-raised)] text-[color:var(--ui-accent)] shadow-sm">
                  <step.icon className="h-6 w-6" />
                </span>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--ui-mint)]">
                  {String(index + 1).padStart(2, "0")} · {step.actor}
                </p>
                <h3 className="mt-2 text-lg font-black leading-tight text-[color:var(--ui-text)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[color:var(--ui-muted-strong)]">{step.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
