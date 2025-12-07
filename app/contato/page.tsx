import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Fale conosco – Noely Teixeira",
  description:
    "Entre em contato com a Noely Teixeira para tirar dúvidas, solicitar cotação ou escolher o melhor plano de saúde e seguros em Salvador/BA.",
};

export default function ContatoPage() {
  return (
    <>
      <section className="page-section relative overflow-hidden bg-white/80">
        <div
          className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-amber-50 opacity-80"
          aria-hidden
        />
        <div className="content-wrapper relative max-w-4xl space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-sky-800 shadow-sm ring-1 ring-slate-100">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            Atendimento humanizado e rápido
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Fale com a Noely
          </h1>
          <p className="mx-auto max-w-3xl text-base md:text-lg text-gray-700 leading-relaxed">
            Tire suas dúvidas, solicite uma cotação ou peça ajuda para escolher
            o melhor plano. Estamos à disposição para atender você.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="content-wrapper max-w-3xl">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
