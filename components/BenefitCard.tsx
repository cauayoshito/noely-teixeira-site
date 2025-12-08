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
    <div className="card-surface group hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(12,18,32,0.12)]">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-amber-50 to-slate-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex min-h-[180px] items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary)] text-white text-lg shadow-lg ring-4 ring-white">
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
