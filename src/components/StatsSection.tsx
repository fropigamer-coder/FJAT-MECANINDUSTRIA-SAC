"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    label: "Proyectos Completados",
    value: 150,
    suffix: "+",
    desc: "Con certificación A1",
  },
  {
    label: "Años de Experiencia",
    value: 15,
    suffix: "+",
    desc: "En ingeniería industrial",
  },
  {
    label: "Satisfacción",
    value: 100,
    suffix: "%",
    desc: "Garantía de calidad",
  },
];

/* ── Animated Counter ── */
function AnimatedCounter({
  target,
  suffix = "",
  isInView,
}: {
  target: number;
  suffix?: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>(0);
  const startTime = useRef<number>(0);

  useEffect(() => {
    if (!isInView) return;
    startTime.current = 0;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [isInView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden border-t border-white/[0.04] border-b border-white/[0.04]"
    >
      {/* Background gauge lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, transparent 40%, rgba(255,77,0,0.2) 41%, transparent 42%)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center group"
            >
              {/* Gauge visual */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                <svg
                  className="w-full h-full -rotate-90"
                  viewBox="0 0 100 100"
                >
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="3"
                  />
                  {/* Progress arc */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="#FF4D00"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={264}
                    initial={{ strokeDashoffset: 264 }}
                    animate={
                      isInView
                        ? { strokeDashoffset: 264 * (1 - stat.value / 150) }
                        : {}
                    }
                    transition={{ duration: 2, delay: 0.5 + i * 0.15, ease: "easeOut" }}
                  />
                </svg>
                {/* Tick marks around the gauge */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-heading font-bold text-2xl text-white tabular-nums">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      isInView={isInView}
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-sm font-semibold text-steel-200 uppercase tracking-[0.12em] mb-1">
                {stat.label}
              </h3>
              <p className="text-xs text-steel-500 font-mono">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
