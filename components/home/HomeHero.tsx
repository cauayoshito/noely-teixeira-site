import Image from "next/image";
import { Button } from "@/components/ui/Button";

const HERO_BG = "/images/noe.png";
const HERO_NOELY = "/images/bg.png";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Image
          src={HERO_BG}
          alt="Ambiente corporativo de consultoria em seguros"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#0C1220]/20" aria-hidden />
      </div>

      <div className="relative content-wrapper grid gap-10 py-14 sm:py-16 md:grid-cols-2 md:items-center md:py-20">
        <div className="space-y-6 text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-secondary)] shadow-sm ring-1 ring-slate-200 animate-fade-up">
            <span
              className="h-2 w-2 rounded-full bg-[var(--color-primary)]"
              aria-hidden
            />
            Consultoria próxima e transparente
          </div>

          <div className="space-y-4 animate-fade-up animate-delay-1">
            <h1 className="text-3xl font-bold leading-tight text-[var(--color-secondary)] sm:text-4xl">
              Planos de saúde e seguros com atendimento humano e rápido
            </h1>
            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              Noely Teixeira cuida de cada etapa para você contratar a melhor
              opção em saúde, automóveis e patrimônio com total clareza.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 animate-fade-up animate-delay-2">
            <Button
              href="https://api.whatsapp.com/send?phone=5571996290118&text=Ol%C3%A1%2C%20quero%20uma%20cota%C3%A7%C3%A3o%20agora."
              size="lg"
              className="min-w-[180px] shadow-[0_16px_38px_rgba(248,181,0,0.35)]"
            >
              Fazer cotação agora
            </Button>
            <Button
              href="https://api.whatsapp.com/send?phone=5571996290118&text=Vamos%20conversar%20sobre%20seguros%20pelo%20WhatsApp?"
              variant="secondary"
              size="lg"
              className="min-w-[180px]"
            >
              Falar pelo WhatsApp
            </Button>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-slate-700 animate-fade-up animate-delay-3">
            <span className="rounded-full bg-white/90 px-3 py-2 font-semibold text-[var(--color-secondary)] ring-1 ring-slate-200 shadow-sm">
              Resposta em minutos
            </span>
            <span className="rounded-full bg-white/90 px-3 py-2 font-semibold text-[var(--color-secondary)] ring-1 ring-slate-200 shadow-sm">
              Consultoria dedicada
            </span>
            <span className="rounded-full bg-white/90 px-3 py-2 font-semibold text-[var(--color-secondary)] ring-1 ring-slate-200 shadow-sm">
              Cobertura nacional
            </span>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end animate-fade-up animate-delay-2">
          <div className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-white/90 p-4 shadow-[0_22px_60px_rgba(12,18,32,0.18)] ring-1 ring-slate-100">
            <div
              className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--color-primary)]/25 blur-3xl"
              aria-hidden
            />
            <div
              className="absolute -left-10 bottom-10 h-28 w-28 rounded-full bg-[var(--color-secondary)]/10 blur-2xl"
              aria-hidden
            />
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-slate-200">
              <Image
                src={HERO_NOELY}
                alt="Noely Teixeira, corretora de seguros em Salvador"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 360px, 90vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
