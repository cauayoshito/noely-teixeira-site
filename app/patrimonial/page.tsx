import CoverageCard from "@/components/CoverageCard";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Seguro Patrimonial em Salvador",
  description:
    "Proteja o patrimônio da sua empresa com seguros patrimoniais sob medida em Salvador/BA.",
};

export default function PatrimonialPage() {
  return (
    <>
      <section className="page-section bg-white/80">
        <div className="content-wrapper max-w-5xl text-center space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Proteja o patrimônio da sua empresa
          </h1>
          <p className="text-gray-700 mx-auto max-w-3xl leading-relaxed">
            Seguros patrimoniais sob medida para seu negócio, garantindo
            tranquilidade e segurança contra imprevistos.
          </p>
        </div>
      </section>
      <section className="page-section">
        <div className="content-wrapper max-w-5xl space-y-5">
          <h2 className="text-2xl font-bold text-gray-900">Como funciona</h2>
          <p className="text-gray-700 leading-relaxed">
            Iniciamos entendendo o valor do patrimônio e os riscos envolvidos.
            Assim, personalizamos o seguro com coberturas que protegem sua
            empresa contra incêndios, furtos e outros danos. Trabalhamos com
            seguradoras confiáveis para garantir a melhor proposta.
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
              Informações distribuídas em cartões premium para leitura imediata.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <CoverageCard
              title="Incêndio e explosão"
              description="Proteção em caso de danos causados por incêndios e explosões."
            />
            <CoverageCard
              title="Furto e roubo"
              description="Indenização por perdas decorrentes de furtos e roubos."
            />
            <CoverageCard
              title="Danos elétricos"
              description="Cobertura para equipamentos e instalações danificados por descargas elétricas."
            />
            <CoverageCard
              title="Responsabilidade civil"
              description="Proteção contra danos involuntários a terceiros dentro do imóvel."
            />
          </div>
        </div>
      </section>
      <section className="page-section">
        <div className="content-wrapper max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-secondary to-primary text-white px-8 py-10 shadow-2xl ring-1 ring-white/10">
          <div className="flex flex-col gap-4 text-center md:text-left md:flex-row md:items-center md:justify-between">
            <div className="space-y-3 max-w-2xl">
              <p className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-amber-200 ring-1 ring-white/15">
                Proteção corporativa elevada
              </p>
              <h3 className="text-2xl font-bold leading-tight">
                Mais que uma corretora, uma parceira na sua segurança.
              </h3>
              <p className="leading-relaxed text-slate-100/90">
                Cuidamos do que é importante para sua empresa.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 md:items-end">
              <span className="rounded-xl bg-white/15 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/20">
                Planos alinhados ao seu risco
              </span>
              <span className="rounded-xl bg-white/15 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/20">
                Apoio consultivo contínuo
              </span>
            </div>
          </div>
        </div>
      </section>
      <CTASection
        title="Solicite uma cotação patrimonial"
        subtitle="Proteja o patrimônio da sua empresa com a ajuda de quem entende do assunto."
        buttonLabel="Fazer cotação"
        buttonHref="https://api.whatsapp.com/send?phone=5571996290118&text=Ol%C3%A1%2C%20quero%20cot%C3%A7%C3%A3o%20de%20seguro%20patrimonial."
      />
    </>
  );
}
