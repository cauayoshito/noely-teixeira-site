import CoverageCard from '@/components/CoverageCard';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Seguro Residencial em Salvador',
  description:
    'Cuide da sua casa com seguros residenciais completos em Salvador/BA. Cobertura contra imprevistos e assistência emergencial.',
};

export default function ResidencialPage() {
  return (
    <>
      <section className="bg-gray-50 py-16 px-4 md:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Seguro Residencial para sua casa</h1>
        <p className="text-gray-700 max-w-3xl mx-auto mt-4">
          Cuide do seu lar com cobertura contra imprevistos e assistência para pequenos reparos. Viva com tranquilidade.
        </p>
      </section>
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Como funciona</h2>
          <p className="text-gray-700">
            Avaliamos o valor do seu imóvel, os riscos mais frequentes e as coberturas desejadas. Depois, apresentamos propostas de seguradoras confiáveis com planos que incluem assistência residencial e reposição de bens em caso de sinistro.
          </p>
        </div>
      </section>
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Principais coberturas</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <CoverageCard title="Incêndio e vendaval" description="Cobertura contra incêndios, quedas de raio, vendavais e tempestades." />
            <CoverageCard title="Roubo e furto" description="Indenização por furtos e roubos de bens da residência." />
            <CoverageCard title="Danos elétricos" description="Proteção para equipamentos eletrônicos em caso de oscilações ou curto-circuito." />
            <CoverageCard title="Assistência 24h" description="Serviços de chaveiro, encanador, eletricista e vidraceiro sempre que precisar." />
          </div>
        </div>
      </section>
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto bg-secondary text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Mais que uma corretora, uma parceira na sua segurança.</h3>
          <p>Cuide do seu lar com tranquilidade e confiança.</p>
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