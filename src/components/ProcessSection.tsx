"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, DraftingCompass, Cog, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Diagnóstico",
    subtitle: "Análisis Técnico",
    desc: "Evaluamos el estado actual, identificamos puntos críticos y definimos objetivos medibles de mejora.",
    number: "01",
  },
  {
    icon: DraftingCompass,
    title: "Ingeniería",
    subtitle: "Diseño y Planificación",
    desc: "Desarrollamos planos, seleccionamos materiales y programamos cada fase con precisión milimétrica.",
    number: "02",
  },
  {
    icon: Cog,
    title: "Ejecución",
    subtitle: "Fabricación y Montaje",
    desc: "Implementamos con tecnología CNC de última generación y equipos certificados en seguridad A1.",
    number: "03",
  },
  {
    icon: CheckCircle2,
    title: "Entrega",
    subtitle: "Validación y Garantía",
    desc: "Certificamos cada pieza, documentamos resultados y entregamos con garantía de satisfacción total.",
    number: "04",
  },
];

export default function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-white/[0.08] bg-white/[0.03] mb-6"
          >
            <span className="text-[10px] sm:text-xs font-mono text-steel-400 uppercase tracking-[0.15em]">
              Metodología
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] mb-4 sm:mb-6"
          >
            Cómo{" "}
            <span className="text-fjat-orange">Trabajamos</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-steel-400 max-w-2xl mx-auto font-light px-2 sm:px-0"
          >
            Un proceso de 4 fases que garantiza resultados predecibles,
            medibles y repetibles en cada proyecto.
          </motion.p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-fjat-orange/40 via-fjat-orange/10 to-fjat-orange/40" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-5 md:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="relative group"
              >
                {/* Number */}
                <div className="font-mono text-6xl md:text-7xl font-bold text-white/[0.03] absolute -top-4 -right-2 select-none pointer-events-none leading-none">
                  {s.number}
                </div>

                {/* Step indicator */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-sm border border-white/[0.08] bg-white/[0.02] group-hover:border-fjat-orange/30 group-hover:bg-fjat-orange/5 transition-all duration-300">
                    <s.icon
                      size={26}
                      className="text-fjat-orange/80 group-hover:text-fjat-orange transition-colors duration-300"
                    />
                  </div>
                  {/* Step dot on line (desktop) */}
                  <div className="hidden lg:block absolute top-7 left-16 w-2 h-2 rounded-full bg-fjat-orange/60" />
                </div>

                {/* Arrow connector (mobile/tablet) */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-2">
                    <ArrowRight
                      size={20}
                      className="text-steel-600 rotate-90 md:rotate-0"
                    />
                  </div>
                )}

                {/* Content */}
                <div>
                  <div className="text-xs font-mono text-fjat-orange/70 uppercase tracking-widest mb-1">
                    {s.subtitle}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-steel-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
