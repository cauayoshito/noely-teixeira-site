import Image from "next/image";
import { ReactNode } from "react";

const INTERNAL_BG = "/images/bg.png";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  badge?: string;
  actions?: ReactNode;
};

export function PageHeader({
  title,
  subtitle,
  badge,
  actions,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Image
          src={INTERNAL_BG}
          alt="Ambiente corporativo de consultoria em seguros"
          fill
          className="object-cover opacity-25"
          sizes="100vw"
          priority={false}
        />
        <div
          className="absolute inset-0 bg-white/85 backdrop-blur-sm"
          aria-hidden
        />
      </div>

      <div className="relative page-section pb-10">
        <div className="content-wrapper max-w-5xl space-y-4 text-center md:text-left">
          {badge ? (
            <span className="inline-flex w-auto items-center justify-center gap-2 rounded-full bg-[var(--color-secondary)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-secondary)] ring-1 ring-[var(--color-secondary)]/15">
              <span
                className="h-2 w-2 rounded-full bg-[var(--color-primary)]"
                aria-hidden
              />
              {badge}
            </span>
          ) : null}

          <div className="space-y-3">
            <h1 className="text-3xl font-bold leading-tight text-[var(--color-secondary)] sm:text-4xl">
              {title}
            </h1>
            {subtitle ? (
              <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
                {subtitle}
              </p>
            ) : null}
          </div>

          {actions ? <div className="pt-2">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}

export { INTERNAL_BG };
