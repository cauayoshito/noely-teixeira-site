import CoverageCard from "@/components/CoverageCard";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Seguro Automotivo em Salvador",
  description:
    "Proteja seu veículo com seguro automotivo completo em Salvador/BA. Coberturas personalizadas e assistência 24h.",
};

export default function AutomoveisPage() {
  return (
    <>
      <section className="page-section bg-white/80">
        <div className="content-wrapper max-w-5xl text-center space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Seguro Automotivo que te acompanha
          </h1>
          <p className="text-gray-700 mx-auto max-w-3xl leading-relaxed">
            Proteja seu veículo com coberturas personalizadas e assistência 24h.
            Escolha o seguro ideal para você e viaje com tranquilidade.
          </p>
        </div>
      </section>
      <section className="page-section">
        <div className="content-wrapper max-w-5xl space-y-5">
          <h2 className="text-2xl font-bold text-gray-900">Como funciona</h2>
          <p className="text-gray-700 leading-relaxed">
            Analisamos o seu perfil e o tipo de utilização do veículo, como
            percursos diários e cobertura desejada. A partir disso, pesquisamos
            entre as melhores seguradoras para oferecer uma proposta com
            excelente custo‑benefício, coberturas abrangentes e assistência
            veicular 24 horas.
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
              Cartões reforçados para você visualizar com clareza o que está
              protegido no seu seguro auto.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <CoverageCard
              title="Colisão e incêndio"
              description="Proteção contra danos causados por colisões, incêndio e explosão."
            />
            <CoverageCard
              title="Roubo e furto"
              description="Indenização em caso de roubo ou furto total do veículo."
            />
            <CoverageCard
              title="Assistência 24h"
              description="Serviços de reboque, troca de pneu, pane elétrica e mecânica a qualquer hora."
            />
            <CoverageCard
              title="Carro reserva"
              description="Disponibilização de veículo reserva durante o reparo do seu carro."
            />
          </div>
        </div>
      </section>
      <section className="page-section">
        <div className="content-wrapper max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-secondary to-primary text-white px-8 py-10 shadow-2xl ring-1 ring-white/10">
          <div className="flex flex-col gap-4 text-center md:text-left md:flex-row md:items-center md:justify-between">
            <div className="space-y-3 max-w-2xl">
              <p className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-amber-200 ring-1 ring-white/15">
                Proteção inteligente para seu veículo
              </p>
              <h3 className="text-2xl font-bold leading-tight">
                Mais que uma corretora, uma parceira na sua segurança.
              </h3>
              <p className="leading-relaxed text-slate-100/90">
                Confie em nossa experiência para garantir a melhor proteção para
                você e seu veículo.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 md:items-end">
              <span className="rounded-xl bg-white/15 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/20">
                Assistência rápida e humanizada
              </span>
              <span className="rounded-xl bg-white/15 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/20">
                Coberturas sob medida para seu perfil
              </span>
            </div>
          </div>
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
