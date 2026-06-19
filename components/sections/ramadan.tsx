"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE, Stagger, staggerItem } from "@/components/ui/motion";
import { ramadan } from "@/lib/content";

export function Ramadan() {
  const reduce = useReducedMotion();

  return (
    <section id="ramadan" className="relative overflow-hidden py-20 md:py-28">
      {/* Ciel nocturne */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_15%,color-mix(in_srgb,var(--ui-accent)_22%,transparent),transparent_45%),linear-gradient(160deg,#0a1812,#102a1e)]" />
      {/* Étoiles */}
      {!reduce
        ? Array.from({ length: 18 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-[color:var(--ui-mint)]"
              style={{ left: `${(i * 53) % 100}%`, top: `${(i * 37) % 90}%` }}
              animate={{ opacity: [0.15, 0.9, 0.15] }}
              transition={{ duration: 3 + (i % 4), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
            />
          ))
        : null}

      <div className="section-shell relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Croissant de lune stylisé */}
          <motion.div
            className="mx-auto mb-8 h-20 w-20"
            initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <defs>
                <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="60%" stopColor="#7FD6AD" />
                  <stop offset="100%" stopColor="#2F7D5B" />
                </radialGradient>
              </defs>
              <path
                d="M65 8a42 42 0 1 0 0 84 34 34 0 1 1 0-84z"
                fill="url(#moonGlow)"
              />
            </svg>
          </motion.div>

          <motion.p
            className="text-sm font-bold uppercase tracking-[0.18em] text-[color:#7FD6AD]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            {ramadan.eyebrow}
          </motion.p>
          <motion.h2
            className="mt-3 text-balance text-3xl font-black leading-tight text-[#eef6f2] md:text-5xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            {ramadan.title}
          </motion.h2>
          <motion.p
            className="mt-5 text-lg leading-8 text-[#a5b8af]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.18 }}
          >
            {ramadan.text}
          </motion.p>
        </div>

        <Stagger className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3" amount={0.2}>
          {ramadan.highlights.map((h) => (
            <motion.div
              variants={staggerItem}
              key={h.label}
              className="rounded-[1.5rem] border border-[color:rgba(127,214,173,0.25)] bg-[color:rgba(255,255,255,0.04)] p-6 text-center backdrop-blur"
            >
              <p className="text-3xl font-black text-[#7FD6AD]">{h.value}</p>
              <p className="mt-2 text-sm leading-6 text-[#cad8d2]">{h.label}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
