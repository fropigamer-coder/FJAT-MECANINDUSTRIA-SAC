"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

function MechanicalAssembly() {
  const group = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.3;
      group.current.rotation.x += delta * 0.2;
    }
  });
  return (
    <group ref={group}>
      {/* Bloque central naranja */}
      <mesh>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="#FF501D" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Ejes mecánicos */}
      <mesh position={[0, 0, 1.2]}>
        <cylinderGeometry args={[0.3, 0.3, 1]} />
        <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0, -1.2]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 1]} />
        <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

export default function IndustrialScene() {
  return (
    <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <MechanicalAssembly />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  );
}
