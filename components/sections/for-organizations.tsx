"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ManagerCarousel } from "@/components/manager-carousel";
import { SectionHeader } from "@/components/ui/section-header";
import { EASE, Stagger, staggerItem } from "@/components/ui/motion";
import { orgBenefits } from "@/lib/content";

export function ForOrganizations() {
  return (
    <section id="organisations" className="night-panel py-20 md:py-28">
      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeader
            eyebrow="Pour les organisations"
            title="Gérez toute votre collecte depuis votre téléphone."
            text="Profil, campagnes, QR codes, écrans TV, Stripe et statistiques en temps réel. Tout au même endroit, sans aucun risque financier."
            tone="dark"
          />
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {orgBenefits.map((b) => (
              <motion.div
                variants={staggerItem}
                key={b.title}
                className="rounded-2xl border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] p-5"
              >
                <b.icon className="h-7 w-7 text-[color:var(--ui-accent)]" />
                <h3 className="mt-4 font-black text-[color:var(--ui-text)]">{b.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[color:var(--ui-muted-strong)]">{b.text}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>

        {/* Carrousel horizontal des écrans manager */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="mb-6 text-center text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--ui-mint)]">
            L&apos;espace manager en images
          </p>
          <ManagerCarousel />
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/#demo"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[color:var(--ui-accent)] px-6 text-sm font-semibold text-[color:var(--ui-on-primary)] shadow-[0_18px_40px_color-mix(in_srgb,var(--ui-shadow)_18%,transparent)] transition duration-300 hover:bg-[color:var(--ui-accent-hover)]"
          >
            Inscrire mon organisation
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
