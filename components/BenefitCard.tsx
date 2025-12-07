interface BenefitCardProps {
  title: string;
  description: string;
  icon?: string; // use emoji as icon placeholder
}

/**
 * BenefitCard displays an icon, a title and a short description.
 */
export default function BenefitCard({
  title,
  description,
  icon,
}: BenefitCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white/80 p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-sky-50 opacity-0 transition-opacity duration-300 group-hover:opacity-90" />
      <div className="relative flex min-h-[180px] items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-inner ring-1 ring-slate-200 text-2xl">
          {icon ?? "✔️"}
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
