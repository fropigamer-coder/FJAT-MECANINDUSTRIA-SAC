"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield } from "lucide-react";
import Image from "next/image";

const partners = [
  {
    name: "Compañía Nacional de Chocolates",
    src: "/compania-nacional-de-chocolates-del-peru.png",
  },
  { name: "Molitalia", src: "/Logo_molitalia.png" },
  { name: "SMC", src: "/Logo_SMC.svg.png" },
  { name: "SMI", src: "/smi-logo.png" },
];

export default function PartnersSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 overflow-hidden border-t border-white/[0.04]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-4 px-4 sm:px-0"
          >
            <Shield size={16} className="text-fjat-orange/60 shrink-0" />
            <span className="text-[10px] sm:text-xs font-mono text-steel-500 uppercase tracking-[0.2em] text-center">
              Empresas que confían en nuestra ingeniería
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs sm:text-sm text-steel-500 max-w-xl mx-auto px-4 sm:px-0"
          >
            Más de 15 años siendo el socio técnico de las empresas líderes del
            Perú
          </motion.p>
        </div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-12 items-center"
        >
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="group flex justify-center"
            >
              <div className="relative p-4">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={200}
                  height={100}
                  className="object-contain h-10 md:h-14 w-auto opacity-40 group-hover:opacity-70 transition-all duration-500 grayscale group-hover:grayscale-0"
                  title={partner.name}
                />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[10px] text-steel-600 group-hover:text-steel-500 transition-colors duration-300 whitespace-nowrap font-mono uppercase tracking-wider opacity-0 group-hover:opacity-100">
                  {partner.name}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
