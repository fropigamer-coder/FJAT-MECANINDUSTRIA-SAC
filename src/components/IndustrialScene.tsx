"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshTransmissionMaterial, OrbitControls, Torus } from "@react-three/drei";

export default function IndustrialScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Torus args={[1, 0.4, 16, 100]} scale={1.5}>
          <meshStandardMaterial 
            color="#FF501D" 
            metalness={0.8} 
            roughness={0.2} 
          />
        </Torus>
      </Float>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}
