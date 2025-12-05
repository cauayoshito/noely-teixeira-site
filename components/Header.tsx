"use client";

import Link from 'next/link';
import { useState } from 'react';

/**
 * Header component with a mini top bar and primary navigation.
 * On mobile, a hamburger menu toggles the navigation overlay.
 */
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Sobre nós', href: '/sobre-nos' },
    { label: 'Saúde', href: '/saude' },
    { label: 'Automóveis', href: '/automoveis' },
    { label: 'Odontológico', href: '/odontologico' },
    { label: 'Patrimonial', href: '/patrimonial' },
    { label: 'Residencial', href: '/residencial' },
    { label: 'Vida', href: '/vida' },
    { label: 'Contato', href: '/contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Mini bar with contact and social icons */}
      <div className="bg-primary text-white text-sm py-1 px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="font-bold">WhatsApp:</span>
          <a href="https://api.whatsapp.com/send?phone=5571996290118" aria-label="WhatsApp" className="hover:underline">
            (71) 99629-0118
          </a>
        </div>
        <div>
          <a href="#" aria-label="Instagram" className="hover:underline">
            Instagram
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white shadow-md py-4 px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="text-lg md:text-2xl font-bold text-gray-800">
          Noely Teixeira – Corretora de Seguros
        </Link>
        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Hamburger button */}
        <button
          type="button"
          className="md:hidden flex flex-col justify-between h-5 w-6 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menu"
        >
          <span className="w-full h-0.5 bg-gray-700"></span>
          <span className="w-full h-0.5 bg-gray-700"></span>
          <span className="w-full h-0.5 bg-gray-700"></span>
        </button>
      </div>
      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col divide-y divide-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 px-4 text-gray-700 hover:bg-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}