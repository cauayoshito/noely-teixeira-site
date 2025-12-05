"use client";

export default function FloatingWhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5571996290118&text=Ol%C3%A1%2C%20gostaria%20de%20uma%20cota%C3%A7%C3%A3o%20de%20plano%20de%20sa%C3%BAde."
      className="fixed bottom-4 right-4 bg-accent text-white rounded-full p-4 shadow-lg hover:scale-105 transform transition-transform"
      aria-label="Fale conosco pelo WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Simple WhatsApp icon using emoji; real implementation may import an SVG */}
      <span className="text-xl">💬</span>
    </a>
  );
}
