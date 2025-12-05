import CoverageCard from '@/components/CoverageCard';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Plano Odontológico em Salvador',
  description:
    'Planos odontológicos individuais e corporativos em Salvador/BA com ampla cobertura e atendimento humanizado.',
};

export default function OdontologicoPage() {
  return (
    <>
      <section className="bg-gray-50 py-16 px-4 md:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Sorria tranquilo com nosso Plano Odontológico</h1>
        <p className="text-gray-700 max-w-3xl mx-auto mt-4">
          Tenha acesso a tratamentos e procedimentos odontológicos essenciais sem surpresas. Cuidamos de você com atenção e qualidade.
        </p>
      </section>
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Como funciona</h2>
          <p className="text-gray-700">
            Aderir a um plano odontológico é simples: avaliamos seu perfil e necessidades odontológicas, desde cuidados preventivos até tratamentos mais complexos. Em seguida, apresentamos as opções mais vantajosas entre as seguradoras parceiras, com cobertura para consultas, exames e procedimentos.
          </p>
        </div>
      </section>
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Principais coberturas</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <CoverageCard title="Consultas de rotina" description="Consultas preventivas e check‑ups periódicos." />
            <CoverageCard title="Limpeza e prevenção" description="Profilaxia e tratamentos preventivos para manter seu sorriso saudável." />
            <CoverageCard title="Procedimentos de emergência" description="Atendimento imediato para urgências e dores repentinas." />
            <CoverageCard title="Descontos em ortodontia" description="Benefícios exclusivos para tratamentos ortodônticos quando contratados." />
          </div>
        </div>
      </section>
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto bg-secondary text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Mais que uma corretora, uma parceira na sua segurança.</h3>
          <p>Cuide da sua saúde bucal com quem entende do assunto.</p>
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