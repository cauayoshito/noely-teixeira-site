import CoverageCard from '@/components/CoverageCard';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Seguro Patrimonial em Salvador',
  description:
    'Proteja o patrimônio da sua empresa com seguros patrimoniais sob medida em Salvador/BA.',
};

export default function PatrimonialPage() {
  return (
    <>
      <section className="bg-gray-50 py-16 px-4 md:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Proteja o patrimônio da sua empresa</h1>
        <p className="text-gray-700 max-w-3xl mx-auto mt-4">
          Seguros patrimoniais sob medida para seu negócio, garantindo tranquilidade e segurança contra imprevistos.
        </p>
      </section>
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Como funciona</h2>
          <p className="text-gray-700">
            Iniciamos entendendo o valor do patrimônio e os riscos envolvidos. Assim, personalizamos o seguro com coberturas que protegem sua empresa contra incêndios, furtos e outros danos. Trabalhamos com seguradoras confiáveis para garantir a melhor proposta.
          </p>
        </div>
      </section>
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Principais coberturas</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <CoverageCard title="Incêndio e explosão" description="Proteção em caso de danos causados por incêndios e explosões." />
            <CoverageCard title="Furto e roubo" description="Indenização por perdas decorrentes de furtos e roubos." />
            <CoverageCard title="Danos elétricos" description="Cobertura para equipamentos e instalações danificados por descargas elétricas." />
            <CoverageCard title="Responsabilidade civil" description="Proteção contra danos involuntários a terceiros dentro do imóvel." />
          </div>
        </div>
      </section>
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto bg-secondary text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Mais que uma corretora, uma parceira na sua segurança.</h3>
          <p>Cuidamos do que é importante para sua empresa.</p>
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