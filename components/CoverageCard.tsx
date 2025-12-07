interface CoverageCardProps {
  title: string;
  description: string;
}

/**
 * CoverageCard lists a specific coverage offered in a product page.
 */
export default function CoverageCard({
  title,
  description,
}: CoverageCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white/90 p-5 sm:p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/70 via-white to-amber-50/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-px rounded-[1rem] border border-white/40 shadow-inner" />
      <div className="relative flex min-h-[220px] flex-col gap-3 break-words">
        <div className="inline-flex items-center gap-2 self-start rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-200/70">
          Cobertura
        </div>
        <h3 className="text-lg font-semibold text-slate-900 leading-tight">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
