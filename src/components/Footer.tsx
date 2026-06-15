"use client";

import Image from "next/image";
import { Shield } from "lucide-react";

const footerLinks = [
  {
    title: "Servicios",
    links: [
      { label: "Mantenimiento Industrial", href: "#servicios" },
      { label: "Fabricación CNC", href: "#servicios" },
      { label: "Montajes Metálicos", href: "#servicios" },
      { label: "Asesoría Técnica", href: "#servicios" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Filosofía A1", href: "#filosofia" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] bg-steel-950">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <a href="#inicio" className="inline-flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="FJAT Mecanindustria"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-heading font-bold text-lg text-white">
                FJAT<span className="text-fjat-orange">.</span>
              </span>
            </a>
            <p className="text-sm text-steel-500 leading-relaxed mb-6 max-w-xs">
              Ingeniería de precisión y soluciones industriales A1. Más de 15
              años siendo el socio técnico de la industria peruana.
            </p>
            <div className="flex items-center gap-2 text-xs text-steel-600 font-mono">
              <Shield size={12} className="text-fjat-orange/60" />
              Certificación A1
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-mono text-steel-500 uppercase tracking-[0.15em] mb-5">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-steel-400 hover:text-fjat-orange transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-xs font-mono text-steel-500 uppercase tracking-[0.15em] mb-5">
              Contacto Directo
            </h4>
            <ul className="space-y-3 text-sm text-steel-400">
              <li>
                <span className="block text-steel-600 text-xs font-mono uppercase tracking-wider mb-0.5">
                  Email
                </span>
                <a
                  href="mailto:ingenieria@fjat.pe"
                  className="hover:text-fjat-orange transition-colors"
                >
                  ingenieria@fjat.pe
                </a>
              </li>
              <li>
                <span className="block text-steel-600 text-xs font-mono uppercase tracking-wider mb-0.5">
                  Teléfono
                </span>
                <a
                  href="tel:+51999000000"
                  className="hover:text-fjat-orange transition-colors"
                >
                  +51 999 000 000
                </a>
              </li>
              <li>
                <span className="block text-steel-600 text-xs font-mono uppercase tracking-wider mb-0.5">
                  Ubicación
                </span>
                <span>Lima, Perú</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-steel-600 font-mono">
            &copy; {new Date().getFullYear()} FJAT Mecanindustria S.A.C. Todos
            los derechos reservados.
          </p>
          <p className="text-xs text-steel-700 font-mono uppercase tracking-wider">
            Ingeniería de Precisión A1
          </p>
        </div>
      </div>
    </footer>
  );
}
