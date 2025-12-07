"use client";

import Image from "next/image";
import { Button } from "./ui/Button";

interface Bullet {
  text: string;
}

interface HeroProps {
  title: string;
  subtitle: string;
  bullets?: Bullet[];
  buttonLabel: string;
  buttonHref: string;
  imageSrc?: string;
  imageAlt?: string;
}

/**
 * Hero component with a two-column layout on desktop. On mobile it stacks vertically.
 */
export default function Hero({
  title,
  subtitle,
  bullets = [],
  buttonLabel,
  buttonHref,
  imageSrc,
  imageAlt,
}: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden page-section bg-gradient-to-br from-white via-sky-50/70 to-amber-50/60">
      <div className="absolute left-[-6rem] top-[-8rem] h-64 w-64 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="absolute right-[-4rem] bottom-[-6rem] h-72 w-72 rounded-full bg-amber-200/50 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent" />
      <div className="content-wrapper grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left column */}
        <div className="relative space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-slate-700 ring-1 ring-slate-200 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-amber-400" /> Corretores
            certificados em Salvador
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
            {title}
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
          {bullets.length > 0 && (
            <div className="grid gap-3 sm:grid-cols-2">
              {bullets.map((bullet, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-2xl bg-white/85 p-3.5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-100"
                >
                  <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-sky-400 text-slate-900 shadow-inner ring-1 ring-amber-200">
                    ✓
                  </span>
                  <span className="text-sm md:text-base text-slate-700 leading-relaxed">
                    {bullet.text}
                  </span>
                </div>
              ))}
            </div>
          )}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              href={buttonHref}
              size="lg"
              className="min-w-[220px] shadow-[0_15px_40px_rgba(245,158,11,0.35)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {buttonLabel}
            </Button>
            <Button
              href="tel:+5571996290118"
              variant="ghost"
              size="lg"
              className="backdrop-blur"
            >
              Ou ligue para (71) 99629-0118
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 ring-1 ring-slate-200 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> +1000
              clientes protegidos
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 ring-1 ring-slate-200 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-amber-400" /> 10 anos de
              experiência
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 ring-1 ring-slate-200 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-sky-400" /> Seguradoras
              líderes do mercado
            </div>
          </div>
        </div>
        {/* Right column: image */}
        {imageSrc && (
          <div className="relative isolate overflow-hidden rounded-3xl bg-white/80 p-4 shadow-2xl ring-1 ring-slate-100 backdrop-blur">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.14),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(245,158,11,0.18),transparent_35%)]" />
            <div className="relative h-[280px] sm:h-[340px] md:h-[440px] w-full rounded-2xl overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt || "Equipe consultiva da Noely Teixeira"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
                className="object-cover rounded-2xl"
                priority
              />
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-white/60" />
          </div>
        )}
      </div>
    </section>
  );
}
