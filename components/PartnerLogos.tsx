import Image from "next/image";

/**
 * PartnerLogos displays logos of partner insurers in a responsive grid.
 * Coloque as imagens em /public/images/parceiras/ e ajuste os nomes abaixo.
 */
const PARTNER_LOGOS = [
  {
    src: "/images/sulamerica.png",
    alt: "SulAmérica",
  },
  {
    src: "/images/bradesco.png",
    alt: "Bradesco Seguros",
  },
  {
    src: "/images/unimed.png",
    alt: "Seguros Unimed",
  },
  {
    src: "/images/select.png",
    alt: "Select",
  },
  {
    src: "/images/proasa.png",
    alt: "Proasa Saúde",
  },
  {
    src: "/images/amil.png",
    alt: "Amil",
  },
  {
    src: "/images/hapvida.png",
    alt: "Hapvida",
  },
  {
    src: "/images/ampla.png",
    alt: "Ampla",
  },
  {
    src: "/images/promedica.png",
    alt: "Promédica",
  },
];

export default function PartnerLogos() {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white/70 p-6 shadow-sm">
      <div className="grid grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-3 md:grid-cols-4">
        {PARTNER_LOGOS.map((logo) => (
          <div
            key={logo.alt}
            className="relative flex h-14 w-32 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-100 shadow-inner"
          >
            <div className="relative h-8 w-24">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                sizes="120px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
