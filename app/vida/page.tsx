import CoverageCard from "@/components/CoverageCard";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Seguro de Vida em Salvador",
  description:
    "Garanta proteção financeira para sua família com seguros de vida personalizáveis em Salvador/BA.",
};

export default function VidaPage() {
  return (
    <>
      <section className="page-section bg-white/80">
        <div className="content-wrapper max-w-5xl text-center space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Seguro de Vida que ampara quem você ama
          </h1>
          <p className="text-gray-700 mx-auto max-w-3xl leading-relaxed">
            Garantia de proteção financeira para sua família em momentos
            difíceis. Escolha um seguro de vida sob medida.
          </p>
        </div>
      </section>
      <section className="page-section">
        <div className="content-wrapper max-w-5xl space-y-5">
          <h2 className="text-2xl font-bold text-gray-900">Como funciona</h2>
          <p className="text-gray-700 leading-relaxed">
            Avaliamos seu perfil e as necessidades financeiras da sua família
            para definir o capital segurado. Você escolhe coberturas adicionais
            como invalidez ou doenças graves. Trabalhamos apenas com seguradoras
            de confiança para garantir rapidez e segurança.
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
              Cartões com contraste suave e espaçamento generoso para leitura
              fácil em qualquer tela.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <CoverageCard
              title="Morte natural ou acidental"
              description="Garantia de indenização aos beneficiários em qualquer eventualidade."
            />
            <CoverageCard
              title="Invalidez por acidente"
              description="Proteção financeira em caso de invalidez total ou parcial decorrente de acidente."
            />
            <CoverageCard
              title="Doenças graves"
              description="Cobertura para diagnóstico de doenças graves selecionadas, oferecendo apoio financeiro imediato."
            />
            <CoverageCard
              title="Assistência funeral"
              description="Serviço de assistência e indenização para despesas funerárias."
            />
          </div>
        </div>
      </section>
      <section className="page-section">
        <div className="content-wrapper max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-secondary to-primary text-white px-8 py-10 shadow-2xl ring-1 ring-white/10">
          <div className="flex flex-col gap-4 text-center md:text-left md:flex-row md:items-center md:justify-between">
            <div className="space-y-3 max-w-2xl">
              <p className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-amber-200 ring-1 ring-white/15">
                Segurança para quem você ama
              </p>
              <h3 className="text-2xl font-bold leading-tight">
                Mais que uma corretora, uma parceira na sua segurança.
              </h3>
              <p className="leading-relaxed text-slate-100/90">
                Cuidamos do seu futuro e de quem você ama.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 md:items-end">
              <span className="rounded-xl bg-white/15 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/20">
                Coberturas ajustadas ao seu momento de vida
              </span>
              <span className="rounded-xl bg-white/15 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/20">
                Acompanhamento próximo da nossa equipe
              </span>
            </div>
          </div>
        </div>
      </section>
      <CTASection
        title="Proteja o seu futuro"
        subtitle="Solicite agora uma cotação de seguro de vida personalizada com nossas especialistas."
        buttonLabel="Fazer cotação"
        buttonHref="https://api.whatsapp.com/send?phone=5571996290118&text=Ol%C3%A1%2C%20quero%20cot%C3%A7%C3%A3o%20de%20seguro%20de%20vida."
      />
    </>
  );
}
