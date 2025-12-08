import CoverageCard from "@/components/CoverageCard";
import CTASection from "@/components/CTASection";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata = {
  title: "Plano de Saúde em Salvador",
  description:
    "Descubra planos de saúde individuais, familiares e empresariais em Salvador/BA com consultoria personalizada da Noely Teixeira.",
};

export default function SaudePage() {
  return (
    <>
      <PageHeader
        badge="Planos de Saúde"
        title="Planos de Saúde sob medida para você"
        subtitle="Descubra opções individuais, familiares e empresariais com cobertura ampla e preço acessível. Conte com nossa consultoria para encontrar a melhor operadora."
      />

      {/* Como funciona */}
      <section className="page-section">
        <div className="content-wrapper max-w-5xl space-y-5">
          <h2 className="text-2xl font-bold text-gray-900">Como funciona</h2>
          <p className="text-gray-700 leading-relaxed">
            A contratação de um plano de saúde começa com uma avaliação
            detalhada do seu perfil e das necessidades da sua família ou
            empresa. Em seguida, pesquisamos e comparamos as operadoras
            disponíveis, analisando preços, rede credenciada e benefícios. Por
            fim, apresentamos as melhores opções para que você escolha com
            segurança e economia.
          </p>
        </div>
      </section>

      {/* Principais coberturas */}
      <section className="page-section bg-gradient-to-b from-white via-sky-50/70 to-white">
        <div className="content-wrapper max-w-5xl space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">
              Principais coberturas
            </h2>
            <p className="text-gray-700 max-w-3xl leading-relaxed">
              Leia cada cobertura com contraste elevado e cartões espaçosos.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <CoverageCard
              title="Consultas e exames"
              description="Consultas médicas e exames laboratoriais em ampla rede credenciada."
            />
            <CoverageCard
              title="Internação hospitalar"
              description="Cobertura de internações clínicas e cirúrgicas com acomodação confortável."
            />
            <CoverageCard
              title="Rede credenciada ampla"
              description="Hospitais, clínicas e laboratórios de referência em Salvador e região."
            />
            <CoverageCard
              title="Atendimento de urgência"
              description="Pronto atendimento 24h para emergências médicas."
            />
          </div>
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
