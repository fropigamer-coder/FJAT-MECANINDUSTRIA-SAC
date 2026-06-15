"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#filosofia", label: "Filosofía" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-steel-950/85 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="group flex items-center gap-3">
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <Image
              src="/logo.png"
              alt="FJAT Mecanindustria"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span
            className={`font-heading font-bold text-lg md:text-xl tracking-tight transition-colors duration-300 ${
              scrolled ? "text-steel-100" : "text-white"
            }`}
          >
            FJAT
            <span className="text-fjat-orange">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm text-steel-400 hover:text-steel-100 transition-colors duration-200 group"
            >
              {link.label === "Contacto" ? (
                <span className="px-4 py-2 border border-fjat-orange/40 text-fjat-orange hover:bg-fjat-orange/10 hover:border-fjat-orange/70 rounded-sm transition-all duration-300 text-xs uppercase tracking-widest">
                  {link.label}
                </span>
              ) : (
                <>
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-fjat-orange group-hover:w-3/4 transition-all duration-300" />
                </>
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center text-steel-300 hover:text-fjat-orange transition-colors"
          aria-label="Menú"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-steel-900/95 backdrop-blur-xl border-b border-white/[0.06]"
          >
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-3 px-4 rounded-sm text-sm transition-all duration-200 ${
                    link.label === "Contacto"
                      ? "border border-fjat-orange/40 text-fjat-orange hover:bg-fjat-orange/10 text-center uppercase tracking-widest"
                      : "text-steel-300 hover:text-fjat-orange hover:bg-white/[0.03]"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
