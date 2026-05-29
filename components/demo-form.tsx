"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const fields = [
  { name: "name", label: "Nom", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "organization", label: "Mosquee / association", type: "text" },
  { name: "city", label: "Ville", type: "text" },
];

export function DemoForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-[2rem] border border-[color:var(--ui-mint)] bg-[color:var(--ui-accent)] p-8 text-[color:var(--ui-on-primary)] shadow-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--ui-on-primary)] opacity-80">Demande recue</p>
        <h3 className="mt-3 text-2xl font-black">Merci, nous reviendrons vers vous.</h3>
        <p className="mt-4 leading-7 text-[color:var(--ui-on-primary)] opacity-80">
          Le formulaire est pret pour une future API route ou une integration Resend. Pour l&apos;instant, aucun message n&apos;est envoye a un backend.
        </p>
      </div>
    );
  }

  return (
    <form
      className="rounded-[2rem] border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] p-5 shadow-[0_24px_80px_color-mix(in_srgb,var(--ui-shadow)_12%,transparent)] backdrop-blur md:p-7"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <label className="block" key={field.name}>
            <span className="mb-2 block text-sm font-bold text-[color:var(--ui-accent)]">{field.label}</span>
            <input
              className="h-12 w-full rounded-2xl border border-[color:var(--ui-line)] bg-[color:var(--ui-bg)] px-4 text-sm text-[color:var(--ui-text)] outline-none transition focus:border-[color:var(--ui-mint)] focus:ring-4 focus:ring-[color:var(--ui-focus)]"
              name={field.name}
              required
              type={field.type}
            />
          </label>
        ))}
      </div>
      <label className="mt-4 block">
        <span className="mb-2 block text-sm font-bold text-[color:var(--ui-accent)]">Message</span>
        <textarea
          className="min-h-32 w-full resize-y rounded-2xl border border-[color:var(--ui-line)] bg-[color:var(--ui-bg)] px-4 py-3 text-sm text-[color:var(--ui-text)] outline-none transition focus:border-[color:var(--ui-mint)] focus:ring-4 focus:ring-[color:var(--ui-focus)]"
          name="message"
          placeholder="Parlez-nous de votre mosquee, association ou projet pilote."
          required
        />
      </label>
      <button
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[color:var(--ui-accent)] px-5 text-sm font-black text-[color:var(--ui-on-primary)] transition hover:bg-[color:var(--ui-accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--ui-accent)] sm:w-auto"
        type="submit"
      >
        <Send className="h-4 w-4" />
        Demander une demo
      </button>
    </form>
  );
}
