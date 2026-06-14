"use client";

import { motion } from "framer-motion";
import IndustrialScene from "@/components/IndustrialScene";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-industrial-gray text-white flex flex-col md:flex-row items-center justify-center p-8">
      {/* Columna de texto */}
      <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-black text-fjat-orange mb-6"
        >
          FJAT MECANINDUSTRIA S.A.C.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-steel-light max-w-2xl"
        >
          Soluciones de alta precisión en metalmecánica.
        </motion.p>
      </div>

      {/* Columna 3D */}
      <div className="flex-1 w-full h-[400px] md:h-[600px]">
        <IndustrialScene />
      </div>
    </div>
  );
}
