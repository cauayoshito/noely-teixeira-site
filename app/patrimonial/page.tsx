import CoverageCard from "@/components/CoverageCard";
import CTASection from "@/components/CTASection";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata = {
  title: "Seguro Patrimonial em Salvador",
  description:
    "Proteja o patrimônio da sua empresa com seguros patrimoniais sob medida em Salvador/BA.",
};

export default function PatrimonialPage() {
  return (
    <>
      <PageHeader
        badge="Seguro Patrimonial"
        title="Proteja o patrimônio da sua empresa"
        subtitle="Seguros patrimoniais sob medida para seu negócio, garantindo tranquilidade e segurança contra imprevistos."
      />
      <section className="page-section">
        <div className="content-wrapper max-w-5xl space-y-5">
          <h2 className="text-2xl font-bold text-gray-900">Como funciona</h2>
          <p className="text-gray-700 leading-relaxed">
            Iniciamos entendendo o valor do patrimônio e os riscos envolvidos.
            Assim, personalizamos o seguro com coberturas que protegem sua
            empresa contra incêndios, furtos e outros danos. Trabalhamos com
            seguradoras confiáveis para garantir a melhor proposta.
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
              Informações distribuídas em cartões premium para leitura imediata.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <CoverageCard
              title="Incêndio e explosão"
              description="Proteção em caso de danos causados por incêndios e explosões."
            />
            <CoverageCard
              title="Furto e roubo"
              description="Indenização por perdas decorrentes de furtos e roubos."
            />
            <CoverageCard
              title="Danos elétricos"
              description="Cobertura para equipamentos e instalações danificados por descargas elétricas."
            />
            <CoverageCard
              title="Responsabilidade civil"
              description="Proteção contra danos involuntários a terceiros dentro do imóvel."
            />
          </div>
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
