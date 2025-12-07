import Image from "next/image";

/**
 * PartnerLogos displays logos of partner insurers in a responsive grid.
 */
export default function PartnerLogos() {
  const logos = [
    {
      src: "https://via.placeholder.com/100x50?text=SulAm%C3%A9rica",
      alt: "SulAmérica",
    },
    {
      src: "https://via.placeholder.com/100x50?text=Bradesco",
      alt: "Bradesco Seguros",
    },
    {
      src: "https://via.placeholder.com/100x50?text=Unimed",
      alt: "Seguros Unimed",
    },
    { src: "https://via.placeholder.com/100x50?text=Select", alt: "Select" },
    {
      src: "https://via.placeholder.com/100x50?text=Proasa",
      alt: "Proasa Saúde",
    },
    { src: "https://via.placeholder.com/100x50?text=Amil", alt: "Amil" },
    { src: "https://via.placeholder.com/100x50?text=Hapvida", alt: "Hapvida" },
  ];
  return (
    <div className="rounded-2xl border border-slate-100 bg-white/70 p-6 shadow-sm">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 items-center justify-items-center">
        {logos.map((logo, index) => (
          <div
            key={index}
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
