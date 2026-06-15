"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "FJAT transformó nuestra línea de producción. Pasamos de 3 paradas semanales a cero en el primer mes. Su enfoque A1 no es marketing — es su estándar de trabajo.",
    author: "Carlos Mendoza",
    role: "Gerente de Operaciones",
    company: "Compañía Nacional de Chocolates",
    rating: 5,
  },
  {
    quote:
      "La precisión en la fabricación CNC de FJAT superó nuestras expectativas. Las piezas llegaron dentro de tolerancia y antes de lo pactado. Un socio técnico de verdad.",
    author: "María Gutiérrez",
    role: "Jefa de Ingeniería",
    company: "Molitalia",
    rating: 5,
  },
  {
    quote:
      "Para el montaje de nuestra nueva nave industrial necesitábamos un equipo con certificación y experiencia. FJAT no solo cumplió — nos asesoró para optimizar la estructura.",
    author: "Ricardo Álvarez",
    role: "Director de Proyectos",
    company: "SMC Perú",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-36 overflow-hidden border-t border-white/[0.04]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-white/[0.08] bg-white/[0.03] mb-6"
          >
            <span className="text-xs font-mono text-steel-400 uppercase tracking-[0.15em]">
              Testimonios
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] mb-6"
          >
            Lo que dicen{" "}
            <span className="text-fjat-orange">nuestros clientes</span>
          </motion.h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[280px] md:min-h-[240px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <Quote
                  size={40}
                  className="mx-auto mb-6 text-fjat-orange/20"
                />
                <blockquote className="text-lg md:text-xl text-steel-300 leading-relaxed mb-8 font-light italic max-w-3xl mx-auto">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: testimonials[current].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="fill-fjat-orange/60 text-fjat-orange/60"
                      />
                    )
                  )}
                </div>

                <div className="text-white font-heading font-semibold">
                  {testimonials[current].author}
                </div>
                <div className="text-sm text-steel-500">
                  {testimonials[current].role},{" "}
                  {testimonials[current].company}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center rounded-sm border border-white/[0.08] text-steel-400 hover:text-fjat-orange hover:border-fjat-orange/30 transition-all duration-300"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-fjat-orange w-6"
                      : "bg-steel-600 hover:bg-steel-500"
                  }`}
                  aria-label={`Testimonio ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center rounded-sm border border-white/[0.08] text-steel-400 hover:text-fjat-orange hover:border-fjat-orange/30 transition-all duration-300"
              aria-label="Siguiente"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
