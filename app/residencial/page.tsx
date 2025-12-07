import CoverageCard from "@/components/CoverageCard";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Seguro Residencial em Salvador",
  description:
    "Cuide da sua casa com seguros residenciais completos em Salvador/BA. Cobertura contra imprevistos e assistência emergencial.",
};

export default function ResidencialPage() {
  return (
    <>
      <section className="page-section bg-white/80">
        <div className="content-wrapper max-w-5xl text-center space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Seguro Residencial para sua casa
          </h1>
          <p className="text-gray-700 mx-auto max-w-3xl leading-relaxed">
            Cuide do seu lar com cobertura contra imprevistos e assistência para
            pequenos reparos. Viva com tranquilidade.
          </p>
        </div>
      </section>
      <section className="page-section">
        <div className="content-wrapper max-w-5xl space-y-5">
          <h2 className="text-2xl font-bold text-gray-900">Como funciona</h2>
          <p className="text-gray-700 leading-relaxed">
            Avaliamos o valor do seu imóvel, os riscos mais frequentes e as
            coberturas desejadas. Depois, apresentamos propostas de seguradoras
            confiáveis com planos que incluem assistência residencial e
            reposição de bens em caso de sinistro.
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
              Coberturas organizadas para leitura rápida, sem sobreposição de
              texto.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <CoverageCard
              title="Incêndio e vendaval"
              description="Cobertura contra incêndios, quedas de raio, vendavais e tempestades."
            />
            <CoverageCard
              title="Roubo e furto"
              description="Indenização por furtos e roubos de bens da residência."
            />
            <CoverageCard
              title="Danos elétricos"
              description="Proteção para equipamentos eletrônicos em caso de oscilações ou curto-circuito."
            />
            <CoverageCard
              title="Assistência 24h"
              description="Serviços de chaveiro, encanador, eletricista e vidraceiro sempre que precisar."
            />
          </div>
        </div>
      </section>
      <section className="page-section">
        <div className="content-wrapper max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-secondary to-primary text-white px-8 py-10 shadow-2xl ring-1 ring-white/10">
          <div className="flex flex-col gap-4 text-center md:text-left md:flex-row md:items-center md:justify-between">
            <div className="space-y-3 max-w-2xl">
              <p className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-amber-200 ring-1 ring-white/15">
                Seu lar protegido em todos os momentos
              </p>
              <h3 className="text-2xl font-bold leading-tight">
                Mais que uma corretora, uma parceira na sua segurança.
              </h3>
              <p className="leading-relaxed text-slate-100/90">
                Cuide do seu lar com tranquilidade e confiança.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 md:items-end">
              <span className="rounded-xl bg-white/15 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/20">
                Assistência residencial 24h
              </span>
              <span className="rounded-xl bg-white/15 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/20">
                Planos ajustados ao seu imóvel
              </span>
            </div>
          </div>
        </div>
      </section>
      <CTASection
        title="Garanta o seguro residencial ideal"
        subtitle="Fale com nossa equipe e encontre a melhor cobertura para sua casa."
        buttonLabel="Fazer cotação"
        buttonHref="https://api.whatsapp.com/send?phone=5571996290118&text=Ol%C3%A1%2C%20quero%20cot%C3%A7%C3%A3o%20de%20seguro%20residencial."
      />
    </>
  );
}
