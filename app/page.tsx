import { Metadata } from "next";
import Link from "next/link";
import BenefitCard from "@/components/BenefitCard";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import PartnerLogos from "@/components/PartnerLogos";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Planos de Saúde, Seguros e Benefícios em Salvador/BA",
  description:
    "Eleve a proteção da sua família e empresa com a Noely Teixeira. Consultoria especializada em planos de saúde, seguros patrimoniais e benefícios em Salvador/BA.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero section */}
      <Hero
        title="Cuidamos da sua saúde e patrimônio com estratégias inteligentes"
        subtitle="Planos de saúde, seguros e benefícios com atendimento consultivo, rápido e humanizado para Salvador e região."
        bullets={[
          { text: "Atendimento consultivo com especialista dedicada" },
          { text: "Planos para pessoa física, família e empresas" },
          { text: "Comparativo transparente entre seguradoras líderes" },
          { text: "Suporte completo antes e depois da contratação" },
        ]}
        buttonLabel="Fazer cotação agora"
        buttonHref="https://api.whatsapp.com/send?phone=5571996290118&text=Ol%C3%A1%2C%20gostaria%20de%20uma%20cota%C3%A7%C3%A3o%20personalizada."
        imageSrc="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Consultora de seguros atendendo família"
      />

      {/* Section: Planos de saúde */}
      <section className="px-4 md:px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            title="Planos e seguros desenhados para cada momento"
            subtitle="Escolha a solução certa para cuidar da sua equipe, família ou patrimônio com toda a segurança."
            align="left"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Plano de Saúde Empresarial",
                description:
                  "Soluções completas para empresas, com rede credenciada robusta e suporte dedicado ao RH.",
                href: "/saude",
              },
              {
                title: "Plano Individual e Familiar",
                description:
                  "Cobertura sob medida para quem busca proteção inteligente e economia mensal.",
                href: "/saude",
              },
              {
                title: "Seguros Patrimoniais",
                description:
                  "Proteção para automóveis, residência e patrimônio com seguradoras de primeira linha.",
                href: "/patrimonial",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-[0_10px_40px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(8,47,73,0.14)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-amber-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-slate-100/80" />
                <div className="relative flex h-full flex-col gap-5">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-slate-700">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-amber-400 to-sky-400" />{" "}
                    Produto premium
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-sky-700 transition-colors hover:text-amber-600"
                    >
                      Ver detalhes →
                    </Link>
                    <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-slate-200 shadow-sm">
                      Atendimento rápido
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Por que contratar */}
      <section className="bg-white/70 px-4 md:px-8 py-16">
        <div className="mx-auto max-w-6xl grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionTitle
              title="Por que contratar com a Noely?"
              subtitle="Transformamos dúvidas em decisões seguras com uma consultoria humanizada, transparente e totalmente digital."
              align="left"
            />
            <div className="grid gap-4">
              {[
                "Consultoria consultiva que compara operadoras e seguradoras lado a lado.",
                "Equipe dedicada ao pós-venda para carências, reembolsos e ajustes contratuais.",
                "Experiência local em Salvador/BA com rede credenciada validada.",
                "Propostas personalizadas para empresas, famílias e profissionais liberais.",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-2xl bg-white/90 p-4 sm:p-5 shadow-[0_8px_30px_rgba(15,23,42,0.07)] ring-1 ring-slate-100"
                >
                  <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 via-emerald-500 to-sky-500 text-white shadow-inner ring-1 ring-emerald-200">
                    ✓
                  </span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span className="rounded-full bg-emerald-50 px-3 py-2 font-semibold text-emerald-700 ring-1 ring-emerald-100">
                +1000 clientes ativos
              </span>
              <span className="rounded-full bg-amber-50 px-3 py-2 font-semibold text-amber-700 ring-1 ring-amber-100">
                10 anos de experiência
              </span>
              <span className="rounded-full bg-sky-50 px-3 py-2 font-semibold text-sky-700 ring-1 ring-sky-100">
                Parceria com grandes seguradoras
              </span>
            </div>
          </div>

          {/* CARD ATALHO PARA AÇÃO AJUSTADO */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 shadow-2xl ring-1 ring-slate-200">
            {/* overlay decorativo */}
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(231,180,28,0.28),transparent_45%)]"
              aria-hidden="true"
            />
            {/* conteúdo acima do overlay */}
            <div className="relative z-10 space-y-4 text-white">
              <p className="text-sm uppercase tracking-[0.1em] text-amber-300">
                Atalho para ação
              </p>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight text-white">
                Fale direto com uma especialista
              </h3>
              <p className="text-slate-100/90">
                Envie suas informações ou fale por WhatsApp. Em poucos minutos
                você recebe opções claras, preços atualizados e orientações para
                decidir.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  href="https://api.whatsapp.com/send?phone=5571996290118&text=Quero%20uma%20cotacao%20agora"
                  size="lg"
                  className="min-w-[200px] shadow-[0_15px_40px_rgba(245,158,11,0.35)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp
                </Button>
                <Button href="/contato" variant="ghost" size="lg">
                  Enviar formulário
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Benefits */}
      <section className="px-4 md:px-8 py-16">
        <div className="mx-auto max-w-6xl space-y-10">
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
              title="Cotação 100% digital"
              description="Envie suas necessidades e receba propostas claras, com tempo de resposta reduzido."
              icon="💻"
            />
            <BenefitCard
              title="Parcerias sólidas"
              description="Seguradoras líderes como SulAmérica, Bradesco, Unimed, Amil e Porto."
              icon="🤝"
            />
            <BenefitCard
              title="Planos sob medida"
              description="Ajustes de carência, rede credenciada e benefícios conforme seu momento de vida."
              icon="🎯"
            />
            <BenefitCard
              title="Experiência comprovada"
              description="Mais de 10 anos cuidando de clientes na Bahia com acompanhamento próximo."
              icon="🏆"
            />
          </div>
        </div>
      </section>

      {/* Section: Testimonials */}
      <section className="bg-white/70 px-4 md:px-8 py-16">
        <div className="mx-auto max-w-6xl space-y-10">
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

      {/* Section: Partners */}
      <section className="px-4 md:px-8 py-16">
        <div className="mx-auto max-w-6xl space-y-8">
          <SectionTitle
            title="Seguradoras parceiras"
            subtitle="Selecionamos apenas operadoras reconhecidas pela qualidade e segurança."
          />
          <PartnerLogos />
        </div>
      </section>

      {/* CTA final */}
      <CTASection
        title="Mais que uma corretora, uma parceira na sua segurança."
        subtitle="Conte com a experiência e o atendimento consultivo da Noely Teixeira para proteger o que é mais importante para você."
        buttonLabel="Fazer cotação agora mesmo"
        buttonHref="https://api.whatsapp.com/send?phone=5571996290118&text=Quero%20cotar%20um%20plano%20ou%20seguro."
      />
    </>
  );
}
