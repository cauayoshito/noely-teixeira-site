interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

/**
 * SectionTitle renders a heading and optional subtitle. Alignment can be center or left.
 */
export default function SectionTitle({
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  return (
    <div
      className={`${
        align === "center" ? "text-center mx-auto" : ""
      } max-w-4xl space-y-3`}
    >
      <div
        className={`inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-slate-600 ring-1 ring-slate-200 ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        <span className="h-2 w-2 rounded-full bg-amber-400" /> Destaque
      </div>
      <h2
        className={`text-3xl md:text-4xl font-bold text-slate-900 leading-tight ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg text-slate-600 leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
