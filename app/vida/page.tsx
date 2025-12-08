import CoverageCard from "@/components/CoverageCard";
import CTASection from "@/components/CTASection";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata = {
  title: "Seguro de Vida em Salvador",
  description:
    "Garanta proteção financeira para sua família com seguros de vida personalizáveis em Salvador/BA.",
};

export default function VidaPage() {
  return (
    <>
      <PageHeader
        badge="Seguro de Vida"
        title="Seguro de Vida que ampara quem você ama"
        subtitle="Garantia de proteção financeira para sua família em momentos difíceis. Escolha um seguro de vida sob medida."
      />
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

      <CTASection
        title="Proteja o seu futuro"
        subtitle="Solicite agora uma cotação de seguro de vida personalizada com nossas especialistas."
        buttonLabel="Fazer cotação"
        buttonHref="https://api.whatsapp.com/send?phone=5571996290118&text=Ol%C3%A1%2C%20quero%20cot%C3%A7%C3%A3o%20de%20seguro%20de%20vida."
      />
    </>
  );
}
