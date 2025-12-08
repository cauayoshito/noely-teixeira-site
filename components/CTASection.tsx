import { Button } from "./ui/Button";

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonHref: string;
}

/**
 * CTASection displays a full-width call-to-action block.
 */
export default function CTASection({
  title,
  subtitle,
  buttonLabel,
  buttonHref,
}: CTASectionProps) {
  return (
    <section className="page-section">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 overflow-hidden rounded-3xl bg-[var(--color-secondary)] px-6 py-12 shadow-[0_18px_60px_rgba(12,18,32,0.35)] ring-1 ring-white/10 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-14">
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0c1220] via-[#10182c] to-[#0c1220]"
          aria-hidden="true"
        />
        <div
          className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-[var(--color-primary)]/25 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute right-0 bottom-[-5rem] h-48 w-48 rounded-full bg-white/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl space-y-4 text-center text-white lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/80 ring-1 ring-white/15">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-primary)]" />{" "}
            Atendimento consultivo
          </p>
          <h3 className="text-3xl md:text-4xl font-bold leading-tight text-white">
            {title}
          </h3>
          <p className="text-lg text-white/85">{subtitle}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/80 lg:justify-start">
            <span className="rounded-full bg-white/10 px-3 py-2 ring-1 ring-white/15">
              Retorno em minutos
            </span>
            <span className="rounded-full bg-white/10 px-3 py-2 ring-1 ring-white/15">
              Salvador e Região Metropolitana
            </span>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-3 lg:items-end">
          <Button
            href={buttonHref}
            variant="primary"
            size="lg"
            className="min-w-[220px] text-center shadow-[0_18px_40px_rgba(248,181,0,0.32)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttonLabel}
          </Button>
          <Button
            href="https://api.whatsapp.com/send?phone=5571996290118&text=Quero%20falar%20sobre%20planos%20e%20seguros"
            variant="secondary"
            size="lg"
            className="w-full min-w-[220px] text-center border border-white/20 bg-white/15 text-white hover:bg-white/20"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar no WhatsApp
          </Button>
          <p className="text-sm text-white/75">
            Consultoria dedicada antes e depois da contratação.
          </p>
        </div>
      </div>
    </section>
  );
}
