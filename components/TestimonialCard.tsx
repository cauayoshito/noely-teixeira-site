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
    <div className="group relative flex min-h-[220px] flex-col gap-4 overflow-hidden rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-sky-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white text-lg font-semibold ring-2 ring-amber-300">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-slate-900">{name}</p>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
      </div>
      <p className="relative text-slate-700 leading-relaxed">
        <span className="text-2xl text-amber-400">“</span>
        {testimonial}
      </p>
      <div className="relative flex items-center gap-1 text-amber-400">
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
