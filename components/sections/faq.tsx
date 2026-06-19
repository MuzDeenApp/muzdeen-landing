"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { EASE } from "@/components/ui/motion";
import { faqs } from "@/lib/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader eyebrow="FAQ" title="Vos questions, nos réponses claires." align="center" />

        <div className="mx-auto mt-12 grid max-w-3xl gap-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, ease: EASE, delay: index * 0.04 }}
                className="overflow-hidden rounded-[1.5rem] border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-black text-[color:var(--ui-text)] md:text-lg">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[color:var(--ui-surface-soft)] text-[color:var(--ui-accent)]"
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                    >
                      <p className="px-6 pb-6 leading-7 text-[color:var(--ui-muted)]">{faq.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
