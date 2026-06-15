"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Lima, Perú",
      detail: "Disponibilidad nacional",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+51 999 000 000",
      detail: "Lun–Sab 8:00 – 18:00",
    },
    {
      icon: Mail,
      label: "Email",
      value: "ingenieria@fjat.pe",
      detail: "Respuesta en < 24h",
    },
    {
      icon: Clock,
      label: "Horario",
      value: "Lun–Vie 8:00 – 18:00",
      detail: "Servicio de emergencia 24/7",
    },
  ];

  return (
    <section
      id="contacto"
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
              Contacto
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] mb-6"
          >
            Hablemos de tu{" "}
            <span className="text-fjat-orange">proyecto</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-steel-400 max-w-2xl mx-auto font-light"
          >
            Cuéntanos tu necesidad y te enviaremos una propuesta técnica
            personalizada en menos de 48 horas.
          </motion.p>
        </div>

        {/* Grid: Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 p-6 md:p-8 rounded-sm border border-white/[0.06] bg-white/[0.02]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-mono text-steel-500 uppercase tracking-wider mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="w-full px-4 py-2.5 bg-steel-900 border border-white/[0.08] rounded-sm text-steel-200 text-sm placeholder:text-steel-600 focus:outline-none focus:border-fjat-orange/40 focus:bg-steel-900 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-steel-500 uppercase tracking-wider mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  placeholder="Tu empresa"
                  className="w-full px-4 py-2.5 bg-steel-900 border border-white/[0.08] rounded-sm text-steel-200 text-sm placeholder:text-steel-600 focus:outline-none focus:border-fjat-orange/40 focus:bg-steel-900 transition-all duration-300"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-mono text-steel-500 uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="correo@ejemplo.pe"
                  className="w-full px-4 py-2.5 bg-steel-900 border border-white/[0.08] rounded-sm text-steel-200 text-sm placeholder:text-steel-600 focus:outline-none focus:border-fjat-orange/40 focus:bg-steel-900 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-steel-500 uppercase tracking-wider mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  placeholder="+51 999 000 000"
                  className="w-full px-4 py-2.5 bg-steel-900 border border-white/[0.08] rounded-sm text-steel-200 text-sm placeholder:text-steel-600 focus:outline-none focus:border-fjat-orange/40 focus:bg-steel-900 transition-all duration-300"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-xs font-mono text-steel-500 uppercase tracking-wider mb-2">
                Servicio de interés
              </label>
              <select className="w-full px-4 py-2.5 bg-steel-900 border border-white/[0.08] rounded-sm text-steel-200 text-sm focus:outline-none focus:border-fjat-orange/40 transition-all duration-300">
                <option value="">Selecciona un servicio</option>
                <option>Mantenimiento Industrial</option>
                <option>Fabricación CNC</option>
                <option>Montajes Metálicos</option>
                <option>Asesoría Técnica</option>
                <option>Otro</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-xs font-mono text-steel-500 uppercase tracking-wider mb-2">
                Mensaje
              </label>
              <textarea
                required
                rows={4}
                placeholder="Describe tu proyecto o necesidad técnica..."
                className="w-full px-4 py-2.5 bg-steel-900 border border-white/[0.08] rounded-sm text-steel-200 text-sm placeholder:text-steel-600 focus:outline-none focus:border-fjat-orange/40 focus:bg-steel-900 transition-all duration-300 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-fjat-orange text-white font-medium rounded-sm hover:bg-fjat-orange-dark disabled:bg-fjat-orange/60 transition-all duration-300"
            >
              {sent ? (
                <>
                  <CheckCircle2 size={18} />
                  Mensaje enviado
                </>
              ) : (
                <>
                  <Send size={18} />
                  Enviar Mensaje
                </>
              )}
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="flex items-start gap-4 p-4 rounded-sm border border-white/[0.04] bg-white/[0.01] hover:border-white/[0.08] transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-sm border border-white/[0.06]">
                  <info.icon size={18} className="text-fjat-orange/70" />
                </div>
                <div>
                  <div className="text-xs font-mono text-steel-500 uppercase tracking-wider mb-0.5">
                    {info.label}
                  </div>
                  <div className="text-sm text-steel-200 font-medium">
                    {info.value}
                  </div>
                  <div className="text-xs text-steel-500">{info.detail}</div>
                </div>
              </div>
            ))}

            {/* Urgency note */}
            <div className="mt-6 p-4 rounded-sm border border-fjat-orange/10 bg-fjat-orange/3">
              <p className="text-xs text-fjat-orange/70 font-mono uppercase tracking-wider mb-1">
                ⚡ Emergencia Industrial
              </p>
              <p className="text-sm text-steel-400">
                ¿Necesitas asistencia urgente? Contamos con servicio de
                emergencia 24/7. Llámanos ahora.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
