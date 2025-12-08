interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
}

/**
 * TestimonialCard presents a client's testimonial with name and role.
 */
export default function TestimonialCard({
  name,
  role,
  testimonial,
}: TestimonialCardProps) {
  return (
    <div className="card-surface group flex min-h-[220px] flex-col gap-4 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(12,18,32,0.12)]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-amber-50 to-slate-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-secondary)] text-white text-lg font-semibold ring-4 ring-white">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-slate-900">{name}</p>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
      </div>
      <p className="relative text-slate-700 leading-relaxed">
        <span className="text-2xl text-[var(--color-primary)]">“</span>
        {testimonial}
      </p>
      <div className="relative flex items-center gap-1 text-[var(--color-primary)]">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>★</span>
        ))}
        <span className="ml-2 text-xs uppercase tracking-[0.08em] text-slate-500">
          Cliente satisfeito
        </span>
      </div>
    </div>
  );
}
