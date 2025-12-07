import CoverageCard from "@/components/CoverageCard";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Plano Odontológico em Salvador",
  description:
    "Planos odontológicos individuais e corporativos em Salvador/BA com ampla cobertura e atendimento humanizado.",
};

export default function OdontologicoPage() {
  return (
    <>
      <section className="page-section bg-white/80">
        <div className="content-wrapper max-w-5xl text-center space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Sorria tranquilo com nosso Plano Odontológico
          </h1>
          <p className="text-gray-700 mx-auto max-w-3xl leading-relaxed">
            Tenha acesso a tratamentos e procedimentos odontológicos essenciais
            sem surpresas. Cuidamos de você com atenção e qualidade.
          </p>
        </div>
      </section>
      <section className="page-section">
        <div className="content-wrapper max-w-5xl space-y-5">
          <h2 className="text-2xl font-bold text-gray-900">Como funciona</h2>
          <p className="text-gray-700 leading-relaxed">
            Aderir a um plano odontológico é simples: avaliamos seu perfil e
            necessidades odontológicas, desde cuidados preventivos até
            tratamentos mais complexos. Em seguida, apresentamos as opções mais
            vantajosas entre as seguradoras parceiras, com cobertura para
            consultas, exames e procedimentos.
          </p>
        </div>
      </section>
      <section className="page-section bg-gradient-to-b from-white via-sky-50/70 to-white">
        <div className="content-wrapper max-w-5xl space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">
              Principais coberturas
            </h2>
            <p className="text-gray-700 max-w-3xl leading-relaxed">
              Visualize cada benefício do plano em cartões claros e com
              espaçamento confortável.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <CoverageCard
              title="Consultas de rotina"
              description="Consultas preventivas e check‑ups periódicos."
            />
            <CoverageCard
              title="Limpeza e prevenção"
              description="Profilaxia e tratamentos preventivos para manter seu sorriso saudável."
            />
            <CoverageCard
              title="Procedimentos de emergência"
              description="Atendimento imediato para urgências e dores repentinas."
            />
            <CoverageCard
              title="Descontos em ortodontia"
              description="Benefícios exclusivos para tratamentos ortodônticos quando contratados."
            />
          </div>
        </div>
      </section>
      <section className="page-section">
        <div className="content-wrapper max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-secondary to-primary text-white px-8 py-10 shadow-2xl ring-1 ring-white/10">
          <div className="flex flex-col gap-4 text-center md:text-left md:flex-row md:items-center md:justify-between">
            <div className="space-y-3 max-w-2xl">
              <p className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-amber-200 ring-1 ring-white/15">
                Cuidado completo para seu sorriso
              </p>
              <h3 className="text-2xl font-bold leading-tight">
                Mais que uma corretora, uma parceira na sua segurança.
              </h3>
              <p className="leading-relaxed text-slate-100/90">
                Cuide da sua saúde bucal com quem entende do assunto.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 md:items-end">
              <span className="rounded-xl bg-white/15 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/20">
                Rede de atendimento qualificada
              </span>
              <span className="rounded-xl bg-white/15 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/20">
                Agendamento ágil e acompanhamento
              </span>
            </div>
          </div>
        </div>
      </section>
      <CTASection
        title="Faça sua cotação odontológica"
        subtitle="Fale com nossas especialistas e encontre o plano ideal para você e sua família."
        buttonLabel="Solicitar cotação"
        buttonHref="https://api.whatsapp.com/send?phone=5571996290118&text=Ol%C3%A1%2C%20quero%20cot%C3%A7%C3%A3o%20de%20plano%20odontol%C3%B3gico."
      />
    </>
  );
}
