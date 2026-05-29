import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
        variant === "primary" &&
          "bg-[color:var(--ui-accent)] text-[color:var(--ui-on-primary)] shadow-[0_18px_40px_color-mix(in_srgb,var(--ui-shadow)_18%,transparent)] hover:bg-[color:var(--ui-accent-hover)] focus-visible:outline-[color:var(--ui-accent)]",
        variant === "secondary" &&
          "border border-[color:var(--ui-accent)] bg-[color:var(--ui-surface-raised)] text-[color:var(--ui-accent)] hover:border-[color:var(--ui-accent)] hover:bg-[color:var(--ui-surface-raised)] focus-visible:outline-[color:var(--ui-mint)]",
        variant === "light" && "bg-[color:var(--ui-bg)] text-[color:var(--ui-accent)] hover:bg-[color:var(--ui-surface-raised)] focus-visible:outline-[color:var(--ui-mint)]",
        className,
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}
