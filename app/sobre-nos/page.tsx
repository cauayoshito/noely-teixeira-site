import CTASection from "@/components/CTASection";
import SectionTitle from "@/components/SectionTitle";
import BenefitCard from "@/components/BenefitCard";

export const metadata = {
  title: "Sobre Noely Teixeira",
  description:
    "Conheça a história de Noely Teixeira, sua trajetória no mercado de seguros e por que somos a corretora certa para você em Salvador.",
};

export default function SobreNosPage() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.07),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(251,191,36,0.08),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.9),rgba(248,250,252,0.92))]" />
      <div className="relative flex flex-col space-y-16 pb-16">
        {/* Hero */}
        <section className="page-section pt-14 md:pt-16">
          <div className="content-wrapper max-w-4xl text-center space-y-6">
            <span className="inline-flex items-center justify-center rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-sky-100">
              Corretora humanizada em Salvador
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Cuidar de você é o nosso propósito
            </h1>
            <p className="text-gray-700 mx-auto max-w-2xl text-lg leading-relaxed">
              Atendimento humano e soluções sob medida para proteger sua saúde,
              patrimônio e bem‑estar.
            </p>
          </div>
        </section>

        {/* História */}
        <section className="page-section">
          <div className="content-wrapper max-w-5xl">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
              <div className="space-y-5 bg-white/80 p-8 md:p-10 rounded-3xl shadow-lg ring-1 ring-slate-100">
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.08em] text-sky-700">
                    Trajetória
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                    Nossa história
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
                  <p>
                    Fundada por Noely Teixeira, nossa corretora surgiu do desejo
                    de oferecer uma consultoria próxima e transparente. Com anos
                    de experiência no setor de seguros e planos de saúde,
                    entendemos que cada cliente tem uma realidade única. Por
                    isso, atuamos como parceiros, buscando sempre o melhor
                    custo‑benefício, acompanhando todas as etapas da contratação
                    e garantindo apoio contínuo após a adesão.
                  </p>
                  <p>
                    Ao longo do tempo, ampliamos nosso portfólio para incluir
                    seguros de automóveis, odontológicos, patrimoniais,
                    residenciais e de vida, sempre mantendo a mesma essência:
                    ouvir, entender e propor a solução mais adequada.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-100 via-white to-amber-50 p-10 shadow-lg ring-1 ring-slate-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.15),transparent_55%),radial-gradient(circle_at_30%_80%,rgba(251,191,36,0.18),transparent_50%)]" />
                <div className="relative space-y-4 text-slate-800">
                  <h3 className="text-xl font-semibold">O que nos move</h3>
                  <p className="text-base leading-relaxed">
                    Transparência, proximidade e cuidado constante com cada
                    cliente, do primeiro contato ao pós‑contratação.
                  </p>
                  <ul className="space-y-3 text-sm md:text-base">
                    <li className="flex items-start gap-3 rounded-xl bg-white/80 p-3 shadow-sm ring-1 ring-slate-100">
                      <span className="mt-1 text-lg">💛</span>
                      <div>
                        <p className="font-semibold text-slate-900">
                          Atendimento humano
                        </p>
                        <p className="text-slate-700">
                          Escuta ativa para entender o que realmente importa
                          para você e sua família.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 rounded-xl bg-white/80 p-3 shadow-sm ring-1 ring-slate-100">
                      <span className="mt-1 text-lg">🤝</span>
                      <div>
                        <p className="font-semibold text-slate-900">
                          Acompanhamento contínuo
                        </p>
                        <p className="text-slate-700">
                          Suporte próximo em todas as etapas e após a
                          contratação para garantir tranquilidade.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 rounded-xl bg-white/80 p-3 shadow-sm ring-1 ring-slate-100">
                      <span className="mt-1 text-lg">🎯</span>
                      <div>
                        <p className="font-semibold text-slate-900">
                          Soluções sob medida
                        </p>
                        <p className="text-slate-700">
                          Planos e seguros ajustados ao seu perfil, alinhados ao
                          melhor custo‑benefício.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Por que me escolher */}
        <section className="page-section">
          <div className="content-wrapper space-y-10">
            <div className="text-center space-y-3">
              <SectionTitle title="Por que nos escolher" />
              <p className="mx-auto max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed">
                Credibilidade, proximidade e eficiência para cuidar de você em
                cada etapa, com ofertas claras e atendimento sem burocracia.
              </p>
            </div>
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
              <BenefitCard
                title="As melhores seguradoras"
                description="Trabalhamos apenas com operadoras e seguradoras de referência no Brasil."
                icon="🏢"
              />
              <BenefitCard
                title="Seguro para cada perfil"
                description="Personalizamos planos de saúde e seguros conforme sua necessidade, seja individual ou empresarial."
                icon="👥"
              />
              <BenefitCard
                title="Praticidade na contratação"
                description="Processo de cotação e contratação rápido e sem burocracia, 100% online."
                icon="⚡"
              />
              <BenefitCard
                title="Multicanais de atendimento"
                description="Estamos disponíveis por WhatsApp, telefone, e‑mail e presencialmente quando necessário."
                icon="📞"
              />
            </div>
          </div>
        </section>

        {/* CTA final */}
        <CTASection
          title="Quer falar com uma especialista?"
          subtitle="Solicite uma cotação agora mesmo e descubra a melhor solução para você e sua empresa."
          buttonLabel="Fazer cotação"
          buttonHref="https://api.whatsapp.com/send?phone=5571996290118&text=Ol%C3%A1%2C%20quero%20mais%20informações%20sobre%20seguros."
        />
      </div>
    </div>
  );
}
