"use client";

import { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ArrowDown, Gauge, Settings2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ── 3D Gear Component ── */
function PrecisionGear() {
  const group = useRef<THREE.Group>(null);
  const { mouse, viewport } = useThree();

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005;
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        mouse.y * 0.15,
        0.05
      );
      group.current.rotation.z = THREE.MathUtils.lerp(
        group.current.rotation.z,
        mouse.x * 0.15,
        0.05
      );
    }
  });

  const teeth = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => {
        const angle = (i / 24) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * 1.5, Math.sin(angle) * 1.5, 0]}
            rotation={[0, 0, angle]}
          >
            <boxGeometry args={[0.5, 0.3, 0.4]} />
            <meshStandardMaterial
              color="#FF4D00"
              metalness={0.9}
              roughness={0.15}
            />
          </mesh>
        );
      }),
    []
  );

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={group}>
        {/* Main gear body */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1.2, 1.2, 0.4, 64]} />
          <meshStandardMaterial
            color="#FF4D00"
            metalness={0.85}
            roughness={0.2}
          />
        </mesh>
        {/* Inner ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.7, 0.08, 16, 48]} />
          <meshStandardMaterial
            color="#FF6B3D"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        {/* Center hub */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 0.6, 16]} />
          <meshStandardMaterial
            color="#CC3D00"
            metalness={0.95}
            roughness={0.1}
          />
        </mesh>
        {/* Gear teeth */}
        {teeth}
        {/* Spokes */}
        {Array.from({ length: 6 }, (_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          return (
            <mesh
              key={`spoke-${i}`}
              position={[Math.cos(angle) * 0.85, Math.sin(angle) * 0.85, 0]}
              rotation={[0, 0, angle]}
            >
              <boxGeometry args={[0.6, 0.08, 0.3]} />
              <meshStandardMaterial
                color="#E84500"
                metalness={0.7}
                roughness={0.3}
              />
            </mesh>
          );
        })}
      </group>
    </Float>
  );
}

/* ── Floating Particles ── */
function SparkParticles({ count = 60 }) {
  const points = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return positions;
  }, [count]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(points, 3));
    return geo;
  }, [points]);

  return (
    <points geometry={geometry}>
      <pointsMaterial
        size={0.03}
        color="#FF4D00"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

/* ── Measuring lines around the scene ── */
function MeasurementMarks() {
  const marks = useMemo(() => {
    const items: { key: string; position: [number, number, number]; rotation: [number, number, number] }[] = [];
    for (let i = 0; i < 20; i++) {
      const y = -3 + (i / 19) * 6;
      const long = i % 5 === 0;
      items.push({
        key: `l-${i}`,
        position: [-3.2, y, 0],
        rotation: [0, 0, 0],
      });
      items.push({
        key: `r-${i}`,
        position: [3.2, y, 0],
        rotation: [0, 0, 0],
      });
    }
    return items;
  }, []);

  return (
    <group>
      {marks.map((m) => (
        <mesh key={m.key} position={m.position}>
          <planeGeometry args={[0.06, m.key.includes("5-") ? 0.2 : 0.1]} />
          <meshBasicMaterial color="#FF4D00" transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  );
}

/* ── Hero Section ── */
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.querySelectorAll(".hero-reveal"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center overflow-hidden pt-16 md:pt-20"
    >
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#FF4D00" />
          <PrecisionGear />
          <SparkParticles count={80} />
          <MeasurementMarks />
        </Canvas>
      </div>

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-steel-950 via-steel-950/80 to-transparent z-[2]" />

      {/* Content */}
      <div
        ref={textRef}
        className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 pb-32 md:pb-40"
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-fjat-orange/20 bg-fjat-orange/5 mb-6 hero-reveal"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-fjat-orange animate-pulse" />
            <span className="text-xs font-mono text-fjat-orange uppercase tracking-[0.15em]">
              Certificación A1 · Ingeniería de Precisión
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-[0.95] tracking-tight mb-6 hero-reveal">
            Ingeniería que
            <br />
            <span className="text-fjat-orange relative inline-block">
              transforma
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-fjat-orange/40 rounded-full" />
            </span>{" "}
            industria
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-steel-400 max-w-xl leading-relaxed mb-10 hero-reveal font-light">
            Fabricación CNC de precisión, mantenimiento industrial estratégico
            y montajes metálicos. Soluciones A1 para las empresas más exigentes.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 hero-reveal">
            <a
              href="#servicios"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-fjat-orange text-white font-medium rounded-sm overflow-hidden transition-all duration-300 hover:bg-fjat-orange-dark hover:shadow-glow-orange"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Settings2 size={18} />
                Explorar Servicios
              </span>
            </a>
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 px-8 py-3.5 border border-steel-600 text-steel-300 hover:border-fjat-orange/50 hover:text-fjat-orange rounded-sm transition-all duration-300"
            >
              Solicitar Cotización
              <ArrowDown
                size={16}
                className="group-hover:translate-y-1 transition-transform duration-300"
              />
            </a>
          </div>
        </div>

        {/* Technical specs bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 md:mt-20 flex flex-wrap gap-8 md:gap-12 items-center"
        >
          {[
            { label: "Precisión", value: "±0.01mm", icon: Gauge },
            { label: "Proyectos", value: "150+" },
            { label: "Cobertura", value: "Nacional" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              {stat.icon && (
                <stat.icon
                  size={20}
                  className="text-fjat-orange/60 hidden sm:block"
                />
              )}
              <div>
                <div className="font-mono text-sm text-fjat-orange font-semibold tracking-wider">
                  {stat.value}
                </div>
                <div className="text-xs text-steel-500 uppercase tracking-[0.1em]">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-steel-500 uppercase tracking-widest font-mono">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-fjat-orange/60 to-transparent" />
      </motion.div>
    </section>
  );
}
