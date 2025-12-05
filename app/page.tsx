import Link from 'next/link';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import BenefitCard from '@/components/BenefitCard';
import TestimonialCard from '@/components/TestimonialCard';
import PartnerLogos from '@/components/PartnerLogos';
import CTASection from '@/components/CTASection';

export default function HomePage() {
  return (
    <>
      {/* Hero section */}
      <Hero
        title="Cuidamos da sua saúde com planos inteligentes, flexíveis e acessíveis"
        subtitle="Soluções sob medida para empresas, famílias e profissionais que buscam segurança, economia e atendimento de qualidade."
        bullets={[
          { text: 'Atendimento consultivo e humanizado' },
          { text: 'Planos para pessoa física, família e empresas' },
          { text: 'Comparação entre diferentes operadoras' },
          { text: 'Suporte antes e depois da contratação' },
        ]}
        buttonLabel="Fazer cotação agora"
        buttonHref="https://api.whatsapp.com/send?phone=5571996290118&text=Ol%C3%A1%2C%20gostaria%20de%20uma%20cota%C3%A7%C3%A3o%20de%20plano%20de%20sa%C3%BAde."
        imageSrc="https://picsum.photos/600/400?random=1"
        imageAlt="Família feliz"
      />

      {/* Section: Planos de saúde */}
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <SectionTitle title="Planos de saúde para cada necessidade" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Plano de Saúde Empresarial',
              description:
                'Soluções completas para empresas de todos os tamanhos, garantindo bem‑estar aos colaboradores.',
              href: '/saude',
            },
            {
              title: 'Plano Individual',
              description:
                'Proteção personalizada para você ou sua família com cobertura sob medida.',
              href: '/saude',
            },
            {
              title: 'Plano por Adesão',
              description:
                'Planos coletivos por categoria profissional com valores acessíveis.',
              href: '/saude',
            },
          ].map((card, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {card.description}
                </p>
              </div>
              <Link
                href={card.href}
                className="text-primary font-semibold hover:underline mt-auto"
              >
                Ver detalhes →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Benefits */}
      <section className="py-12 px-4 md:px-8">
        <SectionTitle title="Nossos diferenciais" />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <BenefitCard
            title="Cotação 100% online"
            description="Solicite seu plano sem sair de casa com agilidade e praticidade."
            icon="💻"
          />
          <BenefitCard
            title="Parceria com as maiores seguradoras"
            description="Trabalhamos com marcas líderes como SulAmérica, Bradesco, Unimed e Amil."
            icon="🤝"
          />
          <BenefitCard
            title="Planos personalizados"
            description="Ajustamos coberturas conforme o seu perfil e necessidades."
            icon="🎯"
          />
          <BenefitCard
            title="Mais de 1.000 clientes"
            description="Uma década de experiência atendendo clientes satisfeitos na Bahia."
            icon="🏆"
          />
        </div>
      </section>

      {/* Section: Testimonials */}
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <SectionTitle title="Depoimentos dos clientes" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <TestimonialCard
            name="Maria S."
            role="Empresária"
            testimonial="Consegui reduzir custos do plano de saúde da minha empresa sem abrir mão da qualidade. Atendimento excelente!"
          />
          <TestimonialCard
            name="Roberto C."
            role="Autônomo"
            testimonial="Fiquei surpreso com a rapidez e clareza das opções apresentadas. Hoje tenho um plano que cabe no meu bolso."
          />
          <TestimonialCard
            name="Carla A."
            role="Mãe de família"
            testimonial="A consultoria foi muito humanizada e tirou todas as minhas dúvidas sobre carência e coberturas."
          />
        </div>
      </section>

      {/* Section: Partners */}
      <section className="py-12 px-4 md:px-8">
        <SectionTitle title="Nossos parceiros" subtitle="Trabalhamos com as melhores seguradoras do mercado" />
        <div className="mt-8">
          <PartnerLogos />
        </div>
      </section>

      {/* CTA final */}
      <CTASection
        title="Mais que uma corretora, uma parceira na sua segurança."
        subtitle="Conte com a experiência e o atendimento consultivo da Noely Teixeira para proteger o que é mais importante para você."
        buttonLabel="Fazer cotação agora mesmo"
        buttonHref="https://api.whatsapp.com/send?phone=5571996290118&text=Ol%C3%A1%2C%20gostaria%20de%20uma%20cota%C3%A7%C3%A3o."
      />
    </>
  );
}