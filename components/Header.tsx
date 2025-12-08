"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

/**
 * Header component with a mini top bar and primary navigation.
 * On mobile, a hamburger menu toggles the navigation overlay.
 */
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Sobre nós", href: "/sobre-nos" },
    { label: "Saúde", href: "/saude" },
    { label: "Automóveis", href: "/automoveis" },
    { label: "Odontológico", href: "/odontologico" },
    { label: "Patrimonial", href: "/patrimonial" },
    { label: "Residencial", href: "/residencial" },
    { label: "Vida", href: "/vida" },
    { label: "Contato", href: "/contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl">
      {/* Mini bar */}
      <div className="bg-slate-900 text-white text-sm">
        <div className="content-wrapper flex flex-wrap items-center justify-between gap-2 py-2">
          <div className="flex items-center space-x-3">
            <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-amber-200 ring-1 ring-white/20">
              Atendimento Salvador/BA
            </span>
            <a
              href="https://api.whatsapp.com/send?phone=5571996290118"
              aria-label="WhatsApp"
              className="hover:text-amber-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: (71) 99629-0118
            </a>
          </div>

          <div className="flex items-center gap-3 text-white/80">
            <a
              href="https://www.instagram.com/noelycorretoradeplanosdesaude/"
              aria-label="Instagram"
              className="hover:text-white"
            >
              Instagram
            </a>
            <a
              href="mailto:contato@planodesaudebahia.com.br"
              className="hover:text-white"
            >
              contato@planodesaudebahia.com.br
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="relative bg-white/90 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.05)] ring-1 ring-slate-100">
        <div className="content-wrapper flex items-center justify-between gap-6">
          {/* Logo + textos */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/noelylogo.webp"
              alt="Noely Teixeira Logo"
              width={140}
              height={60}
              className="h-auto w-auto"
              priority
            />
          </Link>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-700 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <a
              href="https://api.whatsapp.com/send?phone=5571996290118"
              className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fazer cotação
            </a>
          </nav>

          {/* Hamburger button */}
          <button
            type="button"
            className="md:hidden flex flex-col justify-between h-5 w-7 focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menu"
          >
            <span className="w-full h-0.5 rounded-full bg-slate-800"></span>
            <span className="w-full h-0.5 rounded-full bg-slate-800"></span>
            <span className="w-full h-0.5 rounded-full bg-slate-800"></span>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 rounded-2xl border border-slate-100 bg-white/90 shadow-lg">
            <nav className="flex flex-col divide-y divide-slate-100">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-3 px-4 text-slate-800 hover:bg-slate-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <a
                href="https://api.whatsapp.com/send?phone=5571996290118"
                className="py-3 px-4 font-semibold text-amber-600 hover:bg-amber-50"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fazer cotação agora
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
