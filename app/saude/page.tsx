import CoverageCard from '@/components/CoverageCard';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Plano de Saúde em Salvador',
  description:
    'Descubra planos de saúde individuais, familiares e empresariais em Salvador/BA com consultoria personalizada da Noely Teixeira.',
};

export default function SaudePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-50 py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Planos de Saúde sob medida para você</h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Descubra opções individuais, familiares e empresariais com cobertura ampla e preço acessível. Conte com nossa consultoria para encontrar a melhor operadora.
          </p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Como funciona</h2>
          <p className="text-gray-700 leading-relaxed">
            A contratação de um plano de saúde começa com uma avaliação detalhada do seu perfil e das necessidades da sua família ou empresa. Em seguida, pesquisamos e comparamos as operadoras disponíveis, analisando preços, rede credenciada e benefícios. Por fim, apresentamos as melhores opções para que você escolha com segurança e economia.
          </p>
        </div>
      </section>

      {/* Principais coberturas */}
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Principais coberturas</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <CoverageCard title="Consultas e exames" description="Consultas médicas e exames laboratoriais em ampla rede credenciada." />
            <CoverageCard title="Internação hospitalar" description="Cobertura de internações clínicas e cirúrgicas com acomodação confortável." />
            <CoverageCard title="Rede credenciada ampla" description="Hospitais, clínicas e laboratórios de referência em Salvador e região." />
            <CoverageCard title="Atendimento de urgência" description="Pronto atendimento 24h para emergências médicas." />
          </div>
        </div>
      </section>

      {/* Motivational stripe */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto bg-secondary text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Mais que uma corretora, uma parceira na sua segurança.</h3>
          <p>Estamos ao seu lado em todas as etapas, antes e depois da contratação.</p>
        </div>
      </section>

      {/* CTA final */}
      <CTASection
        title="Pronto para cuidar da sua saúde?"
        subtitle="Fale com nossa equipe e receba uma cotação personalizada agora mesmo."
        buttonLabel="Fazer cotação"
        buttonHref="https://api.whatsapp.com/send?phone=5571996290118&text=Ol%C3%A1%2C%20quero%20cot%C3%A7%C3%A3o%20de%20plano%20de%20sa%C3%BAde."
      />
    </>
  );
}