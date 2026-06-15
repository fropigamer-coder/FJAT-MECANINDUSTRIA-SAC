"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Wrench,
  Cpu,
  Cog,
  ClipboardCheck,
  Ruler,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Mantenimiento Industrial",
    description:
      "Servicio de mantenimiento preventivo y correctivo de maquinaria industrial para los sectores minero y pesquero. Especialistas en cajas reductoras y bombas centrifugas, tubulares, baldas y sumergibles, con protocolos A1 que garantizan continuidad operativa.",
    specs: [
      { label: "Garantía", value: "100%" },
      { label: "Tiempo Respuesta", value: "< 4h" },
    ],
  },
  {
    icon: Cpu,
    title: "Fabricación de Estructuras y Componentes Industriales",
    description:
      "Fabricación de estructuras generales, fajas transportadoras y piezas industriales como ejes, bocinas, polines y piñones. Maquinado CNC de precisión con tolerancias internacionales y certificación de calidad.",
    specs: [
      { label: "Precisión", value: "±0.01mm" },
      { label: "Materiales", value: "Acero, Inox, Aluminio" },
    ],
  },
  {
    icon: Cog,
    title: "Montaje de Maquinaria Industrial",
    description:
      "Instalación, posicionamiento y alineación de maquinaria y equipos industriales. Ejecutamos montajes de media y alta complejidad con precisión milimétrica y seguridad certificada.",
    specs: [
      { label: "Capacidad", value: "Hasta 50 ton" },
      { label: "Certificación", value: "OSHA A1" },
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Asesoría Técnica",
    description:
      "Ingeniería de detalle para optimización de procesos productivos. Diagnóstico, plan de mejora, implementación y seguimiento de resultados.",
    specs: [
      { label: "Diagnóstico", value: "Gratuito" },
      { label: "ROI Promedio", value: "+30%" },
    ],
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="servicios"
      ref={ref}
      className="relative py-28 md:py-36 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-steel-blue/3 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-white/[0.08] bg-white/[0.03] mb-6"
          >
            <Ruler size={14} className="text-fjat-orange shrink-0" />
            <span className="text-[10px] sm:text-xs font-mono text-steel-400 uppercase tracking-[0.15em]">
              Capacidades Técnicas
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] mb-4 sm:mb-6"
          >
            Soluciones{" "}
            <span className="text-fjat-orange">Industriales</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-steel-400 max-w-2xl mx-auto font-light px-2 sm:px-0"
          >
            Cuatro líneas de servicio diseñadas para cubrir cada etapa del ciclo
            industrial, desde el diagnóstico hasta la ejecución.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              className="group relative p-6 md:p-8 rounded-sm border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 flex flex-col"
            >
              {/* Hover CNC border */}
              <div
                className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  padding: 1,
                  background:
                    "conic-gradient(from var(--angle, 0deg), transparent, rgba(255,77,0,0.3), transparent 40%, transparent 60%, rgba(255,77,0,0.3), transparent)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  animation: "cnc-rotate 4s linear infinite",
                }}
              />

              {/* Top section */}
              <div className="flex items-start gap-4 mb-5">
                <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-sm border border-fjat-orange/20 bg-fjat-orange/5">
                  <s.icon size={24} className="text-fjat-orange" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-heading font-semibold text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-steel-400 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Technical specs */}
              <div className="flex gap-6 pt-5 mt-5 border-t border-white/[0.06]">
                {s.specs.map((spec) => (
                  <div key={spec.label}>
                    <div className="font-mono text-xs text-steel-500 uppercase tracking-wider mb-1">
                      {spec.label}
                    </div>
                    <div className="font-mono text-sm text-fjat-orange font-semibold">
                      {spec.value}
                    </div>
                  </div>
                ))}
                <div className="flex-1" />
                <div className="self-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Shield size={18} className="text-fjat-orange/40" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
