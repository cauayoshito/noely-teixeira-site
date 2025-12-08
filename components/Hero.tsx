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
 * Hero component with a two-column layout on desktop. Mobile-first with integrated background.
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
    <section className="relative isolate overflow-hidden bg-[var(--color-secondary)] text-white">
      {imageSrc && (
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={imageAlt || "Equipe consultiva da Noely Teixeira"}
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)] via-[#0c1220e6] to-[#0c1220cc]" />
          <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[var(--color-primary)]/20 blur-3xl" />
          <div className="absolute bottom-[-6rem] right-[-4rem] h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        </div>
      )}

      <div className="content-wrapper relative grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
        {/* Left column */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/80 ring-1 ring-white/15 animate-fade-up">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-primary)]" />{" "}
            Consultoria premium em Salvador
          </div>
          <h1 className="animate-fade-up text-[2rem] font-bold leading-tight text-white sm:text-[2.3rem] md:text-[2.6rem] lg:text-[3rem]">
            {title}
          </h1>
          <p className="max-w-2xl animate-fade-up animate-delay-1 text-base leading-relaxed text-white/85 sm:text-lg">
            {subtitle}
          </p>

          {bullets.length > 0 && (
            <div className="grid gap-3 sm:grid-cols-2">
              {bullets.map((bullet, index) => (
                <div
                  key={index}
                  className="animate-fade-up animate-delay-1 flex items-start gap-3 rounded-2xl bg-white/10 p-3.5 text-sm shadow-[0_12px_32px_rgba(0,0,0,0.18)] ring-1 ring-white/10 backdrop-blur"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--color-secondary)] shadow-lg ring-2 ring-white/60">
                    ✓
                  </span>
                  <span className="leading-relaxed text-white/85">
                    {bullet.text}
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Button
              href={buttonHref}
              size="lg"
              variant="primary"
              className="min-w-[210px] animate-fade-up animate-delay-2 shadow-[0_18px_40px_rgba(248,181,0,0.32)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {buttonLabel}
            </Button>
            <Button
              href="https://api.whatsapp.com/send?phone=5571996290118&text=Quero%20falar%20com%20uma%20especialista"
              size="lg"
              variant="secondary"
              className="animate-fade-up animate-delay-3 border border-white/15 bg-white/15 text-white hover:bg-white/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
            <span className="animate-fade-up rounded-full bg-white/10 px-3 py-2 ring-1 ring-white/15">
              +1000 clientes protegidos
            </span>
            <span className="animate-fade-up animate-delay-1 rounded-full bg-white/10 px-3 py-2 ring-1 ring-white/15">
              10 anos de experiência
            </span>
            <span className="animate-fade-up animate-delay-2 rounded-full bg-white/10 px-3 py-2 ring-1 ring-white/15">
              Atendimento consultivo rápido
            </span>
          </div>
        </div>

        {/* Right column: image */}
        {imageSrc && (
          <div className="relative animate-fade-up animate-delay-2 overflow-hidden rounded-3xl bg-white/5 shadow-[0_25px_70px_rgba(0,0,0,0.35)] ring-1 ring-white/15 backdrop-blur">
            <div className="absolute inset-0 bg-gradient-to-l from-[var(--color-secondary)]/20 via-transparent to-transparent" />
            <div className="relative h-[260px] sm:h-[320px] md:h-[420px] w-full">
              <Image
                src={imageSrc}
                alt={imageAlt || "Equipe consultiva da Noely Teixeira"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(248,181,0,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_28%)]" />
          </div>
        )}
      </div>
    </section>
  );
}
