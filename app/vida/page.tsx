import CoverageCard from '@/components/CoverageCard';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Seguro de Vida em Salvador',
  description:
    'Garanta proteção financeira para sua família com seguros de vida personalizáveis em Salvador/BA.',
};

export default function VidaPage() {
  return (
    <>
      <section className="bg-gray-50 py-16 px-4 md:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Seguro de Vida que ampara quem você ama</h1>
        <p className="text-gray-700 max-w-3xl mx-auto mt-4">
          Garantia de proteção financeira para sua família em momentos difíceis. Escolha um seguro de vida sob medida.
        </p>
      </section>
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Como funciona</h2>
          <p className="text-gray-700">
            Avaliamos seu perfil e as necessidades financeiras da sua família para definir o capital segurado. Você escolhe coberturas adicionais como invalidez ou doenças graves. Trabalhamos apenas com seguradoras de confiança para garantir rapidez e segurança.
          </p>
        </div>
      </section>
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Principais coberturas</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <CoverageCard title="Morte natural ou acidental" description="Garantia de indenização aos beneficiários em qualquer eventualidade." />
            <CoverageCard title="Invalidez por acidente" description="Proteção financeira em caso de invalidez total ou parcial decorrente de acidente." />
            <CoverageCard title="Doenças graves" description="Cobertura para diagnóstico de doenças graves selecionadas, oferecendo apoio financeiro imediato." />
            <CoverageCard title="Assistência funeral" description="Serviço de assistência e indenização para despesas funerárias." />
          </div>
        </div>
      </section>
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto bg-secondary text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Mais que uma corretora, uma parceira na sua segurança.</h3>
          <p>Cuidamos do seu futuro e de quem você ama.</p>
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