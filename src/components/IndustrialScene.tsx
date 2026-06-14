"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

function Gear() {
  const group = useRef<THREE.Group>(null);
  const numTeeth = 16;
  const teeth = [];

  for (let i = 0; i < numTeeth; i++) {
    const angle = (i / numTeeth) * Math.PI * 2;
    const x = Math.cos(angle) * 1.3;
    const y = Math.sin(angle) * 1.3;
    teeth.push(
      <mesh key={i} position={[x, y, 0]} rotation={[0, 0, angle]}>
        <boxGeometry args={[0.6, 0.4, 0.5]} />
        <meshStandardMaterial color="#FF501D" metalness={0.9} roughness={0.1} />
      </mesh>
    );
  }

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.z += delta * 0.5;
    }
  });

  return (
    <group ref={group}>
      {/* Cuerpo del engranaje */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1, 1, 0.5, 32]} />
        <meshStandardMaterial color="#FF501D" metalness={0.9} roughness={0.1} />
      </mesh>
      {teeth}
    </group>
  );
}

export default function IndustrialScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <Gear />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
