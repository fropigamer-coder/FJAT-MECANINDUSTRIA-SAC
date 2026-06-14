"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Gear({ containerRef }: { containerRef: any }) {
  const group = useRef<THREE.Group>(null);
  
  useEffect(() => {
    if (group.current) {
      gsap.to(group.current.rotation, {
        z: Math.PI * 4,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }
  }, [containerRef]);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <group ref={group}>
      {/* Cuerpo del engranaje */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1, 1, 0.5, 32]} />
        <meshStandardMaterial color="#FF501D" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Dientes */}
      {[...Array(16)].map((_, i) => {
        const angle = (i / 16) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(angle)*1.3, Math.sin(angle)*1.3, 0]} rotation={[0, 0, angle]}>
            <boxGeometry args={[0.6, 0.4, 0.5]} />
            <meshStandardMaterial color="#FF501D" metalness={0.9} roughness={0.1} />
          </mesh>
        );
      })}
    </group>
  );
}

export default function IndustrialScene({ containerRef }: { containerRef: any }) {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <Gear containerRef={containerRef} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
