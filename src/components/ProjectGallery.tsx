"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Factory, Cog, Wrench } from "lucide-react";

const projects = [
  {
    icon: Factory,
    title: "Parada de Planta Chocolates",
    desc: "Mantenimiento crítico de línea de producción en planta de alimentos. Ejecutado en tiempo récord con 0 incidentes.",
    tags: ["Alimentos", "Mantenimiento", "Emergencia"],
    metric: "Completado en 72h",
  },
  {
    icon: Cog,
    title: "Fabricación CNC Especializada",
    desc: "Producción de ejes de transmisión en acero aleado con tolerancia de ±0.005mm para línea de producción continua.",
    tags: ["CNC", "Precisión", "Acero Especial"],
    metric: "±0.005mm",
  },
  {
    icon: Wrench,
    title: "Plataforma para Dosificador",
    desc: "Diseño y montaje de plataforma estructural metálica para sistema de dosificación industrial. Soldadura certificada y montaje en altura.",
    tags: ["Estructuras", "Montaje", "Dosificación"],
    metric: "Plataforma Industrial",
  },
];

const projectIcons = [Factory, Cog, Wrench];

export default function ProjectGallery() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="proyectos"
      ref={ref}
      className="relative py-28 md:py-36 overflow-hidden"
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
              Proyectos Aprobados
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] mb-6"
          >
            Casos de{" "}
            <span className="text-fjat-orange">Éxito</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-steel-400 max-w-2xl mx-auto font-light"
          >
            Proyectos que demuestran nuestra capacidad técnica y compromiso con
            la excelencia.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {projects.map((p, i) => {
            const Icon = projectIcons[i];
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                className="group relative rounded-sm overflow-hidden border border-white/[0.06] bg-white/[0.02] hover:border-fjat-orange/20 transition-all duration-500"
              >
                {/* Top accent bar */}
                <div className="h-1 bg-gradient-to-r from-fjat-orange/40 to-fjat-orange/10" />

                <div className="p-6 md:p-8">
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-sm border border-fjat-orange/15 bg-fjat-orange/5 mb-5 group-hover:bg-fjat-orange/10 transition-colors duration-300">
                    <Icon size={24} className="text-fjat-orange" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-heading font-semibold text-white mb-3 group-hover:text-fjat-orange transition-colors duration-300">
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-steel-400 leading-relaxed mb-5">
                    {p.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-sm border border-white/[0.06] text-steel-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metric */}
                  <div className="flex items-center justify-between pt-5 border-t border-white/[0.06]">
                    <div>
                      <div className="font-mono text-xs text-steel-600 uppercase tracking-wider mb-0.5">
                        Resultado
                      </div>
                      <div className="font-mono text-sm text-fjat-orange font-semibold">
                        {p.metric}
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight
                        size={18}
                        className="text-fjat-orange/60"
                      />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
