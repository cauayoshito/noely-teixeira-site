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
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 shadow-2xl lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-14">
        {/* overlays SEMPRE por baixo do conteúdo */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 opacity-90"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 -bottom-20 h-40 bg-gradient-to-t from-amber-500/20 to-transparent"
          aria-hidden="true"
        />

        {/* BLOCO ESQUERDO – texto acima do overlay */}
        <div className="relative z-10 max-w-3xl space-y-4 text-center text-white lg:text-left">
          <h3 className="text-3xl md:text-4xl font-bold leading-tight text-white">
            {title}
          </h3>
          <p className="text-lg text-slate-100/90">{subtitle}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-amber-200 ring-1 ring-white/15">
              Atendimento premium e humanizado
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-amber-200 ring-1 ring-white/15">
              Salvador e Região Metropolitana
            </span>
          </div>
        </div>

        {/* BLOCO DIREITO – botão acima do overlay */}
        <div className="relative z-10 flex flex-col items-center gap-3 lg:items-end">
          <Button
            href={buttonHref}
            variant="primary"
            size="lg"
            className="min-w-[220px] text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttonLabel}
          </Button>
          <p className="text-sm text-slate-200/80">
            Retornamos em poucos minutos via WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
