"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#combates", label: "Combates" },
  { href: "#conciertos", label: "Conciertos" },
  { href: "#info", label: "Info" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-xl border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-2xl font-black tracking-tight">
              <span className="text-neon-red neon-text-red">LA VELADA</span>
              <span className="text-neon-gold neon-text-gold ml-2">VI</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-neon-red after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className="bg-neon-red hover:bg-red-600 text-white text-sm font-bold uppercase tracking-wider px-5 py-2 rounded-lg transition-all hover:shadow-lg hover:shadow-neon-red/30"
            >
              Entradas
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-card/95 backdrop-blur-xl border-t border-dark-border">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-white py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className="block bg-neon-red text-white text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg text-center"
            >
              Entradas
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
