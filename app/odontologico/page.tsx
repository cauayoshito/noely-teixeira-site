import CoverageCard from "@/components/CoverageCard";
import CTASection from "@/components/CTASection";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata = {
  title: "Plano Odontológico em Salvador",
  description:
    "Planos odontológicos individuais e corporativos em Salvador/BA com ampla cobertura e atendimento humanizado.",
};

export default function OdontologicoPage() {
  return (
    <>
      <PageHeader
        badge="Plano Odontológico"
        title="Sorria tranquilo com nosso Plano Odontológico"
        subtitle="Tenha acesso a tratamentos e procedimentos odontológicos essenciais sem surpresas. Cuidamos de você com atenção e qualidade."
      />
      <section className="page-section">
        <div className="content-wrapper max-w-5xl space-y-5">
          <h2 className="text-2xl font-bold text-gray-900">Como funciona</h2>
          <p className="text-gray-700 leading-relaxed">
            Aderir a um plano odontológico é simples: avaliamos seu perfil e
            necessidades odontológicas, desde cuidados preventivos até
            tratamentos mais complexos. Em seguida, apresentamos as opções mais
            vantajosas entre as seguradoras parceiras, com cobertura para
            consultas, exames e procedimentos.
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
              Visualize cada benefício do plano em cartões claros e com
              espaçamento confortável.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <CoverageCard
              title="Descontos em ortodontia"
              description="Benefícios exclusivos para tratamentos ortodônticos quando contratados."
            />
          </div>
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
