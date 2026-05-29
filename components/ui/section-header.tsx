import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeader({ eyebrow, title, text, align = "left", tone = "light" }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p
        className={cn(
          "mb-3 text-sm font-bold uppercase tracking-[0.16em]",
          tone === "dark" ? "text-[color:var(--ui-mint)]" : "text-[color:var(--ui-accent)]",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "text-balance text-3xl font-black leading-tight md:text-5xl",
          tone === "dark" ? "text-[color:var(--ui-text)]" : "text-[color:var(--ui-text)]",
        )}
      >
        {title}
      </h2>
      {text ? (
        <p className={cn("mt-5 text-lg leading-8", tone === "dark" ? "text-[color:var(--ui-muted-strong)]" : "text-[color:var(--ui-muted)]")}>
          {text}
        </p>
      ) : null}
    </div>
  );
}
