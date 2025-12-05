import CoverageCard from '@/components/CoverageCard';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Seguro Automotivo em Salvador',
  description:
    'Proteja seu veículo com seguro automotivo completo em Salvador/BA. Coberturas personalizadas e assistência 24h.',
};

export default function AutomoveisPage() {
  return (
    <>
      <section className="bg-gray-50 py-16 px-4 md:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Seguro Automotivo que te acompanha</h1>
        <p className="text-gray-700 max-w-3xl mx-auto mt-4">
          Proteja seu veículo com coberturas personalizadas e assistência 24h. Escolha o seguro ideal para você e viaje com tranquilidade.
        </p>
      </section>
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Como funciona</h2>
          <p className="text-gray-700">
            Analisamos o seu perfil e o tipo de utilização do veículo, como percursos diários e cobertura desejada. A partir disso, pesquisamos entre as melhores seguradoras para oferecer uma proposta com excelente custo‑benefício, coberturas abrangentes e assistência veicular 24 horas.
          </p>
        </div>
      </section>
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Principais coberturas</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <CoverageCard title="Colisão e incêndio" description="Proteção contra danos causados por colisões, incêndio e explosão." />
            <CoverageCard title="Roubo e furto" description="Indenização em caso de roubo ou furto total do veículo." />
            <CoverageCard title="Assistência 24h" description="Serviços de reboque, troca de pneu, pane elétrica e mecânica a qualquer hora." />
            <CoverageCard title="Carro reserva" description="Disponibilização de veículo reserva durante o reparo do seu carro." />
          </div>
        </div>
      </section>
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto bg-secondary text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Mais que uma corretora, uma parceira na sua segurança.</h3>
          <p>Confie em nossa experiência para garantir a melhor proteção para você e seu veículo.</p>
        </div>
      </section>
      <CTASection
        title="Quer cotar seu seguro auto?"
        subtitle="Fale com nossos especialistas e receba as melhores propostas para proteger seu veículo."
        buttonLabel="Solicitar cotação"
        buttonHref="https://api.whatsapp.com/send?phone=5571996290118&text=Ol%C3%A1%2C%20quero%20cot%C3%A7%C3%A3o%20de%20seguro%20auto."
      />
    </>
  );
}