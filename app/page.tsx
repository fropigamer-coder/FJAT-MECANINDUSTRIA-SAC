"use client";

import { motion } from "framer-motion";
import IndustrialScene from "@/components/IndustrialScene";

export default function HomePage() {
  return (
    <main className="bg-industrial-gray text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-black text-fjat-orange"
          >
            FJAT MECANINDUSTRIA
          </motion.h1>
          <p className="text-xl text-steel-light">Ingeniería y precisión industrial.</p>
        </div>
        <div className="flex-1 w-full h-[400px] md:h-[600px]">
          <IndustrialScene />
        </div>
      </section>

      {/* Quiénes Somos */}
      <section className="py-20 px-8 bg-zinc-900">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold text-fjat-orange">Quiénes Somos</h2>
          <p className="text-lg text-steel-light leading-relaxed">
            Somos una empresa líder en soluciones metalmecánicas, enfocados en la precisión, 
            la calidad y la innovación tecnológica para el sector industrial.
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 px-8 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="p-8 border-2 border-fjat-orange rounded-lg space-y-4">
          <h3 className="text-2xl font-bold">Misión</h3>
          <p className="text-steel-light">Entregar soluciones mecánicas de alta precisión que impulsen la productividad de nuestros clientes.</p>
        </div>
        <div className="p-8 border-2 border-fjat-orange rounded-lg space-y-4">
          <h3 className="text-2xl font-bold">Visión</h3>
          <p className="text-steel-light">Ser la empresa referente en ingeniería y mecanizado industrial a nivel nacional.</p>
        </div>
      </section>
    </main>
  );
}
