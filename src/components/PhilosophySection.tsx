"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Compass, Target, Award, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precisión Absoluta",
    desc: "Tolerancias de hasta ±0.01mm en cada pieza fabricada bajo estándares internacionales.",
  },
  {
    icon: Award,
    title: "Certificación A1",
    desc: "Garantía de calidad en cada proyecto. Nuestros procesos están certificados y auditados.",
  },
  {
    icon: Zap,
    title: "Eficiencia Operativa",
    desc: "Optimización continua de procesos para reducir tiempos de parada y maximizar productividad.",
  },
  {
    icon: Compass,
    title: "Visión Estratégica",
    desc: "Proveedores tecnológicos de largo plazo. Ingeniería que añade valor real.",
  },
];

export default function PhilosophySection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="filosofia"
      ref={ref}
      className="relative py-28 md:py-36 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-fjat-orange/3 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-white/[0.08] bg-white/[0.03] mb-6"
          >
            <span className="text-[10px] sm:text-xs font-mono text-steel-400 uppercase tracking-[0.15em]">
              Nuestra Filosofía
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] mb-4 sm:mb-6"
          >
            Compromiso{" "}
            <span className="text-fjat-orange">A1</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-steel-400 leading-relaxed max-w-2xl mx-auto font-light px-2 sm:px-0"
          >
            Especialistas en metalmecánica. Proyectos a medida con materiales
            de alta calidad, durabilidad y resistencia garantizada. Eficiencia,
            seguridad y control riguroso en cada ejecución, con entrega
            oportuna y vocación de servicio.
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="group relative p-5 sm:p-6 md:p-8 rounded-sm border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-fjat-orange/20 transition-all duration-500 text-center sm:text-left"
            >
              {/* CNC border on hover */}
              <div className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div
                  className="absolute inset-0 rounded-sm"
                  style={{
                    padding: 1,
                    background:
                      "conic-gradient(from 0deg, transparent, rgba(255,77,0,0.3), transparent 40%, transparent 60%, rgba(255,77,0,0.3), transparent)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
              </div>

              <v.icon
                size={28}
                className="text-fjat-orange/80 mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-lg font-heading font-semibold text-white mb-2">
                {v.title}
              </h3>
              <p className="text-sm text-steel-400 leading-relaxed">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
