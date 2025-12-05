import CTASection from '@/components/CTASection';
import SectionTitle from '@/components/SectionTitle';
import BenefitCard from '@/components/BenefitCard';

export const metadata = {
  title: 'Sobre Noely Teixeira',
  description:
    'Conheça a história de Noely Teixeira, sua trajetória no mercado de seguros e por que somos a corretora certa para você em Salvador.',
};

export default function SobreNosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-50 py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Cuidar de você é o nosso propósito</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Atendimento humano e soluções sob medida para proteger sua saúde, patrimônio e bem‑estar.
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Nossa história</h2>
          <p className="text-gray-700 leading-relaxed">
            Fundada por Noely Teixeira, nossa corretora surgiu do desejo de oferecer uma consultoria próxima e transparente. Com anos de experiência no setor de seguros e planos de saúde, entendemos que cada cliente tem uma realidade única. Por isso, atuamos como parceiros, buscando sempre o melhor custo‑benefício, acompanhando todas as etapas da contratação e garantindo apoio contínuo após a adesão.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ao longo do tempo, ampliamos nosso portfólio para incluir seguros de automóveis, odontológicos, patrimoniais, residenciais e de vida, sempre mantendo a mesma essência: ouvir, entender e propor a solução mais adequada.
          </p>
        </div>
      </section>

      {/* Por que me escolher */}
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <SectionTitle title="Por que nos escolher" />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <BenefitCard
            title="As melhores seguradoras"
            description="Trabalhamos apenas com operadoras e seguradoras de referência no Brasil."
            icon="🏢"
          />
          <BenefitCard
            title="Seguro para cada perfil"
            description="Personalizamos planos de saúde e seguros conforme sua necessidade, seja individual ou empresarial."
            icon="👥"
          />
          <BenefitCard
            title="Praticidade na contratação"
            description="Processo de cotação e contratação rápido e sem burocracia, 100% online."
            icon="⚡"
          />
          <BenefitCard
            title="Multicanais de atendimento"
            description="Estamos disponíveis por WhatsApp, telefone, e‑mail e presencialmente quando necessário."
            icon="📞"
          />
        </div>
      </section>

      {/* CTA final */}
      <CTASection
        title="Quer falar com uma especialista?"
        subtitle="Solicite uma cotação agora mesmo e descubra a melhor solução para você e sua empresa."
        buttonLabel="Fazer cotação"
        buttonHref="https://api.whatsapp.com/send?phone=5571996290118&text=Ol%C3%A1%2C%20quero%20mais%20informações%20sobre%20seguros."
      />
    </>
  );
}