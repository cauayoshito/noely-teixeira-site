import { Metadata } from "next";
import Link from "next/link";
import BenefitCard from "@/components/BenefitCard";
import CTASection from "@/components/CTASection";
import PartnerLogos from "@/components/PartnerLogos";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";
import HomeHero from "@/components/home/HomeHero";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Planos de Saúde, Seguros e Benefícios em Salvador/BA",
  description:
    "Eleve a proteção da sua família e empresa com a Noely Teixeira. Consultoria especializada em planos de saúde, seguros patrimoniais e benefícios em Salvador/BA.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="page-section bg-white">
        <div className="content-wrapper space-y-8">
          <SectionTitle
            title="Planos e seguros desenhados para cada momento"
            subtitle="Escolha a solução certa para cuidar da sua equipe, família ou patrimônio com toda a segurança."
            align="left"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Plano de Saúde Empresarial",
                description:
                  "Soluções completas para empresas, com rede credenciada robusta e suporte dedicado ao RH.",
                href: "/saude",
                badge: "Empresas e clínicas",
                icon: "👥",
              },
              {
                title: "Plano Individual e Familiar",
                description:
                  "Cobertura sob medida para quem busca proteção inteligente e economia mensal.",
                href: "/saude",
                badge: "Família e PF",
                icon: "🏠",
              },
              {
                title: "Seguros Patrimoniais",
                description:
                  "Proteção para automóveis, residência e patrimônio com seguradoras de primeira linha.",
                href: "/patrimonial",
                badge: "Auto, casa e mais",
                icon: "🛡️",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="card-surface group flex h-full flex-col gap-4 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(12,18,32,0.12)]"
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.08em] text-slate-600">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-soft)] px-3 py-1 text-[var(--color-secondary)] ring-1 ring-slate-200">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-primary)]" />{" "}
                    Produto premium
                  </span>
                  <span className="rounded-full bg-[var(--color-primary)]/15 px-3 py-1 text-[var(--color-secondary)] ring-1 ring-[var(--color-primary)]/40">
                    {card.badge}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary)] text-lg text-white shadow-lg ring-4 ring-white">
                    {card.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {card.description}
                    </p>
                  </div>
                </div>
                <div className="mt-auto flex items-center justify-between pt-1">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-secondary)] transition-colors hover:text-[var(--color-primary)]"
                  >
                    Ver detalhes <span aria-hidden>→</span>
                  </Link>
                  <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-slate-200 shadow-sm">
                    Resposta rápida
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-[var(--color-soft)]">
        <div className="content-wrapper grid items-start gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionTitle
              title="Por que contratar com a Noely?"
              subtitle="Transformamos dúvidas em decisões seguras com uma consultoria humanizada, transparente e totalmente digital."
              align="left"
            />
            <div className="grid gap-3">
              {[
                "Consultoria consultiva que compara operadoras e seguradoras lado a lado.",
                "Equipe dedicada ao pós-venda para carências, reembolsos e ajustes contratuais.",
                "Experiência local em Salvador/BA com rede credenciada validada.",
                "Propostas personalizadas para empresas, famílias e profissionais liberais.",
              ].map((item) => (
                <div
                  key={item}
                  className="card-surface flex items-start gap-3 bg-white/90 p-4 shadow-[0_12px_32px_rgba(12,18,32,0.08)]"
                >
                  <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-secondary)] text-white text-lg shadow-lg ring-4 ring-white">
                    ✓
                  </span>
                  <p className="text-sm leading-relaxed text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-700">
              <span className="rounded-full bg-white px-3 py-2 font-semibold text-[var(--color-secondary)] ring-1 ring-slate-200 shadow-sm">
                +1000 clientes ativos
              </span>
              <span className="rounded-full bg-white px-3 py-2 font-semibold text-[var(--color-secondary)] ring-1 ring-slate-200 shadow-sm">
                10 anos de experiência
              </span>
              <span className="rounded-full bg-white px-3 py-2 font-semibold text-[var(--color-secondary)] ring-1 ring-slate-200 shadow-sm">
                Parceria com grandes seguradoras
              </span>
            </div>
          </div>

          <div className="card-surface relative overflow-hidden bg-white px-8 py-10 shadow-[0_20px_50px_rgba(12,18,32,0.12)]">
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(248,181,0,0.2),transparent_45%)]"
              aria-hidden
            />
            <div className="relative space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-secondary)]/80">
                Atalho para ação
              </p>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight text-[var(--color-secondary)]">
                Fale direto com uma especialista
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Envie suas informações ou fale por WhatsApp. Em poucos minutos
                você recebe opções claras, preços atualizados e orientações para
                decidir.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  href="https://api.whatsapp.com/send?phone=5571996290118&text=Quero%20uma%20cotacao%20agora"
                  size="lg"
                  className="min-w-[200px] shadow-[0_15px_40px_rgba(248,181,0,0.32)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp
                </Button>
                <Button href="/contato" variant="secondary" size="lg">
                  Enviar formulário
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                <span className="rounded-full bg-[var(--color-primary)]/15 px-3 py-1.5 font-semibold text-[var(--color-secondary)] ring-1 ring-[var(--color-primary)]/50">
                  Retorno em minutos
                </span>
                <span className="rounded-full bg-[var(--color-secondary)]/10 px-3 py-1.5 font-semibold text-[var(--color-secondary)] ring-1 ring-[var(--color-secondary)]/15">
                  Suporte pós-venda dedicado
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-white">
        <div className="content-wrapper space-y-10">
          <SectionTitle
            title="Nossos diferenciais"
            subtitle="Soluções completas com atendimento consultivo e suporte contínuo."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <BenefitCard
              title="Cotação 100% digital"
              description="Envie suas necessidades e receba propostas claras, com tempo de resposta reduzido."
              icon="💻"
            />
            <BenefitCard
              title="Equipe especialista"
              description="Consultoras certificadas para guiar você por cada etapa da contratação."
              icon="🤝"
            />
            <BenefitCard
              title="Planos sob medida"
              description="Ajustes de carência, rede credenciada e benefícios conforme seu momento de vida."
              icon="🎯"
            />
            <BenefitCard
              title="Suporte contínuo"
              description="Acompanhamento pós-venda para reembolsos, upgrades e dúvidas recorrentes."
              icon="🛟"
            />
          </div>
        </div>
      </section>

      <section className="page-section bg-[var(--color-soft)]">
        <div className="content-wrapper space-y-10">
          <SectionTitle
            title="Histórias de clientes"
            subtitle="Quem confia na Noely fala sobre atendimento, economia e tranquilidade."
          />
          <div className="grid gap-6 md:grid-cols-3">
            <TestimonialCard
              name="Maria S."
              role="Empresária"
              testimonial="Reduzi o custo do plano de saúde da equipe sem perder rede. O acompanhamento pós-venda faz toda a diferença."
            />
            <TestimonialCard
              name="Roberto C."
              role="Autônomo"
              testimonial="Recebi comparativos claros entre operadoras e tirei todas as dúvidas em minutos pelo WhatsApp."
            />
            <TestimonialCard
              name="Carla A."
              role="Mãe de família"
              testimonial="A consultoria foi humana e transparente. Hoje tenho um plano que cabe no bolso e atende toda a família."
            />
          </div>
        </div>
      </section>

      <section className="page-section bg-white">
        <div className="content-wrapper space-y-8">
          <SectionTitle
            title="Seguradoras parceiras"
            subtitle="Selecionamos apenas operadoras reconhecidas pela qualidade e segurança."
          />
          <PartnerLogos />
        </div>
      </section>

      <CTASection
        title="Mais que uma corretora, uma parceira na sua segurança."
        subtitle="Conte com a experiência e o atendimento consultivo da Noely Teixeira para proteger o que é mais importante para você."
        buttonLabel="Fazer cotação agora mesmo"
        buttonHref="https://api.whatsapp.com/send?phone=5571996290118&text=Quero%20cotar%20um%20plano%20ou%20seguro."
      />
    </>
  );
}
