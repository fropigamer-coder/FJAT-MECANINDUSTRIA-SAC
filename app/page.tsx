"use client";

import { motion, useScroll } from "framer-motion";
import IndustrialScene from "@/components/IndustrialScene";
import { useRef } from "react";

export default function HomePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main ref={containerRef} className="bg-industrial-gray text-white">
      {/* Hero Section */}
      <section className="h-screen flex flex-col md:flex-row items-center justify-center p-8 sticky top-0">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-black text-fjat-orange"
          >
            FJAT MECANINDUSTRIA
          </motion.h1>
          <p className="text-xl text-steel-light">Ingeniería y precisión industrial.</p>
        </div>
        <div className="flex-1 w-full h-[400px] md:h-[600px]">
          <IndustrialScene containerRef={containerRef} />
        </div>
      </section>

      {/* Quiénes Somos */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        className="py-32 px-8 bg-zinc-900/50 backdrop-blur-sm"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold text-fjat-orange">Quiénes Somos</h2>
          <p className="text-lg text-steel-light leading-relaxed">
            Somos una empresa líder en soluciones metalmecánicas, enfocados en la precisión, 
            la calidad y la innovación tecnológica para el sector industrial.
          </p>
        </div>
      </motion.section>

      {/* Misión y Visión */}
      <section className="py-32 px-8 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
          className="p-8 border-2 border-fjat-orange rounded-lg space-y-4 hover:bg-fjat-orange/5 transition-colors"
        >
          <h3 className="text-2xl font-bold">Misión</h3>
          <p className="text-steel-light">Entregar soluciones mecánicas de alta precisión que impulsen la productividad de nuestros clientes.</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
          className="p-8 border-2 border-fjat-orange rounded-lg space-y-4 hover:bg-fjat-orange/5 transition-colors"
        >
          <h3 className="text-2xl font-bold">Visión</h3>
          <p className="text-steel-light">Ser la empresa referente en ingeniería y mecanizado industrial a nivel nacional.</p>
        </motion.div>
      </section>
    </main>
  );
}
